const WORLDS=[
{id:'black-sun',code:'CHANNEL 01 / ORIGIN',title:'BLACK SUN',subtitle:'Low-frequency transmissions beneath a dead horizon.',genre:'DARK AMBIENT',bpm:48,color:'#e8c56b',color2:'#ff573d',track:'CORE DRIFT',tracks:['CORE DRIFT','DEAD HORIZON','SOLAR MEMORY','ASHEN SIGNAL'],osc:[55,82.4,110],layers:['VOID DRONE','SOLAR DUST','DISTANT CHOIR']},
{id:'aquatoc',code:'CHANNEL 02 / ABYSS',title:'AQUATOC',subtitle:'Submerged machinery dreaming below an endless ocean.',genre:'AQUATIC INDUSTRIAL',bpm:56,color:'#5de6ff',color2:'#1778ff',track:'PRESSURE TEMPLE',tracks:['PRESSURE TEMPLE','SONAR GHOST','BELOW THE THERMAL LINE','DROWNED MACHINERY'],osc:[43.65,65.4,130.8],layers:['DEEP CURRENT','SONAR GHOST','METAL TIDE']},
{id:'crimson-rain',code:'CHANNEL 03 / RED DISTRICT',title:'CRIMSON RAIN',subtitle:'Red light dissolving across wet streets after midnight.',genre:'NOCTURNAL SYNTH',bpm:74,color:'#ff334f',color2:'#8b102d',track:'AFTERGLOW SIGNAL',tracks:['AFTERGLOW SIGNAL','RED DISTRICT 03:17','RAIN ON GLASS','LAST TRAIN MEMORY'],osc:[49,73.42,146.83],layers:['MIDNIGHT CURRENT','CRIMSON RAIN','DISTANT CITY']},
{id:'mountain-blood',code:'CHANNEL 04 / HIGH RIDGE',title:'MOUNTAIN BLOOD',subtitle:'Meditative harmonics above the silent ridges.',genre:'SUMMIT MEDITATION',bpm:58,color:'#b9c9c7',color2:'#d7b26a',track:'SUMMIT OATH',tracks:['SUMMIT OATH','CLOUD PASSAGE','STONE HORIZON','HIGH RIDGE MEMORY','ANCESTRAL SKY'],osc:[73.42,110,146.83],layers:['RIDGE WIND','SUMMIT STRINGS','STONE PULSE','SUMMIT DRONE']},
{id:'starless-void',code:'CHANNEL 05 / DEEP SPACE',title:'STARLESS VOID',subtitle:'A transmission drifting beyond the last mapped constellation.',genre:'COSMIC AMBIENT',bpm:40,color:'#9f87ff',color2:'#48d7ff',track:'EVENT HORIZON',tracks:['EVENT HORIZON','PILOT MEMORY','ION VEIL','BEYOND THE LAST STAR'],osc:[36.7,55,92.5],layers:['ION CLOUD','DARK MATTER','PILOT MEMORY']}
,{id:'celestial-veil',code:'CHANNEL 06 / EMPYREAN',title:'CELESTIAL VEIL',subtitle:'Sacred transmissions beyond the veil of light.',genre:'HEAVENLY AMBIENT',bpm:52,color:'#f5e4ad',color2:'#fff8ef',track:'VEIL OF MERCY',tracks:['VEIL OF MERCY','HALO PROCESSION','IVORY SKY','LUMEN CHOIR'],osc:[130.81,261.63,392],layers:['CHOIR VEIL','HALO BELLS','STAR SHIMMER']},
{id:'sunroot-vale',code:'CHANNEL 07 / SUNROOT',title:'SUNROOT VALE',subtitle:"Ancient reeds and rooted sunlight along the warrior's path.",genre:'ANCIENT FOREST',bpm:58,color:'#a9d36a',color2:'#f1d87a',track:'PATH OF CEDAR',tracks:['PATH OF CEDAR','SUN THROUGH LEAVES','ANCIENT REED','ROOT OF RESOLVE','UNBROKEN CANOPY'],osc:[98,146.83,220],layers:['FOREST BREATH','ANCIENT REED','ROOT RESONANCE','SUNLIT KOTO']}
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
  'mountain-blood':{states:['BASE RIDGE','CLOUD PASS','SUMMIT LIGHT','ANCESTRAL SKY'],messages:['Cold air opens the first mountain path.','The clouds fall beneath the listening stone.','The summit enters a clear and ancient silence.']},
  'starless-void':{states:['COLD DRIFT','GRAVITY WELL','EVENT HORIZON','SINGULARITY'],messages:['The vessel is no longer drifting alone.','Gravity bends the transmission inward.','Distance has collapsed into a single signal.']},
  'celestial-veil':{states:['VEILED LIGHT','FIRST HALO','ASCENSION','EMPYREAN OPEN'],messages:['A first halo forms beyond the veil.','The luminous chambers begin to sing.','The empyrean stands fully open.']},
  'sunroot-vale':{states:['ROOTED SILENCE','SUNRISE PATH','ANCIENT CANOPY','UNBROKEN SUN'],messages:['Sunlight reaches the old warrior path.','The bamboo answers with an older breath.','The whole canopy stands unbroken beneath the sun.']}
};
const EVOLUTION_NORMAL=[0,300,900,1800];
const EVOLUTION_TEST=[0,20,50,90];

const $=s=>document.querySelector(s);const $$=s=>[...document.querySelectorAll(s)];
const settings=Object.assign({intro:true,reduced:false,remember:true,shuffleStart:false,rare:true,evolution:true,hybrid:true,musicDirector:true,performance:'auto',timeMode:true,weather:true,ritualStop:true,rareEvents:true,defaultTimer:0},JSON.parse(localStorage.srSettings||'{}'));
const LISTENING_MODES={balanced:{label:'SERENITY',audio:'PURE 48 KHZ',events:'SPARSE',master:.82,eq:[.35,-.75,-1.35],layers:[1,.9,.82,.72]},focus:{label:'DEEP FOCUS',audio:'CENTERED',events:'MINIMAL',master:.75,eq:[.1,-.9,-2.2],layers:[1,.72,.52,.48]},sleep:{label:'DEEP REST',audio:'WARM VEIL',events:'MUTED',master:.62,eq:[.15,-1.35,-4.4],layers:[1,.52,.28,.3]},cinematic:{label:'IMMERSIVE',audio:'WIDE CALM',events:'OPEN',master:.88,eq:[.7,-.45,-.8],layers:[1.05,1,.94,.88]}};
let listeningMode=localStorage.srListeningMode&&LISTENING_MODES[localStorage.srListeningMode]?localStorage.srListeningMode:'balanced';const requestedWorld=new URLSearchParams(location.search).get('world');let current=Math.max(0,WORLDS.findIndex(w=>w.id===requestedWorld));if(!requestedWorld)current=settings.remember?Number(localStorage.srWorld||0):0;let playing=false,audioCtx,master,masterCompressor,masterLimiter,masterDcBlock,masterComfortPresence,masterComfortAir,masterSafetyLowpass,analyser,filters=[],sources=[],layerGains=[],noiseNodes=[],engineNodes=[],engineTimers=[],startedAt=0,timerEnd=0,timerHandle,deferredPrompt,lang='de',switching=false,transmissionTimer=null,trackIndex=0,shuffleMode=settings.shuffleStart||localStorage.srShuffle==='1',favorites=new Set(JSON.parse(localStorage.srFavorites||'[]'));let ambientMode=false,ambientHideTimer=null,ambientPointerX=0,ambientPointerY=0,ambientWakeLock=null,rareTimer=null,rareAutoClose=null,rareActive=false,evolutionTimer=null,evolutionPhase=0,evolutionStartedAt=0,evolutionSignalTimer=null,evolutionVoiceGains=[];let sampleBuffers={},sampleLoadPromise=null,hybridSources=[],hybridNodes=[],hybridTimers=[],hybridGeneration=0;let musicDirectorTimer=null,musicDirectorPhase=-1,musicDirectorWorld=-1,musicDirectorCycle=0,sunrootReedCue=null,sunrootLegacyTimer=null;const evolutionTestMode=new URLSearchParams(location.search).get('evo')==='test';const loreFound=new Set(JSON.parse(localStorage.srLore||'[]'));const scannerFound=new Set(JSON.parse(localStorage.srScannerFinds||'[]'));let scannerActive=false,scannerTimer=null,scannerFrameTimer=null,scannerWorldIndex=0,scannerToneNodes=[];let weatherTimer=null,weatherState=null,weatherAudioGain=null,weatherAudioFilter=null,weatherManualOffset=0;const weatherTestMode=new URLSearchParams(location.search).get('weather')==='test';let ritualActive=false,ritualEnding=false,ritualDuration=600,ritualStartedAt=0,ritualTimer=null,ritualPhase=-1,ritualBus=null,ritualNodes=[],ritualSources=[],ritualSelectedMinutes=10;const ritualTestMode=new URLSearchParams(location.search).get('ritual')==='test';const ritualHistory=Object.assign({completed:0,totalSeconds:0},JSON.parse(localStorage.srRitualHistory||'{}'));

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
function playScannerSweep(duration=9){if(!audioCtx)return;const t=audioCtx.currentTime,out=audioCtx.createGain(),osc=audioCtx.createOscillator(),noise=makeNoise('white',duration+.3),bp=audioCtx.createBiquadFilter(),ng=audioCtx.createGain(),pan=audioCtx.createStereoPanner(),lfo=audioCtx.createOscillator(),depth=audioCtx.createGain();out.gain.setValueAtTime(.0001,t);out.gain.linearRampToValueAtTime(.010*Math.max(.25,state.volume),t+.5);out.gain.setValueAtTime(.008*Math.max(.25,state.volume),t+duration-.5);out.gain.exponentialRampToValueAtTime(.0001,t+duration);osc.type='sine';osc.frequency.setValueAtTime(118,t);osc.frequency.exponentialRampToValueAtTime(760,t+duration);bp.type='bandpass';bp.frequency.setValueAtTime(540,t);bp.frequency.exponentialRampToValueAtTime(2600,t+duration);bp.Q.value=4.2;ng.gain.value=.0025*Math.max(.25,state.volume);lfo.frequency.value=.24;depth.gain.value=.78;lfo.connect(depth).connect(pan.pan);osc.connect(out);noise.connect(bp).connect(ng).connect(out);out.connect(pan).connect(filters[0]);osc.start(t);osc.stop(t+duration+.05);noise.start(t);noise.stop(t+duration+.05);lfo.start(t);lfo.stop(t+duration+.05);scannerToneNodes=[out,osc,noise,bp,ng,pan,lfo,depth]}
function playScannerLock(){if(!audioCtx)return;if(sampleBuffers.bell)playHybridSample('bell',{gain:.16,filterType:'lowpass',frequency:10400,fadeIn:.2,role:'scanner-bloom'})}
function completeScanner(){clearInterval(scannerFrameTimer);scannerFrameTimer=null;scannerActive=false;document.body.classList.remove('scanner-running');stopScannerTone();const w=WORLDS[scannerWorldIndex],list=SCANNER_SIGNALS[w.id]||[],unseen=list.filter(x=>!scannerFound.has(x.id)),signal=unseen.length?unseen[Math.floor(Math.random()*unseen.length)]:list[Math.floor(Math.random()*Math.max(1,list.length))],isNew=signal&&!scannerFound.has(signal.id),result=$('#scannerResult');if(signal){if(isNew){scannerFound.add(signal.id);saveScannerMemory()}const f=scannerFrequencyLabel(signal.frequency);result.className=`scanner-result ${isNew?'locked':'known'}`;result.innerHTML=`<small>${isNew?'NEW FREQUENCY LOCKED':'KNOWN SIGNATURE REACQUIRED'} · ${w.code}</small><h3>${signal.title}</h3><div class="scanner-result-meta"><b>${signal.code}</b><span>${f.value} ${f.unit}</span></div><p>${signal.text}</p>`;$('#scannerFrequency').textContent=f.value;$('#scannerUnit').textContent=f.unit;playScannerLock();toast(isNew?`SIGNAL RECOVERED — ${signal.title}`:`WORLD BAND COMPLETE — ${w.title}`)}else{result.className='scanner-result empty';result.innerHTML='<small>NO CARRIER</small><h3>THE BAND REMAINS SILENT</h3><p>Return after the world transmission has stabilized.</p>'}$('#scannerProgressBar').style.width='100%';const b=$('#startScanner');b.disabled=false;b.textContent=unseen.length>1?'SCAN NEXT SIGNATURE':'SCAN WORLD BAND';renderScannerArchive()}
function startScanner(){if(scannerActive)return;scannerWorldIndex=current;if(!playing)startAudio();ensureAudio();audioCtx.resume();scannerActive=true;document.body.classList.add('scanner-running');updateScannerWorld(scannerWorldIndex);const result=$('#scannerResult');result.className='scanner-result scanning';result.innerHTML=`<small>WORLD BAND LOCKED · ${WORLDS[scannerWorldIndex].code}</small><h3>SEARCHING FOR BURIED CARRIERS</h3><p>Filtering atmospheric noise and comparing harmonic drift…</p>`;const b=$('#startScanner');b.disabled=true;b.textContent='SCANNING…';const duration=new URLSearchParams(location.search).get('scan')==='test'?2600:9000,start=performance.now(),signals=SCANNER_SIGNALS[WORLDS[scannerWorldIndex].id]||[],min=Math.min(...signals.map(x=>x.frequency)),max=Math.max(...signals.map(x=>x.frequency));playScannerSweep(duration/1000);scannerFrameTimer=setInterval(()=>{const p=Math.min(1,(performance.now()-start)/duration),eased=1-Math.pow(1-p,2.2),value=min+(max-min)*(eased*.82+Math.random()*.18),f=scannerFrequencyLabel(Math.max(min,Math.min(max,value)));$('#scannerFrequency').textContent=f.value;$('#scannerUnit').textContent=f.unit;$('#scannerProgressBar').style.width=`${p*100}%`},80);scannerTimer=setTimeout(completeScanner,duration)}

