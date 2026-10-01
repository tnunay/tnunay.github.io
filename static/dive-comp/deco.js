// Exact transcription of the newly supplied POSSI Table 4 photograph.
// Each row: bottom minutes, first-stop min:sec (null = blank), 20ft stop,
// 10ft stop, total-ascent min:sec, repetitive group (null = printed *).
// The 40ft and 30ft stop columns are blank throughout this photograph.
const decoTable={
40:[[200,null,0,0,'1:20',null],[210,'1:00',0,2,'3:20','N'],[230,'1:00',0,7,'8:20','N'],[250,'1:00',0,11,'12:20','O'],[270,'1:00',0,15,'16:20','O']],
50:[[100,null,0,0,'1:40',null],[110,'1:20',0,3,'4:40','L'],[120,'1:20',0,5,'6:40','M'],[140,'1:20',0,10,'11:40','M'],[160,'1:20',0,21,'22:40','N'],[180,'1:20',0,29,'30:40','O'],[200,'1:20',0,35,'36:40','O']],
60:[[60,null,0,0,'2:00',null],[70,'1:40',0,2,'4:00','K'],[80,'1:40',0,7,'9:00','L'],[100,'1:40',0,14,'16:00','M'],[120,'1:40',0,26,'28:00','N'],[140,'1:40',0,39,'41:00','O']],
70:[[50,null,0,0,'2:20',null],[60,'2:00',0,8,'10:20','K'],[70,'2:00',0,14,'16:20','L'],[80,'2:00',0,18,'20:20','M'],[90,'2:00',0,23,'25:20','N'],[100,'2:00',0,33,'35:20','N'],[110,'1:40',2,41,'45:20','O'],[120,'1:40',4,47,'53:20','O'],[130,'1:40',6,52,'60:20','O']],
80:[[40,null,0,0,'2:40',null],[50,'2:20',0,10,'12:40','K'],[60,'2:20',0,17,'19:40','L'],[70,'2:20',0,23,'25:40','M'],[80,'2:00',2,31,'35:40','N'],[90,'2:00',7,39,'48:40','N'],[100,'2:00',11,46,'59:40','O'],[110,'2:00',13,53,'68:40','O']],
90:[[30,null,0,0,'3:00',null],[40,'2:40',0,7,'10:00','J'],[50,'2:40',0,18,'21:00','L'],[60,'2:40',0,25,'28:00','M'],[70,'2:20',7,30,'40:00','N'],[80,'2:20',13,40,'56:00','N'],[90,'2:20',18,48,'69:00','O']],
100:[[25,null,0,0,'3:20',null],[30,'3:00',0,3,'6:20','I'],[40,'3:00',0,15,'18:20','K'],[50,'2:40',2,24,'29:20','L'],[60,'2:40',9,28,'40:20','N'],[70,'2:40',17,39,'59:20','O'],[80,'2:40',23,48,'74:20','O']],
110:[[20,null,0,0,'3:40',null],[25,'3:20',0,3,'6:40','H'],[30,'3:20',0,7,'10:40','J'],[40,'2:40',2,21,'26:40','L'],[50,'2:40',8,26,'37:40','M'],[60,'2:40',18,36,'57:40','N']],
120:[[15,null,0,0,'4:00',null],[20,'3:40',0,2,'6:00','H'],[25,'3:40',0,6,'10:00','I'],[30,'3:40',0,14,'18:00','J'],[40,'3:20',5,25,'34:00','L'],[50,'3:20',15,31,'50:00','N']],
130:[[10,null,0,0,'4:20',null],[15,'4:00',0,1,'5:20','F'],[20,'4:00',0,4,'8:20','H'],[25,'4:00',0,10,'14:20','J'],[30,'3:40',3,18,'25:20','M'],[40,'3:40',10,25,'39:20','N']],
140:[[10,null,0,0,'4:40',null],[15,'4:20',0,2,'6:40','G'],[20,'4:20',0,6,'10:40','I'],[25,'4:00',2,14,'20:40','J'],[30,'4:00',5,21,'30:40','K']]
};
function lookupDeco(depth,abt){
 if(!Number.isFinite(depth)||depth<40||depth>140)throw Error('Enter a depth from 40 to 140 feet.');
 if(!Number.isFinite(abt)||abt<=0)throw Error('Enter a positive actual bottom time.');
 const tableDepth=Object.keys(decoTable).map(Number).find(d=>d>=depth),rows=decoTable[tableDepth];
 if(abt<=rows[0][0])throw Error('This time is within the printed no-decompression limit. Use Section 1.');
 const roundedTime=Math.ceil(abt),baseIndex=rows.findIndex(row=>row[0]>=roundedTime);
 if(baseIndex<0)throw Error('Bottom time exceeds this depth block. No schedule is extrapolated.');
 const selectedIndex=baseIndex+2;
 if(selectedIndex>=rows.length)throw Error('Two additional time rows are unavailable at this depth. No schedule is extrapolated or taken from another depth.');
 const row=rows[selectedIndex];
 return {depth,tableDepth,abt,roundedTime,baseTime:rows[baseIndex][0],selectedTime:row[0],firstStop:row[1],stops:[{feet:20,minutes:row[2]},{feet:10,minutes:row[3]}].filter(s=>s.minutes>0),totalAscent:row[4],group:row[5]};
}
function decoSeconds(value){const [m,s]=value.split(':').map(Number);return m*60+s;}
function decoClock(seconds){return Math.floor(seconds/60)+':'+String(seconds%60).padStart(2,'0');}
function ascentLegs(r){
 const depths=[r.tableDepth,...r.stops.map(s=>s.feet),0];
 return depths.slice(0,-1).map((from,i)=>({from,to:depths[i+1],seconds:(from-depths[i+1])*60/30}));
}
function ascentTravelTable(r){
 const legs=ascentLegs(r),travel=legs.reduce((sum,l)=>sum+l.seconds,0);
 const differs=legs[0].seconds!==decoSeconds(r.firstStop);
 return `<section aria-label="Ascent travel times"><h3>Ascent travel at 30 ft/min</h3><p class="small">Time = depth difference ÷ 30 ft/min. Calculations start at the rounded table depth (${r.tableDepth} ft), matching the profile. Travel time excludes time held at each stop.</p><table class="deco-stops"><caption>Calculated time from one depth to the next</caption><thead><tr><th>From → To</th><th>Depth change</th><th>Travel (min:sec)</th></tr></thead><tbody>${legs.map(l=>`<tr><td>${l.from} ft → ${l.to===0?'Surface (0 ft)':l.to+' ft'}</td><td>${l.from-l.to} ft</td><td>${decoClock(l.seconds)}</td></tr>`).join('')}</tbody></table><p><strong>Total ascent travel only: ${decoClock(travel)} (min:sec)</strong></p>${differs?`<div class="notice"><strong>Printed first-stop time differs from the speed calculation.</strong> The photo prints ${r.firstStop}; ${r.tableDepth} → ${legs[0].to} ft at 30 ft/min calculates ${decoClock(legs[0].seconds)}. Neither value has been substituted for the other. Verify this discrepancy with the original table and instructor before use.</div>`:''}</section>`;
}
function decoProfile(r){
 const label=(x,y,t,cls='')=>`<text x="${x}" y="${y}" text-anchor="middle" class="${cls}">${t}</text>`;
 const top=90,bottom=260,depthY=d=>top+(bottom-top)*d/r.tableDepth;
 const points=[[25,top],[70,bottom],[300,bottom]];
 let labels=[label(185,35,`Bottom depth: ${r.tableDepth} ft (${(r.tableDepth*.3048).toFixed(2)} m)`,'profile-dive'),label(185,bottom-14,`Entered depth: ${r.depth} ft`),label(185,bottom+25,`ABT: ${r.abt} min`)];
 r.stops.forEach((stop,i)=>{
 const x=450+i*180,y=depthY(stop.feet);points.push([x,y],[x+90,y]);
 labels.push(label(x+45,y-15,`${stop.feet} ft (${(stop.feet*.3048).toFixed(2)} m)`),label(x+45,y+25,`Stop: ${stop.minutes} min`));
 });
 points.push([840,top],[875,top]);
 const ascent=decoSeconds(r.totalAscent),legs=ascentLegs(r);
 labels.push(label(660,194,'Ascent travel @ 30 ft/min','profile-dive'));
 legs.forEach((leg,i)=>labels.push(label(660,220+i*26,`${leg.from} ft → ${leg.to===0?'surface':leg.to+' ft'}: ${decoClock(leg.seconds)}`)));
 labels.push(label(840,35,'Final group','profile-small'),`<rect x="817" y="45" width="46" height="30" rx="6" class="groupbox"/>`,label(840,66,r.group,'profile-dive'));
 labels.push(label(450,330,`Total ascent travel @ 30 ft/min: ${decoClock(legs.reduce((sum,l)=>sum+l.seconds,0))} (min:sec)`));
 labels.push(label(450,359,`Total ascent including stops: ${r.totalAscent} (min:sec)`,'profile-dive'));
 labels.push(label(450,388,`Total dive time: ${decoClock(Math.round(r.abt*60)+ascent)} (min:sec) = entered ABT + table ascent`,'profile-dive'));
 labels.push(label(450,417,`Adjusted table schedule: ${r.selectedTime} min · Horizontal spacing is schematic`,'profile-small'));
 return `<section class="profile-section" aria-label="Decompression dive profile"><h3>Decompression dive profile</h3><p class="small">Stop durations use the selected table row. Each ascent leg is calculated at 30 ft/min from the rounded table depth; travel times are min:sec. Total ascent and total dive time below use the printed table ascent time. ABT is assumed to include descent.</p><div class="profile-scroll" tabindex="0" aria-label="Scrollable decompression profile"><svg xmlns="http://www.w3.org/2000/svg" width="900" height="440" viewBox="0 0 900 440" role="img" aria-labelledby="deco-profile-title"><title id="deco-profile-title">Decompression dive depth and stop profile, ending in group ${r.group}</title><line x1="25" y1="${top}" x2="875" y2="${top}" class="waterline"/><polyline points="${points.map(p=>p.join(',')).join(' ')}" class="profile-path"/>${labels.join('')}</svg></div></section>`;
}
function renderDeco(){
 const out=document.querySelector('#deco-output');
 try{
 const r=lookupDeco(Number(document.querySelector('#deco-depth').value),Number(document.querySelector('#deco-abt').value));
 out.innerHTML=decoProfile(r)+ascentTravelTable(r)+`<article class="result-card"><div class="result-top"><h3>Training table lookup · ${r.tableDepth} ft</h3><span class="badge">Group after dive: ${r.group}</span></div><div class="breakdown"><p>ABT ${r.abt} min → rounded time ${r.roundedTime} min → matching table row <strong>${r.baseTime} min</strong> → two rows down → <strong>${r.selectedTime} min schedule</strong>.</p><p>Table depth ${r.tableDepth} ft (${(r.tableDepth*.3048).toFixed(2)} m).</p><p><strong>Printed time to first stop: ${r.firstStop} (min:sec)</strong></p><table class="deco-stops"><caption>Printed decompression stops</caption><thead><tr><th>Stop depth</th><th>Stop duration</th></tr></thead><tbody>${r.stops.map(s=>`<tr><td>${s.feet} ft (${(s.feet*.3048).toFixed(2)} m)</td><td>${s.minutes} min</td></tr>`).join('')}</tbody></table><p><strong>Total ascent time: ${r.totalAscent} (min:sec)</strong></p><p><strong>Repetitive group after decompression: ${r.group}</strong></p><p>Single-dive lookup assuming no residual nitrogen. This result is not transferred to Section 1.</p></div></article>`;
 }catch(e){out.innerHTML='<div class="error" role="status">'+e.message+'</div>';}
}
if(typeof document!=='undefined'){
 document.querySelector('#deco-depth').addEventListener('input',renderDeco);
 document.querySelector('#deco-abt').addEventListener('input',renderDeco);
 renderDeco();
}
if(typeof module!=='undefined')module.exports={decoTable,lookupDeco,ascentLegs};
