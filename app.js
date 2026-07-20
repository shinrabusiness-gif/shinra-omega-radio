const WORLDS=[
{id:'black-sun',code:'CHANNEL 01 / ORIGIN',title:'BLACK SUN',subtitle:'Low-frequency transmissions beneath a dead horizon.',genre:'DARK AMBIENT',bpm:48,color:'#e8c56b',color2:'#ff573d',track:'CORE DRIFT',tracks:['CORE DRIFT','DEAD HORIZON','SOLAR MEMORY','ASHEN SIGNAL'],osc:[55,82.4,110],layers:['VOID DRONE','SOLAR DUST','DISTANT CHOIR']},
{id:'aquatoc',code:'CHANNEL 02 / ABYSS',title:'AQUATOC',subtitle:'Submerged machinery dreaming below an endless ocean.',genre:'AQUATIC INDUSTRIAL',bpm:56,color:'#5de6ff',color2:'#1778ff',track:'PRESSURE TEMPLE',tracks:['PRESSURE TEMPLE','SONAR GHOST','BELOW THE THERMAL LINE','DROWNED MACHINERY'],osc:[43.65,65.4,130.8],layers:['DEEP CURRENT','SONAR GHOST','METAL TIDE']},
{id:'crimson-rain',code:'CHANNEL 03 / RED DISTRICT',title:'CRIMSON RAIN',subtitle:'Red light dissolving across wet streets after midnight.',genre:'NOCTURNAL SYNTH',bpm:74,color:'#ff334f',color2:'#8b102d',track:'AFTERGLOW SIGNAL',tracks:['AFTERGLOW SIGNAL','RED DISTRICT 03:17','RAIN ON GLASS','LAST TRAIN MEMORY'],osc:[49,73.42,146.83],layers:['MIDNIGHT CURRENT','CRIMSON RAIN','DISTANT CITY']},
{id:'mountain-blood',code:'CHANNEL 04 / DARDANIA',title:'MOUNTAIN BLOOD',subtitle:'Ancient strings carried through stone, wind and memory.',genre:'BALKAN RITUAL',bpm:72,color:'#ff5b45',color2:'#d7ad62',track:'STONE OATH',tracks:['STONE OATH','WIND OVER DARDANIA','EMBER CIRCLE','MOUNTAIN MEMORY'],osc:[73.4,110,146.8],layers:['MOUNTAIN WIND','STRING ECHO','FIRE CIRCLE']},
{id:'starless-void',code:'CHANNEL 05 / DEEP SPACE',title:'STARLESS VOID',subtitle:'A transmission drifting beyond the last mapped constellation.',genre:'COSMIC AMBIENT',bpm:40,color:'#9f87ff',color2:'#48d7ff',track:'EVENT HORIZON',tracks:['EVENT HORIZON','PILOT MEMORY','ION VEIL','BEYOND THE LAST STAR'],osc:[36.7,55,92.5],layers:['ION CLOUD','DARK MATTER','PILOT MEMORY']}
,{id:'celestial-veil',code:'CHANNEL 06 / EMPYREAN',title:'CELESTIAL VEIL',subtitle:'Sacred transmissions beyond the veil of light.',genre:'HEAVENLY AMBIENT',bpm:52,color:'#f5e4ad',color2:'#fff8ef',track:'VEIL OF MERCY',tracks:['VEIL OF MERCY','HALO PROCESSION','IVORY SKY','LUMEN CHOIR'],osc:[130.81,261.63,392],layers:['CHOIR VEIL','HALO BELLS','STAR SHIMMER']},
{id:'sunroot-vale',code:'CHANNEL 07 / SUNROOT',title:'SUNROOT VALE',subtitle:"Ancient reeds and rooted sunlight along the warrior's path.",genre:'ANCIENT FOREST',bpm:58,color:'#a9d36a',color2:'#f1d87a',track:'PATH OF CEDAR',tracks:['PATH OF CEDAR','SUN THROUGH LEAVES','ANCIENT REED','ROOT OF RESOLVE','UNBROKEN CANOPY'],osc:[98,146.83,220],layers:['FOREST BREATH','ANCIENT REED','ROOT RESONANCE']}
];
const LORE={
  'black-sun':{gate:'The horizon keeps what the fire forgot.',fragments:[
    {id:'bs-01',title:'ASH PROTOCOL',text:'The last observatory continued transmitting long after its sky had died.'},
    {id:'bs-02',title:'SECOND HORIZON',text:'Those who crossed the red line returned without shadows.'},
    {id:'bs-03',title:'CORE MEMORY',text:'Beneath the black sun, heat remembers every name carved into stone.'}
  ]},
  aquatoc:{gate:'Below pressure, even silence learns to sing.',fragments:[
    {id:'aq-01',title:'DEPTH RECORD 09',text:'The machines below the thermal line were never built by surface hands.'},
    {id:'aq-02',title:'SONAR GHOST',text:'Every seventh pulse returns with one heartbeat more than was sent.'},
    {id:'aq-03',title:'DROWNED TEMPLE',text:'At impossible depth, bells move the water without ever being struck.'}
  ]},
  'crimson-rain':{gate:'The city forgets faces, but the rain does not.',fragments:[
    {id:'cr-01',title:'LAST TRAIN MEMORY',text:'Platform lights remain on for a train erased from every map.'},
    {id:'cr-02',title:'RED WINDOW',text:'At 03:17, one window reflects a district that no longer exists.'},
    {id:'cr-03',title:'NEON OATH',text:'The rain carries promises downward, where the city keeps its dead signals.'}
  ]},
  'mountain-blood':{gate:'Stone remembers the oath after blood forgets.',fragments:[
    {id:'mb-01',title:'DARDANIAN OATH',text:'No blade was raised until the mountain answered with wind.'},
    {id:'mb-02',title:'EMBER CIRCLE',text:'The fire is fed not with wood, but with names spoken only once.'},
    {id:'mb-03',title:'STONE CHOIR',text:'When the valley is empty, the cliffs continue the song alone.'}
  ]},
  'starless-void':{gate:'Past the last star, distance becomes memory.',fragments:[
    {id:'sv-01',title:'PILOT MEMORY',text:'The final pilot reported arriving before the vessel had departed.'},
    {id:'sv-02',title:'UNMAPPED BEACON',text:'A beacon beyond the chart repeats a childhood voice from no recorded crew.'},
    {id:'sv-03',title:'EVENT HORIZON',text:'Nothing crossed the dark ring, yet something on the other side learned our signal.'}
  ]},
  'celestial-veil':{gate:'Mercy has a frequency too bright to measure.',fragments:[
    {id:'cv-01',title:'IVORY SKY',text:'The veil opened once, and every shadow below turned toward the light.'},
    {id:'cv-02',title:'LUMEN CHOIR',text:'No singers were found, only seven chambers still holding the final note.'},
    {id:'cv-03',title:'HALO PROCESSION',text:'The golden rings move slowly because eternity has no reason to hurry.'}
  ]},
  'sunroot-vale':{gate:'Stand rooted. The sun cannot defeat what refuses to bow.',fragments:[
    {id:'sr-01',title:'PATH OF CEDAR',text:'The warrior left no footprints; the roots carried his weight beneath the earth.'},
    {id:'sr-02',title:'ANCIENT REED',text:'One breath through old bamboo can make the whole forest hold still.'},
    {id:'sr-03',title:'UNBROKEN CANOPY',text:'Storms divided the valley, but no tree beneath the sacred sun knelt.'}
  ]}
};


const SCANNER_SIGNALS={
'black-sun':[{id:'scan-bs-01',frequency:18.7,title:'ECLIPSE CARRIER',code:'BS-E18',text:'A subharmonic carrier circles the dead sun without losing strength.'},{id:'scan-bs-02',frequency:31.4,title:'ASHEN REPEATER',code:'BS-A31',text:'Buried ash returns the same pulse seventeen seconds before it is sent.'}],
aquatoc:[{id:'scan-aq-01',frequency:7200,title:'THERMAL LINE PING',code:'AQ-T72',text:'A narrow sonar return rises from below the mapped pressure floor.'},{id:'scan-aq-02',frequency:11600,title:'LEVIATHAN BAND',code:'AQ-L116',text:'The water carries a second rhythm too slow to belong to machinery.'}],
'crimson-rain':[{id:'scan-cr-01',frequency:3170,title:'PLATFORM 03:17',code:'CR-P317',text:'A station identifier survives inside the rain although the platform is gone.'},{id:'scan-cr-02',frequency:8800,title:'RED WINDOW RELAY',code:'CR-R88',text:'A reflected district broadcasts through one impossible pane of glass.'}],
'mountain-blood':[{id:'scan-mb-01',frequency:432,title:'STONE OATH TONE',code:'MB-S432',text:'The valley answers only when the carrier is held without trembling.'},{id:'scan-mb-02',frequency:864,title:'ANCESTRAL HARMONIC',code:'MB-A864',text:'A doubled resonance moves from cliff to cliff without crossing the air.'}],
'starless-void':[{id:'scan-sv-01',frequency:.73,title:'UNMAPPED BEACON',code:'SV-U073',text:'The beacon repeats from a coordinate that exists outside measured distance.'},{id:'scan-sv-02',frequency:13.7,title:'PILOT RETURN',code:'SV-P137',text:'A crew signature arrives in reverse order from beyond the event horizon.'}],
'celestial-veil':[{id:'scan-cv-01',frequency:528,title:'MERCY FREQUENCY',code:'CV-M528',text:'A luminous tone aligns the seven chambers for a single breath.'},{id:'scan-cv-02',frequency:1056,title:'HALO OVERTONE',code:'CV-H1056',text:'The upper ring answers exactly one octave above the visible light.'}],
'sunroot-vale':[{id:'scan-sr-01',frequency:220,title:'CEDAR ROOT SIGNAL',code:'SR-C220',text:'The carrier travels beneath the path through roots older than the shrine.'},{id:'scan-sr-02',frequency:440,title:'UNBROKEN SUN TONE',code:'SR-U440',text:'A clean harmonic remains standing while wind bends everything around it.'}]
};

const EVOLUTION={
  'black-sun':{states:['DORMANT SUN','SOLAR STIRRING','ECLIPSE CROWN','BLACK CORONA'],messages:['The dead horizon begins to breathe.','The eclipse draws heat from below.','The black corona has awakened.']},
  aquatoc:{states:['CALM PRESSURE','DEEP DESCENT','ABYSSAL CURRENT','LEVIATHAN DEPTH'],messages:['Pressure shifts beneath the signal.','The abyss answers with a second current.','Something ancient moves below the sonar line.']},
  'crimson-rain':{states:['AFTERGLOW','NIGHTFALL','RED STORM','LAST TRAIN'],messages:['The district lights enter their second cycle.','The rain begins carrying another frequency.','The last train crosses a station erased from the map.']},
  'mountain-blood':{states:['STILL STONE','WIND OATH','EMBER RITE','ANCESTRAL FIRE'],messages:['The valley takes its first breath.','Old embers answer beneath the stone.','The ancestors have entered the circle.']},
  'starless-void':{states:['COLD DRIFT','GRAVITY WELL','EVENT HORIZON','SINGULARITY'],messages:['The vessel is no longer drifting alone.','Gravity bends the transmission inward.','Distance has collapsed into a single signal.']},
  'celestial-veil':{states:['VEILED LIGHT','FIRST HALO','ASCENSION','EMPYREAN OPEN'],messages:['A first halo forms beyond the veil.','The luminous chambers begin to sing.','The empyrean stands fully open.']},
  'sunroot-vale':{states:['ROOTED SILENCE','SUNRISE PATH','ANCIENT CANOPY','UNBROKEN SUN'],messages:['Sunlight reaches the old warrior path.','The bamboo answers with an older breath.','The whole canopy stands unbroken beneath the sun.']}
};
const EVOLUTION_NORMAL=[0,300,900,1800];
const EVOLUTION_TEST=[0,20,50,90];

const $=s=>document.querySelector(s);const $$=s=>[...document.querySelectorAll(s)];
const settings=Object.assign({intro:true,reduced:false,remember:true,shuffleStart:false,rare:true,evolution:true,hybrid:true,performance:'auto',timeMode:true,weather:true,ritualStop:true,rareEvents:true,defaultTimer:0},JSON.parse(localStorage.srSettings||'{}'));
const LISTENING_MODES={balanced:{label:'BALANCED',audio:'NEUTRAL',events:'STANDARD',master:1,eq:[0,0,0],layers:[1,1,1]},focus:{label:'DEEP FOCUS',audio:'CENTERED',events:'QUIET',master:.92,eq:[-1.2,.5,-1.8],layers:[1.08,.82,.72]},sleep:{label:'SLEEP',audio:'SOFTENED',events:'MUTED',master:.76,eq:[.8,-1.4,-4.2],layers:[1.08,.62,.48]},cinematic:{label:'CINEMATIC',audio:'EXPANDED',events:'HEIGHTENED',master:.98,eq:[2.2,.7,1.6],layers:[1.12,1.08,1.15]}};
let listeningMode=localStorage.srListeningMode&&LISTENING_MODES[localStorage.srListeningMode]?localStorage.srListeningMode:'balanced';const requestedWorld=new URLSearchParams(location.search).get('world');let current=Math.max(0,WORLDS.findIndex(w=>w.id===requestedWorld));if(!requestedWorld)current=settings.remember?Number(localStorage.srWorld||0):0;let playing=false,audioCtx,master,analyser,filters=[],sources=[],layerGains=[],noiseNodes=[],engineNodes=[],engineTimers=[],startedAt=0,timerEnd=0,timerHandle,deferredPrompt,lang='de',switching=false,transmissionTimer=null,trackIndex=0,shuffleMode=settings.shuffleStart||localStorage.srShuffle==='1',favorites=new Set(JSON.parse(localStorage.srFavorites||'[]'));let ambientMode=false,ambientHideTimer=null,ambientPointerX=0,ambientPointerY=0,ambientWakeLock=null,rareTimer=null,rareAutoClose=null,rareActive=false,evolutionTimer=null,evolutionPhase=0,evolutionStartedAt=0,evolutionSignalTimer=null,evolutionVoiceGains=[];let sampleBuffers={},sampleLoadPromise=null,hybridSources=[],hybridNodes=[],hybridTimers=[],hybridGeneration=0;const evolutionTestMode=new URLSearchParams(location.search).get('evo')==='test';const loreFound=new Set(JSON.parse(localStorage.srLore||'[]'));const scannerFound=new Set(JSON.parse(localStorage.srScannerFinds||'[]'));let scannerActive=false,scannerTimer=null,scannerFrameTimer=null,scannerWorldIndex=0,scannerToneNodes=[];let weatherTimer=null,weatherState=null,weatherAudioGain=null,weatherAudioFilter=null,weatherManualOffset=0;const weatherTestMode=new URLSearchParams(location.search).get('weather')==='test';let ritualActive=false,ritualEnding=false,ritualDuration=600,ritualStartedAt=0,ritualTimer=null,ritualPhase=-1,ritualBus=null,ritualNodes=[],ritualSources=[],ritualSelectedMinutes=10;const ritualTestMode=new URLSearchParams(location.search).get('ritual')==='test';const ritualHistory=Object.assign({completed:0,totalSeconds:0},JSON.parse(localStorage.srRitualHistory||'{}'));

function allScannerSignals(){return WORLDS.flatMap(w=>(SCANNER_SIGNALS[w.id]||[]).map(x=>({...x,worldId:w.id,worldTitle:w.title,worldCode:w.code,color:w.color})))}
function saveScannerMemory(){localStorage.srScannerFinds=JSON.stringify([...scannerFound])}
function scannerFrequencyLabel(v){if(v>=1000)return{value:(v/1000).toFixed(2),unit:'kHz'};if(v<10)return{value:v.toFixed(2),unit:'Hz'};return{value:v.toFixed(1),unit:'Hz'}}
function scannerBandForWorld(i=current){const list=SCANNER_SIGNALS[WORLDS[i]?.id]||[],vals=list.map(x=>x.frequency);if(!vals.length)return'NO BAND';const a=scannerFrequencyLabel(Math.min(...vals)),b=scannerFrequencyLabel(Math.max(...vals));return a.unit===b.unit?`${a.value} — ${b.value} ${a.unit}`:`${a.value} ${a.unit} — ${b.value} ${b.unit}`}
function updateScannerCount(){const total=allScannerSignals().length,found=scannerFound.size;if($('#scannerCount')){$('#scannerCount').textContent=found;$('#scannerCount').classList.toggle('active',found>0)}if($('#scannerRecovered'))$('#scannerRecovered').textContent=`${found} / ${total} LOST FREQUENCIES RECOVERED`;if($('#scannerTotal'))$('#scannerTotal').textContent=`${found} / ${total}`}
function renderScannerArchive(){const root=$('#scannerArchive');if(!root)return;root.innerHTML=WORLDS.map(w=>{const list=SCANNER_SIGNALS[w.id]||[],count=list.filter(x=>scannerFound.has(x.id)).length;return`<article class="scanner-world" style="--scanner-world:${w.color}"><header><span><small>${w.code}</small><strong>${w.title}</strong></span><b>${count}/${list.length}</b></header>${list.map(x=>{const f=scannerFrequencyLabel(x.frequency);return scannerFound.has(x.id)?`<div class="scanner-memory-item recovered"><small>${x.code} · ${f.value} ${f.unit}</small><strong>${x.title}</strong><p>${x.text}</p></div>`:`<div class="scanner-memory-item encrypted"><small>ENCRYPTED FREQUENCY</small><strong>████████</strong><p>Lock this world and run the scanner to recover the signature.</p></div>`}).join('')}</article>`}).join('');updateScannerCount()}
function updateScannerWorld(i=current){const w=WORLDS[i];if(!w)return;const overlay=$('#scannerOverlay');overlay?.style.setProperty('--scanner-color',w.color);overlay?.style.setProperty('--scanner-glow',hexAlpha(w.color,.28));$('#scannerWorld').textContent=w.title;$('#scannerWorldCode').textContent=w.code;$('#scannerBand').textContent=scannerBandForWorld(i);const x=(SCANNER_SIGNALS[w.id]||[])[0];if(x){const f=scannerFrequencyLabel(x.frequency);$('#scannerFrequency').textContent=f.value;$('#scannerUnit').textContent=f.unit}}
function openScanner(){renderScannerArchive();updateScannerWorld(current);const el=$('#scannerOverlay');el.classList.add('open');el.setAttribute('aria-hidden','false');document.body.classList.add('scanner-open');revealAmbientControls(true)}
function stopScannerTone(){scannerToneNodes.forEach(n=>{try{n.stop?.()}catch{}try{n.disconnect?.()}catch{}});scannerToneNodes=[]}
function cancelScanner(reset=true){clearTimeout(scannerTimer);clearInterval(scannerFrameTimer);scannerTimer=scannerFrameTimer=null;scannerActive=false;document.body.classList.remove('scanner-running');stopScannerTone();const b=$('#startScanner');if(b){b.disabled=false;b.textContent='START WORLD SCAN'}if(reset)$('#scannerProgressBar').style.width='0%'}
function closeScanner(){cancelScanner(false);const el=$('#scannerOverlay');el.classList.remove('open');el.setAttribute('aria-hidden','true');document.body.classList.remove('scanner-open')}
function playScannerSweep(duration=9){if(!audioCtx)return;const t=audioCtx.currentTime,out=audioCtx.createGain(),osc=audioCtx.createOscillator(),noise=makeNoise('white',duration+.3),bp=audioCtx.createBiquadFilter(),ng=audioCtx.createGain(),pan=audioCtx.createStereoPanner(),lfo=audioCtx.createOscillator(),depth=audioCtx.createGain();out.gain.setValueAtTime(.0001,t);out.gain.linearRampToValueAtTime(.022*Math.max(.25,state.volume),t+.3);out.gain.setValueAtTime(.018*Math.max(.25,state.volume),t+duration-.4);out.gain.exponentialRampToValueAtTime(.0001,t+duration);osc.type='sine';osc.frequency.setValueAtTime(118,t);osc.frequency.exponentialRampToValueAtTime(760,t+duration);bp.type='bandpass';bp.frequency.setValueAtTime(540,t);bp.frequency.exponentialRampToValueAtTime(2600,t+duration);bp.Q.value=4.2;ng.gain.value=.006*Math.max(.25,state.volume);lfo.frequency.value=.24;depth.gain.value=.78;lfo.connect(depth).connect(pan.pan);osc.connect(out);noise.connect(bp).connect(ng).connect(out);out.connect(pan).connect(audioCtx.destination);osc.start(t);osc.stop(t+duration+.05);noise.start(t);noise.stop(t+duration+.05);lfo.start(t);lfo.stop(t+duration+.05);scannerToneNodes=[out,osc,noise,bp,ng,pan,lfo,depth]}
function playScannerLock(){if(!audioCtx)return;const t=audioCtx.currentTime,g=audioCtx.createGain(),nodes=[g];g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(.04*Math.max(.25,state.volume),t+.03);g.gain.exponentialRampToValueAtTime(.0001,t+1.8);g.connect(audioCtx.destination);[440,660,880].forEach((f,i)=>{const o=audioCtx.createOscillator();o.type='sine';o.frequency.value=f;o.connect(g);o.start(t+i*.1);o.stop(t+1.7);nodes.push(o)});setTimeout(()=>nodes.forEach(n=>{try{n.disconnect()}catch{}}),2100)}
function completeScanner(){clearInterval(scannerFrameTimer);scannerFrameTimer=null;scannerActive=false;document.body.classList.remove('scanner-running');stopScannerTone();const w=WORLDS[scannerWorldIndex],list=SCANNER_SIGNALS[w.id]||[],unseen=list.filter(x=>!scannerFound.has(x.id)),signal=unseen.length?unseen[Math.floor(Math.random()*unseen.length)]:list[Math.floor(Math.random()*Math.max(1,list.length))],isNew=signal&&!scannerFound.has(signal.id),result=$('#scannerResult');if(signal){if(isNew){scannerFound.add(signal.id);saveScannerMemory()}const f=scannerFrequencyLabel(signal.frequency);result.className=`scanner-result ${isNew?'locked':'known'}`;result.innerHTML=`<small>${isNew?'NEW FREQUENCY LOCKED':'KNOWN SIGNATURE REACQUIRED'} · ${w.code}</small><h3>${signal.title}</h3><div class="scanner-result-meta"><b>${signal.code}</b><span>${f.value} ${f.unit}</span></div><p>${signal.text}</p>`;$('#scannerFrequency').textContent=f.value;$('#scannerUnit').textContent=f.unit;playScannerLock();toast(isNew?`SIGNAL RECOVERED — ${signal.title}`:`WORLD BAND COMPLETE — ${w.title}`)}else{result.className='scanner-result empty';result.innerHTML='<small>NO CARRIER</small><h3>THE BAND REMAINS SILENT</h3><p>Return after the world transmission has stabilized.</p>'}$('#scannerProgressBar').style.width='100%';const b=$('#startScanner');b.disabled=false;b.textContent=unseen.length>1?'SCAN NEXT SIGNATURE':'SCAN WORLD BAND';renderScannerArchive()}
function startScanner(){if(scannerActive)return;scannerWorldIndex=current;if(!playing)startAudio();ensureAudio();audioCtx.resume();scannerActive=true;document.body.classList.add('scanner-running');updateScannerWorld(scannerWorldIndex);const result=$('#scannerResult');result.className='scanner-result scanning';result.innerHTML=`<small>WORLD BAND LOCKED · ${WORLDS[scannerWorldIndex].code}</small><h3>SEARCHING FOR BURIED CARRIERS</h3><p>Filtering atmospheric noise and comparing harmonic drift…</p>`;const b=$('#startScanner');b.disabled=true;b.textContent='SCANNING…';const duration=new URLSearchParams(location.search).get('scan')==='test'?2600:9000,start=performance.now(),signals=SCANNER_SIGNALS[WORLDS[scannerWorldIndex].id]||[],min=Math.min(...signals.map(x=>x.frequency)),max=Math.max(...signals.map(x=>x.frequency));playScannerSweep(duration/1000);scannerFrameTimer=setInterval(()=>{const p=Math.min(1,(performance.now()-start)/duration),eased=1-Math.pow(1-p,2.2),value=min+(max-min)*(eased*.82+Math.random()*.18),f=scannerFrequencyLabel(Math.max(min,Math.min(max,value)));$('#scannerFrequency').textContent=f.value;$('#scannerUnit').textContent=f.unit;$('#scannerProgressBar').style.width=`${p*100}%`},80);scannerTimer=setTimeout(completeScanner,duration)}

const OPERATOR_MEMORY_DEFAULT={callsign:'SHINRA',totalMs:0,longestMs:0,lastSessionMs:0,sessions:0,worldMs:{},visits:{},firstContact:{},lastContact:0};
function loadOperatorMemory(){try{const saved=JSON.parse(localStorage.srOperatorMemory||'{}');return {...OPERATOR_MEMORY_DEFAULT,...saved,worldMs:{...saved.worldMs},visits:{...saved.visits},firstContact:{...saved.firstContact}}}catch{return {...OPERATOR_MEMORY_DEFAULT,worldMs:{},visits:{},firstContact:{}}}}
let operatorMemory=loadOperatorMemory(),operatorSessionStart=0,operatorLastTick=0,operatorMemoryTimer=null,operatorSaveCounter=0;
const state={eq:JSON.parse(localStorage.srEq||'{"bass":0,"mid":0,"treble":0}'),layers:JSON.parse(localStorage.srLayers||'[0.45,0.28,0.22]'),volume:Number(localStorage.srVol||.72)};
const APP_CACHE='shinra-omega-share-signal-5.8';
let performanceProfile='balanced',performanceReason='Initial device scan',performanceAutoStep=0,batteryInfo=null,currentFps=60,visualizerRunning=false,visualizerFrame=0,fpsFrames=0,fpsWindowStart=performance.now(),diagnosticsTimer=null,lastDiagnosticsReport='';
const TIME_PHASES={dawn:{label:'DAWN',audio:[.2,.08,-.12]},day:{label:'DAYLIGHT',audio:[0,0,.16]},dusk:{label:'DUSK',audio:[.34,.04,-.34]},night:{label:'NIGHT',audio:[.48,-.1,-.58]},neutral:{label:'MANUAL',audio:[0,0,0]}};const timeOverride=new URLSearchParams(location.search).get('time');let currentTimePhase='neutral',timeCycleTimer=null,lastTimePhase='';

function resolveTimePhase(date=new Date()){
  if(['dawn','day','dusk','night'].includes(timeOverride))return timeOverride;
  const h=date.getHours()+date.getMinutes()/60;
  if(h>=5&&h<8)return'dawn';
  if(h>=8&&h<17)return'day';
  if(h>=17&&h<21)return'dusk';
  return'night';
}
function timeClockLabel(date=new Date()){return`${String(date.getHours()).padStart(2,'0')}:${String(date.getMinutes()).padStart(2,'0')}`}
function applyDynamicTime(announce=false){
  const date=new Date(),enabled=settings.timeMode!==false,phase=enabled?resolveTimePhase(date):'neutral',changed=phase!==currentTimePhase;
  currentTimePhase=phase;document.body.dataset.time=phase;document.body.classList.toggle('time-dynamic',enabled);
  const meta=TIME_PHASES[phase]||TIME_PHASES.neutral,clock=timeClockLabel(date),suffix=timeOverride?' · PREVIEW':'';
  if($('#timeState'))$('#timeState').textContent=meta.label+suffix;if($('#timeClock'))$('#timeClock').textContent=clock;
  if($('#ambientTime'))$('#ambientTime').textContent=`LOCAL CYCLE · ${meta.label}${suffix}`;
  if($('#sleepTime'))$('#sleepTime').textContent=`LOCAL CYCLE · ${meta.label}${suffix}`;
  if($('#diagTime'))$('#diagTime').textContent=enabled?meta.label:'DISABLED';
  if($('#diagTimeDetail'))$('#diagTimeDetail').textContent=enabled?`${clock} local time${timeOverride?' · URL preview':''}`:'Static world lighting';
  if(audioCtx&&filters.length)applyEq();
  if(changed&&lastTimePhase&&announce&&enabled)toast(`LOCAL CYCLE · ${meta.label}`);
  lastTimePhase=phase;
}
function startDynamicTime(){clearInterval(timeCycleTimer);applyDynamicTime(false);timeCycleTimer=setInterval(()=>applyDynamicTime(true),60*1000)}

