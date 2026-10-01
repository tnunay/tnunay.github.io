let dives=[{depth:18,abt:30,si:0},{depth:12,abt:30,si:60}];
let unit='m',mode='recommended';
const $=s=>document.querySelector(s);
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const fmt=x=>Number.isFinite(x)?Number(x.toFixed(2)):'—';
function renderInputs(){
 $('#count').textContent=dives.length+' '+(dives.length===1?'dive':'dives');
 $('#dives').innerHTML=dives.map((d,i)=>`<article class="dive-input"><div class="dive-title"><h3><span class="number">${i+1}</span>Dive ${i+1}</h3>${i?`<button class="remove" data-remove="${i}" type="button" aria-label="Remove dive ${i+1}">Remove</button>`:''}</div>${i?`<div class="si-field"><label for="si-${i}">Surface interval before this dive (min)<input id="si-${i}" data-i="${i}" data-key="si" type="number" inputmode="decimal" min="0" step="1" value="${Number.isFinite(d.si)?d.si:''}"></label><p class="hint">From surfacing after dive ${i} to starting dive ${i+1}.</p></div>`:''}<div class="fields"><label for="depth-${i}">Maximum depth (${unit})<input id="depth-${i}" data-i="${i}" data-key="depth" type="number" inputmode="decimal" min="0.1" step="any" value="${Number.isFinite(d.depth)?d.depth:''}"></label><label for="abt-${i}">ABT (min)<input id="abt-${i}" data-i="${i}" data-key="abt" type="number" inputmode="decimal" min="0.1" step="any" value="${Number.isFinite(d.abt)?d.abt:''}"></label></div></article>`).join('');
 $('#add').disabled=dives.length>=12;
}
function renderResults(){
 const results=calculatePlan(dives,unit,mode),ok=results.every(r=>!r.error&&r.within),total=dives.reduce((s,d)=>s+(Number.isFinite(d.abt)?Math.ceil(d.abt):0),0);
 $('#summary').innerHTML=`<div class="summary ${ok?'':'warn'}"><strong>${ok?'All dives within the selected table limit':'Plan needs attention'}</strong><p>${ok?`${dives.length} dives · ${total} min rounded actual bottom time. Check gas reserves separately.`:'Review the marked dive before continuing this sequence.'}</p></div>`;
 $('#results').innerHTML=results.map((r,i)=>{
 if(r.error)return `<article class="result-card"><div class="result-top"><h3>Dive ${i+1}</h3><span class="badge bad">Not calculated</span></div><div class="error">${esc(r.error)}</div></article>`;
 const status=r.within?'Within selected limit':'Exceeds selected limit';
 return `<article class="result-card"><div class="result-top"><div><h3>Dive ${i+1}</h3><p>${fmt(dives[i].depth)} ${unit} → ${r.tableDepth} ft table row (${fmt(r.tableDepth*.3048)} m)</p></div><span class="badge ${r.within?'':'bad'}">${status}</span></div><div class="stats">${[['RNT',r.rnt],['ABT',r.abt],['TBT',r.tbt],['TBT max (NDL)',r.ndl]].map(([k,v])=>`<div class="stat"><span>${k}</span><strong>${v} <small>min</small></strong></div>`).join('')}</div><div class="allowance"><div>Maximum ABT at this depth<div class="meter ${r.within?'':'over'}"><span style="width:${Math.min(100,r.tbt/r.ndl*100)}%"></span></div></div><strong>${r.maxAbt} min</strong></div><div class="breakdown">${i?`<p class="group-line">${r.reset?'Surface interval > 12 h: treated as a new first dive.':`After dive ${i}: <span class="group-pill">${r.previousGroup}</span> · ${r.si} min surface interval · start group <span class="group-pill">${r.preGroup}</span>`}</p>`:'<p>First dive assumes no residual nitrogen from earlier diving.</p>'}<p>${r.rnt} RNT + ${r.abt} ABT = <strong>${r.tbt} TBT</strong> · TBT max (NDL) = ${r.ndl} min.</p><p>${r.within?`End group <span class="group-pill">${r.endGroup}</span> from the ${r.groupTime} min group cell. ${r.remaining} min below TBT max.`:`<strong>${-r.remaining} min above TBT max.</strong> No end group is carried forward.`}</p>${r.preGroup&&r.depthFt<40?'<p>Repetitive-dive depth raised to 40 ft: the shallowest residual-time row.</p>':''}${r.rnt>=r.ndl?'<p>No positive ABT is available at this depth under the selected limit.</p>':''}</div></article>`;
 }).join('');return results;
}
function render(){renderInputs();return renderResults();}
$('#dives').addEventListener('input',e=>{const el=e.target;if(!el.dataset.key)return;dives[Number(el.dataset.i)][el.dataset.key]=el.value===''?NaN:Number(el.value);renderResults();});
$('#dives').addEventListener('click',e=>{const el=e.target.closest('[data-remove]');if(!el)return;dives.splice(Number(el.dataset.remove),1);render();});
$('#add').addEventListener('click',()=>{if(dives.length<12){dives.push({depth:unit==='m'?12:40,abt:20,si:60});render();}});
$('#unit').addEventListener('change',e=>{const next=e.target.value;dives.forEach(d=>{d.depth=Number.isFinite(d.depth)?Number((next==='ft'?d.depth/.3048:d.depth*.3048).toFixed(4)):NaN;});unit=next;render();});
$('#mode').addEventListener('change',e=>{mode=e.target.value;$('#modeHelp').textContent=mode==='recommended'?'The photo’s red limits are the conservative default.':'The photo recommends avoiding values beyond its red limits, even when within the black limits.';renderResults();});
render();
if(document.modelContext?.registerTool){
 try{Promise.resolve(document.modelContext.registerTool({name:'read_dive_plan',title:'Read dive plan',description:'Read current table calculations and input dives. Does not change the plan.',inputSchema:{type:'object',properties:{},additionalProperties:false},annotations:{readOnlyHint:true},execute:()=>({unit,mode,dives:dives.map(d=>({...d})),results:calculatePlan(dives,unit,mode)})})).catch(()=>{});}catch{}
}
