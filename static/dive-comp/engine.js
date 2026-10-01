// Transcribed from the user's Jeppesen Sport Diver Open Water U.S. Navy chart.
// null denotes a blank cell, never zero. The image has no publication date.
const letters='ABCDEFGHIJKLMNO';
const rows=[
 [25,null,245,[20,35,55,75,100,125,160,195,245,315]],
 [30,null,205,[15,30,45,60,75,95,120,145,170,205,250,310]],
 [35,310,160,[5,15,25,40,50,60,80,100,120,140,160,190,220,270,310]],
 [40,200,130,[5,15,25,30,40,50,70,80,100,110,130,150,170,200]],
 [50,100,70,[null,10,15,25,30,40,50,60,70,80,90,100]],
 [60,60,50,[null,10,15,20,25,30,40,50,55,60]],
 [70,50,40,[null,5,10,15,20,30,35,40,45,50]],
 [80,40,30,[null,5,10,15,20,25,30,35,40]],
 [90,30,25,[null,5,10,12,15,20,25,30]],
 [100,25,20,[null,5,7,10,15,20,22,25]],
 [110,20,15,[null,null,5,10,13,15,20]],
 [120,15,10,[null,null,5,10,12,15]],
 [130,10,5,[null,null,5,8,10]],
 [140,10,null,[null,null,5,7,10]]
];
// Surface interval lower bounds (whole minutes), from starting group to A.
const surface={
 A:[10],B:[10,131],C:[10,100,170],D:[10,70,159,349],
 E:[10,55,118,203,393],F:[10,46,90,149,238,426],
 G:[10,41,76,120,179,266,456],H:[10,37,67,102,144,201,290,480],
 I:[10,34,60,90,123,165,224,313,502],
 J:[10,32,55,80,108,141,185,243,341,521],
 K:[10,29,50,72,96,124,159,202,260,349,539],
 L:[10,27,46,65,86,110,140,174,217,276,363,553],
 M:[10,26,43,60,79,100,128,155,189,233,290,379,569],
 N:[10,25,40,55,72,91,114,139,168,203,245,304,393,584],
 O:[10,24,37,52,68,85,104,125,150,180,214,258,317,405,595]
};
// RNT values in A..O order. Z is deliberately excluded: no-decompression planner.
const residual={
 40:[7,17,25,37,49,61,73,87,101,116,138,161,187,213,241],
 50:[6,13,21,29,38,47,56,66,76,87,99,111,124,142,160],
 60:[5,11,17,24,30,36,44,52,61,70,79,88,97,107,117],
 70:[4,9,15,20,26,31,37,43,50,57,64,72,80,87,96],
 80:[4,8,13,18,23,28,32,38,43,48,54,61,68,73,80],
 90:[3,7,11,16,20,24,29,33,38,43,47,53,58,64,70],
 100:[3,7,10,14,18,22,26,30,34,38,43,48,52,57,62],
 110:[3,6,10,13,16,20,24,27,31,34,38,42,47,51,55],
 120:[3,6,9,12,15,18,21,25,28,32,35,39,43,46,50],
 130:[3,6,8,11,13,16,19,22,25,28,31,35,38,40,44],
 140:[2,5,7,10,12,15,18,20,23,26,29,32,35,38,40]
};
function reducedGroup(group,si){
 if(si>720)return null;
 if(si<10)throw new Error('Surface intervals below 10 minutes are outside this repetitive-dive chart.');
 const bounds=surface[group];if(!bounds)throw new Error('Starting group is outside the chart.');
 let step=0;while(step+1<bounds.length&&si>=bounds[step+1])step++;
 return letters[letters.indexOf(group)-step];
}
function calculatePlan(dives,unit='m',mode='recommended'){
 if(!Array.isArray(dives)||dives.length<1||dives.length>12)throw new Error('Enter 1–12 dives.');
 if(!['m','ft'].includes(unit)||!['recommended','standard'].includes(mode))throw new Error('Invalid units or limit selection.');
 let previous=null,blocked=false;
 return dives.map((d,index)=>{
  const result={index};
  try{
   if(blocked)throw new Error('Previous dive cannot be continued with this no-decompression planner. Correct it first.');
   if(!Number.isFinite(d.depth)||d.depth<=0||!Number.isFinite(d.abt)||d.abt<=0)throw new Error('Enter a positive depth and actual bottom time.');
   if(index&&(!Number.isFinite(d.si)||d.si<0))throw new Error('Enter a non-negative surface interval.');
   const si=index?Math.floor(d.si):null;
   const preGroup=index?reducedGroup(previous,si):null;
   const depthFt=unit==='m'?d.depth/0.3048:d.depth;
   const row=rows.find(r=>r[0]>=Math.max(depthFt-1e-8,preGroup?40:25));
   if(!row)throw new Error('Depth exceeds 140 ft (42.672 m), the deepest row in this chart.');
   const [tableDepth,standard,recommended,groups]=row;
   const ndl=mode==='recommended'?recommended:standard;
   if(ndl===null)throw new Error('This depth has no printed '+mode+' NDL. Choose another depth or limit.');
   const rnt=preGroup?residual[tableDepth][letters.indexOf(preGroup)]:0;
   const abt=Math.ceil(d.abt),tbt=rnt+abt;
   const groupIndex=groups.findIndex(t=>t!==null&&t>=tbt);
   const endGroup=groupIndex<0?null:letters[groupIndex];
   const within=tbt<=ndl;
   Object.assign(result,{depthFt,tableDepth,standard,recommended,ndl,rnt,abt,tbt,maxAbt:Math.max(0,ndl-rnt),remaining:ndl-tbt,preGroup,endGroup:within?endGroup:null,groupTime:within?groups[groupIndex]:null,si,within,previousGroup:previous,reset:index>0&&si>720});
   if(!within||!endGroup)blocked=true;else previous=endGroup;
  }catch(e){result.error=e.message;blocked=true;}
  return result;
 });
}
if(typeof module!=='undefined')module.exports={calculatePlan,reducedGroup,rows,surface,residual};