function performanceDetection(){
  const selected=settings.performance||'auto';
  if(selected!=='auto')return{profile:selected,reason:'Manual profile selected in Omega Control'};
  const memory=Number(navigator.deviceMemory||0),cores=Number(navigator.hardwareConcurrency||0),connection=navigator.connection||navigator.mozConnection||navigator.webkitConnection;
  let score=0,reasons=[];
  if(connection?.saveData){score+=4;reasons.push('data saver active')}
  if(memory&&memory<=2){score+=4;reasons.push(`${memory} GB device memory`)}else if(memory&&memory<=4){score+=2;reasons.push(`${memory} GB device memory`)}
  if(cores&&cores<=2){score+=4;reasons.push(`${cores} CPU threads`)}else if(cores&&cores<=4){score+=2;reasons.push(`${cores} CPU threads`)}
  if(batteryInfo&&!batteryInfo.charging&&batteryInfo.level<=.2){score+=4;reasons.push('low battery')}
  if(settings.reduced){score=Math.max(score,3);reasons.push('quiet animations enabled')}
  if(performanceAutoStep===1){score=Math.max(score,3);reasons.push('adaptive FPS safeguard')}
  if(performanceAutoStep>=2){score=Math.max(score,7);reasons.push('strong FPS safeguard')}
  const profile=score>=7?'battery':score>=3?'balanced':'quality';
  return{profile,reason:reasons.length?reasons.join(' · '):'device capability allows full visual quality'};
}
function applyPerformanceProfile(source='scan'){
  const next=performanceDetection();performanceProfile=next.profile;performanceReason=next.reason;
  document.body.dataset.performance=performanceProfile;
  if(analyser){const target=performanceProfile==='battery'?128:256;if(analyser.fftSize!==target)analyser.fftSize=target}
  const profileLabel=$('#diagProfile');if(profileLabel)profileLabel.textContent=`${(settings.performance||'auto').toUpperCase()} · ${performanceProfile.toUpperCase()}`;
  const reasonLabel=$('#diagReason');if(reasonLabel)reasonLabel.textContent=`${performanceReason} · ${source}`;
}
async function initPerformanceSystem(){
  try{if(navigator.getBattery){batteryInfo=await navigator.getBattery();const refresh=()=>{if((settings.performance||'auto')==='auto')applyPerformanceProfile('battery signal')};batteryInfo.addEventListener('levelchange',refresh);batteryInfo.addEventListener('chargingchange',refresh)}}catch{}
  applyPerformanceProfile('startup scan');
}
function monitorRuntimeFps(now){
  fpsFrames++;
  if(now-fpsWindowStart<2000)return;
  currentFps=Math.round(fpsFrames*1000/(now-fpsWindowStart));fpsFrames=0;fpsWindowStart=now;
  if((settings.performance||'auto')==='auto'&&!document.hidden){
    if(currentFps<24&&performanceAutoStep<2){performanceAutoStep=2;applyPerformanceProfile('automatic FPS protection');toast('PERFORMANCE · BATTERY PROFILE')}
    else if(currentFps<38&&performanceAutoStep<1){performanceAutoStep=1;applyPerformanceProfile('automatic FPS protection');toast('PERFORMANCE · BALANCED PROFILE')}
  }
  if(document.body.classList.contains('diagnostics-open'))updateDiagnosticsLive();
}
function activeAudioNodeCount(){return sources.length+noiseNodes.length+engineNodes.length+hybridSources.length+hybridNodes.length+layerGains.length+filters.length+(master?2:0)}
function bytesLabel(value){if(!Number.isFinite(value))return'UNKNOWN';if(value<1024*1024)return`${Math.round(value/1024)} KB`;return`${(value/1024/1024).toFixed(value<10*1024*1024?1:0)} MB`}
function updateDiagnosticsLive(){
  const fps=$('#diagFps'),health=$('#diagHealth');if(fps)fps.textContent=String(currentFps||'--');if(health){health.textContent=currentFps>=50?'STABLE':currentFps>=32?'BALANCED':'PROTECTED';health.dataset.health=currentFps>=50?'good':currentFps>=32?'mid':'low'}
  if($('#diagNodes'))$('#diagNodes').textContent=String(activeAudioNodeCount());
  if($('#diagAudio'))$('#diagAudio').textContent=audioCtx?audioCtx.state.toUpperCase():'NOT STARTED';
  if($('#diagAudioDetail'))$('#diagAudioDetail').textContent=audioCtx?`${audioCtx.sampleRate} Hz${audioCtx.baseLatency?` · ${Math.round(audioCtx.baseLatency*1000)} ms base latency`:''}`:'Web Audio available · starts after user gesture';
  if($('#diagSamples'))$('#diagSamples').textContent=`${Object.keys(sampleBuffers).length} / 7`;
  if($('#diagSampleDetail'))$('#diagSampleDetail').textContent=settings.hybrid===false?'Hybrid layer disabled':Object.keys(sampleBuffers).length===7?'All textures decoded':'Textures load when audio begins';
  if($('#diagMotion'))$('#diagMotion').textContent=settings.reduced?'QUIET':'FULL';
  if($('#diagMotionDetail'))$('#diagMotionDetail').textContent=settings.reduced?'Reduced motion set inside app':'World animation system active';applyDynamicTime(false);
  if($('#diagBattery')&&batteryInfo){$('#diagBattery').textContent=`${Math.round(batteryInfo.level*100)}%`;$('#diagBatteryDetail').textContent=batteryInfo.charging?'Charging':'On battery power'}
  applyPerformanceProfile('live diagnostics');
}
async function collectDiagnostics(){
  updateDiagnosticsLive();
  const connection=navigator.connection||navigator.mozConnection||navigator.webkitConnection;
  const memory=navigator.deviceMemory?`${navigator.deviceMemory} GB`:'unknown memory',cores=navigator.hardwareConcurrency?`${navigator.hardwareConcurrency} threads`:'unknown CPU';
  $('#diagDevice').textContent=`${memory.toUpperCase()} · ${cores.toUpperCase()}`;$('#diagDeviceDetail').textContent=`Profile target: ${performanceProfile.toUpperCase()}`;
  $('#diagViewport').textContent=`${innerWidth} × ${innerHeight}`;$('#diagViewportDetail').textContent=`DPR ${devicePixelRatio.toFixed(2)} · Canvas cap ${performanceProfile==='quality'?2:performanceProfile==='balanced'?1.5:1}`;
  $('#diagNetwork').textContent=navigator.onLine?'ONLINE':'OFFLINE';$('#diagNetworkDetail').textContent=connection?`${connection.effectiveType||'network'}${connection.saveData?' · data saver':''}${connection.downlink?` · ${connection.downlink} Mbps`:''}`:'Browser connection details unavailable';
  try{const estimate=await navigator.storage?.estimate?.();if(estimate){$('#diagStorage').textContent=bytesLabel(estimate.usage||0);$('#diagStorageDetail').textContent=`of ${bytesLabel(estimate.quota||0)} browser quota`}}catch{$('#diagStorage').textContent='UNAVAILABLE'}
  let cacheNames=[];try{cacheNames=await caches.keys();$('#diagCache').textContent=`${cacheNames.length} VAULT${cacheNames.length===1?'':'S'}`;$('#diagCacheDetail').textContent=cacheNames.includes(APP_CACHE)?'Current offline core stored':'Current core waiting for activation'}catch{$('#diagCache').textContent='UNAVAILABLE'}
  let worker='UNSUPPORTED',workerDetail='Service Worker unavailable';try{if('serviceWorker'in navigator){const reg=await navigator.serviceWorker.getRegistration();worker=reg?.active?.state?.toUpperCase()||reg?.waiting?.state?.toUpperCase()||'REGISTERING';workerDetail=reg?.waiting?'Update waiting to install':navigator.serviceWorker.controller?'Page controlled and offline-ready':'First activation pending'}}catch{}
  $('#diagWorker').textContent=worker;$('#diagWorkerDetail').textContent=workerDetail;
  $('#diagUpdate').textContent=waitingWorker?'READY':'CURRENT';$('#diagUpdateDetail').textContent=waitingWorker?'New core waiting for installation':'Omega Core 5.8 active';applyDynamicTime(false);
  lastDiagnosticsReport=[
    'SHINRA OMEGA RADIO · SYSTEM REPORT','VERSION: 5.9',`PROFILE: ${(settings.performance||'auto').toUpperCase()} -> ${performanceProfile.toUpperCase()}`,`PROFILE REASON: ${performanceReason}`,`FPS: ${currentFps}`,`AUDIO: ${audioCtx?`${audioCtx.state}, ${audioCtx.sampleRate} Hz`:'not started'}`,`ACTIVE NODES: ${activeAudioNodeCount()}`,`SAMPLES: ${Object.keys(sampleBuffers).length}/7`,`NETWORK: ${navigator.onLine?'online':'offline'}${connection?.effectiveType?`, ${connection.effectiveType}`:''}`,`DEVICE: ${memory}, ${cores}`,`DISPLAY: ${innerWidth}x${innerHeight}, DPR ${devicePixelRatio}`,`BATTERY: ${batteryInfo?`${Math.round(batteryInfo.level*100)}%, ${batteryInfo.charging?'charging':'discharging'}`:'API unavailable'}`,`SERVICE WORKER: ${worker}`,`CACHES: ${cacheNames.join(', ')||'none'}`,`MOTION: ${settings.reduced?'quiet':'full'}`,`TIME CYCLE: ${settings.timeMode===false?'disabled':currentTimePhase}`,`GENERATED: ${new Date().toISOString()}`
  ].join('\n');
}
function openDiagnostics(){document.body.classList.add('diagnostics-open');$('#diagnosticsOverlay').classList.add('open');$('#diagnosticsOverlay').setAttribute('aria-hidden','false');collectDiagnostics();clearInterval(diagnosticsTimer);diagnosticsTimer=setInterval(updateDiagnosticsLive,1000)}
function closeDiagnostics(){document.body.classList.remove('diagnostics-open');$('#diagnosticsOverlay').classList.remove('open');$('#diagnosticsOverlay').setAttribute('aria-hidden','true');clearInterval(diagnosticsTimer);diagnosticsTimer=null}
async function copyDiagnosticsReport(){await collectDiagnostics();try{await navigator.clipboard.writeText(lastDiagnosticsReport);toast('SYSTEM REPORT COPIED')}catch{const t=document.createElement('textarea');t.value=lastDiagnosticsReport;document.body.append(t);t.select();document.execCommand('copy');t.remove();toast('SYSTEM REPORT COPIED')}}
async function cleanOldCaches(){try{const keys=await caches.keys(),old=keys.filter(k=>k!==APP_CACHE);await Promise.all(old.map(k=>caches.delete(k)));toast(old.length?`${old.length} OLD CACHE${old.length===1?'':'S'} CLEANED`:'CACHE ALREADY CLEAN');collectDiagnostics()}catch{toast('CACHE CLEAN FAILED')}}

function renderWorlds(){ $('#worlds').innerHTML=WORLDS.map((w,i)=>{
  const active=i===current?'active':'';
  const favorite=favorites.has(w.id)?'favorite':'';
  if(w.id==='black-sun'){
    return `<button class="world-card black-sun-card ${active} ${favorite}" data-i="${i}" style="--card:${w.color}">
      <span class="world-number">01</span>
      <div class="bs-card-art" aria-hidden="true">
        <div class="bs-horizon"></div>
        <div class="bs-sun-wrap">
          <div class="bs-glow"></div>
          <div class="bs-sun-core"></div>
          <div class="bs-sun-ring"></div>
        </div>
        <div class="bs-ash ash-1"></div>
        <div class="bs-ash ash-2"></div>
        <div class="bs-ash ash-3"></div>
      </div>
      <div class="world-text">
        <span class="world-kicker">CHANNEL 01</span>
        <strong>Black Sun</strong>
        <small>Low-frequency transmissions beneath a dead horizon</small>
      </div>
    </button>`;
  }
  if(w.id==='aquatoc'){
    return `<button class="world-card aquatoc-card ${active} ${favorite}" data-i="${i}" style="--card:${w.color}">
      <span class="world-number">02</span>
      <div class="aq-card-art" aria-hidden="true">
        <div class="aq-pressure"></div>
        <div class="aq-sonar"><i></i><b></b><em></em></div>
        <div class="aq-depth-line l1"></div>
        <div class="aq-depth-line l2"></div>
        <div class="aq-bubble b1"></div>
        <div class="aq-bubble b2"></div>
        <div class="aq-bubble b3"></div>
      </div>
      <div class="world-text">
        <span class="world-kicker">CHANNEL 02</span>
        <strong>Aquatoc</strong>
        <small>Submerged machinery dreaming below an endless ocean</small>
      </div>
    </button>`;
  }
  if(w.id==='crimson-rain'){
    return `<button class="world-card crimson-rain-card ${active} ${favorite}" data-i="${i}" style="--card:${w.color}">
      <span class="world-number">03</span>
      <div class="cr-card-art" aria-hidden="true">
        <div class="cr-nightglass"></div>
        <div class="cr-neon-gate"><i></i><b></b><em></em></div>
        <div class="cr-rain r1"></div>
        <div class="cr-rain r2"></div>
        <div class="cr-rain r3"></div>
        <div class="cr-reflection"></div>
        <div class="cr-signal-dot d1"></div>
        <div class="cr-signal-dot d2"></div>
      </div>
      <div class="world-text">
        <span class="world-kicker">CHANNEL 03</span>
        <strong>Crimson Rain</strong>
        <small>Red light dissolving across wet streets after midnight</small>
      </div>
    </button>`;
  }
  if(w.id==='mountain-blood'){
    return `<button class="world-card mountain-blood-card ${active} ${favorite}" data-i="${i}" style="--card:${w.color}">
      <span class="world-number">04</span>
      <div class="mb-card-art" aria-hidden="true">
        <div class="mb-stone-ridge"><i></i><b></b><em></em></div>
        <div class="mb-sigil"><i></i><b></b><em></em></div>
        <div class="mb-wind w1"></div>
        <div class="mb-wind w2"></div>
        <div class="mb-ember e1"></div>
        <div class="mb-ember e2"></div>
        <div class="mb-ember e3"></div>
      </div>
      <div class="world-text">
        <span class="world-kicker">CHANNEL 04</span>
        <strong>Mountain Blood</strong>
        <small>Ancient strings carried through stone, wind and memory</small>
      </div>
    </button>`;
  }
  if(w.id==='starless-void'){
    return `<button class="world-card starless-void-card ${active} ${favorite}" data-i="${i}" style="--card:${w.color}">
      <span class="world-number">05</span>
      <div class="sv-card-art" aria-hidden="true">
        <div class="sv-orbit o1"></div>
        <div class="sv-orbit o2"></div>
        <div class="sv-event-core"><i></i><b></b><em></em></div>
        <div class="sv-star s1"></div>
        <div class="sv-star s2"></div>
        <div class="sv-star s3"></div>
        <div class="sv-star s4"></div>
        <div class="sv-signal"></div>
      </div>
      <div class="world-text">
        <span class="world-kicker">CHANNEL 05</span>
        <strong>Starless Void</strong>
        <small>A transmission drifting beyond the last mapped constellation</small>
      </div>
    </button>`;
  }

  if(w.id==='celestial-veil'){
    return `<button class="world-card celestial-veil-card ${active} ${favorite}" data-i="${i}" style="--card:${w.color}">
      <span class="world-number">06</span>
      <div class="cv-card-art" aria-hidden="true">
        <div class="cv-card-glow"></div>
        <div class="cv-card-halo"><i></i><b></b><em></em></div>
        <div class="cv-card-ray r1"></div>
        <div class="cv-card-ray r2"></div>
        <div class="cv-card-ray r3"></div>
        <div class="cv-card-arch a1"></div>
        <div class="cv-card-arch a2"></div>
        <div class="cv-card-star s1"></div>
        <div class="cv-card-star s2"></div>
        <div class="cv-card-star s3"></div>
      </div>
      <div class="world-text">
        <span class="world-kicker">CHANNEL 06</span>
        <strong>Celestial Veil</strong>
        <small>Sacred transmissions beyond the veil of light</small>
      </div>
    </button>`;
  }

  if(w.id==='sunroot-vale'){
    return `<button class="world-card sunroot-vale-card ${active} ${favorite}" data-i="${i}" style="--card:${w.color}">
      <span class="world-number">07</span>
      <div class="srv-card-art" aria-hidden="true">
        <div class="srv-card-canopy"></div>
        <div class="srv-card-sun"><i></i><b></b><em></em></div>
        <div class="srv-card-ray r1"></div><div class="srv-card-ray r2"></div><div class="srv-card-ray r3"></div>
        <div class="srv-card-trunk t1"></div><div class="srv-card-trunk t2"></div><div class="srv-card-trunk t3"></div>
        <div class="srv-card-path"></div>
        <div class="srv-card-arch a1"></div>
        <span class="srv-card-leaf l1"></span><span class="srv-card-leaf l2"></span><span class="srv-card-leaf l3"></span>
      </div>
      <div class="world-text">
        <span class="world-kicker">CHANNEL 07</span>
        <strong>Sunroot Vale</strong>
        <small>Ancient reeds and rooted sunlight along the warrior's path</small>
      </div>
    </button>`;
  }
  return `<button class="world-card ${active} ${favorite}" data-i="${i}" style="--card:${w.color}"><small>${w.code.split('/')[0]}</small><b>${w.title}</b><span>${w.genre}</span></button>`;
}).join('');$$('.world-card').forEach(b=>b.onclick=()=>selectWorld(+b.dataset.i));}
function renderControls(){const labels=[['bass','BASS'],['mid','MID'],['treble','TREBLE']];$('#eq').innerHTML=labels.map(([k,l])=>`<div class="control"><label>${l}</label><input data-eq="${k}" type="range" min="-12" max="12" step="1" value="${state.eq[k]}"><output>${state.eq[k]>0?'+':''}${state.eq[k]}</output></div>`).join('');$$('[data-eq]').forEach(el=>el.oninput=e=>{state.eq[e.target.dataset.eq]=+e.target.value;e.target.nextElementSibling.textContent=(+e.target.value>0?'+':'')+e.target.value;applyEq();save();});renderLayers();$('#timerButtons').innerHTML=[15,30,45,60,90,0].map(x=>`<button data-min="${x}">${x||'∞'}${x?' MIN':''}</button>`).join('');$$('[data-min]').forEach(b=>b.onclick=()=>setTimer(+b.dataset.min));}
function renderLayers(){const w=WORLDS[current];$('#layers').innerHTML=w.layers.map((l,i)=>`<div class="control"><label>${l}</label><input data-layer="${i}" type="range" min="0" max="1" step=".01" value="${state.layers[i]??.3}"><output>${Math.round((state.layers[i]??.3)*100)}</output></div>`).join('');$$('[data-layer]').forEach(el=>el.oninput=e=>{state.layers[+e.target.dataset.layer]=+e.target.value;e.target.nextElementSibling.textContent=Math.round(e.target.value*100);if(layerGains[+e.target.dataset.layer]){const i=+e.target.dataset.layer;layerGains[i].gain.setTargetAtTime(targetLayerGain(i),audioCtx.currentTime,.12)}save();});}

function showWorldGate(i){
  const w=WORLDS[(i+WORLDS.length)%WORLDS.length],gate=$('#worldGate');
  if(!gate)return;
  gate.style.setProperty('--gate-color',w.color);
  gate.style.setProperty('--gate-glow',hexAlpha(w.color,.34));
  $('#gateTitle').textContent=w.title;
  $('#gateGenre').textContent=w.genre;$('#gateQuote').textContent=LORE[w.id]?.gate||w.subtitle;
  gate.classList.remove('closing');
  gate.classList.add('open');
  gate.setAttribute('aria-hidden','false');
}
function hideWorldGate(){
  const gate=$('#worldGate');if(!gate)return;
  gate.classList.add('closing');
  setTimeout(()=>{gate.classList.remove('open','closing');gate.setAttribute('aria-hidden','true')},480);
}

function setCurrentWorld(i){closeRareWorldEvent(true);current=(i+WORLDS.length)%WORLDS.length;trackIndex=0;if(settings.remember)localStorage.srWorld=current;updateWorld();}
function selectWorld(i){const next=(i+WORLDS.length)%WORLDS.length;if(next===current||switching)return;switching=true;showWorldGate(next);if(!playing){setTimeout(()=>{setCurrentWorld(next);hideWorldGate();switching=false},520);return}$('#deck')?.classList.add('switching');const now=audioCtx.currentTime;master.gain.cancelScheduledValues(now);master.gain.setValueAtTime(master.gain.value,now);master.gain.linearRampToValueAtTime(0.0001,now+.65);setTimeout(()=>{operatorTick(true);teardownAudio();setCurrentWorld(next);master.gain.setValueAtTime(.0001,audioCtx.currentTime);startAudio(true);master.gain.linearRampToValueAtTime(effectiveVolume(),audioCtx.currentTime+1.15);setTimeout(()=>{hideWorldGate();$('#deck')?.classList.remove('switching');switching=false},620)},690)}


// ===== WORLD WEATHER SYSTEM 5.5 =====
const WEATHER_PROFILES={
  'black-sun':{conditions:[['ASH VEIL','A slow wall of ash is crossing the dead horizon.'],['CORONA WIND','Heat currents are bending around the black core.'],['SILENT ECLIPSE','The atmosphere has fallen into an unnatural stillness.']],metrics:[['ASH DENSITY',18,94,'%'],['HORIZON WIND',4,31,' km/h'],['CORONA FLUX',220,780,' μR']]},
  'aquatoc':{conditions:[['DEEP CURRENT','A cold current is moving beneath the pressure temple.'],['PRESSURE BLOOM','The abyss is compressing around the signal field.'],['SONAR FOG','Suspended minerals are scattering the long-range pings.']],metrics:[['PRESSURE',42,186,' MPa'],['CURRENT',0.4,4.8,' kn'],['SONAR RANGE',1.2,8.6,' km']]},
  'crimson-rain':{conditions:[['NEON DOWNPOUR','Red rain is washing the district into liquid light.'],['STATIC STORM','Electrical noise is crawling across the rooftops.'],['GLASS MIST','Warm vapor is rising from the midnight streets.']],metrics:[['RAINFALL',16,88,' mm/h'],['NEON STATIC',12,96,'%'],['STREET TEMP',7,24,'°C']]},
  'mountain-blood':{conditions:[['RIDGE WIND','Old mountain air is moving through the stone passes.'],['EMBER FRONT','Warm ash is lifting from the ritual valleys.'],['ANCESTRAL CALM','The high ridges have entered a rare silence.']],metrics:[['WIND FORCE',8,62,' km/h'],['EMBER DENSITY',4,74,'%'],['RIDGE TEMP',-6,18,'°C']]},
  'starless-void':{conditions:[['GRAVITY DRIFT','The local field is bending toward an unmapped center.'],['ION VEIL','Charged particles are gathering around the event horizon.'],['BEACON NIGHT','A distant pulse is repeating beyond mapped space.']],metrics:[['GRAVITY DRIFT',0.2,4.9,' mG'],['ION DENSITY',18,940,' p/cm³'],['BEACON RANGE',12,980,' AU']]},
  'celestial-veil':{conditions:[['LUMEN RISE','The upper veil is brightening with quiet harmonic light.'],['HALO CURRENT','Golden currents are moving through the empyrean arches.'],['MERCY CLEARING','The veil has opened into exceptional clarity.']],metrics:[['LUMEN INDEX',22,100,'%'],['HALO CURRENT',1.4,9.8,' kL'],['VEIL CLARITY',38,99,'%']]},
  'sunroot-vale':{conditions:[['CANOPY WIND','Warm air is moving through the ancient cedar crowns.'],['SUNSHAFT BLOOM','Rooted sunlight is breaking across the warrior path.'],['FOREST STILLNESS','The entire vale is listening between two breaths.']],metrics:[['CANOPY LIGHT',14,98,'%'],['FOREST WIND',1,26,' km/h'],['ROOT HUM',42,118,' Hz']]}
};
function weatherHash(text){let h=2166136261;for(let i=0;i<text.length;i++){h^=text.charCodeAt(i);h=Math.imul(h,16777619)}return(h>>>0)/4294967295}
function weatherSlotLength(){return weatherTestMode?60000:10*60*1000}
function calculateWeather(index=current,now=Date.now()){
  const w=WORLDS[index],profile=WEATHER_PROFILES[w.id],slotLen=weatherSlotLength(),adjusted=now+weatherManualOffset,slot=Math.floor(adjusted/slotLen),progress=(adjusted%slotLen)/slotLen;
  const seed=weatherHash(`${w.id}:${slot}`),nextSeed=weatherHash(`${w.id}:${slot+1}`),conditionIndex=Math.floor(seed*profile.conditions.length)%profile.conditions.length;
  const wave=Math.sin(progress*Math.PI),intensity=Math.max(.12,Math.min(.98,.22+seed*.58+wave*.18));
  const trend=nextSeed>seed+.08?'RISING':nextSeed<seed-.08?'FALLING':'STABLE';
  const metrics=profile.metrics.map((m,i)=>{const r=weatherHash(`${w.id}:${slot}:m${i}`),osc=Math.sin(progress*Math.PI*2+i*.9)*.08;let value=m[1]+(m[2]-m[1])*Math.max(0,Math.min(1,r*.82+intensity*.18+osc));if(Math.abs(m[2]-m[1])<20||String(m[3]).includes('kn')||String(m[3]).includes('mG'))value=Math.round(value*10)/10;else value=Math.round(value);return{label:m[0],value,unit:m[3]}});
  return{world:w,profile,condition:profile.conditions[conditionIndex],conditionIndex,intensity,trend,metrics,nextShift:slotLen-(adjusted%slotLen),slot};
}
function formatWeatherCountdown(ms){const sec=Math.max(0,Math.floor(ms/1000)),m=Math.floor(sec/60),s=sec%60;return`${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`}
function applyWeatherVisuals(state){
  const enabled=settings.weather!==false;document.body.classList.toggle('weather-enabled',enabled);document.body.dataset.weather=enabled?String(state.conditionIndex):'off';
  document.documentElement.style.setProperty('--weather-force',enabled?state.intensity.toFixed(3):'0');document.documentElement.style.setProperty('--weather-light',(0.28+state.intensity*.72).toFixed(3));document.documentElement.style.setProperty('--weather-motion',(0.35+state.intensity*.85).toFixed(3));
}
function updateWeatherAudio(){if(!weatherAudioGain||!audioCtx)return;const force=weatherState?.intensity||.3;const base=[.008,.012,.009,.008,.005,.006,.01][current]||.007;const target=settings.weather===false?0:base*(.45+force*.85);try{weatherAudioGain.gain.setTargetAtTime(target,audioCtx.currentTime,.8);if(weatherAudioFilter)weatherAudioFilter.frequency.setTargetAtTime([620,260,2500,980,170,4200,1150][current]||800,audioCtx.currentTime,.8)}catch{}}
function createWeatherAudio(){if(!audioCtx)return;if(weatherAudioGain){updateWeatherAudio();return}if(settings.weather===false)return;const colors=['brown','brown','white','pink','pink','white','pink'],types=['lowpass','lowpass','bandpass','bandpass','lowpass','bandpass','bandpass'];const noise=makeNoise(colors[current]||'pink',6),filter=audioCtx.createBiquadFilter(),gain=audioCtx.createGain(),pan=audioCtx.createStereoPanner();filter.type=types[current]||'lowpass';filter.Q.value=current===2?1.1:.55;pan.pan.value=(current%2?-.12:.12);gain.gain.value=.0001;noise.connect(filter).connect(pan).connect(gain).connect(filters[0]);noise.start();noiseNodes.push(noise);engineNodes.push(filter,pan,gain);weatherAudioGain=gain;weatherAudioFilter=filter;updateWeatherAudio()}
function renderWeatherMetrics(state){const box=$('#weatherMetrics');if(!box)return;box.innerHTML=state.metrics.map(m=>`<article><small>${m.label}</small><strong>${m.value}<span>${m.unit}</span></strong><i style="--metric:${Math.min(100,Math.max(8,state.intensity*100))}%"></i></article>`).join('')}
function updateWeatherUI(force=false){
  const next=calculateWeather();const changed=!weatherState||next.world.id!==weatherState.world.id||next.slot!==weatherState.slot||next.conditionIndex!==weatherState.conditionIndex;weatherState=next;applyWeatherVisuals(next);updateWeatherAudio();
  const enabled=settings.weather!==false,condition=enabled?next.condition[0]:'SEALED',primary=enabled?`${next.metrics[0].label} · ${next.metrics[0].value}${next.metrics[0].unit}`:'DISABLED IN SETTINGS';
  if($('#weatherState'))$('#weatherState').textContent=condition;if($('#weatherMetric'))$('#weatherMetric').textContent=primary;if($('#ambientWeather'))$('#ambientWeather').textContent=`WORLD WEATHER · ${condition}`;if($('#sleepWeather'))$('#sleepWeather').textContent=`WORLD WEATHER · ${condition}`;
  if($('#weatherDot'))$('#weatherDot').classList.toggle('active',enabled&&next.intensity>.7);
  if($('#weatherWorldCode'))$('#weatherWorldCode').textContent=next.world.code;if($('#weatherWorldName'))$('#weatherWorldName').textContent=next.world.title;if($('#weatherCondition'))$('#weatherCondition').textContent=condition;if($('#weatherNarrative'))$('#weatherNarrative').textContent=enabled?next.condition[1]:'Atmospheric simulation is currently sealed.';if($('#weatherIntensity'))$('#weatherIntensity').textContent=enabled?Math.round(next.intensity*100):0;if($('#weatherForceBar'))$('#weatherForceBar').style.width=`${enabled?Math.round(next.intensity*100):0}%`;if($('#weatherNextShift'))$('#weatherNextShift').textContent=formatWeatherCountdown(next.nextShift);if($('#weatherTrend'))$('#weatherTrend').textContent=enabled?next.trend:'SEALED';if($('#weatherAudioState'))$('#weatherAudioState').textContent=enabled?(playing?'RESPONDING':'STANDBY'):'OFF';if($('#weatherUpdated'))$('#weatherUpdated').textContent=`LIVE · ${new Date().toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'})}`;renderWeatherMetrics(next);
  if(changed&&!force&&enabled&&playing)toast(`WORLD WEATHER · ${condition}`)
}
function startWorldWeather(){clearInterval(weatherTimer);updateWeatherUI(true);weatherTimer=setInterval(()=>updateWeatherUI(false),1000)}
function openWeather(){updateWeatherUI(true);$('#weatherOverlay')?.classList.add('open');$('#weatherOverlay')?.setAttribute('aria-hidden','false');document.body.classList.add('weather-open')}
function closeWeather(){$('#weatherOverlay')?.classList.remove('open');$('#weatherOverlay')?.setAttribute('aria-hidden','true');document.body.classList.remove('weather-open')}
function recalibrateWeather(){weatherManualOffset+=weatherSlotLength();updateWeatherUI(true);toast('ATMOSPHERE RECALIBRATED')}