const OPERATOR_MEMORY_DEFAULT={callsign:'SHINRA',totalMs:0,longestMs:0,lastSessionMs:0,sessions:0,worldMs:{},visits:{},firstContact:{},lastContact:0};
function loadOperatorMemory(){try{const saved=JSON.parse(localStorage.srOperatorMemory||'{}');return {...OPERATOR_MEMORY_DEFAULT,...saved,worldMs:{...saved.worldMs},visits:{...saved.visits},firstContact:{...saved.firstContact}}}catch{return {...OPERATOR_MEMORY_DEFAULT,worldMs:{},visits:{},firstContact:{}}}}
let operatorMemory=loadOperatorMemory(),operatorSessionStart=0,operatorLastTick=0,operatorMemoryTimer=null,operatorSaveCounter=0;
const state={eq:JSON.parse(localStorage.srEq||'{"bass":0,"mid":0,"treble":0}'),layers:JSON.parse(localStorage.srLayers||'[0.70,0.48,0.34,0.30]'),volume:Number(localStorage.srVol||.66)};
if(localStorage.srAudioGeneration!=='8.1'){state.layers=[.70,.40,.34,.30];state.volume=Math.max(.58,Math.min(.68,state.volume||.64));localStorage.srLayers=JSON.stringify(state.layers);localStorage.srVol=String(state.volume);localStorage.srAudioGeneration='8.1'}
const APP_CACHE='shinra-omega-source-identity-9.0.0';
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
  if($('#diagSamples'))$('#diagSamples').textContent=`${Object.keys(sampleBuffers).length} / ${HYBRID_SAMPLE_TOTAL}`;
  if($('#diagSampleDetail'))$('#diagSampleDetail').textContent=settings.hybrid===false?'Hybrid layer disabled':Object.keys(sampleBuffers).length===HYBRID_SAMPLE_TOTAL?'All textures decoded':'Textures load when audio begins';
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
  $('#diagUpdate').textContent=waitingWorker?'READY':'CURRENT';$('#diagUpdateDetail').textContent=waitingWorker?'New core waiting for installation':'Source Identity Audio Core 9.0.0 active';applyDynamicTime(false);
  lastDiagnosticsReport=[
    'SHINRA OMEGA RADIO · SYSTEM REPORT','VERSION: 9.0.0',`PROFILE: ${(settings.performance||'auto').toUpperCase()} -> ${performanceProfile.toUpperCase()}`,`PROFILE REASON: ${performanceReason}`,`FPS: ${currentFps}`,`AUDIO: ${audioCtx?`${audioCtx.state}, ${audioCtx.sampleRate} Hz`:'not started'}`,`ACTIVE NODES: ${activeAudioNodeCount()}`,`SAMPLES: ${Object.keys(sampleBuffers).length}/${HYBRID_SAMPLE_TOTAL}`,`NETWORK: ${navigator.onLine?'online':'offline'}${connection?.effectiveType?`, ${connection.effectiveType}`:''}`,`DEVICE: ${memory}, ${cores}`,`DISPLAY: ${innerWidth}x${innerHeight}, DPR ${devicePixelRatio}`,`BATTERY: ${batteryInfo?`${Math.round(batteryInfo.level*100)}%, ${batteryInfo.charging?'charging':'discharging'}`:'API unavailable'}`,`SERVICE WORKER: ${worker}`,`CACHES: ${cacheNames.join(', ')||'none'}`,`MOTION: ${settings.reduced?'quiet':'full'}`,`TIME CYCLE: ${settings.timeMode===false?'disabled':currentTimePhase}`,`MUSIC DIRECTOR: ${settings.musicDirector===false?'disabled':((directorDefinition().labels||[])[Math.max(0,musicDirectorPhase)]||'standby')}`,`GENERATED: ${new Date().toISOString()}`
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
function selectWorld(i){const next=(i+WORLDS.length)%WORLDS.length;if(next===current||switching)return;switching=true;if(playing)stopMusicDirector(false);showWorldGate(next);if(!playing){setTimeout(()=>{setCurrentWorld(next);hideWorldGate();switching=false},520);return}$('#deck')?.classList.add('switching');const now=audioCtx.currentTime;master.gain.cancelScheduledValues(now);master.gain.setValueAtTime(master.gain.value,now);master.gain.linearRampToValueAtTime(0.0001,now+.65);setTimeout(()=>{operatorTick(true);teardownAudio();setCurrentWorld(next);master.gain.setValueAtTime(.0001,audioCtx.currentTime);startAudio(true);master.gain.linearRampToValueAtTime(effectiveVolume(),audioCtx.currentTime+1.15);setTimeout(()=>{hideWorldGate();$('#deck')?.classList.remove('switching');switching=false},620)},690)}


// ===== WORLD WEATHER SYSTEM 5.5 =====
const WEATHER_PROFILES={
  'black-sun':{conditions:[['ASH VEIL','A slow wall of ash is crossing the dead horizon.'],['CORONA WIND','Heat currents are bending around the black core.'],['SILENT ECLIPSE','The atmosphere has fallen into an unnatural stillness.']],metrics:[['ASH DENSITY',18,94,'%'],['HORIZON WIND',4,31,' km/h'],['CORONA FLUX',220,780,' μR']]},
  'aquatoc':{conditions:[['DEEP CURRENT','A cold current is moving beneath the pressure temple.'],['PRESSURE BLOOM','The abyss is compressing around the signal field.'],['SONAR FOG','Suspended minerals are scattering the long-range pings.']],metrics:[['PRESSURE',42,186,' MPa'],['CURRENT',0.4,4.8,' kn'],['SONAR RANGE',1.2,8.6,' km']]},
  'crimson-rain':{conditions:[['NEON DOWNPOUR','Red rain is washing the district into liquid light.'],['STATIC STORM','Electrical noise is crawling across the rooftops.'],['GLASS MIST','Warm vapor is rising from the midnight streets.']],metrics:[['RAINFALL',16,88,' mm/h'],['NEON STATIC',12,96,'%'],['STREET TEMP',7,24,'°C']]},
  'mountain-blood':{conditions:[['SUMMIT WIND','Clear mountain air is crossing the upper passes.'],['CLOUD DESCENT','A slow cloud sea is moving below the ridge.'],['ANCESTRAL CALM','The summit has entered a rare harmonic silence.']],metrics:[['WIND FORCE',6,48,' km/h'],['CLOUD LINE',18,92,'%'],['RIDGE TEMP',-12,12,'°C']]},
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

function updateWorld(){const w=WORLDS[current];document.body.dataset.world=w.id;document.documentElement.style.setProperty('--accent',w.color);document.documentElement.style.setProperty('--accent2',w.color2);document.documentElement.style.setProperty('--glow',hexAlpha(w.color,.26));$('#worldCode').textContent=w.code;$('#worldTitle').textContent=w.title;$('#worldSubtitle').textContent=w.subtitle;$('#genreTag').textContent=w.genre;$('#bpmTag').textContent=w.bpm+' BPM';$('#modeTag').textContent=settings.musicDirector===false?'PURE LAYERS':'DIRECTED';$('#nowTitle').textContent=w.title+' — '+(w.tracks?.[trackIndex]||w.track);updateMasterControls();$('#sleepCode').textContent=w.code;$('#sleepTitle').textContent=w.title;renderWorlds();renderLayers();updateMedia();syncAmbientHud();applyDynamicTime(false);updateWeatherUI(true);if(!playing){evolutionPhase=0;document.body.dataset.evolution='0';updateEvolutionReadout(0)}if(document.body.classList.contains('scanner-open')&&!scannerActive)updateScannerWorld(current);if(document.body.classList.contains('share-open'))renderShareSignal();updateFusionUI()}
function hexAlpha(hex,a){const h=hex.replace('#','');return `rgba(${parseInt(h.slice(0,2),16)},${parseInt(h.slice(2,4),16)},${parseInt(h.slice(4,6),16)},${a})`}

function getLayerScale(worldIndex,i){const scales=[[.145,.17,.095],[.13,.12,.09],[.1,.13,.085],[.09,.08,.048,.075],[.095,.047,.03],[.1,.075,.052],[.082,.12,.062,.068]];return (scales[worldIndex]||[.11,.055,.035])[i]||.05}
function evolutionMultiplier(i){if(settings.evolution===false)return 1;const matrix=[[1,1,1,1],[1.05,1.04,1.08,1.05],[1.1,1.12,1.16,1.11],[1.16,1.18,1.25,1.18]];return (matrix[evolutionPhase]||matrix[0])[i]||1}
function targetLayerGain(i){return (state.layers[i]??.3)*getLayerScale(current,i)*evolutionMultiplier(i)*(listeningModeConfig().layers[i]??1)*musicDirectorLayerMultiplier(i)}
function evolutionDefinition(){return EVOLUTION[WORLDS[current].id]||{states:['DORMANT','AWAKENING','ASCENDANT','MYTHIC'],messages:['The signal changes.','The world deepens.','The final state is open.']}}
function evolutionThresholds(){return evolutionTestMode?EVOLUTION_TEST:EVOLUTION_NORMAL}
function formatEvolutionTime(sec){return `${String(Math.floor(sec/60)).padStart(2,'0')}:${String(Math.max(0,Math.floor(sec%60))).padStart(2,'0')}`}
function updateEvolutionReadout(elapsed=0){const def=evolutionDefinition(),thresholds=evolutionThresholds(),phase=settings.evolution===false?0:evolutionPhase,stateName=def.states[phase]||def.states[0];if($('#evolutionState'))$('#evolutionState').textContent=stateName;if($('#ambientEvolution'))$('#ambientEvolution').textContent=`STATE · ${stateName}`;if($('#sleepEvolution'))$('#sleepEvolution').textContent=`WORLD STATE · ${stateName}`;let progress=0,nextText=settings.evolution===false?'EVOLUTION DISABLED':playing?'FINAL STATE REACHED':'START TRANSMISSION';if(playing&&settings.evolution!==false&&phase<thresholds.length-1){const start=thresholds[phase],end=thresholds[phase+1];progress=Math.max(0,Math.min(1,(elapsed-start)/(end-start)));nextText=`NEXT STATE IN ${formatEvolutionTime(end-elapsed)}`}else if(phase===thresholds.length-1)progress=1;if($('#evolutionMeter'))$('#evolutionMeter').style.width=`${progress*100}%`;if($('#evolutionNext'))$('#evolutionNext').textContent=nextText}
function showEvolutionSignal(phase){const def=evolutionDefinition(),panel=$('#evolutionSignal');if(!panel||phase<1)return;$('#evolutionSignalTitle').textContent=def.states[phase];$('#evolutionSignalText').textContent=def.messages[phase-1]||'The transmission is changing.';panel.style.setProperty('--evolution-color',WORLDS[current].color);panel.classList.add('show');panel.setAttribute('aria-hidden','false');clearTimeout(evolutionSignalTimer);evolutionSignalTimer=setTimeout(()=>{panel.classList.remove('show');panel.setAttribute('aria-hidden','true')},6500)}
function playEvolutionTone(phase){if(!audioCtx||!playing||phase<1)return;playOmegaSignature(current,.20+phase*.055,.15)}
function addEvolutionVoice(phase){return}
function applyEvolutionAudio(){if(!audioCtx)return;layerGains.forEach((g,i)=>g?.gain?.setTargetAtTime(targetLayerGain(i),audioCtx.currentTime,.8));applyEq()}
function setEvolutionPhase(phase,announce=true){phase=Math.max(0,Math.min(3,phase));if(phase===evolutionPhase&&document.body.dataset.evolution===String(phase)){updateEvolutionReadout(playing?(Date.now()-evolutionStartedAt)/1000:0);return}evolutionPhase=phase;document.body.dataset.evolution=String(phase);applyEvolutionAudio();if(phase>0&&playing){addEvolutionVoice(phase);if(announce){playEvolutionTone(phase);showEvolutionSignal(phase);toast(`WORLD EVOLVED — ${evolutionDefinition().states[phase]}`)}}syncAmbientHud();updateEvolutionReadout(playing?(Date.now()-evolutionStartedAt)/1000:0)}
function updateEvolution(){if(!playing||settings.evolution===false){updateEvolutionReadout(0);return}const elapsed=(Date.now()-evolutionStartedAt)/1000,thresholds=evolutionThresholds();let phase=0;for(let i=thresholds.length-1;i>=0;i--){if(elapsed>=thresholds[i]){phase=i;break}}if(phase!==evolutionPhase)setEvolutionPhase(phase,true);else updateEvolutionReadout(elapsed)}
function startEvolutionCycle(){clearInterval(evolutionTimer);evolutionStartedAt=Date.now();evolutionVoiceGains=[];evolutionPhase=-1;setEvolutionPhase(0,false);updateEvolution();evolutionTimer=setInterval(updateEvolution,1000)}
function stopEvolutionCycle(){clearInterval(evolutionTimer);evolutionTimer=null;evolutionStartedAt=0;evolutionVoiceGains.forEach(g=>{try{g.gain.setTargetAtTime(.0001,audioCtx.currentTime,.25)}catch{}});evolutionVoiceGains=[];evolutionPhase=0;document.body.dataset.evolution='0';updateEvolutionReadout(0)}

const HYBRID_SAMPLE_FILES={
  forest:'source-sunroot-vale-nature.ogg',rain:'source-crimson-rain-nature.ogg',ocean:'source-aquatoc-nature.ogg',radio:'source-starless-void-identity.ogg',wood:'source-sunroot-vale-identity.ogg',bell:'source-celestial-veil-signature.ogg',bamboo:'source-sunroot-vale-identity.ogg',
  ashWind:'source-black-sun-nature.ogg',metalResonance:'source-black-sun-identity.ogg',bubbleField:'source-aquatoc-identity.ogg',pressureCrack:'source-aquatoc-transition.ogg',
  neonHum:'source-crimson-rain-identity.ogg',cityDistant:'source-crimson-rain-nature.ogg',mountainString:'source-mountain-blood-identity.ogg',emberFire:'source-black-sun-nature.ogg',summitWind:'source-mountain-blood-nature.ogg',summitString:'source-mountain-blood-melody.ogg',summitDrone:'source-mountain-blood-foundation.ogg',summitBell:'source-mountain-blood-signature.ogg',
  cosmicStatic:'source-starless-void-nature.ogg',ionPulse:'source-starless-void-signature.ogg',choirAir:'source-celestial-veil-identity.ogg',glassChime:'source-celestial-veil-signature.ogg',cedarLeaves:'source-sunroot-vale-nature.ogg',koto:'source-sunroot-vale-melody.ogg',
  omegaBlackSunBed:'source-black-sun-foundation.ogg',omegaBlackSunMotion:'source-black-sun-identity.ogg',omegaBlackSunNature:'source-black-sun-nature.ogg',omegaBlackSunMelody:'source-black-sun-melody.ogg',omegaBlackSunSignature:'source-black-sun-signature.ogg',omegaBlackSunTransition:'source-black-sun-transition.ogg',
  omegaAquatocBed:'source-aquatoc-foundation.ogg',omegaAquatocMotion:'source-aquatoc-identity.ogg',omegaAquatocNature:'source-aquatoc-nature.ogg',omegaAquatocMelody:'source-aquatoc-melody.ogg',omegaAquatocSignature:'source-aquatoc-signature.ogg',omegaAquatocTransition:'source-aquatoc-transition.ogg',
  omegaCrimsonRainBed:'source-crimson-rain-foundation.ogg',omegaCrimsonRainMotion:'source-crimson-rain-identity.ogg',omegaCrimsonRainNature:'source-crimson-rain-nature.ogg',omegaCrimsonRainMelody:'source-crimson-rain-melody.ogg',omegaCrimsonRainSignature:'source-crimson-rain-signature.ogg',omegaCrimsonRainTransition:'source-crimson-rain-transition.ogg',
  omegaMountainBloodBed:'source-mountain-blood-foundation.ogg',omegaMountainBloodMotion:'source-mountain-blood-identity.ogg',omegaMountainBloodNature:'source-mountain-blood-nature.ogg',omegaMountainBloodMelody:'source-mountain-blood-melody.ogg',omegaMountainBloodSignature:'source-mountain-blood-signature.ogg',omegaMountainBloodTransition:'source-mountain-blood-transition.ogg',
  omegaStarlessVoidBed:'source-starless-void-foundation.ogg',omegaStarlessVoidMotion:'source-starless-void-identity.ogg',omegaStarlessVoidNature:'source-starless-void-nature.ogg',omegaStarlessVoidMelody:'source-starless-void-melody.ogg',omegaStarlessVoidSignature:'source-starless-void-signature.ogg',omegaStarlessVoidTransition:'source-starless-void-transition.ogg',
  omegaCelestialVeilBed:'source-celestial-veil-foundation.ogg',omegaCelestialVeilMotion:'source-celestial-veil-identity.ogg',omegaCelestialVeilNature:'source-celestial-veil-nature.ogg',omegaCelestialVeilMelody:'source-celestial-veil-melody.ogg',omegaCelestialVeilSignature:'source-celestial-veil-signature.ogg',omegaCelestialVeilTransition:'source-celestial-veil-transition.ogg',
  omegaSunrootValeBed:'source-sunroot-vale-foundation.ogg',omegaSunrootValeMotion:'source-sunroot-vale-identity.ogg',omegaSunrootValeNature:'source-sunroot-vale-nature.ogg',omegaSunrootValeMelody:'source-sunroot-vale-melody.ogg',omegaSunrootValeSignature:'source-sunroot-vale-signature.ogg',omegaSunrootValeTransition:'source-sunroot-vale-transition.ogg'
};
const HYBRID_SAMPLE_TOTAL=Object.keys(HYBRID_SAMPLE_FILES).length;
function updateHybridStatus(text){const el=$('#audioEngineLabel');if(el)el.textContent=text}
async function loadSampleBank(){
  if(sampleLoadPromise)return sampleLoadPromise;
  updateHybridStatus('LOADING SOURCE IDENTITY BANK');
  const byUrl={};
  sampleLoadPromise=Promise.all(Object.entries(HYBRID_SAMPLE_FILES).map(async([key,url])=>{
    try{if(!byUrl[url])byUrl[url]=fetch(url).then(response=>{if(!response.ok)throw new Error(`${response.status}`);return response.arrayBuffer()}).then(data=>audioCtx.decodeAudioData(data));sampleBuffers[key]=await byUrl[url]}catch(error){console.warn('World identity sample unavailable',key,error)}
  })).then(()=>{const count=Object.keys(sampleBuffers).length;updateHybridStatus(count?`SOURCE IDENTITY 48K · ${count}/${HYBRID_SAMPLE_TOTAL}`:'AUDIO BANK UNAVAILABLE');return sampleBuffers});
  return sampleLoadPromise;
}
function stopHybridLayer(){hybridGeneration++;hybridTimers.forEach(clearTimeout);hybridTimers=[];hybridSources.forEach(source=>{try{source.stop()}catch{}try{source.disconnect()}catch{}});hybridSources=[];hybridNodes.forEach(node=>{try{node.disconnect()}catch{}});hybridNodes=[]}
function sampleDestination(options={}){const gain=audioCtx.createGain(),pan=audioCtx.createStereoPanner(),filter=audioCtx.createBiquadFilter();const targetGain=options.gain??.02;gain.gain.setValueAtTime(options.fadeIn?0:targetGain,audioCtx.currentTime);pan.pan.value=options.pan??0;filter.type=options.filterType||'lowpass';filter.frequency.value=options.frequency||12000;filter.Q.value=options.q||.2;const destination=Number.isInteger(options.layerIndex)&&layerGains[options.layerIndex]?layerGains[options.layerIndex]:filters[0];filter.connect(gain).connect(pan).connect(destination);if(options.fadeIn)gain.gain.linearRampToValueAtTime(targetGain,audioCtx.currentTime+Math.max(.05,options.fadeIn));hybridNodes.push(filter,gain,pan);return{filter,gain,pan,targetGain}}
function playHybridSample(name,options={}){const buffer=sampleBuffers[name];if(!buffer||!audioCtx||!playing)return null;const source=audioCtx.createBufferSource(),route=sampleDestination(options);source.buffer=buffer;source.loop=!!options.loop;source.playbackRate.value=options.rate||1;source.detune.value=options.detune||0;source.connect(route.filter);const offset=source.loop&&options.randomOffset!==false?Math.random()*Math.max(.01,buffer.duration-.05):Math.max(0,options.offset||0);source.start(audioCtx.currentTime+(options.delay||0),offset);source._omegaRoute=route;source._omegaRole=options.role||'';hybridSources.push(source);if(!source.loop)source.onended=()=>{hybridSources=hybridSources.filter(s=>s!==source);try{source.disconnect()}catch{}try{route.filter.disconnect();route.gain.disconnect();route.pan.disconnect()}catch{}};return source}
function scheduleHybridOneShot(name,minSeconds,maxSeconds,options={}){if(settings.musicDirector!==false)return;const generation=hybridGeneration;const fire=()=>{if(generation!==hybridGeneration||!playing||settings.hybrid===false)return;playHybridSample(name,{...options,pan:(options.randomPan?((Math.random()-.5)*(options.randomPan*2)):(options.pan||0)),rate:(options.rate||1)*(options.rateVariation?1+(Math.random()-.5)*options.rateVariation:1)});hybridTimers.push(setTimeout(fire,(minSeconds+Math.random()*(maxSeconds-minSeconds))*1000))};hybridTimers.push(setTimeout(fire,(options.firstDelay??minSeconds*.5)*1000))}
function scheduleSunlitKoto(evolutionBoost=1){
  if(settings.musicDirector!==false)return;
  const generation=hybridGeneration,scale=[.75,.842,.946,1,1.125,1.263,1.5];
  const motifs=[[3,4,2],[0,2,3],[4,3,1],[2,5,4,3],[0,3,2],[5,4,2]];let motifIndex=Math.floor(Math.random()*motifs.length);
  const playPhrase=()=>{
    if(generation!==hybridGeneration||!playing||settings.hybrid===false||current!==6)return;
    const level=Math.max(.05,state.layers[3]??.3),motif=motifs[motifIndex++%motifs.length];
    motif.forEach((noteIndex,i)=>playHybridSample('koto',{gain:(i===0?.46:.29)*evolutionBoost,filterType:'lowpass',frequency:3900,rate:scale[noteIndex],pan:(i%2?1:-1)*(.08+Math.random()*.14),delay:i*(.46+Math.random()*.12),layerIndex:3}));
    hybridTimers.push(setTimeout(playPhrase,(8+Math.random()*5.5)*(1.12-.18*level)*1000));
  };
  hybridTimers.push(setTimeout(playPhrase,3400));
}

const OMEGA_AUDIO_WORLDS={
  'black-sun':{bed:'omegaBlackSunBed',motion:'omegaBlackSunMotion',nature:'omegaBlackSunNature',melody:'omegaBlackSunMelody',signature:'omegaBlackSunSignature',transition:'omegaBlackSunTransition',bedGain:1.22,motionGain:.82,natureGain:.62,melodyGain:.76,signatureGain:1.0,transitionGain:.82,bedFilter:8200,motionFilter:5400,natureFilter:4200,melodyFilter:7600},
  aquatoc:{bed:'omegaAquatocBed',motion:'omegaAquatocMotion',nature:'omegaAquatocNature',melody:'omegaAquatocMelody',signature:'omegaAquatocSignature',transition:'omegaAquatocTransition',bedGain:1.18,motionGain:.88,natureGain:.66,melodyGain:.78,signatureGain:.96,transitionGain:.78,bedFilter:9200,motionFilter:7600,natureFilter:7200,melodyFilter:9200},
  'crimson-rain':{bed:'omegaCrimsonRainBed',motion:'omegaCrimsonRainMotion',nature:'omegaCrimsonRainNature',melody:'omegaCrimsonRainMelody',signature:'omegaCrimsonRainSignature',transition:'omegaCrimsonRainTransition',bedGain:1.12,motionGain:.72,natureGain:.56,melodyGain:.84,signatureGain:.94,transitionGain:.76,bedFilter:10800,motionFilter:9400,natureFilter:9800,melodyFilter:9600},
  'mountain-blood':{bed:'omegaMountainBloodBed',motion:'omegaMountainBloodMotion',nature:'omegaMountainBloodNature',melody:'omegaMountainBloodMelody',signature:'omegaMountainBloodSignature',transition:'omegaMountainBloodTransition',bedGain:1.14,motionGain:.76,natureGain:.58,melodyGain:.80,signatureGain:.96,transitionGain:.82,bedFilter:10600,motionFilter:9800,natureFilter:11200,melodyFilter:9200},
  'starless-void':{bed:'omegaStarlessVoidBed',motion:'omegaStarlessVoidMotion',nature:'omegaStarlessVoidNature',melody:'omegaStarlessVoidMelody',signature:'omegaStarlessVoidSignature',transition:'omegaStarlessVoidTransition',bedGain:1.22,motionGain:.62,natureGain:.34,melodyGain:.58,signatureGain:1.02,transitionGain:.88,bedFilter:7200,motionFilter:5600,natureFilter:8200,melodyFilter:7600},
  'celestial-veil':{bed:'omegaCelestialVeilBed',motion:'omegaCelestialVeilMotion',nature:'omegaCelestialVeilNature',melody:'omegaCelestialVeilMelody',signature:'omegaCelestialVeilSignature',transition:'omegaCelestialVeilTransition',bedGain:1.06,motionGain:.76,natureGain:.48,melodyGain:.72,signatureGain:.92,transitionGain:.76,bedFilter:12800,motionFilter:11800,natureFilter:13200,melodyFilter:11600},
  'sunroot-vale':{bed:'omegaSunrootValeBed',motion:'omegaSunrootValeMotion',nature:'omegaSunrootValeNature',melody:'omegaSunrootValeMelody',signature:'omegaSunrootValeSignature',transition:'omegaSunrootValeTransition',bedGain:1.12,motionGain:.80,natureGain:.56,melodyGain:.76,signatureGain:.94,transitionGain:.78,bedFilter:10800,motionFilter:9600,natureFilter:11200,melodyFilter:9800}
};
function omegaWorldAudio(index=current){return OMEGA_AUDIO_WORLDS[WORLDS[index]?.id]||OMEGA_AUDIO_WORLDS['black-sun']}
function playOmegaSignature(index=current,scale=1,delay=0){const cfg=omegaWorldAudio(index);if(!cfg||!sampleBuffers[cfg.signature])return null;return playHybridSample(cfg.signature,{gain:cfg.signatureGain*scale*musicDirectorCueGain(),filterType:'lowpass',frequency:index===5?13200:10400,pan:0,rate:1,delay,fadeIn:.55,role:'bloom'})}
function playOmegaTransition(index=current,scale=1,delay=0){const cfg=omegaWorldAudio(index);if(!cfg||!sampleBuffers[cfg.transition])return null;return playHybridSample(cfg.transition,{gain:cfg.transitionGain*scale,filterType:'lowpass',frequency:index===5?13600:10800,pan:0,rate:1,delay,fadeIn:.7,role:'transition'})}
function startOmegaWorldStems(worldIndex=current,evolutionBoost=1){const cfg=omegaWorldAudio(worldIndex);if(!cfg)return;const mode=listeningMode==='sleep'?.62:listeningMode==='focus'?.80:listeningMode==='cinematic'?1.06:1;playHybridSample(cfg.bed,{loop:true,gain:cfg.bedGain*evolutionBoost*mode,filterType:'lowpass',frequency:cfg.bedFilter,q:.18,rate:1,pan:0,fadeIn:9,randomOffset:false,layerIndex:0,role:'foundation'});playHybridSample(cfg.motion,{loop:true,gain:cfg.motionGain*evolutionBoost*mode,filterType:'lowpass',frequency:cfg.motionFilter,q:.18,rate:1,pan:-.05,fadeIn:11,randomOffset:true,layerIndex:1,role:'identity'});playHybridSample(cfg.nature,{loop:true,gain:cfg.natureGain*evolutionBoost*mode,filterType:'lowpass',frequency:cfg.natureFilter,q:.16,rate:1,pan:.06,fadeIn:14,randomOffset:true,layerIndex:1,role:'nature'});playHybridSample(cfg.melody,{loop:true,gain:cfg.melodyGain*evolutionBoost*mode,filterType:'lowpass',frequency:cfg.melodyFilter,q:.16,rate:1,pan:0,fadeIn:16,randomOffset:true,layerIndex:2,role:'melody'});const generation=hybridGeneration;hybridTimers.push(setTimeout(()=>{if(generation===hybridGeneration&&playing&&current===worldIndex)playOmegaTransition(worldIndex,.42)},950));if(evolutionPhase===0)hybridTimers.push(setTimeout(()=>{if(generation===hybridGeneration&&playing&&current===worldIndex)playOmegaSignature(worldIndex,.22)},11500))}

const MUSIC_DIRECTOR_STAGES=[{id:'breath',generic:'BREATH',mix:[1,.82,.58,.48],min:24,max:38},{id:'call',generic:'OPENING',mix:[.98,.95,.72,.66],min:18,max:30},{id:'answer',generic:'BLOOM',mix:[.92,.86,.94,.78],min:20,max:34},{id:'silence',generic:'STILLNESS',mix:[.82,.56,.34,.38],min:30,max:48}];
const MUSIC_DIRECTOR_WORLDS={
  'black-sun':{labels:['WARM HORIZON','SINGING BOWL','AMBER BLOOM','DEEP STILLNESS'],call:{sample:'metalResonance',gain:.24,filterType:'lowpass',frequency:8800,rate:1},answer:{sample:'omegaBlackSunSignature',gain:.42,filterType:'lowpass',frequency:10400,rate:1}},
  aquatoc:{labels:['SLOW CURRENT','WATER BREATH','TIDAL BLOOM','STILL DEPTH'],call:{sample:'bubbleField',gain:.22,filterType:'lowpass',frequency:9200,rate:1},answer:{sample:'omegaAquatocSignature',gain:.40,filterType:'lowpass',frequency:10200,rate:1}},
  'crimson-rain':{labels:['NIGHT VEIL','SOFT LIGHT','RAIN BLOOM','EMPTY STREET'],call:{sample:'neonHum',gain:.19,filterType:'lowpass',frequency:9800,rate:1},answer:{sample:'omegaCrimsonRainSignature',gain:.37,filterType:'lowpass',frequency:10400,rate:1}},
  'mountain-blood':{labels:['HIGH AIR','STRING PRAYER','SUMMIT BLOOM','STONE SILENCE'],call:{sample:'summitString',gain:.18,filterType:'lowpass',frequency:9400,rate:1},answer:{sample:'omegaMountainBloodSignature',gain:.36,filterType:'lowpass',frequency:10000,rate:1}},
  'starless-void':{labels:['COLD CALM','DISTANT LIGHT','VOID BLOOM','PURE SPACE'],call:{sample:'ionPulse',gain:.18,filterType:'lowpass',frequency:8800,rate:1},answer:{sample:'omegaStarlessVoidSignature',gain:.38,filterType:'lowpass',frequency:9800,rate:1}},
  'celestial-veil':{labels:['CHOIR BREATH','HALO OPENING','LUMEN BLOOM','MERCY SILENCE'],call:{sample:'glassChime',gain:.17,filterType:'lowpass',frequency:11600,rate:1},answer:{sample:'omegaCelestialVeilSignature',gain:.34,filterType:'lowpass',frequency:12400,rate:1}},
  'sunroot-vale':{labels:['FOREST BREATH','REED OPENING','WOOD BLOOM','ROOTED SILENCE'],call:{sample:'koto',gain:.18,filterType:'lowpass',frequency:9400,rate:1},answer:{sample:'omegaSunrootValeSignature',gain:.36,filterType:'lowpass',frequency:10400,rate:1}}
};
function musicDirectorLayerMultiplier(i){if(settings.musicDirector===false||musicDirectorPhase<0)return 1;const s=MUSIC_DIRECTOR_STAGES[musicDirectorPhase]||MUSIC_DIRECTOR_STAGES[0];return s.mix[i]??s.mix[s.mix.length-1]??1}
function musicDirectorTimeFactor(){if(listeningMode==='sleep')return 1.65;if(listeningMode==='focus')return 1.32;if(listeningMode==='cinematic')return .9;return 1.18}
function musicDirectorCueGain(){if(listeningMode==='sleep')return .42;if(listeningMode==='focus')return .58;if(listeningMode==='cinematic')return .84;return .66}
function directorDefinition(worldIndex=current){return MUSIC_DIRECTOR_WORLDS[WORLDS[worldIndex]?.id]||{labels:MUSIC_DIRECTOR_STAGES.map(x=>x.generic)}}
function updateMusicDirectorUI(){const active=settings.musicDirector!==false&&playing&&musicDirectorPhase>=0,stage=MUSIC_DIRECTOR_STAGES[Math.max(0,musicDirectorPhase)]||MUSIC_DIRECTOR_STAGES[0],label=(directorDefinition().labels||[])[Math.max(0,musicDirectorPhase)]||stage.generic,text=active?`DIRECTOR · ${label}`:(settings.musicDirector===false?'DIRECTOR OFF':'DIRECTOR · STANDBY'),badge=$('#musicDirectorBadge'),ambient=$('#ambientDirector');if(badge){badge.textContent=text;badge.classList.toggle('active',active)}if(ambient)ambient.textContent=text;if($('#modeTag'))$('#modeTag').textContent=settings.musicDirector===false?'PURE LAYERS':'DIRECTED';if($('#audioEngineLabel')){const count=Object.keys(sampleBuffers).length;$('#audioEngineLabel').textContent=settings.musicDirector===false?(count?`SOURCE IDENTITY 48K · ${count}/${HYBRID_SAMPLE_TOTAL}`:'WEB AUDIO'):(active?`MUSIC DIRECTOR · ${label}`:`MUSIC DIRECTOR · ${count}/${HYBRID_SAMPLE_TOTAL}`)}}
function pulseDirectorVisual(){document.body.classList.remove('director-cue');void document.body.offsetWidth;document.body.classList.add('director-cue');setTimeout(()=>document.body.classList.remove('director-cue'),1300)}
function playDirectorFallback(worldIndex=current,answer=false){if(!audioCtx||!playing||!filters[0])return;const w=WORLDS[worldIndex],t=audioCtx.currentTime,base=(w?.osc?.[answer?1:0]||110)*(worldIndex===5?2:1),gain=musicDirectorCueGain(),out=audioCtx.createGain(),pan=audioCtx.createStereoPanner(),filter=audioCtx.createBiquadFilter();filter.type='lowpass';filter.frequency.value=Math.min(4200,base*9);pan.pan.value=answer?.24:-.24;out.gain.setValueAtTime(.0001,t);out.gain.linearRampToValueAtTime(.014*gain,t+.18);out.gain.exponentialRampToValueAtTime(.0001,t+3.6);filter.connect(out).connect(pan).connect(filters[0]);[base,base*(answer?1.5:1.25)].forEach((frequency,i)=>{const osc=audioCtx.createOscillator();osc.type=i?'sine':'triangle';osc.frequency.value=frequency;osc.detune.value=i?4:-3;osc.connect(filter);osc.start(t+i*.14);osc.stop(t+3.7);trackNode(osc)});trackNode(out,pan,filter)}
function playDirectorKoto(){if(!sampleBuffers.koto){playDirectorFallback(6,true);return}const scale=[.75,.842,.946,1,1.125,1.263,1.5],motifs=[[0,2,3],[3,4,2],[2,5,4],[0,3,2],[4,3,1]],motif=motifs[musicDirectorCycle%motifs.length],boost=musicDirectorCueGain()*(1+Math.max(0,evolutionPhase)*.06);motif.forEach((noteIndex,i)=>playHybridSample('koto',{gain:(i===0?.48:.31)*boost,filterType:'lowpass',frequency:4000,rate:scale[noteIndex],pan:(i%2?1:-1)*(.08+i*.03),delay:i*(.5+i*.04),layerIndex:3}))}
function playMusicDirectorCue(stageIndex){if(stageIndex!==1&&stageIndex!==2)return;if(scannerActive||ritualActive)return;const worldIndex=current,def=directorDefinition(worldIndex),answer=stageIndex===2,cue=answer?def.answer:def.call;pulseDirectorVisual();if(cue&&settings.hybrid!==false&&sampleBuffers[cue.sample])playHybridSample(cue.sample,{...cue,gain:(cue.gain||.02)*musicDirectorCueGain(),pan:answer?.12:-.12,fadeIn:.3});else playDirectorFallback(worldIndex,answer)}
function stopMusicDirector(reset=true){clearTimeout(musicDirectorTimer);musicDirectorTimer=null;musicDirectorPhase=-1;musicDirectorWorld=-1;musicDirectorCycle=0;document.body.dataset.musicDirector='standby';document.body.classList.remove('director-cue');if(reset&&audioCtx&&layerGains.length)applyEvolutionAudio();updateMusicDirectorUI()}
function musicDirectorStep(){if(!playing||settings.musicDirector===false)return stopMusicDirector(true);if(musicDirectorWorld!==current){musicDirectorWorld=current;musicDirectorPhase=-1;musicDirectorCycle=0}if(scannerActive||ritualActive){document.body.dataset.musicDirector='hold';const b=$('#musicDirectorBadge'),a=$('#ambientDirector');if(b)b.textContent='DIRECTOR · HOLD';if(a)a.textContent='DIRECTOR · HOLD';musicDirectorTimer=setTimeout(musicDirectorStep,4200);return}musicDirectorPhase=(musicDirectorPhase+1)%MUSIC_DIRECTOR_STAGES.length;if(musicDirectorPhase===0)musicDirectorCycle++;const stage=MUSIC_DIRECTOR_STAGES[musicDirectorPhase];document.body.dataset.musicDirector=stage.id;applyEvolutionAudio();updateMusicDirectorUI();playMusicDirectorCue(musicDirectorPhase);const evolutionFactor=1-Math.max(0,evolutionPhase)*.035,duration=(stage.min+Math.random()*(stage.max-stage.min))*musicDirectorTimeFactor()*evolutionFactor*1000;musicDirectorTimer=setTimeout(musicDirectorStep,Math.max(4800,duration))}
function startMusicDirector(){stopMusicDirector(false);if(settings.musicDirector===false){updateMusicDirectorUI();return}musicDirectorWorld=current;musicDirectorPhase=-1;musicDirectorCycle=0;musicDirectorTimer=setTimeout(musicDirectorStep,950);updateMusicDirectorUI()}
function startSunrootLegacyReedLoop(){clearTimeout(sunrootLegacyTimer);sunrootLegacyTimer=null;if(settings.musicDirector!==false||!playing||current!==6||typeof sunrootReedCue!=='function')return;const run=()=>{if(settings.musicDirector!==false||!playing||current!==6||typeof sunrootReedCue!=='function')return;const phraseLength=sunrootReedCue();sunrootLegacyTimer=setTimeout(run,Math.max(4300,phraseLength*1000))};sunrootLegacyTimer=setTimeout(run,900)}

async function startHybridLayer(worldIndex=current){
  stopHybridLayer();if(settings.hybrid===false){updateHybridStatus('SOURCE IDENTITY ENGINE PAUSED');return}
  const generation=hybridGeneration;await loadSampleBank();if(generation!==hybridGeneration||!playing||worldIndex!==current)return;const evolutionBoost=1+Math.max(0,evolutionPhase)*.035;startOmegaWorldStems(worldIndex,evolutionBoost)
}


function ensureAudio(){if(audioCtx)return;audioCtx=new (window.AudioContext||window.webkitAudioContext)({latencyHint:'playback',sampleRate:48000});master=audioCtx.createGain();masterDcBlock=audioCtx.createBiquadFilter();masterComfortPresence=audioCtx.createBiquadFilter();masterComfortAir=audioCtx.createBiquadFilter();masterSafetyLowpass=audioCtx.createBiquadFilter();masterCompressor=audioCtx.createDynamicsCompressor();masterLimiter=audioCtx.createDynamicsCompressor();analyser=audioCtx.createAnalyser();analyser.fftSize=512;analyser.smoothingTimeConstant=.9;filters=[audioCtx.createBiquadFilter(),audioCtx.createBiquadFilter(),audioCtx.createBiquadFilter()];filters[0].type='lowshelf';filters[0].frequency.value=135;filters[1].type='peaking';filters[1].frequency.value=980;filters[1].Q.value=.65;filters[2].type='highshelf';filters[2].frequency.value=4700;masterDcBlock.type='highpass';masterDcBlock.frequency.value=25;masterDcBlock.Q.value=.5;masterComfortPresence.type='peaking';masterComfortPresence.frequency.value=3150;masterComfortPresence.Q.value=.72;masterComfortPresence.gain.value=-1.8;masterComfortAir.type='highshelf';masterComfortAir.frequency.value=7800;masterComfortAir.gain.value=-1.1;masterSafetyLowpass.type='lowpass';masterSafetyLowpass.frequency.value=15800;masterSafetyLowpass.Q.value=.5;masterCompressor.threshold.value=-18;masterCompressor.knee.value=28;masterCompressor.ratio.value=1.45;masterCompressor.attack.value=.08;masterCompressor.release.value=.9;masterLimiter.threshold.value=-2.8;masterLimiter.knee.value=5;masterLimiter.ratio.value=6;masterLimiter.attack.value=.012;masterLimiter.release.value=.32;filters[0].connect(filters[1]).connect(filters[2]).connect(masterComfortPresence).connect(masterComfortAir).connect(masterSafetyLowpass).connect(analyser).connect(master).connect(masterDcBlock).connect(masterCompressor).connect(masterLimiter).connect(audioCtx.destination);master.gain.value=effectiveVolume();applyEq();applyPerformanceProfile('audio context');drawVisualizer();}
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
  const drop=()=>{if(!playing||current!==2)return;const o=audioCtx.createOscillator(),g=audioCtx.createGain(),p=audioCtx.createStereoPanner(),t=audioCtx.currentTime,d=.12+Math.random()*.22;o.type='sine';o.frequency.setValueAtTime(1100+Math.random()*2400,t);o.frequency.exponentialRampToValueAtTime(260+Math.random()*350,t+d);p.pan.value=(Math.random()-.5)*1.7;g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(.014*(state.layers[1]??.28),t+.025);g.gain.exponentialRampToValueAtTime(.0001,t+d);o.connect(g).connect(p).connect(reverb);o.start(t);o.stop(t+d+.04);trackNode(o,g,p)};
  engineTimers.push(setInterval(drop,440));

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
  const bus=audioCtx.createGain(),compressor=audioCtx.createDynamicsCompressor(),reverb=audioCtx.createConvolver(),dry=audioCtx.createGain(),wet=audioCtx.createGain(),clarity=audioCtx.createBiquadFilter(),airShelf=audioCtx.createBiquadFilter();
  bus.gain.setValueAtTime(0,now);bus.gain.linearRampToValueAtTime(1,now+4.8);reverb.buffer=makeImpulse(8.6,4.6);dry.gain.value=.66;wet.gain.value=.46;compressor.threshold.value=-26;compressor.knee.value=20;compressor.ratio.value=2.2;clarity.type='peaking';clarity.frequency.value=1850;clarity.Q.value=.62;clarity.gain.value=1.8;airShelf.type='highshelf';airShelf.frequency.value=4200;airShelf.gain.value=1.4;bus.connect(dry).connect(compressor);bus.connect(reverb).connect(wet).connect(compressor);compressor.connect(clarity).connect(airShelf).connect(filters[0]);trackNode(bus,compressor,reverb,dry,wet,clarity,airShelf);

  const windGain=audioCtx.createGain(),wind=makeNoise('pink',10),windHP=audioCtx.createBiquadFilter(),windLP=audioCtx.createBiquadFilter(),windPan=audioCtx.createStereoPanner(),windLfo=audioCtx.createOscillator(),windDepth=audioCtx.createGain(),windLevel=audioCtx.createGain(),windLevelLfo=audioCtx.createOscillator(),windLevelDepth=audioCtx.createGain();
  windGain.gain.value=targetLayerGain(0);windHP.type='highpass';windHP.frequency.value=155;windLP.type='lowpass';windLP.frequency.value=4300;windPan.pan.value=-.08;windLfo.frequency.value=.022;windDepth.gain.value=.68;windLfo.connect(windDepth).connect(windPan.pan);windLevel.gain.value=.68;windLevelLfo.frequency.value=.043;windLevelDepth.gain.value=.22;windLevelLfo.connect(windLevelDepth).connect(windLevel.gain);wind.connect(windHP).connect(windLP).connect(windLevel).connect(windPan).connect(windGain).connect(bus);wind.start();windLfo.start();windLevelLfo.start();noiseNodes.push(wind);sources.push(windLfo,windLevelLfo);layerGains[0]=windGain;trackNode(windGain,windHP,windLP,windPan,windDepth,windLevel,windLevelDepth);

  const stringGain=audioCtx.createGain();stringGain.gain.value=targetLayerGain(1);stringGain.connect(bus);layerGains[1]=stringGain;trackNode(stringGain);
  [[146.83,.36,-.35],[220,.24,.28],[293.66,.14,-.08],[369.99,.08,.42]].forEach(([freq,level,panValue],i)=>{const o=audioCtx.createOscillator(),g=audioCtx.createGain(),p=audioCtx.createStereoPanner(),lfo=audioCtx.createOscillator(),depth=audioCtx.createGain();o.type=i<2?'triangle':'sine';o.frequency.value=freq;o.detune.value=[-4,3,-2,5][i];g.gain.value=level;p.pan.value=panValue;lfo.frequency.value=[.019,.014,.023,.017][i];depth.gain.value=level*.28;lfo.connect(depth).connect(g.gain);o.connect(g).connect(p).connect(reverb);o.start();lfo.start();sources.push(o,lfo);trackNode(g,p,depth)});
  const stringPrayer=()=>{if(!playing||current!==3||settings.musicDirector!==false)return;const t=audioCtx.currentTime,roots=[[146.83,220,293.66],[164.81,246.94,329.63],[110,164.81,220]],notes=roots[Math.floor(Math.random()*roots.length)];notes.forEach((freq,i)=>{const o=audioCtx.createOscillator(),g=audioCtx.createGain(),f=audioCtx.createBiquadFilter(),p=audioCtx.createStereoPanner(),start=t+i*.62,dur=3.2+i*.5;o.type=i===0?'triangle':'sine';o.frequency.setValueAtTime(freq,start);o.frequency.linearRampToValueAtTime(freq*.995,start+dur);f.type='lowpass';f.frequency.value=2600+i*420;f.Q.value=.45;p.pan.value=(i-1)*.22;g.gain.setValueAtTime(.0001,start);g.gain.linearRampToValueAtTime(.036*(state.layers[1]??.28),start+.12);g.gain.exponentialRampToValueAtTime(.0001,start+dur);o.connect(f).connect(g).connect(p).connect(reverb);o.start(start);o.stop(start+dur+.08);trackNode(o,g,f,p)})};if(settings.musicDirector===false){stringPrayer();engineTimers.push(setInterval(stringPrayer,9800))}

  const stoneGain=audioCtx.createGain();stoneGain.gain.value=targetLayerGain(2);stoneGain.connect(bus);layerGains[2]=stoneGain;trackNode(stoneGain);
  const stonePulse=()=>{if(!playing||current!==3)return;const t=audioCtx.currentTime,o=audioCtx.createOscillator(),g=audioCtx.createGain(),f=audioCtx.createBiquadFilter(),n=makeNoise('brown',1.4),ng=audioCtx.createGain(),nf=audioCtx.createBiquadFilter();o.type='sine';o.frequency.setValueAtTime(73.42,t);o.frequency.exponentialRampToValueAtTime(46,t+1.35);f.type='lowpass';f.frequency.value=135;g.gain.setValueAtTime(.0001,t);g.gain.linearRampToValueAtTime(.078*(state.layers[2]??.22),t+.08);g.gain.exponentialRampToValueAtTime(.0001,t+1.5);nf.type='bandpass';nf.frequency.value=390;nf.Q.value=.7;ng.gain.setValueAtTime(.0001,t);ng.gain.linearRampToValueAtTime(.009,t+.03);ng.gain.exponentialRampToValueAtTime(.0001,t+.55);o.connect(f).connect(g).connect(stoneGain);n.connect(nf).connect(ng).connect(reverb);o.start(t);o.stop(t+1.55);n.start(t);n.stop(t+.65);trackNode(o,g,f,n,ng,nf)};stonePulse();engineTimers.push(setInterval(stonePulse,8300));

  const summitGain=audioCtx.createGain();summitGain.gain.value=targetLayerGain(3);summitGain.connect(bus);layerGains[3]=summitGain;trackNode(summitGain);
  [[73.42,.54,-.25],[110,.33,.18],[146.83,.20,-.06],[220,.08,.34]].forEach(([freq,level,panValue],i)=>{const o=audioCtx.createOscillator(),g=audioCtx.createGain(),p=audioCtx.createStereoPanner(),lfo=audioCtx.createOscillator(),depth=audioCtx.createGain();o.type=i<2?'sine':'triangle';o.frequency.value=freq;o.detune.value=[-6,2,5,-3][i];g.gain.value=level;p.pan.value=panValue;lfo.frequency.value=[.011,.016,.019,.024][i];depth.gain.value=[.7,.9,1.2,1.4][i];lfo.connect(depth).connect(o.detune);o.connect(g).connect(p).connect(summitGain);o.start();lfo.start();sources.push(o,lfo);trackNode(g,p,depth)});
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

  // Ancient Reed: melodic shakuhachi-inspired phrases in a stable Japanese pentatonic mode.
  // The phrase engine is intentionally more frequent, but leaves breathing space between motifs.
  const reedGain=audioCtx.createGain();reedGain.gain.value=targetLayerGain(1);reedGain.connect(bus);layerGains[1]=reedGain;trackNode(reedGain);
  const reedScale=[220,246.94,293.66,329.63,392,440]; // A–B–D–E–G–A, a calm yo-style pentatonic colour.
  const reedMotifs=[
    [0,2,3],[3,2,0],[1,2,4],[4,3,2],[0,1,2,3],[3,4,5,4,2],[2,3,1],[4,2,1,0]
  ];
  let reedMotifIndex=Math.floor(Math.random()*reedMotifs.length);
  const playReedNote=(base,offset=0,dur=2.5,velocity=1,panValue=0)=>{
    const t=audioCtx.currentTime+offset;
    const osc1=audioCtx.createOscillator(),osc2=audioCtx.createOscillator();
    const harmonicGain=audioCtx.createGain(),toneFilter=audioCtx.createBiquadFilter(),formant=audioCtx.createBiquadFilter(),hp2=audioCtx.createBiquadFilter();
    const g=audioCtx.createGain(),p=audioCtx.createStereoPanner();
    const air=makeNoise('pink',dur+.7),airBand=audioCtx.createBiquadFilter(),airGain=audioCtx.createGain();
    const vib=audioCtx.createOscillator(),vibDepth=audioCtx.createGain();
    const attackNoise=makeNoise('white',.38),attackBand=audioCtx.createBiquadFilter(),attackGain=audioCtx.createGain();

    // Soft bamboo body instead of a sharp synthesizer timbre.
    osc1.type='triangle';osc2.type='sine';
    osc1.frequency.value=base;osc2.frequency.value=base*2;
    harmonicGain.gain.value=.16;
    osc1.detune.setValueAtTime(16,t);osc1.detune.linearRampToValueAtTime(0,t+.32);
    osc1.detune.setValueAtTime(0,t+dur*.72);osc1.detune.linearRampToValueAtTime(-14-Math.random()*8,t+dur);
    osc2.detune.setValueAtTime(10,t);osc2.detune.linearRampToValueAtTime(-5,t+dur);

    toneFilter.type='lowpass';toneFilter.frequency.value=1500+base*.85;toneFilter.Q.value=.45;
    formant.type='bandpass';formant.frequency.value=880+base*.9;formant.Q.value=1.35;
    hp2.type='highpass';hp2.frequency.value=145;
    p.pan.value=panValue;

    vib.frequency.value=4.2+Math.random()*.7;
    vibDepth.gain.setValueAtTime(0,t);vibDepth.gain.linearRampToValueAtTime(5+Math.random()*4,t+dur*.42);vibDepth.gain.linearRampToValueAtTime(2,t+dur);
    vib.connect(vibDepth);vibDepth.connect(osc1.detune);vibDepth.connect(osc2.detune);

    g.gain.setValueAtTime(.0001,t);g.gain.linearRampToValueAtTime(.42*velocity,t+.16);g.gain.linearRampToValueAtTime(.7*velocity,t+.48);
    g.gain.setValueAtTime(.62*velocity,t+dur*.55);g.gain.linearRampToValueAtTime(.36*velocity,t+dur*.82);g.gain.exponentialRampToValueAtTime(.0001,t+dur);

    airBand.type='bandpass';airBand.frequency.value=1850+Math.random()*550;airBand.Q.value=.6;
    airGain.gain.setValueAtTime(.0001,t);airGain.gain.linearRampToValueAtTime(.18*velocity,t+.06);airGain.gain.linearRampToValueAtTime(.075*velocity,t+.5);airGain.gain.setValueAtTime(.055*velocity,t+dur*.72);airGain.gain.exponentialRampToValueAtTime(.0001,t+dur);

    attackBand.type='bandpass';attackBand.frequency.value=2450;attackBand.Q.value=.72;
    attackGain.gain.setValueAtTime(.0001,t);attackGain.gain.linearRampToValueAtTime(.22*velocity,t+.025);attackGain.gain.exponentialRampToValueAtTime(.0001,t+.25);

    osc1.connect(toneFilter);osc2.connect(harmonicGain).connect(toneFilter);toneFilter.connect(formant).connect(hp2).connect(g).connect(p).connect(reedGain);
    air.connect(airBand).connect(airGain).connect(p).connect(reedGain);attackNoise.connect(attackBand).connect(attackGain).connect(p).connect(reedGain);
    osc1.start(t);osc2.start(t);air.start(t);attackNoise.start(t);vib.start(t);
    const stop=t+dur+.06;osc1.stop(stop);osc2.stop(stop);air.stop(stop);attackNoise.stop(t+.3);vib.stop(stop);
    trackNode(osc1,osc2,harmonicGain,toneFilter,formant,hp2,g,p,air,airBand,airGain,vib,vibDepth,attackNoise,attackBand,attackGain);
  };
  const playReedPhrase=()=>{
    if(!playing||current!==6)return 0;
    const motif=reedMotifs[reedMotifIndex%reedMotifs.length];reedMotifIndex++;
    let cursor=0;
    motif.forEach((noteIndex,i)=>{
      const dur=1.85+Math.random()*.85+(i===motif.length-1?.45:0);
      const velocity=(i===0?1:.82+Math.random()*.13);
      playReedNote(reedScale[noteIndex],cursor,dur,velocity,(i%2?1:-1)*(.08+Math.random()*.12));
      cursor+=1.05+Math.random()*.42;
    });
    return cursor+1.6+Math.random()*1.7;
  };
  sunrootReedCue=playReedPhrase;
  if(settings.musicDirector===false)startSunrootLegacyReedLoop();

  // Root Resonance: wood / stone ritual pulses, grounded and sparse.
  const rootGain=audioCtx.createGain();rootGain.gain.value=(state.layers[2]??.22)*.085;rootGain.connect(bus);layerGains[2]=rootGain;trackNode(rootGain);
  const rootHit=()=>{if(!playing||current!==6)return;const t=audioCtx.currentTime,base=[82.41,98,110][Math.floor(Math.random()*3)],o=audioCtx.createOscillator(),g=audioCtx.createGain(),p=audioCtx.createStereoPanner(),n=makeNoise('white',1.1),ng=audioCtx.createGain(),bp=audioCtx.createBiquadFilter();o.type='sine';o.frequency.setValueAtTime(base,t);o.frequency.exponentialRampToValueAtTime(base*.58,t+.9);g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(.05*(state.layers[2]??.22),t+.02);g.gain.exponentialRampToValueAtTime(.0001,t+1.2);p.pan.value=(Math.random()-.5)*.5;bp.type='bandpass';bp.frequency.value=760;bp.Q.value=.8;ng.gain.setValueAtTime(.0001,t);ng.gain.linearRampToValueAtTime(.009*(state.layers[2]??.22),t+.01);ng.gain.exponentialRampToValueAtTime(.0001,t+.42);o.connect(g).connect(p).connect(rootGain);n.connect(bp).connect(ng).connect(p).connect(rootGain);o.start(t);o.stop(t+1.25);n.start(t);n.stop(t+.45);trackNode(o,g,p,n,ng,bp)};
  rootHit();engineTimers.push(setInterval(rootHit,4300));

  // Sunlit Koto: a dedicated fourth layer fed by the expanded sample bank.
  const kotoGain=audioCtx.createGain();kotoGain.gain.value=targetLayerGain(3);kotoGain.connect(bus);layerGains[3]=kotoGain;trackNode(kotoGain);
}

function createStandardWorld(){const w=WORLDS[current];w.osc.forEach((freq,i)=>{const o=audioCtx.createOscillator(),g=audioCtx.createGain(),lfo=audioCtx.createOscillator(),lg=audioCtx.createGain();o.type=i===0?'sine':i===1?'triangle':'sine';o.frequency.value=freq;lfo.frequency.value=.04+i*.025;lg.gain.value=freq*.012;lfo.connect(lg).connect(o.frequency);g.gain.value=(state.layers[i]??.3)*[.11,.055,.035][i];o.connect(g).connect(filters[0]);o.start();lfo.start();sources.push(o,lfo);layerGains.push(g);trackNode(g,lg)});const n=makeNoise(current===2?'white':'brown'),ng=audioCtx.createGain(),nf=audioCtx.createBiquadFilter();nf.type='lowpass';nf.frequency.value=current===1?900:current===2?3500:650;ng.gain.value=(state.layers[2]??.2)*.06;n.connect(nf).connect(ng).connect(filters[0]);n.start();noiseNodes.push(n);trackNode(ng,nf)}
function beginTransmissionCycle(){clearInterval(transmissionTimer);transmissionTimer=setInterval(()=>{if(!playing)return;const w=WORLDS[current],list=w.tracks||[w.track];trackIndex=(trackIndex+1)%list.length;const title=$('#nowTitle');title.classList.add('changing');setTimeout(()=>{title.textContent=w.title+' — '+list[trackIndex];title.classList.remove('changing');updateMedia();syncAmbientHud()},320)},45000)}
function createSerenityWorldBus(){const bus=audioCtx.createGain();bus.gain.value=1;bus.connect(filters[0]);trackNode(bus);layerGains=[];for(let i=0;i<4;i++){const g=audioCtx.createGain();g.gain.value=targetLayerGain(i);g.connect(bus);layerGains.push(g);trackNode(g)}}
function startAudio(fromSwitch=false){ensureAudio();audioCtx.resume();sources=[];layerGains=[];noiseNodes=[];engineNodes=[];engineTimers=[];if(!fromSwitch)master.gain.setTargetAtTime(effectiveVolume(),audioCtx.currentTime,.16);createSerenityWorldBus();if(ritualActive)createRitualAudio();playing=true;startedAt=Date.now();operatorBeginSession();startHybridLayer(current);startMusicDirector();startFusionAudio();document.body.classList.add('playing');applyListeningMode(false);$('#playIcon').textContent=$('#sleepPlayBtn').textContent='Ⅱ';$('#signalValue').textContent='TRANSMITTING';$('#systemStatus').textContent=WORLDS[current].title+' LIVE';startEvolutionCycle();beginTransmissionCycle();scheduleRareTransmission(!rareTimer);scheduleRareWorldEvent(!rareEventTimer);updateMedia();syncAmbientHud();toast(WORLDS[current].title+' ONLINE');}
function teardownAudio(){destroyRitualAudio();stopMusicDirector(false);clearTimeout(sunrootLegacyTimer);sunrootLegacyTimer=null;sunrootReedCue=null;stopFusionAudio();stopHybridLayer();clearInterval(transmissionTimer);clearInterval(evolutionTimer);evolutionTimer=null;engineTimers.forEach(clearInterval);engineTimers=[];[...sources,...noiseNodes].forEach(x=>{try{x.stop()}catch{}});[...engineNodes].forEach(x=>{try{x.disconnect()}catch{}});sources=[];noiseNodes=[];engineNodes=[];layerGains=[];evolutionVoiceGains=[];weatherAudioGain=null;weatherAudioFilter=null;}
function stopAudio(){if(!playing)return;stopMusicDirector(false);if(ritualActive&&!ritualEnding)endRitual(false,'RITUAL INTERRUPTED');operatorEndSession();playing=false;clearInterval(transmissionTimer);clearTimeout(rareTimer);rareTimer=null;closeRareSignal();clearTimeout(rareEventTimer);rareEventTimer=null;closeRareWorldEvent(true);const finish=()=>{teardownAudio();stopEvolutionCycle();document.body.classList.remove('playing');$('#playIcon').textContent=$('#sleepPlayBtn').textContent='▶';$('#signalValue').textContent='STANDBY';$('#systemStatus').textContent='READY';updateMedia();syncAmbientHud()};if(audioCtx&&master){const now=audioCtx.currentTime;master.gain.cancelScheduledValues(now);master.gain.setValueAtTime(master.gain.value,now);master.gain.linearRampToValueAtTime(.0001,now+.45);setTimeout(()=>{finish();master.gain.value=effectiveVolume()},470)}else finish()}
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
function playRareSignalTone(){if(!audioCtx||audioCtx.state==='closed')return;if(playing&&sampleBuffers.bell)playHybridSample('bell',{gain:.20,filterType:'lowpass',frequency:10800,fadeIn:.25,role:'rare-bloom'})}
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
function applySettings(){document.body.classList.toggle('motion-reduced',!!settings.reduced);$('#settingIntro').checked=!!settings.intro;$('#settingReduced').checked=!!settings.reduced;$('#settingRemember').checked=!!settings.remember;$('#settingShuffle').checked=!!settings.shuffleStart;$('#settingRare').checked=settings.rare!==false;$('#settingRareEvents').checked=settings.rareEvents!==false;$('#settingEvolution').checked=settings.evolution!==false;$('#settingHybrid').checked=settings.hybrid!==false;$('#settingMusicDirector').checked=settings.musicDirector!==false;$('#settingTimeMode').checked=settings.timeMode!==false;$('#settingWeather').checked=settings.weather!==false;$('#settingRitualStop').checked=settings.ritualStop!==false;$('#settingPerformance').value=settings.performance||'auto';$('#settingTimer').value=String(settings.defaultTimer||0);applyPerformanceProfile('settings sync');updateEvolutionReadout(playing&&evolutionStartedAt?(Date.now()-evolutionStartedAt)/1000:0)}
function openSettings(){applySettings();$('#settingsOverlay').classList.add('open');$('#settingsOverlay').setAttribute('aria-hidden','false')}
function closeSettings(){const el=$('#settingsOverlay');el.classList.remove('open');el.setAttribute('aria-hidden','true')}
function storeSettings(){settings.intro=$('#settingIntro').checked;settings.reduced=$('#settingReduced').checked;settings.remember=$('#settingRemember').checked;settings.shuffleStart=$('#settingShuffle').checked;settings.rare=$('#settingRare').checked;settings.rareEvents=$('#settingRareEvents').checked;settings.evolution=$('#settingEvolution').checked;const hybridWas=settings.hybrid!==false,directorWas=settings.musicDirector!==false;settings.hybrid=$('#settingHybrid').checked;settings.musicDirector=$('#settingMusicDirector').checked;settings.timeMode=$('#settingTimeMode').checked;const weatherWas=settings.weather!==false;settings.weather=$('#settingWeather').checked;settings.ritualStop=$('#settingRitualStop').checked;settings.performance=$('#settingPerformance').value||'auto';performanceAutoStep=0;settings.defaultTimer=Number($('#settingTimer').value||0);localStorage.srSettings=JSON.stringify(settings);if(!settings.rare){clearTimeout(rareTimer);rareTimer=null;closeRareSignal()}else if(playing)scheduleRareTransmission(!rareTimer);if(!settings.rareEvents){clearTimeout(rareEventTimer);rareEventTimer=null;closeRareWorldEvent(true)}else if(playing)scheduleRareWorldEvent(!rareEventTimer);if((hybridWas!==settings.hybrid||directorWas!==settings.musicDirector)&&playing)startHybridLayer(current);if(directorWas!==settings.musicDirector){if(settings.musicDirector&&playing)startMusicDirector();else{stopMusicDirector(true);if(playing&&current===6)startSunrootLegacyReedLoop()}}updateMusicDirectorUI();if(weatherWas!==settings.weather&&playing){if(settings.weather)createWeatherAudio();else updateWeatherAudio()}updateWeatherUI(true);if(settings.evolution===false){evolutionVoiceGains.forEach(g=>{try{g.gain.setTargetAtTime(.0001,audioCtx.currentTime,.35)}catch{}});evolutionPhase=0;document.body.dataset.evolution='0';applyEvolutionAudio()}else if(playing){evolutionStartedAt=Date.now();startEvolutionCycle()}if(!settings.remember)localStorage.removeItem('srWorld');applyDynamicTime(true);applySettings();closeSettings();toast('SETTINGS STORED')}
function resetAppData(){if(!confirm('Alle gespeicherten Sender, Favoriten, Regler und Einstellungen zurücksetzen?'))return;['srEq','srLayers','srVol','srWorld','srFavorites','srShuffle','srSettings','srIntroSeen','srLore','srEvolutionRecords','srOperatorMemory','srScannerFinds','srRitualHistory','srJourneyHistory'].forEach(k=>localStorage.removeItem(k));location.reload()}

// ===== OMEGA RITUALS 5.6 =====
const RITUAL_PHASES=[
  {id:'awakening',name:'AWAKENING',start:0,end:.18,gain:.032,filter:1300},
  {id:'descent',name:'DESCENT',start:.18,end:.44,gain:.052,filter:920},
  {id:'transmission',name:'TRANSMISSION',start:.44,end:.82,gain:.072,filter:1850},
  {id:'dissolve',name:'DISSOLVE',start:.82,end:1,gain:.03,filter:620}
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
function createRitualAudio(){destroyRitualAudio();if(!audioCtx||!filters[0])return;ritualBus=audioCtx.createGain();ritualBus.gain.value=.0001;ritualBus.connect(filters[0]);ritualNodes.push(ritualBus);applyRitualAudioPhase(Math.max(0,ritualPhase),true)}
function destroyRitualAudio(){ritualSources.forEach(n=>{try{n.stop()}catch{}});ritualNodes.forEach(n=>{try{n.disconnect()}catch{}});ritualSources=[];ritualNodes=[];ritualBus=null}
function applyRitualAudioPhase(index,immediate=false){if(!ritualBus||!audioCtx)return;const phase=RITUAL_PHASES[index]||RITUAL_PHASES[0],t=audioCtx.currentTime;const tone=ritualNodes.find(n=>n&&n.frequency&&n.Q&&n.type==='lowpass');ritualBus.gain.cancelScheduledValues(t);if(immediate)ritualBus.gain.setValueAtTime(phase.gain,t);else ritualBus.gain.setTargetAtTime(phase.gain,t,1.8);if(tone)tone.frequency.setTargetAtTime(phase.filter,t,2.1)}
function playRitualPhaseTone(index){if(!audioCtx||!playing)return;playOmegaSignature(current,.16+index*.035,.1)}
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

const FUSION_PAIR_AUDIO={
  '0-1':{wave:'sine',ratio:1.25,cutoff:620,interval:5.8,sample:'ocean',rate:.62},
  '0-2':{wave:'sawtooth',ratio:1.5,cutoff:1180,interval:4.7,sample:'rain',rate:.82},
  '0-3':{wave:'triangle',ratio:.75,cutoff:760,interval:6.4,sample:'wood',rate:.72},
  '0-4':{wave:'sine',ratio:.5,cutoff:340,interval:7.8,sample:'radio',rate:.42},
  '0-5':{wave:'sine',ratio:2,cutoff:1840,interval:8.2,sample:'bell',rate:.76},
  '0-6':{wave:'triangle',ratio:1,cutoff:980,interval:7.1,sample:'forest',rate:.68},
  '1-2':{wave:'triangle',ratio:1.75,cutoff:1480,interval:4.4,sample:'rain',rate:.9},
  '1-3':{wave:'sine',ratio:.8,cutoff:720,interval:6.2,sample:'wood',rate:.62},
  '1-4':{wave:'sine',ratio:.5,cutoff:410,interval:8.5,sample:'ocean',rate:.5},
  '1-5':{wave:'sine',ratio:2.5,cutoff:2200,interval:7.5,sample:'bell',rate:.88},
  '1-6':{wave:'triangle',ratio:1.2,cutoff:1050,interval:6.8,sample:'forest',rate:.78},
  '2-3':{wave:'sawtooth',ratio:.9,cutoff:920,interval:5.1,sample:'wood',rate:.84},
  '2-4':{wave:'triangle',ratio:.5,cutoff:680,interval:6.9,sample:'radio',rate:.55},
  '2-5':{wave:'sine',ratio:2,cutoff:2300,interval:6.2,sample:'bell',rate:.93},
  '2-6':{wave:'triangle',ratio:1.5,cutoff:1320,interval:5.7,sample:'bamboo',rate:.86},
  '3-4':{wave:'sine',ratio:.5,cutoff:470,interval:7.2,sample:'radio',rate:.47},
  '3-5':{wave:'triangle',ratio:2,cutoff:1620,interval:6.6,sample:'bell',rate:.8},
  '3-6':{wave:'triangle',ratio:1,cutoff:860,interval:5.9,sample:'wood',rate:.9},
  '4-5':{wave:'sine',ratio:3,cutoff:2600,interval:8.8,sample:'bell',rate:.68},
  '4-6':{wave:'sine',ratio:1.5,cutoff:1250,interval:7.7,sample:'bamboo',rate:.58},
  '5-6':{wave:'sine',ratio:2,cutoff:2100,interval:7.3,sample:'forest',rate:.9}
};
function startFusionPairVoice(key,generation){
  const cfg=FUSION_PAIR_AUDIO[key];if(!cfg||!audioCtx||!fusionBus)return;
  const primary=WORLDS[current],secondary=WORLDS[fusionSecondary],root=Math.sqrt(Math.max(28,primary.osc?.[0]||55)*Math.max(28,secondary.osc?.[0]||82.4));
  const osc=audioCtx.createOscillator(),gain=audioCtx.createGain(),filter=audioCtx.createBiquadFilter(),pan=audioCtx.createStereoPanner(),drift=audioCtx.createOscillator(),driftDepth=audioCtx.createGain();
  osc.type=cfg.wave;osc.frequency.value=Math.max(32,Math.min(620,root*cfg.ratio));filter.type='bandpass';filter.frequency.value=cfg.cutoff;filter.Q.value=.65+fusionMix*.8;pan.pan.value=((current+fusionSecondary)%2?-.22:.22);gain.gain.value=.0001;drift.frequency.value=.06+((current+fusionSecondary)%5)*.011;driftDepth.gain.value=5+fusionMix*8;
  drift.connect(driftDepth).connect(osc.detune);osc.connect(filter).connect(gain).connect(pan).connect(fusionBus);osc.start();drift.start();fusionSources.push(osc,drift);fusionTrackNode(gain,filter,pan,driftDepth);
  const pulse=()=>{if(generation!==fusionGeneration||!playing||!fusionActive||!audioCtx)return;const t=audioCtx.currentTime,peak=(.025+fusionMix*.055);gain.gain.cancelScheduledValues(t);gain.gain.setValueAtTime(.0001,t);gain.gain.linearRampToValueAtTime(peak,t+.18);gain.gain.exponentialRampToValueAtTime(.0001,t+1.8+fusionMix*1.5);if(sampleBuffers[cfg.sample]&&Math.random()<.68)playFusionSample(cfg.sample,{gain:.008+fusionMix*.018,frequency:cfg.cutoff,type:'bandpass',rate:cfg.rate,pan:(Math.random()-.5)*.7});fusionTimers.push(setTimeout(pulse,(cfg.interval+Math.random()*2.8)*1000))};
  fusionTimers.push(setTimeout(pulse,1200+Math.random()*1600));
}

const storedFusionMix=Number(localStorage.srFusionMix);let fusionActive=localStorage.srFusionActive==='1',fusionSecondary=Math.max(0,Math.min(WORLDS.length-1,Number(localStorage.srFusionSecondary||1))),fusionMix=Number.isFinite(storedFusionMix)&&storedFusionMix>0?Math.max(.2,Math.min(.85,storedFusionMix<=.55?Math.max(.5,storedFusionMix+.23):storedFusionMix)):.55;localStorage.srFusionMix=String(fusionMix);
let fusionSources=[],fusionNodes=[],fusionTimers=[],fusionGeneration=0,fusionBus=null;
function fusionPairKey(a=current,b=fusionSecondary){return [a,b].sort((x,y)=>x-y).join('-')}
function fusionRecipe(){return FUSION_RECIPES[fusionPairKey()]||['OMEGA CONVERGENCE','Two forgotten frequencies occupying the same horizon.']}
function fusionMode(){return fusionMix<.4?'echo':fusionMix<.7?'merge':'rift'}
function fusionModeLabel(){return fusionMode().toUpperCase()}
function ensureFusionSecondary(){if(fusionSecondary===current)fusionSecondary=(current+1)%WORLDS.length;localStorage.srFusionSecondary=String(fusionSecondary)}
function fusionTrackNode(...nodes){fusionNodes.push(...nodes);return nodes[nodes.length-1]}
function stopFusionAudio(){fusionGeneration++;fusionTimers.forEach(clearTimeout);fusionTimers=[];fusionSources.forEach(s=>{try{s.stop()}catch{}try{s.disconnect()}catch{}});fusionSources=[];fusionNodes.forEach(n=>{try{n.disconnect()}catch{}});fusionNodes=[];fusionBus=null}
function fusionSampleRoute(gain=.01,frequency=2200,type='lowpass',pan=0){const f=audioCtx.createBiquadFilter(),g=audioCtx.createGain(),p=audioCtx.createStereoPanner();f.type=type;f.frequency.value=frequency;f.Q.value=.45;g.gain.value=gain*(1.15+fusionMix*1.7);p.pan.value=pan;f.connect(g).connect(p).connect(fusionBus);fusionTrackNode(f,g,p);return f}
function playFusionSample(name,{loop=false,gain=.01,frequency=2200,type='lowpass',pan=0,rate=1,delay=0}={}){const buffer=sampleBuffers[name];if(!buffer||!audioCtx||!playing||!fusionActive)return null;const s=audioCtx.createBufferSource(),route=fusionSampleRoute(gain,frequency,type,pan);s.buffer=buffer;s.loop=loop;s.playbackRate.value=rate;s.connect(route);s.start(audioCtx.currentTime+delay,loop?Math.random()*Math.max(.01,buffer.duration-.05):0);fusionSources.push(s);if(!loop)s.onended=()=>{fusionSources=fusionSources.filter(x=>x!==s)};return s}
function scheduleFusionSample(name,min,max,options={}){const generation=fusionGeneration;const fire=()=>{if(generation!==fusionGeneration||!playing||!fusionActive)return;playFusionSample(name,{...options,pan:(Math.random()-.5)*(options.panSpread||.8),rate:(options.rate||1)*(1+(Math.random()-.5)*(options.rateVariation||.12))});fusionTimers.push(setTimeout(fire,(min+Math.random()*(max-min))*1000))};fusionTimers.push(setTimeout(fire,(options.firstDelay||3)*1000))}
async function startFusionAudio(){stopFusionAudio();ensureFusionSecondary();if(!fusionActive||!playing||fusionSecondary===current||!audioCtx)return;const generation=fusionGeneration,t=audioCtx.currentTime;fusionBus=audioCtx.createGain();fusionBus.gain.setValueAtTime(.0001,t);fusionBus.gain.linearRampToValueAtTime(fusionMix*.42,t+6);fusionBus.connect(filters[0]);fusionTrackNode(fusionBus);await loadSampleBank();if(generation!==fusionGeneration||!fusionActive||!playing)return;const cfg=omegaWorldAudio(fusionSecondary);playFusionSample(cfg.bed,{loop:true,gain:.58,frequency:11800,type:'lowpass',rate:1,pan:-.08});playFusionSample(cfg.motion,{loop:true,gain:.38,frequency:9800,type:'lowpass',rate:1,pan:.08});playFusionSample(cfg.melody,{loop:true,gain:.28,frequency:9200,type:'lowpass',rate:1,pan:0});fusionTimers.push(setTimeout(()=>{if(generation===fusionGeneration&&playing&&fusionActive)playFusionSample(cfg.signature,{gain:.24,frequency:10600,type:'lowpass',rate:1,pan:0})},9000))}

function applyFusionVisuals(){
  ensureFusionSecondary();const secondary=WORLDS[fusionSecondary],primary=WORLDS[current],active=fusionActive&&fusionSecondary!==current,mode=fusionMode(),[name]=fusionRecipe();
  document.body.classList.toggle('fusion-active',active);document.body.dataset.fusionMode=mode;const pairKey=fusionPairKey();if(active)document.body.dataset.fusionPair=pairKey;else delete document.body.dataset.fusionPair;
  if(active)document.body.dataset.fusionSecondary=secondary.id;else delete document.body.dataset.fusionSecondary;
  document.documentElement.style.setProperty('--fusion-color',secondary.color);document.documentElement.style.setProperty('--fusion-color2',secondary.color2);document.documentElement.style.setProperty('--fusion-glow',hexAlpha(secondary.color,.42));document.documentElement.style.setProperty('--fusion-strength',String(fusionMix));document.documentElement.style.setProperty('--fusion-pct',`${Math.round(fusionMix*100)}%`);document.documentElement.style.setProperty('--fusion-soft-pct',`${Math.round(12+fusionMix*34)}%`);document.documentElement.style.setProperty('--fusion-opacity',String(.2+fusionMix*.78));
  const badge=$('#fusionBadge');if(badge){badge.classList.toggle('show',active);badge.setAttribute('aria-hidden',active?'false':'true');$('#fusionBadgeText').textContent=`${name} · ${fusionModeLabel()}`}
  $('#fusionHeroMode')&&($('#fusionHeroMode').textContent=`FUSION MATRIX · ${fusionModeLabel()}`);$('#fusionHeroName')&&($('#fusionHeroName').textContent=name);$('#fusionHeroPair')&&($('#fusionHeroPair').textContent=`${primary.title} × ${secondary.title}`);
  $(`#fusionDot`)?.classList.toggle('active',active)
}
function renderFusionWorlds(){ensureFusionSecondary();const worlds=WORLDS.map((w,i)=>({w,i})).filter(x=>x.i!==current);$('#fusionWorldGrid').innerHTML=worlds.map(({w,i},n)=>`<button class="fusion-world-option ${i===fusionSecondary?'active':''}" data-fusion-world="${i}" style="--fusion-option:${w.color}"><span>${String(i+1).padStart(2,'0')}</span><strong>${w.title}</strong><small>${w.genre}</small></button>`).join('');$$('[data-fusion-world]').forEach(b=>b.onclick=()=>setFusionSecondary(+b.dataset.fusionWorld));const position=Math.max(0,worlds.findIndex(x=>x.i===fusionSecondary));$('#fusionSelectionCount').textContent=`${String(position+1).padStart(2,'0')} / ${String(worlds.length).padStart(2,'0')}`}
function updateFusionUI(){ensureFusionSecondary();const p=WORLDS[current],s=WORLDS[fusionSecondary],[name,text]=fusionRecipe(),mode=fusionMode();$('#fusionPrimaryName').textContent=p.title;$('#fusionPrimaryGenre').textContent=p.genre;$('#fusionSecondaryName').textContent=s.title;$('#fusionSecondaryGenre').textContent=s.genre;$('#fusionRecipeName').textContent=name;$('#fusionRecipeText').textContent=text;const orbs=$$('.fusion-world .fusion-orb');orbs[0]?.style.setProperty('--orb-color',p.color);orbs[0]?.style.setProperty('--orb-color2',p.color2);orbs[1]?.style.setProperty('--orb-color',s.color);orbs[1]?.style.setProperty('--orb-color2',s.color2);$('#fusionMix').value=Math.round(fusionMix*100);$('#fusionMixLabel').textContent=`${Math.round(fusionMix*100)}% · ${fusionModeLabel()}`;$('#toggleFusionBtn').textContent=fusionActive?'SEAL FUSION':'ACTIVATE FUSION';$('#toggleFusionBtn').classList.toggle('active',fusionActive);$$('[data-fusion-preset]').forEach(b=>b.classList.toggle('active',b.dataset.fusionMode===mode));renderFusionWorlds();applyFusionVisuals()}
function setFusionSecondary(i){fusionSecondary=Math.max(0,Math.min(WORLDS.length-1,i));ensureFusionSecondary();localStorage.srFusionSecondary=String(fusionSecondary);updateFusionUI();if(fusionActive&&playing)startFusionAudio();toast(`${WORLDS[fusionSecondary].title} SIGNAL SELECTED`)}
function setFusionMix(value){fusionMix=Math.max(.2,Math.min(.85,Number(value)/100));localStorage.srFusionMix=String(fusionMix);$('#fusionMixLabel').textContent=`${Math.round(fusionMix*100)}% · ${fusionModeLabel()}`;document.documentElement.style.setProperty('--fusion-strength',String(fusionMix));applyFusionVisuals();$$('[data-fusion-preset]').forEach(b=>b.classList.toggle('active',b.dataset.fusionMode===fusionMode()));if(fusionBus&&audioCtx)fusionBus.gain.setTargetAtTime(fusionMix*.42,audioCtx.currentTime,1.2)}
function setFusionPreset(value){setFusionMix(value);$('#fusionMix').value=value;toast(`FUSION ${fusionModeLabel()}`)}
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
  'mountain-blood':{id:'ridge-ascension',title:'RIDGE ASCENSION',text:'The cloud line falls away and the entire summit begins to resonate.',duration:9400},
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

$('#dismissRareEvent').onclick=()=>closeRareWorldEvent(false);$('#ritualBtn').onclick=openRituals;$('#closeRitual').onclick=closeRituals;$('#startRitual').onclick=startRitual;$('#ritualEndBtn').onclick=()=>endRitual(false,'RITUAL ENDED');$$('.ritual-length').forEach(b=>b.onclick=()=>selectRitualLength(b.dataset.ritualMinutes));$('#ritualOverlay').addEventListener('click',e=>{if(e.target.id==='ritualOverlay')closeRituals()});$('#weatherBtn').onclick=openWeather;$('#closeWeather').onclick=closeWeather;$('#refreshWeather').onclick=recalibrateWeather;$('#weatherOverlay').addEventListener('click',e=>{if(e.target.id==='weatherOverlay')closeWeather()});$('#scannerBtn').onclick=openScanner;$('#closeScanner').onclick=closeScanner;$('#startScanner').onclick=startScanner;$('#scannerOverlay').addEventListener('click',e=>{if(e.target.id==='scannerOverlay')closeScanner()});$('#fusionBtn').onclick=openFusion;$('#closeFusion').onclick=closeFusion;$('#toggleFusionBtn').onclick=toggleFusion;$('#fusionMix').oninput=e=>setFusionMix(e.target.value);$$('[data-fusion-preset]').forEach(b=>b.onclick=()=>setFusionPreset(+b.dataset.fusionPreset));$('#fusionOverlay').addEventListener('click',e=>{if(e.target.id==='fusionOverlay')closeFusion()});$('#shareSignalBtn').onclick=openShareSignal;$('#closeShare').onclick=closeShareSignal;$('#nativeShareBtn').onclick=nativeShareSignal;$('#saveShareBtn').onclick=saveShareSignal;$('#copyShareBtn').onclick=copyShareSignal;$$('[data-share-format]').forEach(b=>b.onclick=()=>setShareFormat(b.dataset.shareFormat));$('#shareOverlay').addEventListener('click',e=>{if(e.target.id==='shareOverlay')closeShareSignal()});
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
const APP_VERSION=document.querySelector('meta[name="app-version"]')?.content||'9.0.0';
let waitingWorker=null,updateReloading=false;
function showUpdateSignal(worker){waitingWorker=worker;const panel=$('#updateSignal');if(!panel)return;panel.classList.add('show');panel.setAttribute('aria-hidden','false');$('#updateSignalTitle').textContent='NEW CORE VERSION READY';$('#updateSignalText').textContent='A fresh Omega transmission is ready to install.';try{worker.postMessage({type:'GET_VERSION'})}catch{}}
function hideUpdateSignal(){const panel=$('#updateSignal');if(!panel)return;panel.classList.remove('show');panel.setAttribute('aria-hidden','true')}
function markUpdated(){sessionStorage.srUpdatedVersion=APP_VERSION}
if('serviceWorker'in navigator){
  window.addEventListener('load',async()=>{
    try{
      const reg=await navigator.serviceWorker.register('./sw.js',{updateViaCache:'none'});$('#coreVersionLabel')&&($('#coreVersionLabel').textContent=`${APP_VERSION} SIGNAL NEXUS`);reg.update().catch(()=>{});
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

navigator.serviceWorker?.addEventListener('message',event=>{if(event.data?.type!=='SW_VERSION')return;const next=event.data.version;if(!next||next===APP_VERSION)return;$('#updateSignalTitle')&&($('#updateSignalTitle').textContent=`VERSION ${next} READY`);$('#updateSignalText')&&($('#updateSignalText').textContent=`Omega Core ${next} is ready. Install to activate the new transmission.`)});

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
const closeBoot=()=>{if(!boot||boot.classList.contains('hide'))return;boot.classList.add('done');localStorage.srIntroSeen='1';setTimeout(()=>{boot.classList.add('hide');window.openNexus?.()},760)};
function awakenBoot(){if(bootStarted||!boot)return;bootStarted=true;boot.classList.remove('awaiting');boot.classList.add('awakened');playOmegaAwakening();$('#skipBoot')?.setAttribute('disabled','');setTimeout(closeBoot,4300)}
if(!settings.intro&&localStorage.srIntroSeen==='1'){boot?.classList.add('hide');setTimeout(()=>window.openNexus?.(),90)}else{
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


// ===== OMEGA SIGNAL NEXUS 9.0.0 — SOURCE IDENTITY AUDIO ENGINE =====
(()=>{
  const overlay=document.getElementById('signalNexus');
  const stage=document.getElementById('nexusStage');
  const canvas=document.getElementById('nexusCanvas');
  const worldHost=document.getElementById('nexusWorlds');
  const dotHost=document.getElementById('nexusDots');
  if(!overlay||!stage||!canvas||!worldHost)return;

  const ctx=canvas.getContext('2d',{alpha:true,desynchronized:true});
  const count=WORLDS.length;
  const step=Math.PI*2/count;
  const TAU=Math.PI*2;
  const wrapIndex=i=>(i%count+count)%count;
  let selected=Math.max(0,Math.min(count-1,current));
  let rotation=-selected*step;
  let targetRotation=rotation;
  let pendingRotation=rotation;
  let open=false,dragging=false,raf=0,pointerId=null;
  let startX=0,startRotation=0,moved=0,lastX=0,lastTime=0,velocity=0,wheelLock=false;
  let width=1,height=1,dpr=1,mobile=false,radiusX=1,radiusY=1,centerY=1,baseSize=130;
  let hitAreas=[];
  const sprites=[];

  const hexToRgb=hex=>{
    const value=String(hex||'#ffffff').replace('#','');
    const full=value.length===3?[...value].map(x=>x+x).join(''):value;
    const num=parseInt(full,16);
    return {r:(num>>16)&255,g:(num>>8)&255,b:num&255};
  };
  const rgba=(hex,a)=>{const c=hexToRgb(hex);return `rgba(${c.r},${c.g},${c.b},${a})`};

  function makeSprite(world){
    const size=360,c=document.createElement('canvas');
    c.width=c.height=size;
    const g=c.getContext('2d',{alpha:true});
    const cx=size/2,cy=size/2,r=108;
    g.clearRect(0,0,size,size);

    let glow=g.createRadialGradient(cx,cy,r*.55,cx,cy,r*1.55);
    glow.addColorStop(0,rgba(world.color,.34));glow.addColorStop(.48,rgba(world.color,.13));glow.addColorStop(1,rgba(world.color,0));
    g.fillStyle=glow;g.beginPath();g.arc(cx,cy,r*1.55,0,TAU);g.fill();

    const base=g.createRadialGradient(cx-r*.34,cy-r*.38,r*.06,cx,cy,r*1.06);
    base.addColorStop(0,rgba(world.color2,.98));base.addColorStop(.33,rgba(world.color,.88));base.addColorStop(.72,'#0a0d12');base.addColorStop(1,'#010204');
    g.fillStyle=base;g.beginPath();g.arc(cx,cy,r,0,TAU);g.fill();

    g.save();g.beginPath();g.arc(cx,cy,r,0,TAU);g.clip();
    if(world.id==='black-sun'){
      g.fillStyle='#010101';g.beginPath();g.arc(cx,cy,r*.58,0,TAU);g.fill();
      g.strokeStyle=rgba(world.color2,.9);g.lineWidth=7;g.beginPath();g.arc(cx,cy,r*.63,0,TAU);g.stroke();
    }else if(world.id==='aquatoc'){
      g.strokeStyle=rgba(world.color,.28);g.lineWidth=2;
      for(let rr=24;rr<r*1.25;rr+=22){g.beginPath();g.arc(cx-r*.18,cy-r*.12,rr,0,TAU);g.stroke()}
    }else if(world.id==='crimson-rain'){
      g.strokeStyle=rgba(world.color,.3);g.lineWidth=2;
      for(let x=-r;x<r;x+=18){g.beginPath();g.moveTo(cx+x,cy-r);g.lineTo(cx+x-r*.35,cy+r);g.stroke()}
    }else if(world.id==='mountain-blood'){
      g.fillStyle=rgba('#e8efec',.62);g.beginPath();g.moveTo(cx-r,cy+r*.5);g.lineTo(cx-r*.25,cy-r*.22);g.lineTo(cx+r*.05,cy+r*.05);g.lineTo(cx+r*.45,cy-r*.42);g.lineTo(cx+r,cy+r*.55);g.closePath();g.fill();
      g.fillStyle=rgba('#182326',.9);g.beginPath();g.moveTo(cx-r,cy+r*.72);g.lineTo(cx-r*.05,cy-r*.02);g.lineTo(cx+r,cy+r*.72);g.closePath();g.fill();
    }else if(world.id==='starless-void'){
      const hole=g.createRadialGradient(cx,cy,0,cx,cy,r*.55);hole.addColorStop(0,'#000');hole.addColorStop(.44,'#000');hole.addColorStop(.52,rgba(world.color,.95));hole.addColorStop(.66,rgba(world.color2,.22));hole.addColorStop(1,rgba(world.color2,0));g.fillStyle=hole;g.fillRect(cx-r,cy-r,r*2,r*2);
    }else if(world.id==='celestial-veil'){
      g.strokeStyle=rgba('#fff',.42);g.lineWidth=1.3;
      for(let rr=25;rr<r;rr+=22){g.beginPath();g.arc(cx,cy,rr,0,TAU);g.stroke()}
    }else if(world.id==='sunroot-vale'){
      g.strokeStyle=rgba(world.color2,.24);g.lineWidth=3;
      for(let i=-5;i<=5;i++){g.beginPath();g.moveTo(cx+i*22,cy+r);g.quadraticCurveTo(cx+i*14,cy,cx+i*24,cy-r);g.stroke()}
    }
    const shade=g.createLinearGradient(cx-r,cy-r,cx+r,cy+r);shade.addColorStop(0,'rgba(255,255,255,.20)');shade.addColorStop(.38,'rgba(255,255,255,0)');shade.addColorStop(1,'rgba(0,0,0,.72)');g.fillStyle=shade;g.fillRect(cx-r,cy-r,r*2,r*2);
    g.restore();

    g.strokeStyle=rgba(world.color,.7);g.lineWidth=1.5;g.beginPath();g.arc(cx,cy,r,0,TAU);g.stroke();
    g.strokeStyle=rgba(world.color,.48);g.lineWidth=1.2;g.beginPath();g.ellipse(cx,cy,r*1.25,r*.25,-.18,0,TAU);g.stroke();
    g.fillStyle='rgba(255,255,255,.88)';g.beginPath();g.arc(cx+r*.32,cy-r*.42,3.3,0,TAU);g.fill();
    return c;
  }

  function buildSprites(){
    sprites.length=0;
    WORLDS.forEach(w=>sprites.push(makeSprite(w)));
  }

  function renderControls(){
    worldHost.innerHTML=WORLDS.map((w,i)=>`<button type="button" data-nexus-world="${i}" aria-label="${w.title} öffnen">${w.title}</button>`).join('');
    worldHost.querySelectorAll('[data-nexus-world]').forEach(node=>node.addEventListener('click',()=>focusWorld(Number(node.dataset.nexusWorld))));
    if(dotHost){
      dotHost.innerHTML=WORLDS.map((w,i)=>`<button type="button" data-nexus-dot="${i}" aria-label="${w.title}"></button>`).join('');
      dotHost.querySelectorAll('[data-nexus-dot]').forEach(node=>node.addEventListener('click',()=>focusWorld(Number(node.dataset.nexusDot))));
    }
  }

  function updateCopy(){
    const w=WORLDS[selected];
    overlay.style.setProperty('--nexus-accent',w.color);
    document.getElementById('nexusCode').textContent=w.code;
    document.getElementById('nexusTitle').textContent=w.title;
    document.getElementById('nexusGenre').textContent=`${w.genre} · ${w.bpm} BPM`;
    document.getElementById('nexusSubtitle').textContent=w.subtitle;
    dotHost?.querySelectorAll('button').forEach((b,i)=>b.classList.toggle('active',i===selected));
  }

  function resizeCanvas(){
    const rect=stage.getBoundingClientRect();
    width=Math.max(1,Math.round(rect.width));height=Math.max(1,Math.round(rect.height));
    mobile=width<760;
    dpr=mobile?Math.min(window.devicePixelRatio||1,1.25):Math.min(window.devicePixelRatio||1,1.6);
    const rw=Math.max(1,Math.round(width*dpr)),rh=Math.max(1,Math.round(height*dpr));
    if(canvas.width!==rw||canvas.height!==rh){canvas.width=rw;canvas.height=rh;canvas.style.width=`${width}px`;canvas.style.height=`${height}px`;ctx.setTransform(dpr,0,0,dpr,0,0)}
    radiusX=mobile?Math.min(width*.72,285):Math.min(width*.36,470);
    radiusY=mobile?38:65;
    centerY=height*(mobile?.46:.47);
    baseSize=mobile?Math.min(width*.39,168):Math.min(width*.19,224);
    draw();
  }

  function nearestRotation(index,from=rotation){
    const base=-index*step;
    const turns=Math.round((from-base)/TAU);
    return base+turns*TAU;
  }

  function draw(){
    ctx.clearRect(0,0,width,height);
    hitAreas=[];
    const items=WORLDS.map((w,i)=>{
      const angle=rotation+i*step;
      const depth=(Math.cos(angle)+1)/2;
      const x=width/2+Math.sin(angle)*radiusX;
      const y=centerY+Math.sin(angle*2)*radiusY-(1-depth)*(mobile?16:25);
      const scale=(mobile?.47:.44)+depth*(mobile?.61:.66);
      return {i,depth,x,y,size:baseSize*scale,alpha:.13+depth*.87};
    }).sort((a,b)=>a.depth-b.depth);

    items.forEach(item=>{
      const sprite=sprites[item.i];if(!sprite)return;
      const size=item.size;
      ctx.save();ctx.globalAlpha=item.alpha;
      ctx.drawImage(sprite,item.x-size/2,item.y-size/2,size,size);
      ctx.restore();
      hitAreas.push({...item,radius:size*.38});
    });
  }

  function schedule(){if(!raf)raf=requestAnimationFrame(frame)}
  function frame(){
    raf=0;if(!open)return;
    if(dragging){rotation=pendingRotation}
    else{
      const delta=targetRotation-rotation;
      if(Math.abs(delta)>.00025){rotation+=delta*(settings.reduced?.3:.2)}else rotation=targetRotation;
    }
    draw();
    if(dragging||Math.abs(targetRotation-rotation)>.00025)schedule();
  }

  function setSelected(index){
    const next=wrapIndex(index);
    if(next!==selected){selected=next;updateCopy()}
  }
  function focusWorld(index,instant=false){
    setSelected(index);
    targetRotation=nearestRotation(selected,rotation);
    if(instant){rotation=targetRotation;pendingRotation=rotation;draw()}else schedule();
  }
  function enterWorld(){if(selected!==current)selectWorld(selected);window.closeNexus()}

  window.openNexus=function(){
    if(open)return;
    selected=current;rotation=-selected*step;targetRotation=rotation;pendingRotation=rotation;open=true;
    overlay.classList.add('open');overlay.setAttribute('aria-hidden','false');document.body.classList.add('nexus-open');
    updateCopy();requestAnimationFrame(()=>{resizeCanvas();schedule()});
  };
  window.closeNexus=function(){
    if(!open)return;open=false;dragging=false;pointerId=null;
    overlay.classList.remove('open','nexus-dragging');overlay.setAttribute('aria-hidden','true');document.body.classList.remove('nexus-open');stage.classList.remove('dragging');
    if(raf){cancelAnimationFrame(raf);raf=0}
  };

  stage.addEventListener('pointerdown',e=>{
    if(e.button!==undefined&&e.button!==0)return;
    dragging=true;pointerId=e.pointerId;startX=e.clientX;startRotation=rotation;pendingRotation=rotation;targetRotation=rotation;moved=0;lastX=e.clientX;lastTime=performance.now();velocity=0;
    stage.classList.add('dragging');overlay.classList.add('nexus-dragging');
    try{stage.setPointerCapture?.(pointerId)}catch{}
    schedule();
  });
  stage.addEventListener('pointermove',e=>{
    if(!dragging||e.pointerId!==pointerId)return;
    const samples=e.getCoalescedEvents?.();const point=samples?.length?samples[samples.length-1]:e;
    const now=performance.now(),dx=point.clientX-startX,dt=Math.max(1,now-lastTime);
    moved=Math.max(moved,Math.abs(dx));
    const factor=mobile?.0082:.0054;
    pendingRotation=startRotation+dx*factor;
    velocity=(point.clientX-lastX)*factor/dt;
    lastX=point.clientX;lastTime=now;schedule();
  });
  const endDrag=e=>{
    if(!dragging||(e.pointerId!==undefined&&e.pointerId!==pointerId))return;
    dragging=false;stage.classList.remove('dragging');overlay.classList.remove('nexus-dragging');
    try{stage.releasePointerCapture?.(pointerId)}catch{}pointerId=null;
    rotation=pendingRotation;
    if(moved<8){
      const rect=stage.getBoundingClientRect(),x=(e.clientX??lastX)-rect.left,y=(e.clientY??centerY)-rect.top;
      const hit=hitAreas.filter(h=>Math.hypot(x-h.x,y-h.y)<=Math.max(28,h.radius)).sort((a,b)=>b.depth-a.depth)[0];
      if(hit){focusWorld(hit.i);return}
    }
    const projected=rotation+Math.max(-.012,Math.min(.012,velocity))*150;
    const snapped=wrapIndex(Math.round(-projected/step));focusWorld(snapped);
  };
  stage.addEventListener('pointerup',endDrag);stage.addEventListener('pointercancel',endDrag);stage.addEventListener('lostpointercapture',endDrag);
  stage.addEventListener('wheel',e=>{if(!open||wheelLock)return;e.preventDefault();wheelLock=true;focusWorld(selected+(e.deltaY>0||e.deltaX>0?1:-1));setTimeout(()=>wheelLock=false,240)},{passive:false});

  document.getElementById('nexusPrev')?.addEventListener('click',()=>focusWorld(selected-1));
  document.getElementById('nexusNext')?.addEventListener('click',()=>focusWorld(selected+1));
  document.getElementById('enterNexusWorld')?.addEventListener('click',enterWorld);
  document.getElementById('closeNexus')?.addEventListener('click',window.closeNexus);
  document.getElementById('nexusBrand')?.addEventListener('click',window.closeNexus);
  document.getElementById('brandBtn')?.addEventListener('click',window.openNexus);
  const onResize=()=>{if(open)resizeCanvas()};
  window.addEventListener('resize',onResize,{passive:true});window.visualViewport?.addEventListener('resize',onResize,{passive:true});
  window.addEventListener('keydown',e=>{if(!open)return;if(e.key==='ArrowLeft'){e.preventDefault();focusWorld(selected-1)}else if(e.key==='ArrowRight'){e.preventDefault();focusWorld(selected+1)}else if(e.key==='Enter'){e.preventDefault();enterWorld()}else if(e.key==='Escape'){e.preventDefault();window.closeNexus()}});

  buildSprites();renderControls();updateCopy();
})();