function listeningModeConfig(){return LISTENING_MODES[listeningMode]||LISTENING_MODES.balanced}
function effectiveVolume(){return Math.max(.0001,Math.min(1,state.volume*listeningModeConfig().master))}
function baseLayerScale(i){return current===0?[.17,.2,.12][i]:current===1?[.15,.14,.11][i]:current===2?[.12,.16,.11][i]:current===3?[.14,.12,.13][i]:current===4?[.11,.055,.035][i]:current===5?[.12,.09,.065][i]:[.12,.1,.08][i]}
function renderListeningMode(){
  const cfg=listeningModeConfig();document.body.dataset.listeningMode=listeningMode;
  $$('.listening-mode-option').forEach(b=>b.classList.toggle('active',b.dataset.listeningMode===listeningMode));
  if($('#listeningModeActive'))$('#listeningModeActive').textContent=cfg.label;if($('#listeningModeAudio'))$('#listeningModeAudio').textContent=cfg.audio;if($('#listeningModeEvents'))$('#listeningModeEvents').textContent=cfg.events;if($('#listeningModeBadge'))$('#listeningModeBadge').textContent=cfg.label;if($('#listeningModeBtn'))$('#listeningModeBtn').title=`Listening Mode · ${cfg.label}`;
}
function applyListeningMode(announce=true){
  const cfg=listeningModeConfig();renderListeningMode();
  if(audioCtx){applyEq();layerGains.forEach((g,i)=>{try{g.gain.setTargetAtTime(targetLayerGain(i),audioCtx.currentTime,.65)}catch{}});if(master&&playing)master.gain.setTargetAtTime(effectiveVolume(),audioCtx.currentTime,.7)}
  clearTimeout(rareTimer);rareTimer=null;clearTimeout(rareEventTimer);rareEventTimer=null;if(playing){scheduleRareTransmission(true);scheduleRareWorldEvent(true)}
  if(announce)toast(`LISTENING MODE · ${cfg.label}`);syncAmbientHud();
}
function selectListeningMode(mode){if(!LISTENING_MODES[mode]||mode===listeningMode)return;listeningMode=mode;localStorage.srListeningMode=mode;applyListeningMode(true)}
function openListeningMode(){renderListeningMode();const el=$('#listeningModeOverlay');el.classList.add('open');el.setAttribute('aria-hidden','false');document.body.classList.add('listening-mode-open');revealAmbientControls(true)}
function closeListeningMode(){const el=$('#listeningModeOverlay');el.classList.remove('open');el.setAttribute('aria-hidden','true');document.body.classList.remove('listening-mode-open')}

function updateWorld(){const w=WORLDS[current];document.body.dataset.world=w.id;document.documentElement.style.setProperty('--accent',w.color);document.documentElement.style.setProperty('--accent2',w.color2);document.documentElement.style.setProperty('--glow',hexAlpha(w.color,.26));$('#worldCode').textContent=w.code;$('#worldTitle').textContent=w.title;$('#worldSubtitle').textContent=w.subtitle;$('#genreTag').textContent=w.genre;$('#bpmTag').textContent=w.bpm+' BPM';$('#nowTitle').textContent=w.title+' — '+(w.tracks?.[trackIndex]||w.track);updateMasterControls();$('#sleepCode').textContent=w.code;$('#sleepTitle').textContent=w.title;renderWorlds();renderLayers();updateMedia();syncAmbientHud();applyDynamicTime(false);updateWeatherUI(true);if(!playing){evolutionPhase=0;document.body.dataset.evolution='0';updateEvolutionReadout(0)}if(document.body.classList.contains('scanner-open')&&!scannerActive)updateScannerWorld(current);if(document.body.classList.contains('share-open'))renderShareSignal();updateFusionUI()}
function hexAlpha(hex,a){const h=hex.replace('#','');return `rgba(${parseInt(h.slice(0,2),16)},${parseInt(h.slice(2,4),16)},${parseInt(h.slice(4,6),16)},${a})`}

function getLayerScale(worldIndex,i){const scales=[[.17,.2,.12],[.15,.14,.11],[.12,.16,.11],[.14,.12,.13],[.11,.055,.035],[.12,.09,.065],[.12,.1,.08]];return (scales[worldIndex]||[.11,.055,.035])[i]||.05}
function evolutionMultiplier(i){if(settings.evolution===false)return 1;const matrix=[[1,1,1],[1.05,1.04,1.08],[1.1,1.12,1.16],[1.16,1.18,1.25]];return (matrix[evolutionPhase]||matrix[0])[i]||1}
function targetLayerGain(i){return (state.layers[i]??.3)*getLayerScale(current,i)*evolutionMultiplier(i)*(listeningModeConfig().layers[i]??1)}
function evolutionDefinition(){return EVOLUTION[WORLDS[current].id]||{states:['DORMANT','AWAKENING','ASCENDANT','MYTHIC'],messages:['The signal changes.','The world deepens.','The final state is open.']}}
function evolutionThresholds(){return evolutionTestMode?EVOLUTION_TEST:EVOLUTION_NORMAL}
function formatEvolutionTime(sec){return `${String(Math.floor(sec/60)).padStart(2,'0')}:${String(Math.max(0,Math.floor(sec%60))).padStart(2,'0')}`}
function updateEvolutionReadout(elapsed=0){const def=evolutionDefinition(),thresholds=evolutionThresholds(),phase=settings.evolution===false?0:evolutionPhase,stateName=def.states[phase]||def.states[0];if($('#evolutionState'))$('#evolutionState').textContent=stateName;if($('#ambientEvolution'))$('#ambientEvolution').textContent=`STATE · ${stateName}`;if($('#sleepEvolution'))$('#sleepEvolution').textContent=`WORLD STATE · ${stateName}`;let progress=0,nextText=settings.evolution===false?'EVOLUTION DISABLED':playing?'FINAL STATE REACHED':'START TRANSMISSION';if(playing&&settings.evolution!==false&&phase<thresholds.length-1){const start=thresholds[phase],end=thresholds[phase+1];progress=Math.max(0,Math.min(1,(elapsed-start)/(end-start)));nextText=`NEXT STATE IN ${formatEvolutionTime(end-elapsed)}`}else if(phase===thresholds.length-1)progress=1;if($('#evolutionMeter'))$('#evolutionMeter').style.width=`${progress*100}%`;if($('#evolutionNext'))$('#evolutionNext').textContent=nextText}
function showEvolutionSignal(phase){const def=evolutionDefinition(),panel=$('#evolutionSignal');if(!panel||phase<1)return;$('#evolutionSignalTitle').textContent=def.states[phase];$('#evolutionSignalText').textContent=def.messages[phase-1]||'The transmission is changing.';panel.style.setProperty('--evolution-color',WORLDS[current].color);panel.classList.add('show');panel.setAttribute('aria-hidden','false');clearTimeout(evolutionSignalTimer);evolutionSignalTimer=setTimeout(()=>{panel.classList.remove('show');panel.setAttribute('aria-hidden','true')},6500)}
function playEvolutionTone(phase){if(!audioCtx||!playing||phase<1)return;const t=audioCtx.currentTime,w=WORLDS[current],base=(w.osc?.[Math.min(phase-1,(w.osc?.length||1)-1)]||110)*(current===5?2:(current===4?0.75:1)),o=audioCtx.createOscillator(),g=audioCtx.createGain(),f=audioCtx.createBiquadFilter(),p=audioCtx.createStereoPanner();o.type=phase===2?'triangle':'sine';o.frequency.setValueAtTime(base,t);o.frequency.exponentialRampToValueAtTime(base*(phase===3?1.5:1.25),t+2.8);f.type='lowpass';f.frequency.value=Math.min(4200,base*8);p.pan.value=(phase-2)*.22;g.gain.setValueAtTime(.0001,t);g.gain.linearRampToValueAtTime(.018,t+.35);g.gain.exponentialRampToValueAtTime(.0001,t+4.4);o.connect(f).connect(g).connect(p).connect(filters[0]);o.start(t);o.stop(t+4.5)}
function addEvolutionVoice(phase){if(!audioCtx||phase<1||evolutionVoiceGains[phase])return;const bases=[[27.5,41.2,55],[65.4,98,130.8],[98,146.8,220],[73.4,110,146.8],[55,82.4,123.5],[261.6,392,523.3],[146.8,220,293.7]],base=(bases[current]||bases[0])[phase-1],o=audioCtx.createOscillator(),g=audioCtx.createGain(),lfo=audioCtx.createOscillator(),depth=audioCtx.createGain(),p=audioCtx.createStereoPanner(),t=audioCtx.currentTime;o.type=phase===2?'triangle':'sine';o.frequency.value=base;o.detune.value=(phase-2)*4;lfo.frequency.value=.018+phase*.011;depth.gain.value=1.2+phase*.8;lfo.connect(depth).connect(o.detune);p.pan.value=(phase-2)*.28;g.gain.setValueAtTime(.0001,t);g.gain.linearRampToValueAtTime(.0045+phase*.0015,t+5);o.connect(g).connect(p).connect(filters[0]);o.start();lfo.start();sources.push(o,lfo);trackNode(g,p,depth);evolutionVoiceGains[phase]=g}
function applyEvolutionAudio(){if(!audioCtx)return;layerGains.forEach((g,i)=>g?.gain?.setTargetAtTime(targetLayerGain(i),audioCtx.currentTime,.8));applyEq()}
function setEvolutionPhase(phase,announce=true){phase=Math.max(0,Math.min(3,phase));if(phase===evolutionPhase&&document.body.dataset.evolution===String(phase)){updateEvolutionReadout(playing?(Date.now()-evolutionStartedAt)/1000:0);return}evolutionPhase=phase;document.body.dataset.evolution=String(phase);applyEvolutionAudio();if(phase>0&&playing){if(settings.hybrid!==false)startHybridLayer(current);addEvolutionVoice(phase);if(announce){playEvolutionTone(phase);showEvolutionSignal(phase);toast(`WORLD EVOLVED — ${evolutionDefinition().states[phase]}`)}}syncAmbientHud();updateEvolutionReadout(playing?(Date.now()-evolutionStartedAt)/1000:0)}
function updateEvolution(){if(!playing||settings.evolution===false){updateEvolutionReadout(0);return}const elapsed=(Date.now()-evolutionStartedAt)/1000,thresholds=evolutionThresholds();let phase=0;for(let i=thresholds.length-1;i>=0;i--){if(elapsed>=thresholds[i]){phase=i;break}}if(phase!==evolutionPhase)setEvolutionPhase(phase,true);else updateEvolutionReadout(elapsed)}
function startEvolutionCycle(){clearInterval(evolutionTimer);evolutionStartedAt=Date.now();evolutionVoiceGains=[];evolutionPhase=-1;setEvolutionPhase(0,false);updateEvolution();evolutionTimer=setInterval(updateEvolution,1000)}
function stopEvolutionCycle(){clearInterval(evolutionTimer);evolutionTimer=null;evolutionStartedAt=0;evolutionVoiceGains.forEach(g=>{try{g.gain.setTargetAtTime(.0001,audioCtx.currentTime,.25)}catch{}});evolutionVoiceGains=[];evolutionPhase=0;document.body.dataset.evolution='0';updateEvolutionReadout(0)}

const HYBRID_SAMPLE_FILES={forest:'sample-forest.wav',rain:'sample-rain.wav',ocean:'sample-ocean.wav',radio:'sample-radio.wav',wood:'sample-wood.wav',bell:'sample-bell.wav',bamboo:'sample-bamboo.wav'};
function updateHybridStatus(text){const el=$('#audioEngineLabel');if(el)el.textContent=text}
async function loadSampleBank(){
  if(sampleLoadPromise)return sampleLoadPromise;
  updateHybridStatus('LOADING SAMPLE BANK');
  sampleLoadPromise=Promise.all(Object.entries(HYBRID_SAMPLE_FILES).map(async([key,url])=>{
    try{const response=await fetch(url);if(!response.ok)throw new Error(`${response.status}`);const data=await response.arrayBuffer();sampleBuffers[key]=await audioCtx.decodeAudioData(data)}catch(error){console.warn('Hybrid sample unavailable',key,error)}
  })).then(()=>{const count=Object.keys(sampleBuffers).length;updateHybridStatus(count?`HYBRID AUDIO · ${count}/7`:'WEB AUDIO FALLBACK');return sampleBuffers});
  return sampleLoadPromise;
}
function stopHybridLayer(){
  hybridGeneration++;
  hybridTimers.forEach(clearTimeout);hybridTimers=[];
  hybridSources.forEach(source=>{try{source.stop()}catch{}try{source.disconnect()}catch{}});hybridSources=[];
  hybridNodes.forEach(node=>{try{node.disconnect()}catch{}});hybridNodes=[];
}
function sampleDestination(options={}){
  const gain=audioCtx.createGain(),pan=audioCtx.createStereoPanner(),filter=audioCtx.createBiquadFilter();
  gain.gain.value=options.gain??.02;pan.pan.value=options.pan??0;filter.type=options.filterType||'lowpass';filter.frequency.value=options.frequency||12000;filter.Q.value=options.q||.2;
  filter.connect(gain).connect(pan).connect(filters[0]);hybridNodes.push(filter,gain,pan);return {filter,gain,pan};
}
function playHybridSample(name,options={}){
  const buffer=sampleBuffers[name];if(!buffer||!audioCtx||!playing)return null;
  const source=audioCtx.createBufferSource(),route=sampleDestination(options);source.buffer=buffer;source.loop=!!options.loop;source.playbackRate.value=options.rate||1;source.detune.value=options.detune||0;source.connect(route.filter);
  const offset=source.loop?Math.random()*Math.max(.01,buffer.duration-.05):0;source.start(audioCtx.currentTime+(options.delay||0),offset);hybridSources.push(source);
  if(!source.loop)source.onended=()=>{hybridSources=hybridSources.filter(s=>s!==source);try{source.disconnect()}catch{}try{route.filter.disconnect();route.gain.disconnect();route.pan.disconnect()}catch{}};
  return source;
}
function scheduleHybridOneShot(name,minSeconds,maxSeconds,options={}){
  const generation=hybridGeneration;
  const fire=()=>{
    if(generation!==hybridGeneration||!playing||settings.hybrid===false)return;
    playHybridSample(name,{...options,pan:(options.randomPan?((Math.random()-.5)*(options.randomPan*2)):(options.pan||0)),rate:(options.rate||1)*(options.rateVariation?1+(Math.random()-.5)*options.rateVariation:1)});
    const delay=(minSeconds+Math.random()*(maxSeconds-minSeconds))*1000;hybridTimers.push(setTimeout(fire,delay));
  };
  hybridTimers.push(setTimeout(fire,(options.firstDelay??minSeconds*.5)*1000));
}
async function startHybridLayer(worldIndex=current){
  stopHybridLayer();if(settings.hybrid===false){updateHybridStatus('WEB AUDIO');return}
  const generation=hybridGeneration;await loadSampleBank();if(generation!==hybridGeneration||!playing||worldIndex!==current)return;
  const evolutionBoost=1+Math.max(0,evolutionPhase)*.08;
  if(worldIndex===0){playHybridSample('radio',{loop:true,gain:.009*evolutionBoost,filterType:'bandpass',frequency:1050,q:.7,rate:.72,pan:.16});playHybridSample('forest',{loop:true,gain:.0045,filterType:'lowpass',frequency:430,rate:.58,pan:-.22})}
  else if(worldIndex===1){playHybridSample('ocean',{loop:true,gain:.026*evolutionBoost,filterType:'lowpass',frequency:1750,rate:.92});playHybridSample('radio',{loop:true,gain:.0035,filterType:'bandpass',frequency:580,q:1.1,rate:.54,pan:.28})}
  else if(worldIndex===2){playHybridSample('rain',{loop:true,gain:.025*evolutionBoost,filterType:'highpass',frequency:520,rate:1.02});playHybridSample('radio',{loop:true,gain:.004,filterType:'bandpass',frequency:1680,q:.55,rate:.84,pan:-.24})}
  else if(worldIndex===3){playHybridSample('forest',{loop:true,gain:.011,filterType:'lowpass',frequency:1350,rate:.72,pan:-.12});scheduleHybridOneShot('wood',6.5,11.5,{gain:.036*evolutionBoost,filterType:'lowpass',frequency:1850,randomPan:.55,rateVariation:.16,firstDelay:2.4})}
  else if(worldIndex===4){playHybridSample('radio',{loop:true,gain:.0065*evolutionBoost,filterType:'highpass',frequency:1650,rate:.48,pan:.18});playHybridSample('ocean',{loop:true,gain:.0035,filterType:'lowpass',frequency:105,rate:.42,pan:-.25})}
  else if(worldIndex===5){playHybridSample('forest',{loop:true,gain:.004,filterType:'highpass',frequency:2500,rate:.82,pan:-.2});scheduleHybridOneShot('bell',7.5,13.5,{gain:.024*evolutionBoost,filterType:'highpass',frequency:440,randomPan:.65,rateVariation:.12,firstDelay:2.8})}
  else if(worldIndex===6){playHybridSample('forest',{loop:true,gain:.021*evolutionBoost,filterType:'lowpass',frequency:2400,rate:.96,pan:.08});scheduleHybridOneShot('bamboo',10.5,17.5,{gain:.034*evolutionBoost,filterType:'bandpass',frequency:1280,q:.55,randomPan:.46,rateVariation:.18,firstDelay:3.2});scheduleHybridOneShot('wood',7,12.5,{gain:.026,filterType:'lowpass',frequency:1700,randomPan:.55,rateVariation:.14,firstDelay:5.4})}
}

function ensureAudio(){if(audioCtx)return;audioCtx=new (window.AudioContext||window.webkitAudioContext)();master=audioCtx.createGain();analyser=audioCtx.createAnalyser();analyser.fftSize=256;filters=[audioCtx.createBiquadFilter(),audioCtx.createBiquadFilter(),audioCtx.createBiquadFilter()];filters[0].type='lowshelf';filters[0].frequency.value=180;filters[1].type='peaking';filters[1].frequency.value=900;filters[1].Q.value=.8;filters[2].type='highshelf';filters[2].frequency.value=3500;filters[0].connect(filters[1]).connect(filters[2]).connect(analyser).connect(master).connect(audioCtx.destination);master.gain.value=effectiveVolume();applyEq();applyPerformanceProfile('audio context');drawVisualizer();}
function makeNoise(color='brown',seconds=3){const len=audioCtx.sampleRate*seconds,b=audioCtx.createBuffer(1,len,audioCtx.sampleRate),d=b.getChannelData(0);let last=0;for(let i=0;i<len;i++){const white=Math.random()*2-1;if(color==='brown'){last=(last+.02*white)/1.02;d[i]=last*3.5}else if(color==='pink'){last=.98*last+.02*white;d[i]=last*.8}else d[i]=white*.25}const s=audioCtx.createBufferSource();s.buffer=b;s.loop=true;return s}
function makeImpulse(seconds=4,decay=3.2){const len=audioCtx.sampleRate*seconds,b=audioCtx.createBuffer(2,len,audioCtx.sampleRate);for(let c=0;c<2;c++){const d=b.getChannelData(c);for(let i=0;i<len;i++)d[i]=(Math.random()*2-1)*Math.pow(1-i/len,decay)}return b}
function trackNode(...nodes){engineNodes.push(...nodes);return nodes[nodes.length-1]}
function createBlackSun(){
  const now=audioCtx.currentTime;
  const bus=audioCtx.createGain(),compressor=audioCtx.createDynamicsCompressor(),reverb=audioCtx.createConvolver(),dry=audioCtx.createGain(),wet=audioCtx.createGain();
  bus.gain.setValueAtTime(0,now);bus.gain.linearRampToValueAtTime(1,now+2.8);reverb.buffer=makeImpulse(5.5,3.8);dry.gain.value=.72;wet.gain.value=.32;
  bus.connect(dry).connect(compressor);bus.connect(reverb).connect(wet).connect(compressor);compressor.connect(filters[0]);trackNode(bus,compressor,reverb,dry,wet);

  // Layer 1 — solar drone: three detuned voices moving almost imperceptibly.
  const droneGain=audioCtx.createGain();droneGain.gain.value=(state.layers[0]??.45)*.17;droneGain.connect(bus);layerGains[0]=droneGain;trackNode(droneGain);
  [36.71,55,73.42].forEach((freq,i)=>{const o=audioCtx.createOscillator(),g=audioCtx.createGain(),pan=audioCtx.createStereoPanner(),lfo=audioCtx.createOscillator(),lfoGain=audioCtx.createGain();o.type=i===1?'triangle':'sine';o.frequency.value=freq;o.detune.value=[-7,0,5][i];g.gain.value=[.7,.42,.22][i];pan.pan.value=[-.55,0,.55][i];lfo.frequency.value=[.017,.023,.031][i];lfoGain.gain.value=[.6,.8,1.2][i];lfo.connect(lfoGain).connect(o.detune);o.connect(g).connect(pan).connect(droneGain);o.start();lfo.start();sources.push(o,lfo);trackNode(g,pan,lfoGain)});

  // Layer 2 — dead horizon pulse: a slow heartbeat filtered into the drone.
  const pulseGain=audioCtx.createGain(),pulseOsc=audioCtx.createOscillator(),pulseFilter=audioCtx.createBiquadFilter(),pulseLfo=audioCtx.createOscillator(),pulseShape=audioCtx.createGain();
  pulseGain.gain.value=(state.layers[1]??.28)*.2;pulseOsc.type='sine';pulseOsc.frequency.value=27.5;pulseFilter.type='lowpass';pulseFilter.frequency.value=145;pulseFilter.Q.value=2.4;pulseLfo.type='sine';pulseLfo.frequency.value=WORLDS[0].bpm/60/2;pulseShape.gain.value=.13;pulseLfo.connect(pulseShape).connect(pulseGain.gain);pulseOsc.connect(pulseFilter).connect(pulseGain).connect(bus);pulseOsc.start();pulseLfo.start();sources.push(pulseOsc,pulseLfo);layerGains[1]=pulseGain;trackNode(pulseGain,pulseFilter,pulseShape);

  // Layer 3 — ghost transmission: band-limited radio dust with rare distant tones.
  const ghostGain=audioCtx.createGain(),radio=makeNoise('pink',5),radioFilter=audioCtx.createBiquadFilter(),radioPan=audioCtx.createStereoPanner();ghostGain.gain.value=(state.layers[2]??.22)*.12;radioFilter.type='bandpass';radioFilter.frequency.value=1180;radioFilter.Q.value=.72;radioPan.pan.value=.18;radio.connect(radioFilter).connect(radioPan).connect(ghostGain).connect(bus);radio.start();noiseNodes.push(radio);layerGains[2]=ghostGain;trackNode(ghostGain,radioFilter,radioPan);
  const whisper=()=>{if(!playing||current!==0)return;const o=audioCtx.createOscillator(),g=audioCtx.createGain(),p=audioCtx.createStereoPanner(),t=audioCtx.currentTime,dur=5+Math.random()*4;o.type='sine';o.frequency.value=[164.81,196,220][Math.floor(Math.random()*3)];o.detune.value=(Math.random()-.5)*18;p.pan.value=(Math.random()-.5)*1.4;g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(.012*(state.layers[2]??.22),t+1.8);g.gain.exponentialRampToValueAtTime(.0001,t+dur);o.connect(g).connect(p).connect(reverb);o.start(t);o.stop(t+dur+.1);trackNode(o,g,p)};
  whisper();engineTimers.push(setInterval(whisper,9000));
}

function createCrimsonRain(){
  const now=audioCtx.currentTime;
  const bus=audioCtx.createGain(),compressor=audioCtx.createDynamicsCompressor(),reverb=audioCtx.createConvolver(),dry=audioCtx.createGain(),wet=audioCtx.createGain();
  bus.gain.setValueAtTime(0,now);bus.gain.linearRampToValueAtTime(1,now+3.2);reverb.buffer=makeImpulse(4.8,3.1);dry.gain.value=.78;wet.gain.value=.3;
  bus.connect(dry).connect(compressor);bus.connect(reverb).connect(wet).connect(compressor);compressor.connect(filters[0]);trackNode(bus,compressor,reverb,dry,wet);

  // Layer 1 — midnight current: warm bass and a slow glassy chord breathing together.
  const currentGain=audioCtx.createGain();currentGain.gain.value=(state.layers[0]??.45)*.12;currentGain.connect(bus);layerGains[0]=currentGain;trackNode(currentGain);
  [49,73.42,98,146.83].forEach((freq,i)=>{const o=audioCtx.createOscillator(),g=audioCtx.createGain(),p=audioCtx.createStereoPanner(),lfo=audioCtx.createOscillator(),depth=audioCtx.createGain();o.type=i<2?'triangle':'sine';o.frequency.value=freq;o.detune.value=[-5,3,-8,6][i];g.gain.value=[.7,.34,.16,.09][i];p.pan.value=[-.18,.22,-.62,.62][i];lfo.frequency.value=[.025,.033,.041,.052][i];depth.gain.value=[1.1,.8,1.7,2.1][i];lfo.connect(depth).connect(o.detune);o.connect(g).connect(p).connect(currentGain);o.start();lfo.start();sources.push(o,lfo);trackNode(g,p,depth)});

  // Layer 2 — crimson rain: filtered rainfall with tiny stereo droplets.
  const rainGain=audioCtx.createGain(),rain=makeNoise('white',7),rainHP=audioCtx.createBiquadFilter(),rainLP=audioCtx.createBiquadFilter(),rainPan=audioCtx.createStereoPanner();
  rainGain.gain.value=(state.layers[1]??.28)*.16;rainHP.type='highpass';rainHP.frequency.value=950;rainLP.type='lowpass';rainLP.frequency.value=6200;rainPan.pan.value=-.08;rain.connect(rainHP).connect(rainLP).connect(rainPan).connect(rainGain).connect(bus);rain.start();noiseNodes.push(rain);layerGains[1]=rainGain;trackNode(rainGain,rainHP,rainLP,rainPan);
  const drop=()=>{if(!playing||current!==2)return;const o=audioCtx.createOscillator(),g=audioCtx.createGain(),p=audioCtx.createStereoPanner(),t=audioCtx.currentTime,d=.12+Math.random()*.22;o.type='sine';o.frequency.setValueAtTime(1100+Math.random()*2400,t);o.frequency.exponentialRampToValueAtTime(260+Math.random()*350,t+d);p.pan.value=(Math.random()-.5)*1.7;g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(.025*(state.layers[1]??.28),t+.015);g.gain.exponentialRampToValueAtTime(.0001,t+d);o.connect(g).connect(p).connect(reverb);o.start(t);o.stop(t+d+.04);trackNode(o,g,p)};
  engineTimers.push(setInterval(drop,260));

  // Layer 3 — distant city: slow pulse, rail hum and occasional far-away signal.
  const cityGain=audioCtx.createGain(),pulse=audioCtx.createOscillator(),pulseFilter=audioCtx.createBiquadFilter(),pulseLfo=audioCtx.createOscillator(),pulseDepth=audioCtx.createGain();
  cityGain.gain.value=(state.layers[2]??.22)*.11;pulse.type='sawtooth';pulse.frequency.value=36.71;pulseFilter.type='lowpass';pulseFilter.frequency.value=240;pulseFilter.Q.value=1.4;pulseLfo.type='square';pulseLfo.frequency.value=WORLDS[2].bpm/60/4;pulseDepth.gain.value=.045;pulseLfo.connect(pulseDepth).connect(cityGain.gain);pulse.connect(pulseFilter).connect(cityGain).connect(bus);pulse.start();pulseLfo.start();sources.push(pulse,pulseLfo);layerGains[2]=cityGain;trackNode(cityGain,pulseFilter,pulseDepth);
  const signal=()=>{if(!playing||current!==2)return;const o=audioCtx.createOscillator(),g=audioCtx.createGain(),p=audioCtx.createStereoPanner(),t=audioCtx.currentTime,d=2.8+Math.random()*2;o.type='sine';o.frequency.value=[293.66,329.63,440][Math.floor(Math.random()*3)];p.pan.value=(Math.random()-.5)*1.2;g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(.014*(state.layers[2]??.22),t+.7);g.gain.exponentialRampToValueAtTime(.0001,t+d);o.connect(g).connect(p).connect(reverb);o.start(t);o.stop(t+d+.1);trackNode(o,g,p)};
  engineTimers.push(setInterval(signal,7800));
}

function createAquatoc(){
  const now=audioCtx.currentTime;
  const bus=audioCtx.createGain(),compressor=audioCtx.createDynamicsCompressor(),reverb=audioCtx.createConvolver(),dry=audioCtx.createGain(),wet=audioCtx.createGain(),pressure=audioCtx.createBiquadFilter();
  bus.gain.setValueAtTime(0,now);bus.gain.linearRampToValueAtTime(1,now+3.6);reverb.buffer=makeImpulse(6.4,4.4);dry.gain.value=.7;wet.gain.value=.38;pressure.type='lowpass';pressure.frequency.value=1320;pressure.Q.value=.7;
  bus.connect(dry).connect(pressure);bus.connect(reverb).connect(wet).connect(pressure);pressure.connect(compressor).connect(filters[0]);trackNode(bus,compressor,reverb,dry,wet,pressure);

  // Layer 1 — deep current: slow, detuned tones under heavy water pressure.
  const currentGain=audioCtx.createGain();currentGain.gain.value=(state.layers[0]??.45)*.15;currentGain.connect(bus);layerGains[0]=currentGain;trackNode(currentGain);
  [32.7,43.65,65.41].forEach((freq,i)=>{const o=audioCtx.createOscillator(),g=audioCtx.createGain(),p=audioCtx.createStereoPanner(),lfo=audioCtx.createOscillator(),depth=audioCtx.createGain();o.type=i===1?'triangle':'sine';o.frequency.value=freq;o.detune.value=[-9,0,7][i];g.gain.value=[.72,.45,.2][i];p.pan.value=[-.5,.05,.5][i];lfo.frequency.value=[.011,.017,.024][i];depth.gain.value=[1.4,.9,1.8][i];lfo.connect(depth).connect(o.detune);o.connect(g).connect(p).connect(currentGain);o.start();lfo.start();sources.push(o,lfo);trackNode(g,p,depth)});

  // Layer 2 — sonar ghost: distant pings with long tails and stereo drift.
  const sonarGain=audioCtx.createGain();sonarGain.gain.value=(state.layers[1]??.28)*.14;sonarGain.connect(bus);layerGains[1]=sonarGain;trackNode(sonarGain);
  const ping=()=>{if(!playing||current!==1)return;const o=audioCtx.createOscillator(),g=audioCtx.createGain(),p=audioCtx.createStereoPanner(),t=audioCtx.currentTime,d=3.8+Math.random()*2.6;o.type='sine';o.frequency.setValueAtTime([523.25,659.25,783.99][Math.floor(Math.random()*3)],t);o.frequency.exponentialRampToValueAtTime(180+Math.random()*90,t+d);p.pan.value=(Math.random()-.5)*1.5;g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(.065*(state.layers[1]??.28),t+.04);g.gain.exponentialRampToValueAtTime(.0001,t+d);o.connect(g).connect(p).connect(reverb);o.start(t);o.stop(t+d+.1);trackNode(o,g,p)};
  ping();engineTimers.push(setInterval(ping,6200));

  // Layer 3 — metal tide: submerged machinery, filtered turbulence and slow resonance.
  const metalGain=audioCtx.createGain(),turbulence=makeNoise('brown',8),hp=audioCtx.createBiquadFilter(),lp=audioCtx.createBiquadFilter(),res=audioCtx.createBiquadFilter(),pan=audioCtx.createStereoPanner();
  metalGain.gain.value=(state.layers[2]??.22)*.11;hp.type='highpass';hp.frequency.value=55;lp.type='lowpass';lp.frequency.value=780;res.type='peaking';res.frequency.value=210;res.Q.value=5;res.gain.value=8;pan.pan.value=.12;turbulence.connect(hp).connect(lp).connect(res).connect(pan).connect(metalGain).connect(bus);turbulence.start();noiseNodes.push(turbulence);layerGains[2]=metalGain;trackNode(metalGain,hp,lp,res,pan);
  const machine=audioCtx.createOscillator(),machineGain=audioCtx.createGain(),machineLfo=audioCtx.createOscillator(),machineDepth=audioCtx.createGain();machine.type='sawtooth';machine.frequency.value=21.8;machineGain.gain.value=.018*(state.layers[2]??.22);machineLfo.frequency.value=.08;machineDepth.gain.value=4;machineLfo.connect(machineDepth).connect(machine.frequency);machine.connect(machineGain).connect(metalGain);machine.start();machineLfo.start();sources.push(machine,machineLfo);trackNode(machineGain,machineDepth);
}

function createMountainBlood(){
  const now=audioCtx.currentTime;
  const bus=audioCtx.createGain(),compressor=audioCtx.createDynamicsCompressor(),reverb=audioCtx.createConvolver(),dry=audioCtx.createGain(),wet=audioCtx.createGain(),warmth=audioCtx.createBiquadFilter();
  bus.gain.setValueAtTime(0,now);bus.gain.linearRampToValueAtTime(1,now+3.6);reverb.buffer=makeImpulse(5.8,3.6);dry.gain.value=.8;wet.gain.value=.34;warmth.type='lowpass';warmth.frequency.value=2600;warmth.Q.value=.5;
  bus.connect(dry).connect(compressor);bus.connect(reverb).connect(wet).connect(compressor);compressor.connect(warmth).connect(filters[0]);trackNode(bus,compressor,reverb,dry,wet,warmth);

  // Layer 1 — mountain wind: broad filtered air moving around a low stone drone.
  const windGain=audioCtx.createGain(),wind=makeNoise('pink',8),windHP=audioCtx.createBiquadFilter(),windLP=audioCtx.createBiquadFilter(),windPan=audioCtx.createStereoPanner(),windLfo=audioCtx.createOscillator(),windDepth=audioCtx.createGain();
  windGain.gain.value=(state.layers[0]??.45)*.14;windHP.type='highpass';windHP.frequency.value=95;windLP.type='lowpass';windLP.frequency.value=1450;windPan.pan.value=-.12;windLfo.frequency.value=.035;windDepth.gain.value=.55;windLfo.connect(windDepth).connect(windPan.pan);wind.connect(windHP).connect(windLP).connect(windPan).connect(windGain).connect(bus);wind.start();windLfo.start();noiseNodes.push(wind);sources.push(windLfo);layerGains[0]=windGain;trackNode(windGain,windHP,windLP,windPan,windDepth);
  [55,82.41].forEach((f,i)=>{const o=audioCtx.createOscillator(),g=audioCtx.createGain(),p=audioCtx.createStereoPanner();o.type=i?'triangle':'sine';o.frequency.value=f;o.detune.value=i?5:-6;g.gain.value=i?.045:.07;p.pan.value=i?.22:-.22;o.connect(g).connect(p).connect(windGain);o.start();sources.push(o);trackNode(g,p)});

  // Layer 2 — string echo: sparse plucked resonances inspired by mountain strings, not a literal folk sample.
  const stringGain=audioCtx.createGain();stringGain.gain.value=(state.layers[1]??.28)*.12;stringGain.connect(bus);layerGains[1]=stringGain;trackNode(stringGain);
  const pluck=()=>{if(!playing||current!==3)return;const t=audioCtx.currentTime;const root=[146.83,164.81,196,220][Math.floor(Math.random()*4)];[1,1.5,2].forEach((ratio,j)=>{const o=audioCtx.createOscillator(),g=audioCtx.createGain(),f=audioCtx.createBiquadFilter(),p=audioCtx.createStereoPanner(),d=.9+j*.45;o.type=j===0?'triangle':'sine';o.frequency.setValueAtTime(root*ratio,t);o.frequency.exponentialRampToValueAtTime(root*ratio*.985,t+d);f.type='bandpass';f.frequency.value=root*ratio*1.4;f.Q.value=2.2;p.pan.value=(Math.random()-.5)*1.25;g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime((.055/(j+1))*(state.layers[1]??.28),t+.018);g.gain.exponentialRampToValueAtTime(.0001,t+d);o.connect(f).connect(g).connect(p).connect(reverb);o.start(t);o.stop(t+d+.08);trackNode(o,g,f,p)});};
  pluck();engineTimers.push(setInterval(pluck,3400));

  // Layer 3 — fire circle: frame-drum heartbeat, ember crackle and ritual low pulse.
  const fireGain=audioCtx.createGain();fireGain.gain.value=(state.layers[2]??.22)*.13;fireGain.connect(bus);layerGains[2]=fireGain;trackNode(fireGain);
  const beat=()=>{if(!playing||current!==3)return;const t=audioCtx.currentTime,o=audioCtx.createOscillator(),g=audioCtx.createGain(),f=audioCtx.createBiquadFilter();o.type='sine';o.frequency.setValueAtTime(92,t);o.frequency.exponentialRampToValueAtTime(42,t+.42);f.type='lowpass';f.frequency.value=180;g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(.18*(state.layers[2]??.22),t+.015);g.gain.exponentialRampToValueAtTime(.0001,t+.48);o.connect(f).connect(g).connect(fireGain);o.start(t);o.stop(t+.52);trackNode(o,g,f)};
  beat();engineTimers.push(setInterval(beat,60000/WORLDS[3].bpm));
  const embers=makeNoise('white',4),emberHP=audioCtx.createBiquadFilter(),emberGain=audioCtx.createGain();emberHP.type='highpass';emberHP.frequency.value=3200;emberGain.gain.value=.018*(state.layers[2]??.22);embers.connect(emberHP).connect(emberGain).connect(reverb);embers.start();noiseNodes.push(embers);trackNode(emberHP,emberGain);
}

function createStarlessVoid(){
  const now=audioCtx.currentTime;
  const bus=audioCtx.createGain(),compressor=audioCtx.createDynamicsCompressor(),reverb=audioCtx.createConvolver(),dry=audioCtx.createGain(),wet=audioCtx.createGain();
  bus.gain.setValueAtTime(0,now);bus.gain.linearRampToValueAtTime(1,now+4.2);reverb.buffer=makeImpulse(8.5,4.7);dry.gain.value=.62;wet.gain.value=.48;
  compressor.threshold.value=-24;compressor.knee.value=18;compressor.ratio.value=3;bus.connect(dry).connect(compressor);bus.connect(reverb).connect(wet).connect(compressor);compressor.connect(filters[0]);trackNode(bus,compressor,reverb,dry,wet);

  // Layer 1 — ion cloud: weightless harmonic fog with extremely slow orbital drift.
  const ionGain=audioCtx.createGain();ionGain.gain.value=(state.layers[0]??.45)*.11;ionGain.connect(bus);layerGains[0]=ionGain;trackNode(ionGain);
  [27.5,41.2,55,82.4].forEach((freq,i)=>{const o=audioCtx.createOscillator(),g=audioCtx.createGain(),p=audioCtx.createStereoPanner(),lfo=audioCtx.createOscillator(),lg=audioCtx.createGain();o.type=i<2?'sine':'triangle';o.frequency.value=freq;o.detune.value=[-8,4,-3,7][i];g.gain.value=[.7,.34,.17,.08][i];p.pan.value=[-.7,.35,-.18,.68][i];lfo.frequency.value=[.009,.013,.017,.021][i];lg.gain.value=[.4,.7,1.1,1.5][i];lfo.connect(lg).connect(o.detune);o.connect(g).connect(p).connect(ionGain);o.start();lfo.start();sources.push(o,lfo);trackNode(g,p,lg)});

  // Layer 2 — dark matter: sub-bass gravity pulses that appear and vanish rather than beat.
  const darkGain=audioCtx.createGain();darkGain.gain.value=(state.layers[1]??.28)*.055;darkGain.connect(bus);layerGains[1]=darkGain;trackNode(darkGain);
  const gravity=()=>{if(!playing||current!==4)return;const t=audioCtx.currentTime,o=audioCtx.createOscillator(),g=audioCtx.createGain(),f=audioCtx.createBiquadFilter(),p=audioCtx.createStereoPanner(),dur=7+Math.random()*5;o.type='sine';o.frequency.setValueAtTime([24.5,27.5,30.87][Math.floor(Math.random()*3)],t);o.frequency.exponentialRampToValueAtTime(19.5,t+dur);f.type='lowpass';f.frequency.value=95;f.Q.value=1.4;p.pan.value=(Math.random()-.5)*.8;g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(.13*(state.layers[1]??.28),t+2.2);g.gain.exponentialRampToValueAtTime(.0001,t+dur);o.connect(f).connect(g).connect(p).connect(reverb);o.start(t);o.stop(t+dur+.2);trackNode(o,g,f,p)};
  gravity();engineTimers.push(setInterval(gravity,11500));

  // Layer 3 — pilot memory: quiet radio fragments, distant beacons and stellar dust.
  const memoryGain=audioCtx.createGain();memoryGain.gain.value=(state.layers[2]??.22)*.035;memoryGain.connect(bus);layerGains[2]=memoryGain;trackNode(memoryGain);
  const dust=makeNoise('pink',6),dustFilter=audioCtx.createBiquadFilter(),dustPan=audioCtx.createStereoPanner();dustFilter.type='bandpass';dustFilter.frequency.value=2100;dustFilter.Q.value=.42;dustPan.pan.value=-.12;dust.connect(dustFilter).connect(dustPan).connect(memoryGain);dust.start();noiseNodes.push(dust);trackNode(dustFilter,dustPan);
  const beacon=()=>{if(!playing||current!==4)return;const t=audioCtx.currentTime,base=[246.94,293.66,369.99,440][Math.floor(Math.random()*4)];[0,.72,1.55].forEach((delay,j)=>{const o=audioCtx.createOscillator(),g=audioCtx.createGain(),p=audioCtx.createStereoPanner(),start=t+delay,dur=1.8+j*.45;o.type='sine';o.frequency.value=base*(j===2?1.5:1);p.pan.value=[-.65,.18,.7][j];g.gain.setValueAtTime(.0001,start);g.gain.exponentialRampToValueAtTime(.018*(state.layers[2]??.22)/(j+1),start+.12);g.gain.exponentialRampToValueAtTime(.0001,start+dur);o.connect(g).connect(p).connect(reverb);o.start(start);o.stop(start+dur+.1);trackNode(o,g,p)});};
  beacon();engineTimers.push(setInterval(beacon,13700));
}


function createCelestialVeil(){
  const now=audioCtx.currentTime;
  const bus=audioCtx.createGain(),compressor=audioCtx.createDynamicsCompressor(),reverb=audioCtx.createConvolver(),dry=audioCtx.createGain(),wet=audioCtx.createGain(),shimmer=audioCtx.createBiquadFilter();
  bus.gain.setValueAtTime(0,now);bus.gain.linearRampToValueAtTime(1,now+4.2);reverb.buffer=makeImpulse(8.6,5.2);dry.gain.value=.68;wet.gain.value=.48;shimmer.type='highshelf';shimmer.frequency.value=2400;shimmer.gain.value=4.5;
  bus.connect(dry).connect(compressor);bus.connect(reverb).connect(wet).connect(compressor);compressor.connect(shimmer).connect(filters[0]);trackNode(bus,compressor,reverb,dry,wet,shimmer);

  // Layer 1 — choir veil: soft open intervals breathing like a distant choir.
  const choirGain=audioCtx.createGain();choirGain.gain.value=(state.layers[0]??.45)*.12;choirGain.connect(bus);layerGains[0]=choirGain;trackNode(choirGain);
  [130.81,196,261.63,392].forEach((freq,i)=>{const o=audioCtx.createOscillator(),g=audioCtx.createGain(),p=audioCtx.createStereoPanner(),lfo=audioCtx.createOscillator(),depth=audioCtx.createGain();o.type=i<2?'sine':'triangle';o.frequency.value=freq;o.detune.value=[-4,3,-6,5][i];g.gain.value=[.45,.3,.18,.1][i];p.pan.value=[-.46,.28,-.18,.5][i];lfo.frequency.value=[.08,.06,.04,.03][i];depth.gain.value=[2.5,3.1,2.3,1.9][i];lfo.connect(depth).connect(o.detune);o.connect(g).connect(p).connect(choirGain);o.start();lfo.start();sources.push(o,lfo);trackNode(g,p,depth)});

  // Layer 2 — halo bells: very gentle bell tones with long radiant tails.
  const bellGain=audioCtx.createGain();bellGain.gain.value=(state.layers[1]??.28)*.09;bellGain.connect(bus);layerGains[1]=bellGain;trackNode(bellGain);
  const ringBell=()=>{if(!playing||current!==5)return;const t=audioCtx.currentTime,root=[523.25,587.33,659.25,783.99][Math.floor(Math.random()*4)];[1,2.01,3.76].forEach((ratio,j)=>{const o=audioCtx.createOscillator(),g=audioCtx.createGain(),p=audioCtx.createStereoPanner();o.type='sine';o.frequency.setValueAtTime(root*ratio,t);o.frequency.exponentialRampToValueAtTime((root*ratio)*.995,t+3.8+j*.25);p.pan.value=(Math.random()-.5)*1.3;g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime((.03/(j+1))*(state.layers[1]??.28),t+.03);g.gain.exponentialRampToValueAtTime(.0001,t+4.5+j*.35);o.connect(g).connect(p).connect(reverb);o.start(t);o.stop(t+4.9+j*.4);trackNode(o,g,p)});};
  ringBell();engineTimers.push(setInterval(ringBell,6400));

  // Layer 3 — star shimmer: bright air, glass-light and drifting sparkle.
  const starGain=audioCtx.createGain(),air=makeNoise('white',7),hp=audioCtx.createBiquadFilter(),lp=audioCtx.createBiquadFilter(),pan=audioCtx.createStereoPanner(),lfo=audioCtx.createOscillator(),depth=audioCtx.createGain();
  starGain.gain.value=(state.layers[2]??.22)*.065;hp.type='highpass';hp.frequency.value=2800;lp.type='lowpass';lp.frequency.value=9200;pan.pan.value=.1;lfo.frequency.value=.045;depth.gain.value=.6;lfo.connect(depth).connect(pan.pan);air.connect(hp).connect(lp).connect(pan).connect(starGain).connect(bus);air.start();noiseNodes.push(air);sources.push(lfo);lfo.start();layerGains[2]=starGain;trackNode(starGain,hp,lp,pan,depth);
  const glint=()=>{if(!playing||current!==5)return;const o=audioCtx.createOscillator(),g=audioCtx.createGain(),p=audioCtx.createStereoPanner(),t=audioCtx.currentTime,d=.9+Math.random()*1.4;o.type='triangle';o.frequency.setValueAtTime(1320+Math.random()*900,t);o.frequency.exponentialRampToValueAtTime(760+Math.random()*260,t+d);p.pan.value=(Math.random()-.5)*1.6;g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(.015*(state.layers[2]??.22),t+.02);g.gain.exponentialRampToValueAtTime(.0001,t+d);o.connect(g).connect(p).connect(reverb);o.start(t);o.stop(t+d+.06);trackNode(o,g,p)};
  engineTimers.push(setInterval(glint,1700));
}


function createSunrootVale(){
  const now=audioCtx.currentTime;
  const bus=audioCtx.createGain(),compressor=audioCtx.createDynamicsCompressor(),reverb=audioCtx.createConvolver(),dry=audioCtx.createGain(),wet=audioCtx.createGain(),tone=audioCtx.createBiquadFilter();
  bus.gain.setValueAtTime(0,now);bus.gain.linearRampToValueAtTime(1,now+3.8);reverb.buffer=makeImpulse(7.8,4.2);dry.gain.value=.7;wet.gain.value=.42;tone.type='peaking';tone.frequency.value=1700;tone.Q.value=.5;tone.gain.value=2.6;
  bus.connect(dry).connect(compressor);bus.connect(reverb).connect(wet).connect(compressor);compressor.connect(tone).connect(filters[0]);trackNode(bus,compressor,reverb,dry,wet,tone);

  // Forest Breath: wind in the canopy, leaf noise, rooted low drone.
  const forestGain=audioCtx.createGain();forestGain.gain.value=(state.layers[0]??.45)*.12;forestGain.connect(bus);layerGains[0]=forestGain;trackNode(forestGain);
  const wind=makeNoise('pink',7.5),hp=audioCtx.createBiquadFilter(),lp=audioCtx.createBiquadFilter(),pan=audioCtx.createStereoPanner(),lfo=audioCtx.createOscillator(),depth=audioCtx.createGain();
  hp.type='highpass';hp.frequency.value=180;lp.type='lowpass';lp.frequency.value=2400;pan.pan.value=.12;lfo.frequency.value=.038;depth.gain.value=.55;lfo.connect(depth).connect(pan.pan);wind.connect(hp).connect(lp).connect(pan).connect(forestGain);wind.start();noiseNodes.push(wind);sources.push(lfo);lfo.start();trackNode(hp,lp,pan,depth);
  [98,146.83].forEach((freq,i)=>{const o=audioCtx.createOscillator(),g=audioCtx.createGain(),p=audioCtx.createStereoPanner(),l=audioCtx.createOscillator(),d=audioCtx.createGain();o.type=i? 'triangle':'sine';o.frequency.value=freq;o.detune.value=i?3:-5;g.gain.value=i?.08:.12;p.pan.value=i?.34:-.28;l.frequency.value=i?.05:.03;d.gain.value=i?3.5:4.2;l.connect(d).connect(o.detune);o.connect(g).connect(p).connect(forestGain);o.start();l.start();sources.push(o,l);trackNode(g,p,d)});

  // Ancient Reed: rough bamboo breath, pitch falls and long silences.
  const reedGain=audioCtx.createGain();reedGain.gain.value=(state.layers[1]??.28)*.105;reedGain.connect(bus);layerGains[1]=reedGain;trackNode(reedGain);
  const reedNotes=[220,246.94,293.66,329.63,392];
  const playReed=()=>{
    if(!playing||current!==6)return;
    const t=audioCtx.currentTime;
    const dur=3.8+Math.random()*2.4;
    const base=reedNotes[Math.floor(Math.random()*reedNotes.length)];
    const osc1=audioCtx.createOscillator(),osc2=audioCtx.createOscillator();
    const tone=audioCtx.createBiquadFilter(),formant=audioCtx.createBiquadFilter(),hp2=audioCtx.createBiquadFilter();
    const g=audioCtx.createGain(),p=audioCtx.createStereoPanner();
    const air=makeNoise('white',dur+1),air2=makeNoise('pink',dur+1),airBand=audioCtx.createBiquadFilter(),airGain=audioCtx.createGain();
    const vib=audioCtx.createOscillator(),vibDepth=audioCtx.createGain(),wander=audioCtx.createOscillator(),wanderDepth=audioCtx.createGain();
    const attackNoise=makeNoise('white',.55),attackBand=audioCtx.createBiquadFilter(),attackGain=audioCtx.createGain();

    osc1.type='sawtooth';osc2.type='triangle';
    osc1.frequency.setValueAtTime(base*1.012,t);
    osc1.frequency.exponentialRampToValueAtTime(base*.965,t+dur*.9);
    osc2.frequency.setValueAtTime(base*.498,t);
    osc2.frequency.exponentialRampToValueAtTime(base*.47,t+dur*.9);
    osc2.detune.value=-7;

    tone.type='lowpass';tone.frequency.value=1150;tone.Q.value=.7;
    formant.type='bandpass';formant.frequency.value=720+Math.random()*260;formant.Q.value=2.8;
    hp2.type='highpass';hp2.frequency.value=160;
    p.pan.value=(Math.random()-.5)*.7;

    vib.frequency.value=4.1+Math.random()*1.7;
    vibDepth.gain.setValueAtTime(0,t);
    vibDepth.gain.linearRampToValueAtTime(8+Math.random()*7,t+dur*.45);
    vibDepth.gain.linearRampToValueAtTime(3,t+dur);
    vib.connect(vibDepth);vibDepth.connect(osc1.detune);vibDepth.connect(osc2.detune);

    wander.frequency.value=.16+Math.random()*.12;
    wanderDepth.gain.value=11+Math.random()*7;
    wander.connect(wanderDepth);wanderDepth.connect(osc1.detune);

    g.gain.setValueAtTime(.0001,t);
    g.gain.linearRampToValueAtTime(.028*(state.layers[1]??.28),t+.18);
    g.gain.linearRampToValueAtTime(.052*(state.layers[1]??.28),t+.65);
    g.gain.setValueAtTime(.05*(state.layers[1]??.28),t+dur*.48);
    g.gain.linearRampToValueAtTime(.026*(state.layers[1]??.28),t+dur*.78);
    g.gain.exponentialRampToValueAtTime(.0001,t+dur);

    airBand.type='bandpass';airBand.frequency.value=1800+Math.random()*700;airBand.Q.value=.75;
    airGain.gain.setValueAtTime(.0001,t);
    airGain.gain.linearRampToValueAtTime(.024*(state.layers[1]??.28),t+.08);
    airGain.gain.linearRampToValueAtTime(.011*(state.layers[1]??.28),t+.7);
    airGain.gain.setValueAtTime(.008*(state.layers[1]??.28),t+dur*.7);
    airGain.gain.exponentialRampToValueAtTime(.0001,t+dur);

    attackBand.type='bandpass';attackBand.frequency.value=2700;attackBand.Q.value=.9;
    attackGain.gain.setValueAtTime(.0001,t);
    attackGain.gain.linearRampToValueAtTime(.035*(state.layers[1]??.28),t+.035);
    attackGain.gain.exponentialRampToValueAtTime(.0001,t+.38);

    osc1.connect(tone);osc2.connect(tone);tone.connect(formant).connect(hp2).connect(g).connect(p).connect(reedGain);
    air.connect(airBand);air2.connect(airBand);airBand.connect(airGain).connect(p).connect(reedGain);
    attackNoise.connect(attackBand).connect(attackGain).connect(p).connect(reedGain);

    osc1.start(t);osc2.start(t);air.start(t);air2.start(t);attackNoise.start(t);vib.start(t);wander.start(t);
    const stop=t+dur+.08;osc1.stop(stop);osc2.stop(stop);air.stop(stop);air2.stop(stop);attackNoise.stop(t+.42);vib.stop(stop);wander.stop(stop);
    trackNode(osc1,osc2,tone,formant,hp2,g,p,air,air2,airBand,airGain,vib,vibDepth,wander,wanderDepth,attackNoise,attackBand,attackGain);
  };
  const scheduleReed=()=>{
    if(!playing||current!==6)return;
    playReed();
    const delay=9000+Math.random()*8000;
    const id=setTimeout(scheduleReed,delay);engineTimers.push(id);
  };
  scheduleReed();

  // Root Resonance: wood / stone ritual pulses, grounded and sparse.
  const rootGain=audioCtx.createGain();rootGain.gain.value=(state.layers[2]??.22)*.085;rootGain.connect(bus);layerGains[2]=rootGain;trackNode(rootGain);
  const rootHit=()=>{if(!playing||current!==6)return;const t=audioCtx.currentTime,base=[82.41,98,110][Math.floor(Math.random()*3)],o=audioCtx.createOscillator(),g=audioCtx.createGain(),p=audioCtx.createStereoPanner(),n=makeNoise('white',1.1),ng=audioCtx.createGain(),bp=audioCtx.createBiquadFilter();o.type='sine';o.frequency.setValueAtTime(base,t);o.frequency.exponentialRampToValueAtTime(base*.58,t+.9);g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(.05*(state.layers[2]??.22),t+.02);g.gain.exponentialRampToValueAtTime(.0001,t+1.2);p.pan.value=(Math.random()-.5)*.5;bp.type='bandpass';bp.frequency.value=760;bp.Q.value=.8;ng.gain.setValueAtTime(.0001,t);ng.gain.linearRampToValueAtTime(.009*(state.layers[2]??.22),t+.01);ng.gain.exponentialRampToValueAtTime(.0001,t+.42);o.connect(g).connect(p).connect(rootGain);n.connect(bp).connect(ng).connect(p).connect(rootGain);o.start(t);o.stop(t+1.25);n.start(t);n.stop(t+.45);trackNode(o,g,p,n,ng,bp)};
  rootHit();engineTimers.push(setInterval(rootHit,4300));
}

function createStandardWorld(){const w=WORLDS[current];w.osc.forEach((freq,i)=>{const o=audioCtx.createOscillator(),g=audioCtx.createGain(),lfo=audioCtx.createOscillator(),lg=audioCtx.createGain();o.type=i===0?'sine':i===1?'triangle':'sine';o.frequency.value=freq;lfo.frequency.value=.04+i*.025;lg.gain.value=freq*.012;lfo.connect(lg).connect(o.frequency);g.gain.value=(state.layers[i]??.3)*[.11,.055,.035][i];o.connect(g).connect(filters[0]);o.start();lfo.start();sources.push(o,lfo);layerGains.push(g);trackNode(g,lg)});const n=makeNoise(current===2?'white':'brown'),ng=audioCtx.createGain(),nf=audioCtx.createBiquadFilter();nf.type='lowpass';nf.frequency.value=current===1?900:current===2?3500:650;ng.gain.value=(state.layers[2]??.2)*.06;n.connect(nf).connect(ng).connect(filters[0]);n.start();noiseNodes.push(n);trackNode(ng,nf)}
function beginTransmissionCycle(){clearInterval(transmissionTimer);transmissionTimer=setInterval(()=>{if(!playing)return;const w=WORLDS[current],list=w.tracks||[w.track];trackIndex=(trackIndex+1)%list.length;const title=$('#nowTitle');title.classList.add('changing');setTimeout(()=>{title.textContent=w.title+' — '+list[trackIndex];title.classList.remove('changing');updateMedia();syncAmbientHud()},320)},45000)}
function startAudio(fromSwitch=false){ensureAudio();audioCtx.resume();sources=[];layerGains=[];noiseNodes=[];engineNodes=[];engineTimers=[];if(!fromSwitch)master.gain.setTargetAtTime(effectiveVolume(),audioCtx.currentTime,.08);if(current===0)createBlackSun();else if(current===1)createAquatoc();else if(current===2)createCrimsonRain();else if(current===3)createMountainBlood();else if(current===4)createStarlessVoid();else if(current===5)createCelestialVeil();else if(current===6)createSunrootVale();else createStandardWorld();createWeatherAudio();if(ritualActive)createRitualAudio();playing=true;startedAt=Date.now();operatorBeginSession();startHybridLayer(current);startFusionAudio();document.body.classList.add('playing');applyListeningMode(false);$('#playIcon').textContent=$('#sleepPlayBtn').textContent='Ⅱ';$('#signalValue').textContent='TRANSMITTING';$('#systemStatus').textContent=WORLDS[current].title+' LIVE';startEvolutionCycle();beginTransmissionCycle();scheduleRareTransmission(!rareTimer);scheduleRareWorldEvent(!rareEventTimer);updateMedia();syncAmbientHud();toast(WORLDS[current].title+' ONLINE');}
function teardownAudio(){destroyRitualAudio();stopFusionAudio();stopHybridLayer();clearInterval(transmissionTimer);clearInterval(evolutionTimer);evolutionTimer=null;engineTimers.forEach(clearInterval);engineTimers=[];[...sources,...noiseNodes].forEach(x=>{try{x.stop()}catch{}});[...engineNodes].forEach(x=>{try{x.disconnect()}catch{}});sources=[];noiseNodes=[];engineNodes=[];layerGains=[];evolutionVoiceGains=[];weatherAudioGain=null;weatherAudioFilter=null;}
function stopAudio(){if(!playing)return;if(ritualActive&&!ritualEnding)endRitual(false,'RITUAL INTERRUPTED');operatorEndSession();playing=false;clearInterval(transmissionTimer);clearTimeout(rareTimer);rareTimer=null;closeRareSignal();clearTimeout(rareEventTimer);rareEventTimer=null;closeRareWorldEvent(true);const finish=()=>{teardownAudio();stopEvolutionCycle();document.body.classList.remove('playing');$('#playIcon').textContent=$('#sleepPlayBtn').textContent='▶';$('#signalValue').textContent='STANDBY';$('#systemStatus').textContent='READY';updateMedia();syncAmbientHud()};if(audioCtx&&master){const now=audioCtx.currentTime;master.gain.cancelScheduledValues(now);master.gain.setValueAtTime(master.gain.value,now);master.gain.linearRampToValueAtTime(.0001,now+.45);setTimeout(()=>{finish();master.gain.value=effectiveVolume()},470)}else finish()}
function toggle(){playing?stopAudio():startAudio()}
function applyEq(){if(!filters.length)return;const offsets=settings.evolution===false?[0,0,0]:[[0,0,0],[.35,.2,.25],[.75,.45,.6],[1.1,.7,1]][evolutionPhase]||[0,0,0],timeOffsets=settings.timeMode===false?[0,0,0]:(TIME_PHASES[currentTimePhase]?.audio||[0,0,0]),modeOffsets=listeningModeConfig().eq||[0,0,0];['bass','mid','treble'].forEach((k,i)=>filters[i].gain.setTargetAtTime(state.eq[k]+offsets[i]+timeOffsets[i]+modeOffsets[i],audioCtx.currentTime,.35))}
function save(){localStorage.srEq=JSON.stringify(state.eq);localStorage.srLayers=JSON.stringify(state.layers);localStorage.srVol=state.volume}
function setTimer(min){clearInterval(timerHandle);$$('[data-min]').forEach(b=>b.classList.toggle('active',+b.dataset.min===min));if(!min){timerEnd=0;$('#timerTitle').textContent='NO TIMER';$('#timerCountdown').textContent=$('#sleepTimerText').textContent='∞';return}timerEnd=Date.now()+min*60000;$('#timerTitle').textContent=min+' MINUTES';timerHandle=setInterval(updateTimer,1000);updateTimer();toast(`SLEEP TIMER ${min} MIN`)}
function updateTimer(){const left=Math.max(0,timerEnd-Date.now()),m=Math.floor(left/60000),s=Math.floor(left%60000/1000),txt=`${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;$('#timerCountdown').textContent=$('#sleepTimerText').textContent=txt;if(left<=0){clearInterval(timerHandle);stopAudio();timerEnd=0;toast('SLEEP PROTOCOL COMPLETE')}}
function updateMedia(){if(!('mediaSession'in navigator))return;const w=WORLDS[current];navigator.mediaSession.metadata=new MediaMetadata({title:(w.tracks?.[trackIndex]||w.track),artist:'Shinra Omega Radio',album:fusionActive?`${w.title} × ${WORLDS[fusionSecondary].title}`:w.title,artwork:[{src:'icon-512.png',sizes:'512x512',type:'image/png'}]});navigator.mediaSession.playbackState=playing?'playing':'paused'}
function drawVisualizer(){
  if(visualizerRunning)return;visualizerRunning=true;
  const c=$('#visualizer'),ctx=c.getContext('2d');let data=new Uint8Array(analyser.frequencyBinCount);
  function frame(now=performance.now()){
    requestAnimationFrame(frame);monitorRuntimeFps(now);if(document.hidden)return;
    visualizerFrame++;const skip=performanceProfile==='battery'?3:performanceProfile==='balanced'?2:1;if(visualizerFrame%skip)return;
    const cap=performanceProfile==='quality'?2:performanceProfile==='balanced'?1.5:1,dpr=Math.min(devicePixelRatio,cap),w=innerWidth,h=innerHeight;
    if(c.width!==Math.round(w*dpr)||c.height!==Math.round(h*dpr)){c.width=Math.round(w*dpr);c.height=Math.round(h*dpr);c.style.width=w+'px';c.style.height=h+'px';ctx.setTransform(dpr,0,0,dpr,0,0)}
    if(data.length!==analyser.frequencyBinCount)data=new Uint8Array(analyser.frequencyBinCount);
    ctx.clearRect(0,0,w,h);analyser.getByteFrequencyData(data);const color=WORLDS[current].color;ctx.strokeStyle=color;ctx.lineWidth=1;ctx.globalAlpha=performanceProfile==='battery'?.48:.7;ctx.beginPath();const step=performanceProfile==='battery'?2:1;
    for(let i=0;i<data.length;i+=step){const x=i/(data.length-1)*w,y=h*.78-(data[i]/255)*h*.24+(Math.sin(i*.5+now*.001)*4);i?ctx.lineTo(x,y):ctx.moveTo(x,y)}ctx.stroke();
    const avg=data.reduce((a,b)=>a+b,0)/data.length;document.body.style.setProperty('--signal',playing?Math.min(1,avg/190).toFixed(3):'0');$('#signalMeter').style.width=(playing?Math.max(8,avg/255*100):4)+'%';$('#reactor').style.transform=`scale(${1+(avg/255)*.045})`;$('#progressBar').style.width=playing?((Date.now()-startedAt)/1000%120)/120*100+'%':'0%';$('#elapsed').textContent=fmt(playing?(Date.now()-startedAt)/1000:0)
  }
  requestAnimationFrame(frame)
}
function fmt(sec){return `${String(Math.floor(sec/60)).padStart(2,'0')}:${String(Math.floor(sec%60)).padStart(2,'0')}`}
function toast(t){const el=$('#toast');el.textContent=t;el.classList.add('show');clearTimeout(el._t);el._t=setTimeout(()=>el.classList.remove('show'),1800)}
function updateMasterControls(){const fav=$('#favoriteBtn'),shuffle=$('#shuffleBtn');if(fav){fav.classList.toggle('active',favorites.has(WORLDS[current].id));fav.textContent=favorites.has(WORLDS[current].id)?'♥':'♡'}if(shuffle)shuffle.classList.toggle('active',shuffleMode)}
function toggleFavorite(){const id=WORLDS[current].id;if(favorites.has(id))favorites.delete(id);else favorites.add(id);localStorage.srFavorites=JSON.stringify([...favorites]);renderWorlds();updateMasterControls();toast(favorites.has(id)?'FAVORITE STORED':'FAVORITE REMOVED')}
function nextWorld(direction=1){if(shuffleMode){let choices=WORLDS.map((_,i)=>i).filter(i=>i!==current);if(favorites.size){const favChoices=choices.filter(i=>favorites.has(WORLDS[i].id));if(favChoices.length)choices=favChoices}selectWorld(choices[Math.floor(Math.random()*choices.length)])}else selectWorld(current+direction)}



function saveOperatorMemory(){localStorage.srOperatorMemory=JSON.stringify(operatorMemory)}
function formatOperatorDuration(ms,compact=false){const total=Math.max(0,Math.floor(ms/1000)),h=Math.floor(total/3600),m=Math.floor(total%3600/60),s=total%60;if(h>0)return compact?`${h}H ${String(m).padStart(2,'0')}M`:`${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;return `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`}
function operatorRank(){const h=operatorMemory.totalMs/3600000;if(h>=40)return'OMEGA WARDEN';if(h>=16)return'WORLDKEEPER';if(h>=6)return'FREQUENCY WALKER';if(h>=1.5)return'SIGNAL PATHFINDER';if(h>=.25)return'SIGNAL LISTENER';return'NEW OPERATOR'}
function operatorTouchWorld(){const w=WORLDS[current],id=w.id,now=Date.now();operatorMemory.visits[id]=(operatorMemory.visits[id]||0)+1;if(!operatorMemory.firstContact[id])operatorMemory.firstContact[id]=now;operatorMemory.lastContact=now;saveOperatorMemory()}
function operatorTick(forceSave=false){if(!playing||!operatorSessionStart||!operatorLastTick)return;const now=Date.now(),delta=Math.max(0,Math.min(now-operatorLastTick,60000));operatorLastTick=now;operatorMemory.totalMs+=delta;const id=WORLDS[current].id;operatorMemory.worldMs[id]=(operatorMemory.worldMs[id]||0)+delta;operatorSaveCounter++;if(forceSave||operatorSaveCounter>=10){operatorSaveCounter=0;saveOperatorMemory()}if(document.body.classList.contains('operator-open'))renderOperatorMemory(false)}
function operatorBeginSession(){const now=Date.now();if(!operatorSessionStart){operatorSessionStart=now;operatorMemory.sessions=(operatorMemory.sessions||0)+1}operatorLastTick=now;operatorTouchWorld();clearInterval(operatorMemoryTimer);operatorMemoryTimer=setInterval(()=>operatorTick(false),1000);saveOperatorMemory()}
function operatorEndSession(){if(!operatorSessionStart)return;operatorTick(true);const duration=Date.now()-operatorSessionStart;operatorMemory.lastSessionMs=duration;operatorMemory.longestMs=Math.max(operatorMemory.longestMs||0,duration);operatorSessionStart=0;operatorLastTick=0;clearInterval(operatorMemoryTimer);operatorMemoryTimer=null;saveOperatorMemory();if(document.body.classList.contains('operator-open'))renderOperatorMemory(false)}
function operatorCurrentSession(){return operatorSessionStart?Date.now()-operatorSessionStart:0}
function operatorFavoriteWorld(){let best=null,bestMs=0;WORLDS.forEach(w=>{const ms=operatorMemory.worldMs[w.id]||0;if(ms>bestMs){best=w;bestMs=ms}});return best?{world:best,ms:bestMs}:null}
function formatContactDate(ts){if(!ts)return'UNCONTACTED';try{return new Intl.DateTimeFormat(lang==='de'?'de-DE':'en-GB',{day:'2-digit',month:'short',year:'numeric'}).format(new Date(ts)).toUpperCase()}catch{return new Date(ts).toLocaleDateString()}}
function renderOperatorMemory(sync=true){if(sync)operatorTick(true);const total=operatorMemory.totalMs||0,currentMs=operatorCurrentSession(),favorite=operatorFavoriteWorld(),maxWorld=Math.max(1,...WORLDS.map(w=>operatorMemory.worldMs[w.id]||0));$('#operatorCallsign').value=operatorMemory.callsign||'SHINRA';$('#operatorRank').textContent=operatorRank();$('#operatorTotal').textContent=formatOperatorDuration(total);$('#operatorCurrent').textContent=formatOperatorDuration(currentMs);$('#operatorLongest').textContent=formatOperatorDuration(operatorMemory.longestMs||0);$('#operatorSessions').textContent=String(operatorMemory.sessions||0).padStart(2,'0');$('#operatorSignals').textContent=`${loreFound.size} / ${allLoreFragments().length}`;$('#operatorFavorite').textContent=favorite?`STRONGEST · ${favorite.world.title}`:'NO SIGNAL YET';$('#operatorWorlds').innerHTML=WORLDS.map(w=>{const ms=operatorMemory.worldMs[w.id]||0,pct=ms/maxWorld*100;return `<article class="operator-world" style="--operator-color:${w.color}"><header><span><small>${w.code.split('/')[0]}</small><strong>${w.title}</strong></span><b>${formatOperatorDuration(ms,true)}</b></header><div><i style="width:${pct}%"></i></div><footer>${operatorMemory.visits[w.id]||0} CONTACT${(operatorMemory.visits[w.id]||0)===1?'':'S'}</footer></article>`}).join('');$('#operatorContacts').innerHTML=WORLDS.map(w=>`<article class="operator-contact ${operatorMemory.firstContact[w.id]?'contacted':''}" style="--operator-color:${w.color}"><i></i><span><small>${w.title}</small><strong>${formatContactDate(operatorMemory.firstContact[w.id])}</strong></span></article>`).join('')}
function openOperatorMemory(){renderOperatorMemory();const el=$('#operatorOverlay');el.classList.add('open');el.setAttribute('aria-hidden','false');document.body.classList.add('operator-open');revealAmbientControls(true)}
function closeOperatorMemory(){const el=$('#operatorOverlay');el.classList.remove('open');el.setAttribute('aria-hidden','true');document.body.classList.remove('operator-open')}
function storeOperatorCallsign(){const clean=($('#operatorCallsign').value||'SHINRA').trim().replace(/[^\p{L}\p{N}_\- ]/gu,'').slice(0,18).toUpperCase()||'SHINRA';operatorMemory.callsign=clean;$('#operatorCallsign').value=clean;saveOperatorMemory();toast(`CALLSIGN ${clean} STORED`)}
function resetOperatorMemory(){if(!confirm('Operator-Hörzeit und Kontaktprotokoll zurücksetzen? Lore und Einstellungen bleiben erhalten.'))return;const wasPlaying=playing;operatorEndSession();operatorMemory={...OPERATOR_MEMORY_DEFAULT,callsign:operatorMemory.callsign||'SHINRA',worldMs:{},visits:{},firstContact:{}};saveOperatorMemory();if(wasPlaying)operatorBeginSession();renderOperatorMemory(false);toast('OPERATOR LOG RESET')}

function allLoreFragments(){return WORLDS.flatMap(w=>(LORE[w.id]?.fragments||[]).map(f=>({...f,worldId:w.id,worldTitle:w.title,worldCode:w.code,color:w.color})))}
function saveLore(){localStorage.srLore=JSON.stringify([...loreFound]);updateLoreCounter()}
function updateLoreCounter(){const total=allLoreFragments().length,count=loreFound.size;const badge=$('#loreCount');if(badge){badge.textContent=count;badge.classList.toggle('has-signals',count>0)}if($('#loreProgress'))$('#loreProgress').textContent=`${count} / ${total} SIGNALS RECOVERED`;if($('#loreProgressBar'))$('#loreProgressBar').style.width=`${total?count/total*100:0}%`}
function renderLoreArchive(){const root=$('#loreArchive');if(!root)return;root.innerHTML=WORLDS.map(w=>{const items=LORE[w.id]?.fragments||[],found=items.filter(f=>loreFound.has(f.id)).length;return `<section class="lore-world" style="--lore-color:${w.color}"><header><span><small>${w.code}</small><strong>${w.title}</strong></span><b>${found}/${items.length}</b></header><div class="lore-fragments">${items.map((f,i)=>loreFound.has(f.id)?`<article class="lore-fragment recovered"><small>SIGNAL ${String(i+1).padStart(2,'0')} · RECOVERED</small><h3>${f.title}</h3><p>${f.text}</p></article>`:`<article class="lore-fragment encrypted"><small>SIGNAL ${String(i+1).padStart(2,'0')} · ENCRYPTED</small><h3>████████</h3><p>Continue listening within this world to recover the transmission.</p></article>`).join('')}</div></section>`}).join('');updateLoreCounter()}
function openLoreArchive(){renderLoreArchive();const el=$('#loreOverlay');el.classList.add('open');el.setAttribute('aria-hidden','false');document.body.classList.add('lore-open');revealAmbientControls(true)}
function closeLoreArchive(){const el=$('#loreOverlay');el.classList.remove('open');el.setAttribute('aria-hidden','true');document.body.classList.remove('lore-open')}
function playRareSignalTone(){if(!audioCtx||audioCtx.state==='closed')return;const t=audioCtx.currentTime,out=audioCtx.createGain(),verb=audioCtx.createConvolver();verb.buffer=makeImpulse(2.8,4.5);out.gain.setValueAtTime(.0001,t);out.gain.exponentialRampToValueAtTime(.16,t+.06);out.gain.exponentialRampToValueAtTime(.0001,t+2.5);out.connect(verb).connect(filters[0]);[523.25,784.88,1046.5].forEach((f,i)=>{const o=audioCtx.createOscillator(),g=audioCtx.createGain();o.type=i===1?'triangle':'sine';o.frequency.setValueAtTime(f,t+i*.13);o.frequency.exponentialRampToValueAtTime(f*.985,t+1.8+i*.13);g.gain.setValueAtTime(.0001,t+i*.13);g.gain.exponentialRampToValueAtTime([.12,.065,.035][i],t+.04+i*.13);g.gain.exponentialRampToValueAtTime(.0001,t+2+i*.13);o.connect(g).connect(out);o.start(t+i*.13);o.stop(t+2.3+i*.13)});setTimeout(()=>{try{out.disconnect();verb.disconnect()}catch{}},3000)}
function closeRareSignal(){rareActive=false;clearTimeout(rareAutoClose);const el=$('#rareSignal');el.classList.remove('show');el.setAttribute('aria-hidden','true');document.body.classList.remove('rare-event')}
function triggerRareTransmission(){if(!playing||!settings.rare||rareActive||document.visibilityState==='hidden'||$('#settingsOverlay')?.classList.contains('open')||$('#sleepOverlay')?.classList.contains('open')||$('#loreOverlay')?.classList.contains('open')){scheduleRareTransmission();return}const w=WORLDS[current],fragments=LORE[w.id]?.fragments||[];if(!fragments.length){scheduleRareTransmission();return}const unseen=fragments.filter(f=>!loreFound.has(f.id)),fragment=(unseen.length?unseen:fragments)[Math.floor(Math.random()*(unseen.length||fragments.length))],isNew=!loreFound.has(fragment.id);if(isNew){loreFound.add(fragment.id);saveLore()}rareActive=true;const panel=$('#rareSignal');panel.style.setProperty('--rare-color',w.color);$('#rareWorld').textContent=w.code;$('#rareTitle').textContent=fragment.title;$('#rareText').textContent=fragment.text;panel.classList.add('show');panel.setAttribute('aria-hidden','false');document.body.classList.add('rare-event');playRareSignalTone();rareAutoClose=setTimeout(closeRareSignal,10000);scheduleRareTransmission();}
function scheduleRareTransmission(first=false){clearTimeout(rareTimer);if(!playing||!settings.rare||listeningMode==='sleep')return;const hasNone=loreFound.size===0,mult=listeningMode==='focus'?1.55:listeningMode==='cinematic'?.78:1;const delay=(first&&hasNone?45000+Math.random()*25000:180000+Math.random()*240000)*mult;rareTimer=setTimeout(triggerRareTransmission,delay)}

function syncAmbientHud(){
  const w=WORLDS[current],track=w.tracks?.[trackIndex]||w.track;
  if($('#ambientCode'))$('#ambientCode').textContent=w.code;
  if($('#ambientTitle'))$('#ambientTitle').textContent=w.title;
  if($('#ambientTrack'))$('#ambientTrack').textContent=track;
  if($('#ambientStatus'))$('#ambientStatus').textContent=playing?'TRANSMITTING':'STANDBY';
  updateEvolutionReadout(playing&&evolutionStartedAt?(Date.now()-evolutionStartedAt)/1000:0);
  if($('#ambientPlayBtn')){$('#ambientPlayBtn').textContent=playing?'Ⅱ':'▶';$('#ambientPlayBtn').setAttribute('aria-label',playing?'Wiedergabe pausieren':'Wiedergabe starten')}
}
function revealAmbientControls(persist=false){
  if(!ambientMode)return;
  document.body.classList.add('ambient-controls-visible');
  clearTimeout(ambientHideTimer);
  if(!persist)ambientHideTimer=setTimeout(()=>{if(ambientMode)document.body.classList.remove('ambient-controls-visible')},4200);
}
async function requestAmbientWakeLock(){
  try{if('wakeLock'in navigator&&!ambientWakeLock){ambientWakeLock=await navigator.wakeLock.request('screen');ambientWakeLock.addEventListener('release',()=>{ambientWakeLock=null})}}catch{}
}
async function releaseAmbientWakeLock(){try{await ambientWakeLock?.release()}catch{}ambientWakeLock=null}
async function enterAmbientMode(){
  if(ambientMode)return;
  ambientMode=true;
  document.body.classList.add('ambient-mode','ambient-controls-visible');
  $('#ambientHud')?.setAttribute('aria-hidden','false');
  syncAmbientHud();revealAmbientControls();requestAmbientWakeLock();
  try{const hero=$('.hero');if(hero?.requestFullscreen&&!document.fullscreenElement)await hero.requestFullscreen({navigationUI:'hide'})}catch{}
  toast('AMBIENT MODE ONLINE');
}
async function exitAmbientMode(){
  if(!ambientMode)return;
  ambientMode=false;clearTimeout(ambientHideTimer);
  document.body.classList.remove('ambient-mode','ambient-controls-visible');
  $('#ambientHud')?.setAttribute('aria-hidden','true');
  await releaseAmbientWakeLock();
  try{if(document.fullscreenElement)await document.exitFullscreen()}catch{}
}
function toggleAmbientMode(){ambientMode?exitAmbientMode():enterAmbientMode()}
function applySettings(){document.body.classList.toggle('motion-reduced',!!settings.reduced);$('#settingIntro').checked=!!settings.intro;$('#settingReduced').checked=!!settings.reduced;$('#settingRemember').checked=!!settings.remember;$('#settingShuffle').checked=!!settings.shuffleStart;$('#settingRare').checked=settings.rare!==false;$('#settingRareEvents').checked=settings.rareEvents!==false;$('#settingEvolution').checked=settings.evolution!==false;$('#settingHybrid').checked=settings.hybrid!==false;$('#settingTimeMode').checked=settings.timeMode!==false;$('#settingWeather').checked=settings.weather!==false;$('#settingRitualStop').checked=settings.ritualStop!==false;$('#settingPerformance').value=settings.performance||'auto';$('#settingTimer').value=String(settings.defaultTimer||0);applyPerformanceProfile('settings sync');updateEvolutionReadout(playing&&evolutionStartedAt?(Date.now()-evolutionStartedAt)/1000:0)}
function openSettings(){applySettings();$('#settingsOverlay').classList.add('open');$('#settingsOverlay').setAttribute('aria-hidden','false')}
function closeSettings(){const el=$('#settingsOverlay');el.classList.remove('open');el.setAttribute('aria-hidden','true')}
function storeSettings(){settings.intro=$('#settingIntro').checked;settings.reduced=$('#settingReduced').checked;settings.remember=$('#settingRemember').checked;settings.shuffleStart=$('#settingShuffle').checked;settings.rare=$('#settingRare').checked;settings.rareEvents=$('#settingRareEvents').checked;settings.evolution=$('#settingEvolution').checked;const hybridWas=settings.hybrid!==false;settings.hybrid=$('#settingHybrid').checked;settings.timeMode=$('#settingTimeMode').checked;const weatherWas=settings.weather!==false;settings.weather=$('#settingWeather').checked;settings.ritualStop=$('#settingRitualStop').checked;settings.performance=$('#settingPerformance').value||'auto';performanceAutoStep=0;settings.defaultTimer=Number($('#settingTimer').value||0);localStorage.srSettings=JSON.stringify(settings);if(!settings.rare){clearTimeout(rareTimer);rareTimer=null;closeRareSignal()}else if(playing)scheduleRareTransmission(!rareTimer);if(!settings.rareEvents){clearTimeout(rareEventTimer);rareEventTimer=null;closeRareWorldEvent(true)}else if(playing)scheduleRareWorldEvent(!rareEventTimer);if(hybridWas!==settings.hybrid&&playing)startHybridLayer(current);if(weatherWas!==settings.weather&&playing){if(settings.weather)createWeatherAudio();else updateWeatherAudio()}updateWeatherUI(true);if(settings.evolution===false){evolutionVoiceGains.forEach(g=>{try{g.gain.setTargetAtTime(.0001,audioCtx.currentTime,.35)}catch{}});evolutionPhase=0;document.body.dataset.evolution='0';applyEvolutionAudio()}else if(playing){evolutionStartedAt=Date.now();startEvolutionCycle()}if(!settings.remember)localStorage.removeItem('srWorld');applyDynamicTime(true);applySettings();closeSettings();toast('SETTINGS STORED')}
function resetAppData(){if(!confirm('Alle gespeicherten Sender, Favoriten, Regler und Einstellungen zurücksetzen?'))return;['srEq','srLayers','srVol','srWorld','srFavorites','srShuffle','srSettings','srIntroSeen','srLore','srEvolutionRecords','srOperatorMemory','srScannerFinds','srRitualHistory','srJourneyHistory'].forEach(k=>localStorage.removeItem(k));location.reload()}

// ===== OMEGA RITUALS 5.6 =====
const RITUAL_PHASES=[
  {id:'awakening',name:'AWAKENING',start:0,end:.18,gain:.032,filter:1300},
  {id:'descent',name:'DESCENT',start:.18,end:.44,gain:.052,filter:920},
  {id:'transmission',name:'TRANSMISSION',start:.44,end:.82,gain:.072,filter:1850},
  {id:'dissolve',name:'DISSOLVE',start:.82,end:1,gain:.018,filter:620}
];
const RITUAL_COPY={
  'black-sun':'A passage beneath the dead horizon and through the silent corona.',
  aquatoc:'A pressure descent into the dreaming machinery below the thermal line.',
  'crimson-rain':'A midnight procession through red rain, glass and electric memory.',
  'mountain-blood':'An ancestral oath carried by stone, wind and ember.',
  'starless-void':'A controlled drift beyond mapped light and into the central gravity well.',
  'celestial-veil':'A luminous ascent through mercy, choir and the opening veil.',
  'sunroot-vale':'A rooted warrior passage beneath cedar, bamboo breath and unbroken sun.'
};
function ritualDurations(){return ritualTestMode?{10:48,20:78,30:108}:{10:600,20:1200,30:1800}}
function formatRitualTime(sec){sec=Math.max(0,Math.ceil(sec));return `${String(Math.floor(sec/60)).padStart(2,'0')}:${String(sec%60).padStart(2,'0')}`}
function saveRitualHistory(){localStorage.srRitualHistory=JSON.stringify(ritualHistory)}
function renderRitualHistory(){const el=$('#ritualHistory');if(el)el.textContent=`${ritualHistory.completed||0} RITUAL${ritualHistory.completed===1?'':'S'} COMPLETED`}
function openRituals(){
  const w=WORLDS[current],overlay=$('#ritualOverlay');if(!overlay)return;
  $('#ritualWorldLabel').textContent=`CURRENT WORLD · ${w.title}`;$('#ritualWorldName').textContent=w.title;$('#ritualWorldText').textContent=RITUAL_COPY[w.id]||'A guided passage through the current world.';
  overlay.style.setProperty('--ritual-color',w.color);overlay.style.setProperty('--ritual-color2',w.color2);renderRitualHistory();
  overlay.classList.add('open');overlay.setAttribute('aria-hidden','false');document.body.classList.add('ritual-open');
}
function closeRituals(){const el=$('#ritualOverlay');if(!el)return;el.classList.remove('open');el.setAttribute('aria-hidden','true');document.body.classList.remove('ritual-open')}
function selectRitualLength(minutes){ritualSelectedMinutes=Number(minutes)||10;$$('.ritual-length').forEach(b=>b.classList.toggle('active',Number(b.dataset.ritualMinutes)===ritualSelectedMinutes));$('#startRitual').textContent=`BEGIN ${ritualSelectedMinutes} MIN RITUAL`}
function createRitualAudio(){
  destroyRitualAudio();if(!audioCtx||!filters[0])return;
  const w=WORLDS[current],now=audioCtx.currentTime,bus=audioCtx.createGain(),tone=audioCtx.createBiquadFilter(),verb=audioCtx.createConvolver(),wet=audioCtx.createGain(),dry=audioCtx.createGain();
  ritualBus=bus;bus.gain.value=.0001;tone.type='lowpass';tone.frequency.value=1300;tone.Q.value=.36;verb.buffer=makeImpulse(6.2,4.4);dry.gain.value=.68;wet.gain.value=.46;
  bus.connect(dry).connect(tone);bus.connect(verb).connect(wet).connect(tone);tone.connect(filters[0]);ritualNodes.push(bus,tone,verb,wet,dry);
  const base=Math.max(42,(w.osc?.[0]||82.4)*.74);
  [base,base*1.5].forEach((freq,i)=>{const o=audioCtx.createOscillator(),g=audioCtx.createGain(),p=audioCtx.createStereoPanner(),lfo=audioCtx.createOscillator(),depth=audioCtx.createGain();o.type=i?'triangle':'sine';o.frequency.value=freq;o.detune.value=i?4:-5;g.gain.value=i?.23:.38;p.pan.value=i?.34:-.28;lfo.frequency.value=i?.047:.031;depth.gain.value=i?3.2:4.8;lfo.connect(depth).connect(o.detune);o.connect(g).connect(p).connect(bus);o.start(now);lfo.start(now);ritualSources.push(o,lfo);ritualNodes.push(g,p,depth)});
  const breath=makeNoise('pink',Math.max(40,ritualDuration+8)),hp=audioCtx.createBiquadFilter(),lp=audioCtx.createBiquadFilter(),bg=audioCtx.createGain();hp.type='highpass';hp.frequency.value=240;lp.type='lowpass';lp.frequency.value=1900;bg.gain.value=.16;breath.connect(hp).connect(lp).connect(bg).connect(bus);breath.start(now);ritualSources.push(breath);ritualNodes.push(hp,lp,bg);
  applyRitualAudioPhase(Math.max(0,ritualPhase),true);
}
function destroyRitualAudio(){ritualSources.forEach(n=>{try{n.stop()}catch{}});ritualNodes.forEach(n=>{try{n.disconnect()}catch{}});ritualSources=[];ritualNodes=[];ritualBus=null}
function applyRitualAudioPhase(index,immediate=false){if(!ritualBus||!audioCtx)return;const phase=RITUAL_PHASES[index]||RITUAL_PHASES[0],t=audioCtx.currentTime;const tone=ritualNodes.find(n=>n&&n.frequency&&n.Q&&n.type==='lowpass');ritualBus.gain.cancelScheduledValues(t);if(immediate)ritualBus.gain.setValueAtTime(phase.gain,t);else ritualBus.gain.setTargetAtTime(phase.gain,t,1.8);if(tone)tone.frequency.setTargetAtTime(phase.filter,t,2.1)}
function playRitualPhaseTone(index){
  if(!audioCtx||!master)return;const w=WORLDS[current],t=audioCtx.currentTime,base=(w.osc?.[1]||146.83)*[.5,.75,1,1.25][index],out=audioCtx.createGain();out.gain.setValueAtTime(.0001,t);out.gain.exponentialRampToValueAtTime(.08,t+.08);out.gain.exponentialRampToValueAtTime(.0001,t+2.8);out.connect(master);
  [1,1.5,2].forEach((r,i)=>{const o=audioCtx.createOscillator(),g=audioCtx.createGain(),p=audioCtx.createStereoPanner();o.type=i===0?'sine':'triangle';o.frequency.setValueAtTime(base*r,t);o.frequency.exponentialRampToValueAtTime(base*r*(index===3?.92:1.012),t+2.5);g.gain.value=[.5,.2,.09][i];p.pan.value=[-.22,.18,.44][i];o.connect(g).connect(p).connect(out);o.start(t+i*.025);o.stop(t+2.9);setTimeout(()=>{try{o.disconnect();g.disconnect();p.disconnect()}catch{}},3100)});
}
function phaseForProgress(progress){return Math.min(RITUAL_PHASES.length-1,RITUAL_PHASES.findIndex(p=>progress>=p.start&&progress<p.end)===-1?RITUAL_PHASES.length-1:RITUAL_PHASES.findIndex(p=>progress>=p.start&&progress<p.end))}
function setRitualPhase(index,announce=true){
  if(index===ritualPhase)return;ritualPhase=index;const phase=RITUAL_PHASES[index];document.body.dataset.ritualPhase=phase.id;$('#ritualHudPhase').textContent=phase.name;applyRitualAudioPhase(index);if(announce&&playing)playRitualPhaseTone(index);if(announce)toast(`RITUAL PHASE · ${phase.name}`)
}
function updateRitual(){
  if(!ritualActive)return;const elapsed=(Date.now()-ritualStartedAt)/1000,progress=Math.min(1,elapsed/ritualDuration),left=ritualDuration-elapsed,index=phaseForProgress(progress);setRitualPhase(index,index!==ritualPhase);
  $('#ritualHudTime').textContent=formatRitualTime(left);$('#ritualHudBar').style.width=`${progress*100}%`;$('#ritualHudWorld').textContent=`${WORLDS[current].title} · ${Math.round(progress*100)}%`;$('#ritualDot').classList.add('active');
  if(progress>=1)completeRitual();
}
function startRitual(){
  if(ritualActive)endRitual(false,'PREVIOUS RITUAL ENDED');ritualDuration=ritualDurations()[ritualSelectedMinutes]||600;ritualStartedAt=Date.now();ritualPhase=-1;ritualActive=true;ritualEnding=false;document.body.classList.add('ritual-active');$('#ritualHud').classList.add('show');$('#ritualHud').setAttribute('aria-hidden','false');$('#ritualHudBar').style.width='0%';$('#ritualHudTime').textContent=formatRitualTime(ritualDuration);closeRituals();
  if(!playing)startAudio();else createRitualAudio();setRitualPhase(0,true);updateRitual();clearInterval(ritualTimer);ritualTimer=setInterval(updateRitual,500);toast(`${ritualSelectedMinutes} MIN RITUAL BEGUN`)
}
function endRitual(completed=false,message='RITUAL ENDED'){
  if(!ritualActive)return;const elapsed=Math.min(ritualDuration,Math.max(0,(Date.now()-ritualStartedAt)/1000));clearInterval(ritualTimer);ritualTimer=null;ritualActive=false;document.body.classList.remove('ritual-active');delete document.body.dataset.ritualPhase;$('#ritualHud').classList.remove('show');$('#ritualHud').setAttribute('aria-hidden','true');$('#ritualDot').classList.remove('active');
  if(ritualBus&&audioCtx){const t=audioCtx.currentTime;try{ritualBus.gain.cancelScheduledValues(t);ritualBus.gain.setValueAtTime(Math.max(.0001,ritualBus.gain.value),t);ritualBus.gain.exponentialRampToValueAtTime(.0001,t+1.5)}catch{}setTimeout(destroyRitualAudio,1650)}else destroyRitualAudio();
  ritualHistory.totalSeconds=(ritualHistory.totalSeconds||0)+elapsed;if(completed)ritualHistory.completed=(ritualHistory.completed||0)+1;saveRitualHistory();renderRitualHistory();ritualPhase=-1;if(message)toast(message)
}
function completeRitual(){
  if(!ritualActive)return;ritualEnding=true;endRitual(true,'OMEGA RITUAL COMPLETE');if(settings.ritualStop!==false&&playing)setTimeout(()=>{stopAudio();ritualEnding=false},900);else ritualEnding=false;
}



// ===== WORLD FUSION 5.9 =====
const FUSION_RECIPES={
  '0-1':['DROWNED ECLIPSE','A dead sun sinking beneath impossible pressure.'],
  '0-2':['SCARLET CORONA','Rain ignites across the edge of a dying horizon.'],
  '0-3':['ASHEN OATH','Stone remembers the heat of the blackened sun.'],
  '0-4':['NULL STAR','The last light collapses into unmapped space.'],
  '0-5':['CROWNED ECLIPSE','Mercy shines around a sun that refuses to rise.'],
  '0-6':['ROOTS OF ASH','Ancient roots hold fast beneath a dead sky.'],
  '1-2':['NEON ABYSS','Red city light descends below the thermal line.'],
  '1-3':['SUBMERGED OATH','Mountain memory echoes through flooded stone.'],
  '1-4':['ABYSS BEYOND','The ocean opens into a sky without stars.'],
  '1-5':['MERCY BELOW','A pale halo moves through the deepest current.'],
  '1-6':['DROWNED CANOPY','Old roots breathe beneath an endless ocean.'],
  '2-3':['BLOOD DISTRICT','Ancestral fire reflects across rain-black streets.'],
  '2-4':['NEON SINGULARITY','The last train enters a gravity well and does not return.'],
  '2-5':['CRIMSON HALO','Sacred light falls through red midnight rain.'],
  '2-6':['SCARLET CANOPY','Rain writes a warrior oath across the leaves.'],
  '3-4':['STONE HORIZON','The mountain stands at the edge of mapped existence.'],
  '3-5':['SACRED EMBER','A celestial choir wakes the fire beneath the ridge.'],
  '3-6':['ROOTED OATH','The warrior path climbs from cedar root to ancient stone.'],
  '4-5':['LUMEN VOID','Heaven opens where no constellation remains.'],
  '4-6':['STARLESS GROVE','The forest grows beyond the last mapped light.'],
  '5-6':['SUNLIT MERCY','The veil parts above an unbroken canopy.']
};
let fusionActive=localStorage.srFusionActive==='1',fusionSecondary=Math.max(0,Math.min(WORLDS.length-1,Number(localStorage.srFusionSecondary||1))),fusionMix=Math.max(.15,Math.min(.55,Number(localStorage.srFusionMix||.32)));
let fusionSources=[],fusionNodes=[],fusionTimers=[],fusionGeneration=0,fusionBus=null;
function fusionPairKey(a=current,b=fusionSecondary){return [a,b].sort((x,y)=>x-y).join('-')}
function fusionRecipe(){return FUSION_RECIPES[fusionPairKey()]||['OMEGA CONVERGENCE','Two forgotten frequencies occupying the same horizon.']}
function ensureFusionSecondary(){if(fusionSecondary===current)fusionSecondary=(current+1)%WORLDS.length;localStorage.srFusionSecondary=String(fusionSecondary)}
function fusionTrackNode(...nodes){fusionNodes.push(...nodes);return nodes[nodes.length-1]}
function stopFusionAudio(){fusionGeneration++;fusionTimers.forEach(clearTimeout);fusionTimers=[];fusionSources.forEach(s=>{try{s.stop()}catch{}try{s.disconnect()}catch{}});fusionSources=[];fusionNodes.forEach(n=>{try{n.disconnect()}catch{}});fusionNodes=[];fusionBus=null}
function fusionSampleRoute(gain=.01,frequency=2200,type='lowpass',pan=0){const f=audioCtx.createBiquadFilter(),g=audioCtx.createGain(),p=audioCtx.createStereoPanner();f.type=type;f.frequency.value=frequency;f.Q.value=.45;g.gain.value=gain;p.pan.value=pan;f.connect(g).connect(p).connect(fusionBus);fusionTrackNode(f,g,p);return f}
function playFusionSample(name,{loop=false,gain=.01,frequency=2200,type='lowpass',pan=0,rate=1,delay=0}={}){const buffer=sampleBuffers[name];if(!buffer||!audioCtx||!playing||!fusionActive)return null;const s=audioCtx.createBufferSource(),route=fusionSampleRoute(gain,frequency,type,pan);s.buffer=buffer;s.loop=loop;s.playbackRate.value=rate;s.connect(route);s.start(audioCtx.currentTime+delay,loop?Math.random()*Math.max(.01,buffer.duration-.05):0);fusionSources.push(s);if(!loop)s.onended=()=>{fusionSources=fusionSources.filter(x=>x!==s)};return s}
function scheduleFusionSample(name,min,max,options={}){const generation=fusionGeneration;const fire=()=>{if(generation!==fusionGeneration||!playing||!fusionActive)return;playFusionSample(name,{...options,pan:(Math.random()-.5)*(options.panSpread||.8),rate:(options.rate||1)*(1+(Math.random()-.5)*(options.rateVariation||.12))});fusionTimers.push(setTimeout(fire,(min+Math.random()*(max-min))*1000))};fusionTimers.push(setTimeout(fire,(options.firstDelay||3)*1000))}
async function startFusionAudio(){stopFusionAudio();ensureFusionSecondary();if(!fusionActive||!playing||fusionSecondary===current||!audioCtx)return;const generation=fusionGeneration,w=WORLDS[fusionSecondary],t=audioCtx.currentTime;fusionBus=audioCtx.createGain();fusionBus.gain.setValueAtTime(.0001,t);fusionBus.gain.linearRampToValueAtTime(fusionMix*.27,t+2.4);fusionBus.connect(filters[0]);fusionTrackNode(fusionBus);
  const base=Math.max(32,Math.min(180,w.osc?.[0]||82.4)),o1=audioCtx.createOscillator(),o2=audioCtx.createOscillator(),g1=audioCtx.createGain(),g2=audioCtx.createGain(),p1=audioCtx.createStereoPanner(),p2=audioCtx.createStereoPanner(),lfo=audioCtx.createOscillator(),depth=audioCtx.createGain();o1.type='sine';o2.type=fusionSecondary===2||fusionSecondary===3?'triangle':'sine';o1.frequency.value=base;o2.frequency.value=base*1.5;o1.detune.value=-7;o2.detune.value=6;g1.gain.value=.095;g2.gain.value=.036;p1.pan.value=-.32;p2.pan.value=.38;lfo.frequency.value=.021+fusionSecondary*.003;depth.gain.value=2.5;lfo.connect(depth).connect(o2.detune);o1.connect(g1).connect(p1).connect(fusionBus);o2.connect(g2).connect(p2).connect(fusionBus);o1.start();o2.start();lfo.start();fusionSources.push(o1,o2,lfo);fusionTrackNode(g1,g2,p1,p2,depth);
  const noise=makeNoise(fusionSecondary===2?'white':fusionSecondary===5?'pink':'brown',6),nf=audioCtx.createBiquadFilter(),ng=audioCtx.createGain(),np=audioCtx.createStereoPanner();nf.type=fusionSecondary===4?'highpass':fusionSecondary===2?'bandpass':'lowpass';nf.frequency.value=[520,1250,2600,900,1900,3300,1800][fusionSecondary]||1200;nf.Q.value=fusionSecondary===2?1.1:.45;ng.gain.value=.025;np.pan.value=.18;noise.connect(nf).connect(ng).connect(np).connect(fusionBus);noise.start();fusionSources.push(noise);fusionTrackNode(nf,ng,np);
  await loadSampleBank();if(generation!==fusionGeneration||!fusionActive||!playing)return;
  if(fusionSecondary===0){playFusionSample('radio',{loop:true,gain:.007,frequency:980,type:'bandpass',rate:.66,pan:.2});playFusionSample('forest',{loop:true,gain:.0035,frequency:380,rate:.55,pan:-.2})}
  else if(fusionSecondary===1){playFusionSample('ocean',{loop:true,gain:.019,frequency:1500,rate:.86});playFusionSample('radio',{loop:true,gain:.003,frequency:620,type:'bandpass',rate:.5,pan:.28})}
  else if(fusionSecondary===2){playFusionSample('rain',{loop:true,gain:.018,frequency:650,type:'highpass',rate:1.04});playFusionSample('radio',{loop:true,gain:.0035,frequency:1700,type:'bandpass',rate:.8,pan:-.25})}
  else if(fusionSecondary===3){playFusionSample('forest',{loop:true,gain:.008,frequency:1200,rate:.7,pan:-.14});scheduleFusionSample('wood',6,10,{gain:.027,frequency:1600,firstDelay:2.2})}
  else if(fusionSecondary===4){playFusionSample('radio',{loop:true,gain:.005,frequency:1800,type:'highpass',rate:.44,pan:.2});playFusionSample('ocean',{loop:true,gain:.0028,frequency:105,rate:.4,pan:-.25})}
  else if(fusionSecondary===5){playFusionSample('forest',{loop:true,gain:.0032,frequency:2700,type:'highpass',rate:.8,pan:-.2});scheduleFusionSample('bell',7,12,{gain:.018,frequency:500,type:'highpass',firstDelay:2.6})}
  else if(fusionSecondary===6){playFusionSample('forest',{loop:true,gain:.014,frequency:2200,rate:.94,pan:.08});scheduleFusionSample('bamboo',9,15,{gain:.023,frequency:1250,type:'bandpass',firstDelay:3.2});scheduleFusionSample('wood',7,12,{gain:.018,frequency:1550,firstDelay:5})}
}
function applyFusionVisuals(){ensureFusionSecondary();const secondary=WORLDS[fusionSecondary],primary=WORLDS[current],active=fusionActive&&fusionSecondary!==current;document.body.classList.toggle('fusion-active',active);document.documentElement.style.setProperty('--fusion-color',secondary.color);document.documentElement.style.setProperty('--fusion-color2',secondary.color2);document.documentElement.style.setProperty('--fusion-glow',hexAlpha(secondary.color,.28));document.documentElement.style.setProperty('--fusion-strength',String(fusionMix));const badge=$('#fusionBadge');if(badge){badge.classList.toggle('show',active);badge.setAttribute('aria-hidden',active?'false':'true');$('#fusionBadgeText').textContent=`${primary.title} × ${secondary.title}`}$(`#fusionDot`)?.classList.toggle('active',active)}
function renderFusionWorlds(){ensureFusionSecondary();const worlds=WORLDS.map((w,i)=>({w,i})).filter(x=>x.i!==current);$('#fusionWorldGrid').innerHTML=worlds.map(({w,i},n)=>`<button class="fusion-world-option ${i===fusionSecondary?'active':''}" data-fusion-world="${i}" style="--fusion-option:${w.color}"><span>${String(i+1).padStart(2,'0')}</span><strong>${w.title}</strong><small>${w.genre}</small></button>`).join('');$$('[data-fusion-world]').forEach(b=>b.onclick=()=>setFusionSecondary(+b.dataset.fusionWorld));const position=Math.max(0,worlds.findIndex(x=>x.i===fusionSecondary));$('#fusionSelectionCount').textContent=`${String(position+1).padStart(2,'0')} / ${String(worlds.length).padStart(2,'0')}`}
function updateFusionUI(){ensureFusionSecondary();const p=WORLDS[current],s=WORLDS[fusionSecondary],[name,text]=fusionRecipe();$('#fusionPrimaryName').textContent=p.title;$('#fusionPrimaryGenre').textContent=p.genre;$('#fusionSecondaryName').textContent=s.title;$('#fusionSecondaryGenre').textContent=s.genre;$('#fusionRecipeName').textContent=name;$('#fusionRecipeText').textContent=text;const orbs=$$('.fusion-world .fusion-orb');orbs[0]?.style.setProperty('--orb-color',p.color);orbs[0]?.style.setProperty('--orb-color2',p.color2);orbs[1]?.style.setProperty('--orb-color',s.color);orbs[1]?.style.setProperty('--orb-color2',s.color2);$('#fusionMix').value=Math.round(fusionMix*100);$('#fusionMixLabel').textContent=`${Math.round(fusionMix*100)}%`;$('#toggleFusionBtn').textContent=fusionActive?'SEAL FUSION':'ACTIVATE FUSION';$('#toggleFusionBtn').classList.toggle('active',fusionActive);renderFusionWorlds();applyFusionVisuals()}
function setFusionSecondary(i){fusionSecondary=Math.max(0,Math.min(WORLDS.length-1,i));ensureFusionSecondary();localStorage.srFusionSecondary=String(fusionSecondary);updateFusionUI();if(fusionActive&&playing)startFusionAudio();toast(`${WORLDS[fusionSecondary].title} SIGNAL SELECTED`)}
function setFusionMix(value){fusionMix=Math.max(.15,Math.min(.55,Number(value)/100));localStorage.srFusionMix=String(fusionMix);$('#fusionMixLabel').textContent=`${Math.round(fusionMix*100)}%`;document.documentElement.style.setProperty('--fusion-strength',String(fusionMix));if(fusionBus&&audioCtx)fusionBus.gain.setTargetAtTime(fusionMix*.27,audioCtx.currentTime,.25)}
function toggleFusion(){ensureFusionSecondary();fusionActive=!fusionActive;localStorage.srFusionActive=fusionActive?'1':'0';updateFusionUI();if(fusionActive){if(!playing)startAudio();else startFusionAudio();toast(`${fusionRecipe()[0]} ONLINE`)}else{stopFusionAudio();toast('WORLD FUSION SEALED')}updateMedia()}
function openFusion(){updateFusionUI();$('#fusionOverlay').classList.add('open');$('#fusionOverlay').setAttribute('aria-hidden','false');document.body.classList.add('fusion-open')}
function closeFusion(){$('#fusionOverlay').classList.remove('open');$('#fusionOverlay').setAttribute('aria-hidden','true');document.body.classList.remove('fusion-open')}


// ===== SHARE SIGNAL MODE 5.8 =====
let shareFormat='post';
function shareSignalData(){
  const w=WORLDS[current],track=w.tracks?.[trackIndex]||w.track,stateName=(EVOLUTION[w.id]?.states||[])[evolutionPhase]||'DORMANT';
  const weather=settings.weather===false?'SEALED':weatherState?.condition?.[0]||'CALIBRATING';
  return{world:w,track,stateName,weather,fusion:fusionActive?`${w.title} × ${WORLDS[fusionSecondary].title}`:null,operator:(operatorMemory.callsign||'SHINRA').toUpperCase(),status:playing?'TRANSMITTING':'STANDBY',timePhase:(currentTimePhase||'LOCAL').toUpperCase()};
}
function shareUrl(){const u=new URL(location.href);u.hash='';u.search='';u.searchParams.set('world',WORLDS[current].id);return u.toString()}
function shareSignalText(){const d=shareSignalData();return `SHINRA ΩMEGA RADIO\n${d.world.code}\n${d.world.title} — ${d.track}\nSTATE · ${d.stateName}\nWEATHER · ${d.weather}${d.fusion?`\nFUSION · ${d.fusion}`:''}\nOPERATOR · ${d.operator}\nINVINCIBLE UNDER THE SUN`}
function canvasRgba(hex,a){const h=hex.replace('#','');return `rgba(${parseInt(h.slice(0,2),16)},${parseInt(h.slice(2,4),16)},${parseInt(h.slice(4,6),16)},${a})`}
function roundedPath(ctx,x,y,w,h,r){const rr=Math.min(r,w/2,h/2);ctx.beginPath();ctx.moveTo(x+rr,y);ctx.arcTo(x+w,y,x+w,y+h,rr);ctx.arcTo(x+w,y+h,x,y+h,rr);ctx.arcTo(x,y+h,x,y,rr);ctx.arcTo(x,y,x+w,y,rr);ctx.closePath()}
function fillRound(ctx,x,y,w,h,r,fill,stroke){roundedPath(ctx,x,y,w,h,r);if(fill){ctx.fillStyle=fill;ctx.fill()}if(stroke){ctx.strokeStyle=stroke;ctx.lineWidth=2;ctx.stroke()}}
function shareLine(ctx,x1,y1,x2,y2,color,width=2,alpha=1){ctx.save();ctx.globalAlpha=alpha;ctx.strokeStyle=color;ctx.lineWidth=width;ctx.beginPath();ctx.moveTo(x1,y1);ctx.lineTo(x2,y2);ctx.stroke();ctx.restore()}
function wrapCanvasText(ctx,text,x,y,maxWidth,lineHeight,maxLines=3){const words=String(text).split(' '),lines=[];let line='';for(const word of words){const test=line?`${line} ${word}`:word;if(ctx.measureText(test).width>maxWidth&&line){lines.push(line);line=word}else line=test}if(line)lines.push(line);lines.slice(0,maxLines).forEach((l,i)=>ctx.fillText(l,x,y+i*lineHeight));return Math.min(lines.length,maxLines)}
function drawShareWorldArt(ctx,d,cx,cy,scale){const w=d.world,id=w.id,accent=w.color,accent2=w.color2;ctx.save();ctx.translate(cx,cy);ctx.shadowColor=canvasRgba(accent,.65);ctx.shadowBlur=50*scale;
  if(id==='black-sun'){
    const g=ctx.createRadialGradient(0,0,8*scale,0,0,170*scale);g.addColorStop(0,'#020204');g.addColorStop(.58,'#020204');g.addColorStop(.64,accent2);g.addColorStop(.72,canvasRgba(accent2,.22));g.addColorStop(1,'transparent');ctx.fillStyle=g;ctx.beginPath();ctx.arc(0,0,170*scale,0,Math.PI*2);ctx.fill();shareLine(ctx,-270*scale,70*scale,270*scale,70*scale,accent,4*scale,.75);
  }else if(id==='aquatoc'){
    [64,118,178].forEach((r,i)=>{ctx.strokeStyle=canvasRgba(accent,.85-i*.2);ctx.lineWidth=(5-i)*scale;ctx.beginPath();ctx.arc(0,0,r*scale,0,Math.PI*2);ctx.stroke()});ctx.fillStyle='#eaffff';ctx.beginPath();ctx.arc(0,0,18*scale,0,Math.PI*2);ctx.fill();ctx.rotate(-.45);const grad=ctx.createLinearGradient(0,0,230*scale,0);grad.addColorStop(0,canvasRgba(accent,.9));grad.addColorStop(1,'transparent');ctx.fillStyle=grad;ctx.beginPath();ctx.moveTo(0,0);ctx.lineTo(240*scale,-45*scale);ctx.lineTo(240*scale,45*scale);ctx.closePath();ctx.fill();
  }else if(id==='crimson-rain'){
    ctx.strokeStyle=accent;ctx.lineWidth=6*scale;ctx.strokeRect(-105*scale,-150*scale,210*scale,300*scale);ctx.strokeStyle=canvasRgba(accent2,.8);ctx.lineWidth=2*scale;ctx.strokeRect(-75*scale,-120*scale,150*scale,240*scale);for(let i=-8;i<=8;i++){const x=i*34*scale;shareLine(ctx,x,-220*scale,x-55*scale,230*scale,canvasRgba(accent,.7),3*scale,.62)}
  }else if(id==='mountain-blood'){
    ctx.fillStyle=canvasRgba(accent2,.38);ctx.beginPath();ctx.moveTo(-300*scale,150*scale);ctx.lineTo(-110*scale,-80*scale);ctx.lineTo(15*scale,85*scale);ctx.lineTo(125*scale,-125*scale);ctx.lineTo(310*scale,150*scale);ctx.closePath();ctx.fill();ctx.strokeStyle=accent;ctx.lineWidth=5*scale;ctx.save();ctx.rotate(Math.PI/4);ctx.strokeRect(-62*scale,-62*scale,124*scale,124*scale);ctx.restore();shareLine(ctx,0,-115*scale,0,115*scale,accent2,5*scale,.9);
  }else if(id==='starless-void'){
    const g=ctx.createRadialGradient(0,0,20*scale,0,0,180*scale);g.addColorStop(0,'#000');g.addColorStop(.45,'#000');g.addColorStop(.58,accent);g.addColorStop(.65,canvasRgba(accent,.18));g.addColorStop(1,'transparent');ctx.fillStyle=g;ctx.beginPath();ctx.arc(0,0,180*scale,0,Math.PI*2);ctx.fill();ctx.save();ctx.rotate(.32);ctx.strokeStyle=canvasRgba(accent2,.6);ctx.lineWidth=3*scale;ctx.beginPath();ctx.ellipse(0,0,270*scale,68*scale,0,0,Math.PI*2);ctx.stroke();ctx.restore();
  }else if(id==='celestial-veil'){
    [70,125,185].forEach((r,i)=>{ctx.strokeStyle=canvasRgba(accent,.92-i*.2);ctx.lineWidth=(7-i*2)*scale;ctx.beginPath();ctx.arc(0,0,r*scale,0,Math.PI*2);ctx.stroke()});for(let i=0;i<12;i++){const a=i*Math.PI/6;shareLine(ctx,Math.cos(a)*195*scale,Math.sin(a)*195*scale,Math.cos(a)*300*scale,Math.sin(a)*300*scale,accent2,5*scale,.32)}ctx.fillStyle='#fffdf5';ctx.beginPath();ctx.arc(0,0,25*scale,0,Math.PI*2);ctx.fill();
  }else{
    const sun=ctx.createRadialGradient(0,-40*scale,10*scale,0,-40*scale,155*scale);sun.addColorStop(0,'#fffbdc');sun.addColorStop(.25,accent2);sun.addColorStop(1,'transparent');ctx.fillStyle=sun;ctx.beginPath();ctx.arc(0,-40*scale,155*scale,0,Math.PI*2);ctx.fill();ctx.shadowBlur=0;[-210,-95,100,220].forEach((x,i)=>{ctx.fillStyle=i%2?'#382714':'#24180d';ctx.fillRect(x*scale,-220*scale,(34+i%2*10)*scale,440*scale)});ctx.fillStyle=canvasRgba(accent,.55);ctx.beginPath();ctx.moveTo(-260*scale,230*scale);ctx.lineTo(-36*scale,20*scale);ctx.lineTo(36*scale,20*scale);ctx.lineTo(260*scale,230*scale);ctx.closePath();ctx.fill();
  }
  ctx.restore();
}
function renderShareSignal(){
  const canvas=$('#shareCanvas');if(!canvas)return;const d=shareSignalData(),story=shareFormat==='story',W=1080,H=story?1920:1350;canvas.width=W;canvas.height=H;canvas.style.aspectRatio=`${W}/${H}`;const ctx=canvas.getContext('2d');
  const bg=ctx.createLinearGradient(0,0,0,H);bg.addColorStop(0,'#05070a');bg.addColorStop(.58,'#080b0f');bg.addColorStop(1,'#030406');ctx.fillStyle=bg;ctx.fillRect(0,0,W,H);
  const glow=ctx.createRadialGradient(W*.5,H*.25,10,W*.5,H*.25,W*.68);glow.addColorStop(0,canvasRgba(d.world.color,.27));glow.addColorStop(.5,canvasRgba(d.world.color2,.08));glow.addColorStop(1,'transparent');ctx.fillStyle=glow;ctx.fillRect(0,0,W,H);
  ctx.save();ctx.globalAlpha=.09;ctx.strokeStyle=d.world.color;ctx.lineWidth=1;const step=72;for(let x=-H;x<W+H;x+=step)shareLine(ctx,x,0,x+H,H,d.world.color,1,.35);ctx.restore();
  for(let i=0;i<46;i++){const seed=Math.sin((i+1)*991.17)*43758.5453,seed2=Math.sin((i+1)*617.31)*24634.634;const x=(seed-Math.floor(seed))*W,y=(seed2-Math.floor(seed2))*H*.58;ctx.fillStyle=i%6===0?canvasRgba(d.world.color,.7):'rgba(255,255,255,.28)';ctx.beginPath();ctx.arc(x,y,1+(i%3),0,Math.PI*2);ctx.fill()}
  const margin=72;fillRound(ctx,margin,margin,W-margin*2,H-margin*2,44,'rgba(5,8,11,.12)','rgba(255,255,255,.13)');
  ctx.fillStyle='rgba(255,255,255,.62)';ctx.font='600 22px system-ui, sans-serif';ctx.letterSpacing='4px';ctx.fillText('SHINRA SIGNAL NETWORK',112,138);
  ctx.fillStyle=d.world.color;ctx.font='800 30px system-ui, sans-serif';ctx.textAlign='right';ctx.fillText('ΩMEGA RADIO',968,140);ctx.textAlign='left';
  const artY=story?560:440;drawShareWorldArt(ctx,d,W/2,artY,story?1.25:1.02);
  const titleY=story?1040:780;ctx.fillStyle=canvasRgba(d.world.color,.86);ctx.font='700 25px system-ui, sans-serif';ctx.fillText(d.world.code,titleY?112:112,titleY-86);
  ctx.fillStyle='#f5f7f2';ctx.font=`900 ${story?94:82}px system-ui, sans-serif`;ctx.textBaseline='alphabetic';wrapCanvasText(ctx,d.world.title,112,titleY,850,story?100:88,2);
  const titleLines=Math.ceil(ctx.measureText(d.world.title).width/850);const trackY=titleY+(titleLines>1?(story?180:158):(story?112:102));ctx.fillStyle='rgba(255,255,255,.72)';ctx.font=`500 ${story?32:28}px system-ui, sans-serif`;ctx.fillText(d.track,112,trackY);
  ctx.fillStyle='rgba(255,255,255,.42)';ctx.font='500 20px system-ui, sans-serif';ctx.fillText(`${d.world.genre} · ${d.world.bpm} BPM · ${d.status}`,112,trackY+48);
  const panelY=story?1390:1030,panelH=story?270:210;fillRound(ctx,104,panelY,872,panelH,32,'rgba(4,7,9,.58)',canvasRgba(d.world.color,.28));
  const cols=[['WORLD STATE',d.stateName],['WORLD WEATHER',d.weather],['LOCAL CYCLE',d.timePhase],['OPERATOR',d.operator]];cols.forEach((item,i)=>{const x=140+(i%2)*430,y=panelY+58+Math.floor(i/2)*(story?114:86);ctx.fillStyle='rgba(255,255,255,.38)';ctx.font='700 16px system-ui, sans-serif';ctx.fillText(item[0],x,y);ctx.fillStyle=i===3?d.world.color:'#f1f4ec';ctx.font=`800 ${story?26:23}px system-ui, sans-serif`;ctx.fillText(String(item[1]).slice(0,24),x,y+34)});
  const footY=H-130;shareLine(ctx,112,footY-42,968,footY-42,canvasRgba(d.world.color,.28),2,1);ctx.fillStyle='rgba(255,255,255,.5)';ctx.font='600 18px system-ui, sans-serif';ctx.fillText('INVINCIBLE UNDER THE SUN',112,footY);ctx.textAlign='right';ctx.fillText(new Date().toLocaleDateString(undefined,{year:'numeric',month:'short',day:'2-digit'}).toUpperCase(),968,footY);ctx.textAlign='left';
  $('#shareWorldName').textContent=d.world.title;$('#shareTrackName').textContent=d.track;$('#shareEvolution').textContent=d.stateName;$('#shareWeather').textContent=d.weather;$('#shareOperator').textContent=d.operator;$('#shareStatus').textContent=d.status;
}
function openShareSignal(){renderShareSignal();$('#shareOverlay')?.classList.add('open');$('#shareOverlay')?.setAttribute('aria-hidden','false');document.body.classList.add('share-open')}
function closeShareSignal(){$('#shareOverlay')?.classList.remove('open');$('#shareOverlay')?.setAttribute('aria-hidden','true');document.body.classList.remove('share-open')}
function canvasBlob(){return new Promise((resolve,reject)=>$('#shareCanvas').toBlob(b=>b?resolve(b):reject(new Error('PNG export failed')),'image/png',.96))}
async function saveShareSignal(){try{const blob=await canvasBlob(),a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=`shinra-${WORLDS[current].id}-${shareFormat}.png`;document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(a.href),1200);toast('SIGNAL CARD SAVED')}catch{toast('SIGNAL EXPORT FAILED')}}
async function nativeShareSignal(){const d=shareSignalData(),text=shareSignalText();try{const blob=await canvasBlob(),file=new File([blob],`shinra-${d.world.id}-${shareFormat}.png`,{type:'image/png'});if(navigator.canShare?.({files:[file]})){await navigator.share({title:`${d.world.title} · Shinra Omega Radio`,text,files:[file]});toast('SIGNAL SHARED');return}if(navigator.share){await navigator.share({title:`${d.world.title} · Shinra Omega Radio`,text,url:shareUrl()});toast('SIGNAL SHARED');return}await copyShareSignal()}catch(err){if(err?.name!=='AbortError')toast('SHARE CANCELLED')}
}
async function copyShareSignal(){const text=`${shareSignalText()}\n${shareUrl()}`;try{await navigator.clipboard.writeText(text);toast('SIGNAL TEXT COPIED')}catch{const t=document.createElement('textarea');t.value=text;document.body.append(t);t.select();document.execCommand('copy');t.remove();toast('SIGNAL TEXT COPIED')}}
function setShareFormat(format){shareFormat=format==='story'?'story':'post';$$('[data-share-format]').forEach(b=>b.classList.toggle('active',b.dataset.shareFormat===shareFormat));renderShareSignal()}

// ===== RARE WORLD EVENTS 5.7 =====
const RARE_WORLD_EVENTS={
  'black-sun':{id:'eclipse-crown',title:'ECLIPSE CROWN',text:'The dead horizon closes around the signal.',duration:9800},
  aquatoc:{id:'abyssal-sonar',title:'ABYSSAL SONAR',text:'A pressure wave answers from below the thermal line.',duration:9000},
  'crimson-rain':{id:'neon-blackout',title:'NEON BLACKOUT',text:'For one breath, the red district loses all power.',duration:8200},
  'mountain-blood':{id:'ember-storm',title:'EMBER STORM',text:'The old ridge releases the fire it kept beneath the stone.',duration:9400},
  'starless-void':{id:'star-fracture',title:'STAR FRACTURE',text:'Mapped space splits and reveals a light with no origin.',duration:9200},
  'celestial-veil':{id:'heaven-opens',title:'HEAVEN OPENS',text:'The veil parts and the choir rises beyond measure.',duration:9800},
  'sunroot-vale':{id:'unbroken-sun',title:'UNBROKEN SUN',text:'Every leaf turns toward the warrior who did not bow.',duration:9600}
};
let rareEventTimer=null,rareEventCloseTimer=null,rareEventActive=false;
const rareEventTestMode=new URLSearchParams(location.search).get('event')==='test';
const rareEventHistory=Object.assign({total:0,worlds:{}},JSON.parse(localStorage.srRareEvents||'{}'));
function saveRareEventHistory(){localStorage.srRareEvents=JSON.stringify(rareEventHistory)}
function canRunRareWorldEvent(){return playing&&settings.rareEvents!==false&&!rareEventActive&&!ritualActive&&!scannerActive&&!$('#settingsOverlay')?.classList.contains('open')&&!$('#diagnosticsOverlay')?.classList.contains('open')&&!$('#operatorOverlay')?.classList.contains('open')&&!$('#loreOverlay')?.classList.contains('open')&&!$('#weatherOverlay')?.classList.contains('open')&&!$('#ritualOverlay')?.classList.contains('open')}
function scheduleRareWorldEvent(first=false){
  clearTimeout(rareEventTimer);rareEventTimer=null;if(!playing||settings.rareEvents===false||listeningMode==='sleep')return;
  const modeMult=listeningMode==='focus'?1.65:listeningMode==='cinematic'?.72:1;
  const delay=(rareEventTestMode?(first?12000:26000+Math.random()*16000):(first?150000+Math.random()*150000:420000+Math.random()*420000))*modeMult;
  rareEventTimer=setTimeout(()=>{if(canRunRareWorldEvent())triggerRareWorldEvent();else scheduleRareWorldEvent(false)},delay);
}
function playRareEventTone(worldId){
  if(!audioCtx||!master)return;const t=audioCtx.currentTime,out=audioCtx.createGain(),verb=audioCtx.createConvolver(),wet=audioCtx.createGain(),dry=audioCtx.createGain();
  out.gain.setValueAtTime(.0001,t);out.gain.exponentialRampToValueAtTime(.11,t+.12);out.gain.exponentialRampToValueAtTime(.0001,t+4.8);verb.buffer=makeImpulse(4.8,3.4);wet.gain.value=.55;dry.gain.value=.62;out.connect(dry).connect(master);out.connect(verb).connect(wet).connect(master);
  const configs={
    'black-sun':[41.2,55,82.4],aquatoc:[65.4,130.8,261.6],'crimson-rain':[73.4,146.8,293.7],'mountain-blood':[82.4,123.5,164.8],'starless-void':[36.7,55,110],'celestial-veil':[261.6,392,784],'sunroot-vale':[146.8,220,440]
  },freqs=configs[worldId]||configs['black-sun'];
  freqs.forEach((f,i)=>{const o=audioCtx.createOscillator(),g=audioCtx.createGain(),p=audioCtx.createStereoPanner();o.type=i===0?'sine':'triangle';o.frequency.setValueAtTime(f,t+i*.045);o.frequency.exponentialRampToValueAtTime(f*(worldId==='starless-void'?.82:worldId==='celestial-veil'?1.12:.96),t+4.2);g.gain.value=[.48,.22,.1][i];p.pan.value=[-.32,.18,.46][i];o.connect(g).connect(p).connect(out);o.start(t+i*.045);o.stop(t+4.9);setTimeout(()=>{try{o.disconnect();g.disconnect();p.disconnect()}catch{}},5200)});
  if(worldId==='aquatoc'||worldId==='crimson-rain'||worldId==='mountain-blood'||worldId==='sunroot-vale'){
    const n=makeNoise('pink',3.2),f=audioCtx.createBiquadFilter(),g=audioCtx.createGain();f.type='bandpass';f.frequency.value=worldId==='aquatoc'?340:worldId==='crimson-rain'?1800:920;f.Q.value=.7;g.gain.setValueAtTime(.0001,t);g.gain.linearRampToValueAtTime(.025,t+.08);g.gain.exponentialRampToValueAtTime(.0001,t+3.1);n.connect(f).connect(g).connect(out);n.start(t);n.stop(t+3.2);setTimeout(()=>{try{n.disconnect();f.disconnect();g.disconnect()}catch{}},3500)
  }
  setTimeout(()=>{try{out.disconnect();verb.disconnect();wet.disconnect();dry.disconnect()}catch{}},5400)
}
function triggerRareWorldEvent(){
  if(!canRunRareWorldEvent()){scheduleRareWorldEvent(false);return}
  const w=WORLDS[current],event=RARE_WORLD_EVENTS[w.id];if(!event){scheduleRareWorldEvent(false);return}
  rareEventActive=true;clearTimeout(rareEventTimer);rareEventTimer=null;rareEventHistory.total=(rareEventHistory.total||0)+1;rareEventHistory.worlds[w.id]=(rareEventHistory.worlds[w.id]||0)+1;saveRareEventHistory();
  const overlay=$('#rareEventOverlay');overlay.dataset.event=event.id;overlay.style.setProperty('--event-color',w.color);overlay.style.setProperty('--event-color2',w.color2);$('#rareEventTitle').textContent=event.title;$('#rareEventText').textContent=event.text;$('#rareEventCount').textContent=`EVENT ${String(rareEventHistory.total).padStart(2,'0')} · ${w.title}`;overlay.classList.add('show');overlay.setAttribute('aria-hidden','false');document.body.classList.add('rare-world-event');document.body.dataset.rareEvent=event.id;playRareEventTone(w.id);
  rareEventCloseTimer=setTimeout(()=>closeRareWorldEvent(false),event.duration);
}
function closeRareWorldEvent(silent=false){
  clearTimeout(rareEventCloseTimer);rareEventCloseTimer=null;const overlay=$('#rareEventOverlay');overlay?.classList.remove('show');overlay?.setAttribute('aria-hidden','true');document.body.classList.remove('rare-world-event');delete document.body.dataset.rareEvent;rareEventActive=false;if(!silent&&playing)scheduleRareWorldEvent(false)
}

$('.hero')?.appendChild($('#rareSignal'));$('#listeningModeBtn').onclick=openListeningMode;$('#closeListeningMode').onclick=closeListeningMode;$$('[data-listening-mode]').forEach(b=>b.onclick=()=>selectListeningMode(b.dataset.listeningMode));$('#listeningModeOverlay').addEventListener('click',e=>{if(e.target.id==='listeningModeOverlay')closeListeningMode()});$('#operatorBtn').onclick=openOperatorMemory;$('#closeOperator').onclick=closeOperatorMemory;$('#saveCallsign').onclick=storeOperatorCallsign;$('#operatorCallsign').addEventListener('keydown',e=>{if(e.key==='Enter')storeOperatorCallsign()});$('#resetOperatorMemory').onclick=resetOperatorMemory;$('#operatorOverlay').addEventListener('click',e=>{if(e.target.id==='operatorOverlay')closeOperatorMemory()});$('#playBtn').onclick=$('#sleepPlayBtn').onclick=toggle;$('#ambientPlayBtn').onclick=toggle;$('#prevBtn').onclick=()=>nextWorld(-1);$('#nextBtn').onclick=()=>nextWorld(1);$('#ambientPrevBtn').onclick=e=>{e.stopPropagation();nextWorld(-1);revealAmbientControls()};$('#ambientNextBtn').onclick=e=>{e.stopPropagation();nextWorld(1);revealAmbientControls()};$('#favoriteBtn').onclick=toggleFavorite;$('#shuffleBtn').onclick=()=>{shuffleMode=!shuffleMode;localStorage.srShuffle=shuffleMode?'1':'0';updateMasterControls();toast(shuffleMode?'SHUFFLE ACTIVE':'SHUFFLE OFF')};$('#volume').value=state.volume;$('#volumeOut').textContent=Math.round(state.volume*100);$('#volume').oninput=e=>{state.volume=+e.target.value;$('#volumeOut').textContent=Math.round(state.volume*100);if(master)master.gain.setTargetAtTime(effectiveVolume(),audioCtx.currentTime,.05);save()};$('#resetEq').onclick=()=>{state.eq={bass:0,mid:0,treble:0};renderControls();applyEq();save();toast('EQ RESET')};$('#fullscreenSleep').onclick=$('#sleepModeBtn').onclick=()=>{$('#sleepOverlay').classList.add('open');$('#sleepOverlay').setAttribute('aria-hidden','false')};$('#exitSleepBtn').onclick=()=>{$('#sleepOverlay').classList.remove('open');$('#sleepOverlay').setAttribute('aria-hidden','true')};$('#ambientModeBtn').onclick=$('#ambientPanelBtn').onclick=enterAmbientMode;$('#exitAmbientBtn').onclick=e=>{e.stopPropagation();exitAmbientMode()};$('#loreBtn').onclick=openLoreArchive;$('#closeLore').onclick=closeLoreArchive;$('#loreOverlay').addEventListener('click',e=>{if(e.target.id==='loreOverlay')closeLoreArchive()});$('#closeRareBtn').onclick=closeRareSignal;$('#rareArchiveBtn').onclick=async()=>{closeRareSignal();if(ambientMode)await exitAmbientMode();openLoreArchive()};$('#settingsBtn').onclick=openSettings;$('#closeSettings').onclick=closeSettings;$('#saveSettings').onclick=storeSettings;$('#resetAppData').onclick=resetAppData;$('#settingsOverlay').addEventListener('click',e=>{if(e.target.id==='settingsOverlay')closeSettings()});$('#diagnosticsBtn').onclick=openDiagnostics;$('#diagnosticsBtn').onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();openDiagnostics()}};$('#closeDiagnostics').onclick=closeDiagnostics;$('#diagnosticsOverlay').addEventListener('click',e=>{if(e.target.id==='diagnosticsOverlay')closeDiagnostics()});$('#runDiagnostics').onclick=()=>{collectDiagnostics();toast('SYSTEM CHECK COMPLETE')};$('#copyDiagnostics').onclick=copyDiagnosticsReport;$('#cleanOldCaches').onclick=cleanOldCaches;

$('#dismissRareEvent').onclick=()=>closeRareWorldEvent(false);$('#ritualBtn').onclick=openRituals;$('#closeRitual').onclick=closeRituals;$('#startRitual').onclick=startRitual;$('#ritualEndBtn').onclick=()=>endRitual(false,'RITUAL ENDED');$$('.ritual-length').forEach(b=>b.onclick=()=>selectRitualLength(b.dataset.ritualMinutes));$('#ritualOverlay').addEventListener('click',e=>{if(e.target.id==='ritualOverlay')closeRituals()});$('#weatherBtn').onclick=openWeather;$('#closeWeather').onclick=closeWeather;$('#refreshWeather').onclick=recalibrateWeather;$('#weatherOverlay').addEventListener('click',e=>{if(e.target.id==='weatherOverlay')closeWeather()});$('#scannerBtn').onclick=openScanner;$('#closeScanner').onclick=closeScanner;$('#startScanner').onclick=startScanner;$('#scannerOverlay').addEventListener('click',e=>{if(e.target.id==='scannerOverlay')closeScanner()});$('#fusionBtn').onclick=openFusion;$('#closeFusion').onclick=closeFusion;$('#toggleFusionBtn').onclick=toggleFusion;$('#fusionMix').oninput=e=>setFusionMix(e.target.value);$('#fusionOverlay').addEventListener('click',e=>{if(e.target.id==='fusionOverlay')closeFusion()});$('#shareSignalBtn').onclick=openShareSignal;$('#closeShare').onclick=closeShareSignal;$('#nativeShareBtn').onclick=nativeShareSignal;$('#saveShareBtn').onclick=saveShareSignal;$('#copyShareBtn').onclick=copyShareSignal;$$('[data-share-format]').forEach(b=>b.onclick=()=>setShareFormat(b.dataset.shareFormat));$('#shareOverlay').addEventListener('click',e=>{if(e.target.id==='shareOverlay')closeShareSignal()});
const ambientHero=$('.hero');
ambientHero?.addEventListener('pointerdown',e=>{if(!ambientMode)return;ambientPointerX=e.clientX;ambientPointerY=e.clientY;revealAmbientControls()});
ambientHero?.addEventListener('pointerup',e=>{if(!ambientMode)return;const dx=e.clientX-ambientPointerX,dy=e.clientY-ambientPointerY;if(Math.abs(dx)>64&&Math.abs(dx)>Math.abs(dy)){dx<0?nextWorld(1):nextWorld(-1);revealAmbientControls()}else revealAmbientControls()});
$('#ambientHud')?.addEventListener('pointerdown',e=>{e.stopPropagation();revealAmbientControls(true)});
$('#ambientHud')?.addEventListener('pointerup',e=>e.stopPropagation());
document.addEventListener('fullscreenchange',()=>{if(ambientMode&&!document.fullscreenElement)revealAmbientControls()});
document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='visible'){if(ambientMode)requestAmbientWakeLock();applyDynamicTime(true)}if(document.visibilityState==='hidden')operatorTick(true)});window.addEventListener('pagehide',()=>operatorTick(true));
window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();deferredPrompt=e;$('#installBtn').hidden=false});$('#installBtn').onclick=async()=>{if(deferredPrompt){deferredPrompt.prompt();await deferredPrompt.userChoice;deferredPrompt=null;$('#installBtn').hidden=true}};
window.addEventListener('online',()=>{$('#netLabel').textContent='ONLINE';$('#netDot').style.background='#6df49a'});window.addEventListener('offline',()=>{$('#netLabel').textContent='OFFLINE';$('#netDot').style.background='#ff765f'});
if('mediaSession'in navigator){navigator.mediaSession.setActionHandler('play',()=>!playing&&startAudio());navigator.mediaSession.setActionHandler('pause',()=>playing&&stopAudio());navigator.mediaSession.setActionHandler('previoustrack',()=>selectWorld(current-1));navigator.mediaSession.setActionHandler('nexttrack',()=>selectWorld(current+1));}
const APP_VERSION='6.1';
let waitingWorker=null,updateReloading=false;
function showUpdateSignal(worker){waitingWorker=worker;const panel=$('#updateSignal');if(!panel)return;panel.classList.add('show');panel.setAttribute('aria-hidden','false');$('#updateSignalTitle').textContent='NEW CORE VERSION READY';$('#updateSignalText').textContent='A fresh Omega transmission is ready to install.'}
function hideUpdateSignal(){const panel=$('#updateSignal');if(!panel)return;panel.classList.remove('show');panel.setAttribute('aria-hidden','true')}
function markUpdated(){sessionStorage.srUpdatedVersion=APP_VERSION}
if('serviceWorker'in navigator){
  window.addEventListener('load',async()=>{
    try{
      const reg=await navigator.serviceWorker.register('./sw.js');
      if(reg.waiting&&navigator.serviceWorker.controller)showUpdateSignal(reg.waiting);
      reg.addEventListener('updatefound',()=>{
        const worker=reg.installing;if(!worker)return;
        worker.addEventListener('statechange',()=>{if(worker.state==='installed'&&navigator.serviceWorker.controller)showUpdateSignal(worker)});
      });
      setInterval(()=>reg.update().catch(()=>{}),15*60*1000);
      document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='visible')reg.update().catch(()=>{})});
    }catch{}
  });
  navigator.serviceWorker.addEventListener('controllerchange',()=>{if(updateReloading)return;updateReloading=true;markUpdated();location.reload()});
}
$('#installUpdateBtn')?.addEventListener('click',()=>{if(!waitingWorker)return;$('#installUpdateBtn').textContent='INSTALLING…';waitingWorker.postMessage({type:'SKIP_WAITING'})});
$('#dismissUpdateBtn')?.addEventListener('click',hideUpdateSignal);
window.addEventListener('DOMContentLoaded',()=>{if(sessionStorage.srUpdatedVersion===APP_VERSION){sessionStorage.removeItem('srUpdatedVersion');setTimeout(()=>toast(`OMEGA CORE UPDATED — VERSION ${APP_VERSION} ONLINE`),900)}});
window.addEventListener('keydown',e=>{if(e.code==='Space'&&e.target.tagName!=='INPUT'){e.preventDefault();toggle();revealAmbientControls()}if(e.code==='ArrowRight'){nextWorld(1);revealAmbientControls()}if(e.code==='ArrowLeft'){nextWorld(-1);revealAmbientControls()}if(e.key.toLowerCase()==='a')toggleAmbientMode();if(e.key.toLowerCase()==='l')openLoreArchive();if(e.key.toLowerCase()==='o')openOperatorMemory();if(e.key.toLowerCase()==='d')openDiagnostics();if(e.key.toLowerCase()==='x')openScanner();if(e.key.toLowerCase()==='r'&&e.target.tagName!=='INPUT'&&e.target.tagName!=='SELECT')openRituals();if(e.key.toLowerCase()==='w'&&e.target.tagName!=='INPUT'&&e.target.tagName!=='SELECT')openWeather();if(e.key.toLowerCase()==='p'&&e.target.tagName!=='INPUT'&&e.target.tagName!=='SELECT')openShareSignal();if(e.key.toLowerCase()==='y'&&e.target.tagName!=='INPUT'&&e.target.tagName!=='SELECT')openFusion();if(e.key.toLowerCase()==='m'&&e.target.tagName!=='INPUT'&&e.target.tagName!=='SELECT')openListeningMode();if(e.shiftKey&&e.key.toLowerCase()==='e'&&playing)triggerRareWorldEvent();if(e.key==='Escape'&&document.body.classList.contains('listening-mode-open'))closeListeningMode();else if(e.key==='Escape'&&document.body.classList.contains('fusion-open'))closeFusion();else if(e.key==='Escape'&&document.body.classList.contains('share-open'))closeShareSignal();else if(e.key==='Escape'&&document.body.classList.contains('ritual-open'))closeRituals();else if(e.key==='Escape'&&document.body.classList.contains('weather-open'))closeWeather();else if(e.key==='Escape'&&document.body.classList.contains('scanner-open'))closeScanner();else if(e.key==='Escape'&&document.body.classList.contains('diagnostics-open'))closeDiagnostics();else if(e.key==='Escape'&&document.body.classList.contains('operator-open'))closeOperatorMemory();else if(e.key==='Escape'&&document.body.classList.contains('lore-open'))closeLoreArchive();else if(e.key==='Escape'&&ambientMode)exitAmbientMode();if(e.key.toLowerCase()==='f')toggleFavorite();if(e.key.toLowerCase()==='s'){shuffleMode=!shuffleMode;localStorage.srShuffle=shuffleMode?'1':'0';updateMasterControls()}});
applySettings();renderListeningMode();updateFusionUI();renderRitualHistory();selectRitualLength(10);initPerformanceSystem();startDynamicTime();startWorldWeather();renderControls();updateWorld();updateMasterControls();updateLoreCounter();updateScannerCount();if(settings.defaultTimer)setTimer(settings.defaultTimer);
const boot=$('#boot');
let bootSoundCtx=null,bootStarted=false;
function playOmegaAwakening(){
  const AC=window.AudioContext||window.webkitAudioContext;if(!AC)return;
  bootSoundCtx=new AC();const ctx=bootSoundCtx,t=ctx.currentTime;
  const out=ctx.createGain(),comp=ctx.createDynamicsCompressor(),verb=ctx.createConvolver(),dry=ctx.createGain(),wet=ctx.createGain();
  out.gain.setValueAtTime(.0001,t);out.gain.exponentialRampToValueAtTime(.62,t+.22);out.gain.exponentialRampToValueAtTime(.0001,t+4.15);
  const len=Math.floor(ctx.sampleRate*4.6),imp=ctx.createBuffer(2,len,ctx.sampleRate);for(let c=0;c<2;c++){const d=imp.getChannelData(c);for(let i=0;i<len;i++)d[i]=(Math.random()*2-1)*Math.pow(1-i/len,4.2)}verb.buffer=imp;dry.gain.value=.68;wet.gain.value=.5;
  out.connect(dry).connect(comp);out.connect(verb).connect(wet).connect(comp);comp.connect(ctx.destination);
  // Deep awakening tone.
  [55,82.41].forEach((f,i)=>{const o=ctx.createOscillator(),g=ctx.createGain();o.type=i?'triangle':'sine';o.frequency.setValueAtTime(f,t);o.frequency.exponentialRampToValueAtTime(f*1.012,t+3.5);g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(i?.075:.13,t+.55);g.gain.exponentialRampToValueAtTime(.0001,t+3.8);o.connect(g).connect(out);o.start(t);o.stop(t+4)});
  // Soft choir triad enters as the mark forms.
  [130.81,196,261.63,392].forEach((f,i)=>{const o=ctx.createOscillator(),g=ctx.createGain(),p=ctx.createStereoPanner();o.type=i<2?'sine':'triangle';o.frequency.value=f;o.detune.value=[-5,3,-3,5][i];p.pan.value=[-.5,.28,-.2,.52][i];g.gain.setValueAtTime(.0001,t+.55);g.gain.exponentialRampToValueAtTime([.055,.043,.028,.016][i],t+1.45);g.gain.exponentialRampToValueAtTime(.0001,t+4.05);o.connect(g).connect(p).connect(out);o.start(t+.48);o.stop(t+4.2)});
  // Halo chime aligned with the red core / wordmark reveal.
  [523.25,1046.5,1567.98].forEach((f,i)=>{const o=ctx.createOscillator(),g=ctx.createGain(),p=ctx.createStereoPanner();o.type='sine';o.frequency.setValueAtTime(f,t+1.78);o.frequency.exponentialRampToValueAtTime(f*.994,t+3.85);p.pan.value=[-.16,.2,.45][i];g.gain.setValueAtTime(.0001,t+1.76);g.gain.exponentialRampToValueAtTime([.08,.035,.016][i],t+1.82);g.gain.exponentialRampToValueAtTime(.0001,t+4.05);o.connect(g).connect(p).connect(verb);o.start(t+1.76);o.stop(t+4.15)});
  // A tiny light shimmer at the final reveal.
  const shimmer=ctx.createOscillator(),sg=ctx.createGain();shimmer.type='triangle';shimmer.frequency.setValueAtTime(1760,t+2.55);shimmer.frequency.exponentialRampToValueAtTime(920,t+3.3);sg.gain.setValueAtTime(.0001,t+2.54);sg.gain.exponentialRampToValueAtTime(.025,t+2.6);sg.gain.exponentialRampToValueAtTime(.0001,t+3.45);shimmer.connect(sg).connect(verb);shimmer.start(t+2.54);shimmer.stop(t+3.5);
  setTimeout(()=>{try{ctx.close()}catch{}},4700);
}
const closeBoot=()=>{if(!boot||boot.classList.contains('hide'))return;boot.classList.add('done');localStorage.srIntroSeen='1';setTimeout(()=>boot.classList.add('hide'),760)};
function awakenBoot(){if(bootStarted||!boot)return;bootStarted=true;boot.classList.remove('awaiting');boot.classList.add('awakened');playOmegaAwakening();$('#skipBoot')?.setAttribute('disabled','');setTimeout(closeBoot,4300)}
if(!settings.intro&&localStorage.srIntroSeen==='1'){boot?.classList.add('hide')}else{
  $('#skipBoot')?.addEventListener('click',awakenBoot);
  boot?.addEventListener('click',e=>{if(e.target===boot||e.target.closest?.('.boot-stage'))awakenBoot()});
}


// ===== OMEGA JOURNEYS 6.1 =====
const OMEGA_JOURNEYS=[
  {id:'sunrise-oath',name:'SUNRISE OATH',code:'PASSAGE 01',minutes:20,color:'#a9d36a',text:'A rooted passage from forest resolve into ancestral stone and open light.',route:[['sunroot-vale',7],['mountain-blood',6],['celestial-veil',7]]},
  {id:'abyssal-ascent',name:'ABYSSAL ASCENT',code:'PASSAGE 02',minutes:30,color:'#5de6ff',text:'Descend below pressure, cross the unmapped void and rise through the celestial veil.',route:[['aquatoc',10],['starless-void',10],['celestial-veil',10]]},
  {id:'red-horizon',name:'RED HORIZON',code:'PASSAGE 03',minutes:25,color:'#ff334f',text:'A nocturnal route through electric rain, the dead sun and the final dark.',route:[['crimson-rain',8],['black-sun',9],['starless-void',8]]},
  {id:'omega-pilgrimage',name:'OMEGA PILGRIMAGE',code:'PASSAGE 04',minutes:45,color:'#f5e4ad',text:'The complete seven-world pilgrimage from origin to the unbroken sun.',route:[['black-sun',6],['aquatoc',6],['crimson-rain',6],['mountain-blood',7],['starless-void',6],['celestial-veil',7],['sunroot-vale',7]]}
];
const journeyTestMode=new URLSearchParams(location.search).get('journey')==='test';
let journeySelectedId=localStorage.srJourneySelected||'sunrise-oath',journeyActive=false,journeyEnding=false,journeyPhaseIndex=0,journeyElapsed=0,journeyLastTick=0,journeyTimer=null,journeyTransitionRetry=null;
const journeyHistory=Object.assign({completed:0,totalSeconds:0,last:null},JSON.parse(localStorage.srJourneyHistory||'{}'));
function journeyById(id){return OMEGA_JOURNEYS.find(j=>j.id===id)||OMEGA_JOURNEYS[0]}
function journeyPhaseSeconds(minutes){return journeyTestMode?Math.max(10,Math.round(minutes*2)):minutes*60}
function journeyTotalSeconds(journey){return journey.route.reduce((sum,entry)=>sum+journeyPhaseSeconds(entry[1]),0)}
function formatJourneyTime(sec){sec=Math.max(0,Math.ceil(sec));return `${String(Math.floor(sec/60)).padStart(2,'0')}:${String(sec%60).padStart(2,'0')}`}
function saveJourneyHistory(){localStorage.srJourneyHistory=JSON.stringify(journeyHistory)}
function renderJourneyHistory(){const el=$('#journeyHistory');if(el)el.textContent=`${journeyHistory.completed||0} COMPLETED`}
function renderJourneyGrid(){
  const grid=$('#journeyGrid');if(!grid)return;
  grid.innerHTML=OMEGA_JOURNEYS.map(j=>`<button class="journey-option ${j.id===journeySelectedId?'active':''}" data-journey-id="${j.id}" style="--journey-color:${j.color}"><small>${j.code}</small><strong>${j.name}</strong><em>${j.text}</em><span>${journeyTestMode?'TEST ROUTE':j.minutes+' MIN'} · ${j.route.length} WORLDS</span></button>`).join('');
  $$('[data-journey-id]').forEach(b=>b.onclick=()=>selectJourney(b.dataset.journeyId));
}
function renderJourneySelection(){
  const journey=journeyById(journeySelectedId);localStorage.srJourneySelected=journey.id;
  $('#journeySelectedName').textContent=journey.name;$('#journeySelectedText').textContent=journey.text;$('#journeySelectedDuration').textContent=journeyTestMode?'TEST MODE':`${journey.minutes} MIN`;$('#startJourney').textContent=journeyActive&&journeyHistory.last===journey.id?'RESTART JOURNEY':'BEGIN JOURNEY';
  const route=$('#journeyRoute');if(route)route.innerHTML=journey.route.map(([id,min],i)=>{const w=WORLDS.find(x=>x.id===id);return `${i?'<span class="journey-route-arrow">›</span>':''}<span class="journey-route-world" style="--route-color:${w.color}"><i></i><span><strong>${w.title}</strong><small>${journeyTestMode?journeyPhaseSeconds(min)+' SEC':min+' MIN'}</small></span></span>`}).join('');
  document.querySelector('.journey-compass')?.style.setProperty('--accent',journey.color);renderJourneyGrid();renderJourneyHistory();
}
function selectJourney(id){journeySelectedId=journeyById(id).id;renderJourneySelection()}
function openJourneys(){renderJourneySelection();$('#journeyOverlay')?.classList.add('open');$('#journeyOverlay')?.setAttribute('aria-hidden','false');document.body.classList.add('journey-open')}
function closeJourneys(){$('#journeyOverlay')?.classList.remove('open');$('#journeyOverlay')?.setAttribute('aria-hidden','true');document.body.classList.remove('journey-open')}
function journeyResumeClock(){if(!journeyActive||journeyLastTick||!playing)return;journeyLastTick=performance.now()}
function journeyPauseClock(){if(!journeyActive||!journeyLastTick)return;journeyElapsed+=(performance.now()-journeyLastTick)/1000;journeyLastTick=0;updateJourneyHud()}
function journeyCurrentElapsed(){return journeyElapsed+(journeyLastTick?(performance.now()-journeyLastTick)/1000:0)}
function journeyPhaseAt(elapsed,journey){let cursor=0;for(let i=0;i<journey.route.length;i++){const length=journeyPhaseSeconds(journey.route[i][1]);if(elapsed<cursor+length)return {index:i,within:elapsed-cursor,start:cursor,length};cursor+=length}return {index:journey.route.length,within:0,start:cursor,length:0}}
function playJourneyTone(){
  if(!audioCtx||!master)return;const w=WORLDS[current],t=audioCtx.currentTime,out=audioCtx.createGain();out.gain.setValueAtTime(.0001,t);out.gain.exponentialRampToValueAtTime(.075,t+.08);out.gain.exponentialRampToValueAtTime(.0001,t+2.5);out.connect(master);
  [1,1.5,2].forEach((r,i)=>{const o=audioCtx.createOscillator(),g=audioCtx.createGain(),p=audioCtx.createStereoPanner();o.type=i?'triangle':'sine';o.frequency.setValueAtTime((w.osc?.[0]||82.4)*r,t+i*.04);o.frequency.exponentialRampToValueAtTime((w.osc?.[0]||82.4)*r*1.025,t+2.2);g.gain.value=[.5,.22,.08][i];p.pan.value=[-.28,.16,.42][i];o.connect(g).connect(p).connect(out);o.start(t+i*.04);o.stop(t+2.6);setTimeout(()=>{try{o.disconnect();g.disconnect();p.disconnect();out.disconnect()}catch{}},2800)});
}
function journeyMoveToPhase(index,announce=true){
  const journey=journeyById(journeyHistory.last||journeySelectedId);if(!journeyActive||index<0||index>=journey.route.length)return;
  journeyPhaseIndex=index;const worldId=journey.route[index][0],worldIndex=WORLDS.findIndex(w=>w.id===worldId);clearTimeout(journeyTransitionRetry);
  if(switching){journeyTransitionRetry=setTimeout(()=>journeyMoveToPhase(index,announce),800);return}
  if(worldIndex!==current)selectWorld(worldIndex);if(announce){playJourneyTone();toast(`JOURNEY ${String(index+1).padStart(2,'0')} · ${WORLDS[worldIndex].title}`)}updateJourneyHud();
}
function updateJourneyHud(){
  if(!journeyActive)return;const journey=journeyById(journeyHistory.last),elapsed=journeyCurrentElapsed(),total=journeyTotalSeconds(journey),phase=journeyPhaseAt(elapsed,journey);
  if(phase.index>=journey.route.length){completeJourney();return}
  if(phase.index!==journeyPhaseIndex)journeyMoveToPhase(phase.index,true);
  const world=WORLDS.find(w=>w.id===journey.route[phase.index][0]),left=total-elapsed;
  $('#journeyHudWorld').textContent=world.title;$('#journeyHudPhase').textContent=`${String(phase.index+1).padStart(2,'0')} / ${String(journey.route.length).padStart(2,'0')} · ${journey.name}`;$('#journeyHudTime').textContent=formatJourneyTime(left);$('#journeyHudBar').style.width=`${Math.min(100,elapsed/total*100)}%`;$('#journeyHudLabel').textContent=playing?'OMEGA JOURNEY':'JOURNEY PAUSED';
}
function startJourney(){
  const journey=journeyById(journeySelectedId);if(journeyActive)endJourney(false,'PREVIOUS JOURNEY ENDED');if(ritualActive)endRitual(false,'RITUAL ENDED BY JOURNEY');
  journeyActive=true;journeyEnding=false;journeyHistory.last=journey.id;journeyElapsed=0;journeyLastTick=0;journeyPhaseIndex=0;document.body.classList.add('journey-active');$('#journeyHud')?.classList.add('show');$('#journeyHud')?.setAttribute('aria-hidden','false');$('#journeyDot')?.classList.add('active');closeJourneys();
  const firstWorldIndex=WORLDS.findIndex(w=>w.id===journey.route[0][0]);
  if(!playing){if(firstWorldIndex!==current){selectWorld(firstWorldIndex);setTimeout(()=>{if(journeyActive&&!playing)startAudio();journeyResumeClock();updateJourneyHud()},850)}else{startAudio();journeyResumeClock()}}else{journeyResumeClock();if(firstWorldIndex!==current)selectWorld(firstWorldIndex)}
  clearInterval(journeyTimer);journeyTimer=setInterval(updateJourneyHud,500);updateJourneyHud();toast(`${journey.name} BEGUN`);
}
function skipJourneyPhase(){
  if(!journeyActive)return;const journey=journeyById(journeyHistory.last),elapsed=journeyCurrentElapsed(),phase=journeyPhaseAt(elapsed,journey),next=phase.index+1;if(next>=journey.route.length){completeJourney();return}
  const skipped=Math.max(0,phase.length-phase.within);journeyPauseClock();journeyElapsed+=skipped+.02;journeyResumeClock();journeyMoveToPhase(next,true);updateJourneyHud();
}
function endJourney(completed=false,message='JOURNEY ENDED'){
  if(!journeyActive)return;journeyPauseClock();clearInterval(journeyTimer);clearTimeout(journeyTransitionRetry);journeyTimer=null;journeyTransitionRetry=null;journeyActive=false;document.body.classList.remove('journey-active');$('#journeyHud')?.classList.remove('show');$('#journeyHud')?.setAttribute('aria-hidden','true');$('#journeyDot')?.classList.remove('active');journeyHistory.totalSeconds=(journeyHistory.totalSeconds||0)+journeyElapsed;if(completed)journeyHistory.completed=(journeyHistory.completed||0)+1;saveJourneyHistory();renderJourneyHistory();journeyElapsed=0;journeyLastTick=0;if(message)toast(message)
}
function completeJourney(){if(!journeyActive||journeyEnding)return;journeyEnding=true;const journey=journeyById(journeyHistory.last);endJourney(true,`${journey.name} COMPLETE`);playJourneyTone();journeyEnding=false}

const omegaBaseStartAudio=startAudio;startAudio=function(...args){const result=omegaBaseStartAudio(...args);if(journeyActive){journeyResumeClock();setTimeout(updateJourneyHud,60)}return result};
const omegaBaseStopAudio=stopAudio;stopAudio=function(...args){if(journeyActive)journeyPauseClock();return omegaBaseStopAudio(...args)};
$('#journeyBtn')?.addEventListener('click',openJourneys);$('#closeJourney')?.addEventListener('click',closeJourneys);$('#startJourney')?.addEventListener('click',startJourney);$('#journeyHudOpen')?.addEventListener('click',openJourneys);$('#journeySkip')?.addEventListener('click',skipJourneyPhase);$('#journeyStop')?.addEventListener('click',()=>endJourney(false));$('#journeyOverlay')?.addEventListener('click',e=>{if(e.target.id==='journeyOverlay')closeJourneys()});
window.addEventListener('keydown',e=>{if(e.key.toLowerCase()==='j'&&e.target.tagName!=='INPUT'&&e.target.tagName!=='SELECT')openJourneys();if(e.key==='Escape'&&document.body.classList.contains('journey-open'))closeJourneys()});
renderJourneySelection();


/* ===== MOBILE CORE HOTFIX 6.2 ===== */
(()=>{
  const root=document.documentElement;
  const body=document.body;
  const shell=document.querySelector('.shell');
  const overlay=document.getElementById('commandMenuOverlay');
  const openBtn=document.getElementById('commandMenuBtn');
  const closeBtn=document.getElementById('closeCommandMenu');

  function normalizeMobileLayout(){
    root.style.width='100%';
    root.style.maxWidth='100%';
    body.style.width='100%';
    body.style.maxWidth='100%';
    if(shell){
      shell.style.removeProperty('transform');
      shell.style.removeProperty('zoom');
    }
  }
  function openCommandMenu(){
    if(!overlay)return;
    overlay.classList.add('open');
    overlay.setAttribute('aria-hidden','false');
    body.classList.add('command-menu-open');
  }
  function closeCommandMenu(){
    if(!overlay)return;
    overlay.classList.remove('open');
    overlay.setAttribute('aria-hidden','true');
    body.classList.remove('command-menu-open');
  }
  normalizeMobileLayout();
  window.addEventListener('resize',normalizeMobileLayout,{passive:true});
  window.visualViewport?.addEventListener('resize',normalizeMobileLayout,{passive:true});
  openBtn?.addEventListener('click',openCommandMenu);
  closeBtn?.addEventListener('click',closeCommandMenu);
  overlay?.addEventListener('click',e=>{if(e.target===overlay)closeCommandMenu()});
  overlay?.querySelectorAll('[data-command-target]').forEach(button=>{
    button.addEventListener('click',()=>{
      const target=document.getElementById(button.dataset.commandTarget);
      closeCommandMenu();
      requestAnimationFrame(()=>target?.click());
    });
  });
  document.addEventListener('keydown',e=>{
    if(e.key==='Escape'&&overlay?.classList.contains('open')){e.preventDefault();closeCommandMenu()}
  });
})();
