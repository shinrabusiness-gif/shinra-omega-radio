const WORLDS=[
{id:'black-sun',code:'CHANNEL 01 / ORIGIN',title:'BLACK SUN',subtitle:'Low-frequency transmissions beneath a dead horizon.',genre:'DARK AMBIENT',bpm:48,color:'#e8c56b',color2:'#ff573d',track:'CORE DRIFT',tracks:['CORE DRIFT','DEAD HORIZON','SOLAR MEMORY','ASHEN SIGNAL'],osc:[55,82.4,110],layers:['VOID DRONE','SOLAR DUST','DISTANT CHOIR']},
{id:'aquatoc',code:'CHANNEL 02 / ABYSS',title:'AQUATOC',subtitle:'Submerged machinery dreaming below an endless ocean.',genre:'AQUATIC INDUSTRIAL',bpm:56,color:'#5de6ff',color2:'#1778ff',track:'PRESSURE TEMPLE',tracks:['PRESSURE TEMPLE','SONAR GHOST','BELOW THE THERMAL LINE','DROWNED MACHINERY'],osc:[43.65,65.4,130.8],layers:['DEEP CURRENT','SONAR GHOST','METAL TIDE']},
{id:'crimson-rain',code:'CHANNEL 03 / RED DISTRICT',title:'CRIMSON RAIN',subtitle:'Red light dissolving across wet streets after midnight.',genre:'NOCTURNAL SYNTH',bpm:74,color:'#ff334f',color2:'#8b102d',track:'AFTERGLOW SIGNAL',tracks:['AFTERGLOW SIGNAL','RED DISTRICT 03:17','RAIN ON GLASS','LAST TRAIN MEMORY'],osc:[49,73.42,146.83],layers:['MIDNIGHT CURRENT','CRIMSON RAIN','DISTANT CITY']},
{id:'mountain-blood',code:'CHANNEL 04 / DARDANIA',title:'MOUNTAIN BLOOD',subtitle:'Ancient strings carried through stone, wind and memory.',genre:'BALKAN RITUAL',bpm:72,color:'#ff5b45',color2:'#d7ad62',track:'STONE OATH',tracks:['STONE OATH','WIND OVER DARDANIA','EMBER CIRCLE','MOUNTAIN MEMORY'],osc:[73.4,110,146.8],layers:['MOUNTAIN WIND','STRING ECHO','FIRE CIRCLE']},
{id:'starless-void',code:'CHANNEL 05 / DEEP SPACE',title:'STARLESS VOID',subtitle:'A transmission drifting beyond the last mapped constellation.',genre:'COSMIC AMBIENT',bpm:40,color:'#9f87ff',color2:'#48d7ff',track:'EVENT HORIZON',tracks:['EVENT HORIZON','PILOT MEMORY','ION VEIL','BEYOND THE LAST STAR'],osc:[36.7,55,92.5],layers:['ION CLOUD','DARK MATTER','PILOT MEMORY']}
,{id:'celestial-veil',code:'CHANNEL 06 / EMPYREAN',title:'CELESTIAL VEIL',subtitle:'Sacred transmissions beyond the veil of light.',genre:'HEAVENLY AMBIENT',bpm:52,color:'#f5e4ad',color2:'#fff8ef',track:'VEIL OF MERCY',tracks:['VEIL OF MERCY','HALO PROCESSION','IVORY SKY','LUMEN CHOIR'],osc:[130.81,261.63,392],layers:['CHOIR VEIL','HALO BELLS','STAR SHIMMER']}
];
const $=s=>document.querySelector(s);const $$=s=>[...document.querySelectorAll(s)];
const settings=Object.assign({intro:true,reduced:false,remember:true,shuffleStart:false,defaultTimer:0},JSON.parse(localStorage.srSettings||'{}'));const requestedWorld=new URLSearchParams(location.search).get('world');let current=Math.max(0,WORLDS.findIndex(w=>w.id===requestedWorld));if(!requestedWorld)current=settings.remember?Number(localStorage.srWorld||0):0;let playing=false,audioCtx,master,analyser,filters=[],sources=[],layerGains=[],noiseNodes=[],engineNodes=[],engineTimers=[],startedAt=0,timerEnd=0,timerHandle,deferredPrompt,lang='de',switching=false,transmissionTimer=null,trackIndex=0,shuffleMode=settings.shuffleStart||localStorage.srShuffle==='1',favorites=new Set(JSON.parse(localStorage.srFavorites||'[]'));
const state={eq:JSON.parse(localStorage.srEq||'{"bass":0,"mid":0,"treble":0}'),layers:JSON.parse(localStorage.srLayers||'[0.45,0.28,0.22]'),volume:Number(localStorage.srVol||.72)};
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
  return `<button class="world-card ${active} ${favorite}" data-i="${i}" style="--card:${w.color}"><small>${w.code.split('/')[0]}</small><b>${w.title}</b><span>${w.genre}</span></button>`;
}).join('');$$('.world-card').forEach(b=>b.onclick=()=>selectWorld(+b.dataset.i));}
function renderControls(){const labels=[['bass','BASS'],['mid','MID'],['treble','TREBLE']];$('#eq').innerHTML=labels.map(([k,l])=>`<div class="control"><label>${l}</label><input data-eq="${k}" type="range" min="-12" max="12" step="1" value="${state.eq[k]}"><output>${state.eq[k]>0?'+':''}${state.eq[k]}</output></div>`).join('');$$('[data-eq]').forEach(el=>el.oninput=e=>{state.eq[e.target.dataset.eq]=+e.target.value;e.target.nextElementSibling.textContent=(+e.target.value>0?'+':'')+e.target.value;applyEq();save();});renderLayers();$('#timerButtons').innerHTML=[15,30,45,60,90,0].map(x=>`<button data-min="${x}">${x||'∞'}${x?' MIN':''}</button>`).join('');$$('[data-min]').forEach(b=>b.onclick=()=>setTimer(+b.dataset.min));}
function renderLayers(){const w=WORLDS[current];$('#layers').innerHTML=w.layers.map((l,i)=>`<div class="control"><label>${l}</label><input data-layer="${i}" type="range" min="0" max="1" step=".01" value="${state.layers[i]??.3}"><output>${Math.round((state.layers[i]??.3)*100)}</output></div>`).join('');$$('[data-layer]').forEach(el=>el.oninput=e=>{state.layers[+e.target.dataset.layer]=+e.target.value;e.target.nextElementSibling.textContent=Math.round(e.target.value*100);if(layerGains[+e.target.dataset.layer]){const i=+e.target.dataset.layer;const scale=current===0?[.17,.2,.12][i]:current===1?[.15,.14,.11][i]:current===2?[.12,.16,.11][i]:current===3?[.14,.12,.13][i]:current===4?[.11,.055,.035][i]:[.12,.09,.065][i];layerGains[i].gain.setTargetAtTime(+e.target.value*scale,audioCtx.currentTime,.12)}save();});}

function showWorldGate(i){
  const w=WORLDS[(i+WORLDS.length)%WORLDS.length],gate=$('#worldGate');
  if(!gate)return;
  gate.style.setProperty('--gate-color',w.color);
  gate.style.setProperty('--gate-glow',hexAlpha(w.color,.34));
  $('#gateTitle').textContent=w.title;
  $('#gateGenre').textContent=w.genre;
  gate.classList.remove('closing');
  gate.classList.add('open');
  gate.setAttribute('aria-hidden','false');
}
function hideWorldGate(){
  const gate=$('#worldGate');if(!gate)return;
  gate.classList.add('closing');
  setTimeout(()=>{gate.classList.remove('open','closing');gate.setAttribute('aria-hidden','true')},480);
}

function setCurrentWorld(i){current=(i+WORLDS.length)%WORLDS.length;trackIndex=0;if(settings.remember)localStorage.srWorld=current;updateWorld();}
function selectWorld(i){const next=(i+WORLDS.length)%WORLDS.length;if(next===current||switching)return;switching=true;showWorldGate(next);if(!playing){setTimeout(()=>{setCurrentWorld(next);hideWorldGate();switching=false},520);return}$('#deck')?.classList.add('switching');const now=audioCtx.currentTime;master.gain.cancelScheduledValues(now);master.gain.setValueAtTime(master.gain.value,now);master.gain.linearRampToValueAtTime(0.0001,now+.65);setTimeout(()=>{teardownAudio();setCurrentWorld(next);master.gain.setValueAtTime(.0001,audioCtx.currentTime);startAudio(true);master.gain.linearRampToValueAtTime(state.volume,audioCtx.currentTime+1.15);setTimeout(()=>{hideWorldGate();$('#deck')?.classList.remove('switching');switching=false},620)},690)}
function updateWorld(){const w=WORLDS[current];document.body.dataset.world=w.id;document.documentElement.style.setProperty('--accent',w.color);document.documentElement.style.setProperty('--accent2',w.color2);document.documentElement.style.setProperty('--glow',hexAlpha(w.color,.26));$('#worldCode').textContent=w.code;$('#worldTitle').textContent=w.title;$('#worldSubtitle').textContent=w.subtitle;$('#genreTag').textContent=w.genre;$('#bpmTag').textContent=w.bpm+' BPM';$('#nowTitle').textContent=w.title+' — '+(w.tracks?.[trackIndex]||w.track);updateMasterControls();$('#sleepCode').textContent=w.code;$('#sleepTitle').textContent=w.title;renderWorlds();renderLayers();updateMedia();}
function hexAlpha(hex,a){const h=hex.replace('#','');return `rgba(${parseInt(h.slice(0,2),16)},${parseInt(h.slice(2,4),16)},${parseInt(h.slice(4,6),16)},${a})`}
function ensureAudio(){if(audioCtx)return;audioCtx=new (window.AudioContext||window.webkitAudioContext)();master=audioCtx.createGain();analyser=audioCtx.createAnalyser();analyser.fftSize=256;filters=[audioCtx.createBiquadFilter(),audioCtx.createBiquadFilter(),audioCtx.createBiquadFilter()];filters[0].type='lowshelf';filters[0].frequency.value=180;filters[1].type='peaking';filters[1].frequency.value=900;filters[1].Q.value=.8;filters[2].type='highshelf';filters[2].frequency.value=3500;filters[0].connect(filters[1]).connect(filters[2]).connect(analyser).connect(master).connect(audioCtx.destination);master.gain.value=state.volume;applyEq();drawVisualizer();}
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

function createStandardWorld(){const w=WORLDS[current];w.osc.forEach((freq,i)=>{const o=audioCtx.createOscillator(),g=audioCtx.createGain(),lfo=audioCtx.createOscillator(),lg=audioCtx.createGain();o.type=i===0?'sine':i===1?'triangle':'sine';o.frequency.value=freq;lfo.frequency.value=.04+i*.025;lg.gain.value=freq*.012;lfo.connect(lg).connect(o.frequency);g.gain.value=(state.layers[i]??.3)*[.11,.055,.035][i];o.connect(g).connect(filters[0]);o.start();lfo.start();sources.push(o,lfo);layerGains.push(g);trackNode(g,lg)});const n=makeNoise(current===2?'white':'brown'),ng=audioCtx.createGain(),nf=audioCtx.createBiquadFilter();nf.type='lowpass';nf.frequency.value=current===1?900:current===2?3500:650;ng.gain.value=(state.layers[2]??.2)*.06;n.connect(nf).connect(ng).connect(filters[0]);n.start();noiseNodes.push(n);trackNode(ng,nf)}
function beginTransmissionCycle(){clearInterval(transmissionTimer);transmissionTimer=setInterval(()=>{if(!playing)return;const w=WORLDS[current],list=w.tracks||[w.track];trackIndex=(trackIndex+1)%list.length;const title=$('#nowTitle');title.classList.add('changing');setTimeout(()=>{title.textContent=w.title+' — '+list[trackIndex];title.classList.remove('changing');updateMedia()},320)},45000)}
function startAudio(fromSwitch=false){ensureAudio();audioCtx.resume();sources=[];layerGains=[];noiseNodes=[];engineNodes=[];engineTimers=[];if(!fromSwitch)master.gain.setTargetAtTime(state.volume,audioCtx.currentTime,.08);if(current===0)createBlackSun();else if(current===1)createAquatoc();else if(current===2)createCrimsonRain();else if(current===3)createMountainBlood();else if(current===4)createStarlessVoid();else if(current===5)createCelestialVeil();else createStandardWorld();playing=true;startedAt=Date.now();document.body.classList.add('playing');$('#playIcon').textContent=$('#sleepPlayBtn').textContent='Ⅱ';$('#signalValue').textContent='TRANSMITTING';$('#systemStatus').textContent=WORLDS[current].title+' LIVE';beginTransmissionCycle();updateMedia();toast(WORLDS[current].title+' ONLINE');}
function teardownAudio(){clearInterval(transmissionTimer);engineTimers.forEach(clearInterval);engineTimers=[];[...sources,...noiseNodes].forEach(x=>{try{x.stop()}catch{}});[...engineNodes].forEach(x=>{try{x.disconnect()}catch{}});sources=[];noiseNodes=[];engineNodes=[];layerGains=[];}
function stopAudio(){if(!playing)return;playing=false;clearInterval(transmissionTimer);const finish=()=>{teardownAudio();document.body.classList.remove('playing');$('#playIcon').textContent=$('#sleepPlayBtn').textContent='▶';$('#signalValue').textContent='STANDBY';$('#systemStatus').textContent='READY';updateMedia()};if(audioCtx&&master){const now=audioCtx.currentTime;master.gain.cancelScheduledValues(now);master.gain.setValueAtTime(master.gain.value,now);master.gain.linearRampToValueAtTime(.0001,now+.45);setTimeout(()=>{finish();master.gain.value=state.volume},470)}else finish()}
function toggle(){playing?stopAudio():startAudio()}
function applyEq(){if(!filters.length)return;['bass','mid','treble'].forEach((k,i)=>filters[i].gain.setTargetAtTime(state.eq[k],audioCtx.currentTime,.05))}
function save(){localStorage.srEq=JSON.stringify(state.eq);localStorage.srLayers=JSON.stringify(state.layers);localStorage.srVol=state.volume}
function setTimer(min){clearInterval(timerHandle);$$('[data-min]').forEach(b=>b.classList.toggle('active',+b.dataset.min===min));if(!min){timerEnd=0;$('#timerTitle').textContent='NO TIMER';$('#timerCountdown').textContent=$('#sleepTimerText').textContent='∞';return}timerEnd=Date.now()+min*60000;$('#timerTitle').textContent=min+' MINUTES';timerHandle=setInterval(updateTimer,1000);updateTimer();toast(`SLEEP TIMER ${min} MIN`)}
function updateTimer(){const left=Math.max(0,timerEnd-Date.now()),m=Math.floor(left/60000),s=Math.floor(left%60000/1000),txt=`${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;$('#timerCountdown').textContent=$('#sleepTimerText').textContent=txt;if(left<=0){clearInterval(timerHandle);stopAudio();timerEnd=0;toast('SLEEP PROTOCOL COMPLETE')}}
function updateMedia(){if(!('mediaSession'in navigator))return;const w=WORLDS[current];navigator.mediaSession.metadata=new MediaMetadata({title:(w.tracks?.[trackIndex]||w.track),artist:'Shinra Omega Radio',album:w.title,artwork:[{src:'icon-512.png',sizes:'512x512',type:'image/png'}]});navigator.mediaSession.playbackState=playing?'playing':'paused'}
function drawVisualizer(){const c=$('#visualizer'),ctx=c.getContext('2d'),data=new Uint8Array(analyser.frequencyBinCount);function frame(){const dpr=Math.min(devicePixelRatio,2),w=innerWidth,h=innerHeight;if(c.width!==w*dpr||c.height!==h*dpr){c.width=w*dpr;c.height=h*dpr;c.style.width=w+'px';c.style.height=h+'px';ctx.setTransform(dpr,0,0,dpr,0,0)}ctx.clearRect(0,0,w,h);analyser.getByteFrequencyData(data);const color=WORLDS[current].color;ctx.strokeStyle=color;ctx.lineWidth=1;ctx.globalAlpha=.7;ctx.beginPath();for(let i=0;i<data.length;i++){const x=i/(data.length-1)*w,y=h*.78-(data[i]/255)*h*.24+(Math.sin(i*.5+performance.now()*.001)*4);i?ctx.lineTo(x,y):ctx.moveTo(x,y)}ctx.stroke();const avg=data.reduce((a,b)=>a+b,0)/data.length;document.body.style.setProperty('--signal',playing?Math.min(1,avg/190).toFixed(3):'0');$('#signalMeter').style.width=(playing?Math.max(8,avg/255*100):4)+'%';$('#reactor').style.transform=`scale(${1+(avg/255)*.045})`;$('#progressBar').style.width=playing?((Date.now()-startedAt)/1000%120)/120*100+'%':'0%';$('#elapsed').textContent=fmt(playing?(Date.now()-startedAt)/1000:0);requestAnimationFrame(frame)}frame()}
function fmt(sec){return `${String(Math.floor(sec/60)).padStart(2,'0')}:${String(Math.floor(sec%60)).padStart(2,'0')}`}
function toast(t){const el=$('#toast');el.textContent=t;el.classList.add('show');clearTimeout(el._t);el._t=setTimeout(()=>el.classList.remove('show'),1800)}
function updateMasterControls(){const fav=$('#favoriteBtn'),shuffle=$('#shuffleBtn');if(fav){fav.classList.toggle('active',favorites.has(WORLDS[current].id));fav.textContent=favorites.has(WORLDS[current].id)?'♥':'♡'}if(shuffle)shuffle.classList.toggle('active',shuffleMode)}
function toggleFavorite(){const id=WORLDS[current].id;if(favorites.has(id))favorites.delete(id);else favorites.add(id);localStorage.srFavorites=JSON.stringify([...favorites]);renderWorlds();updateMasterControls();toast(favorites.has(id)?'FAVORITE STORED':'FAVORITE REMOVED')}
function nextWorld(direction=1){if(shuffleMode){let choices=WORLDS.map((_,i)=>i).filter(i=>i!==current);if(favorites.size){const favChoices=choices.filter(i=>favorites.has(WORLDS[i].id));if(favChoices.length)choices=favChoices}selectWorld(choices[Math.floor(Math.random()*choices.length)])}else selectWorld(current+direction)}

function applySettings(){document.body.classList.toggle('motion-reduced',!!settings.reduced);$('#settingIntro').checked=!!settings.intro;$('#settingReduced').checked=!!settings.reduced;$('#settingRemember').checked=!!settings.remember;$('#settingShuffle').checked=!!settings.shuffleStart;$('#settingTimer').value=String(settings.defaultTimer||0)}
function openSettings(){applySettings();$('#settingsOverlay').classList.add('open');$('#settingsOverlay').setAttribute('aria-hidden','false')}
function closeSettings(){const el=$('#settingsOverlay');el.classList.remove('open');el.setAttribute('aria-hidden','true')}
function storeSettings(){settings.intro=$('#settingIntro').checked;settings.reduced=$('#settingReduced').checked;settings.remember=$('#settingRemember').checked;settings.shuffleStart=$('#settingShuffle').checked;settings.defaultTimer=Number($('#settingTimer').value||0);localStorage.srSettings=JSON.stringify(settings);if(!settings.remember)localStorage.removeItem('srWorld');applySettings();closeSettings();toast('SETTINGS STORED')}
function resetAppData(){if(!confirm('Alle gespeicherten Sender, Favoriten, Regler und Einstellungen zurücksetzen?'))return;['srEq','srLayers','srVol','srWorld','srFavorites','srShuffle','srSettings','srIntroSeen'].forEach(k=>localStorage.removeItem(k));location.reload()}
$('#playBtn').onclick=$('#sleepPlayBtn').onclick=toggle;$('#prevBtn').onclick=()=>nextWorld(-1);$('#nextBtn').onclick=()=>nextWorld(1);$('#favoriteBtn').onclick=toggleFavorite;$('#shuffleBtn').onclick=()=>{shuffleMode=!shuffleMode;localStorage.srShuffle=shuffleMode?'1':'0';updateMasterControls();toast(shuffleMode?'SHUFFLE ACTIVE':'SHUFFLE OFF')};$('#volume').value=state.volume;$('#volumeOut').textContent=Math.round(state.volume*100);$('#volume').oninput=e=>{state.volume=+e.target.value;$('#volumeOut').textContent=Math.round(state.volume*100);if(master)master.gain.setTargetAtTime(state.volume,audioCtx.currentTime,.05);save()};$('#resetEq').onclick=()=>{state.eq={bass:0,mid:0,treble:0};renderControls();applyEq();save();toast('EQ RESET')};$('#fullscreenSleep').onclick=$('#sleepModeBtn').onclick=()=>{$('#sleepOverlay').classList.add('open');$('#sleepOverlay').setAttribute('aria-hidden','false')};$('#exitSleepBtn').onclick=()=>{$('#sleepOverlay').classList.remove('open');$('#sleepOverlay').setAttribute('aria-hidden','true')};$('#settingsBtn').onclick=openSettings;$('#closeSettings').onclick=closeSettings;$('#saveSettings').onclick=storeSettings;$('#resetAppData').onclick=resetAppData;$('#settingsOverlay').addEventListener('click',e=>{if(e.target.id==='settingsOverlay')closeSettings()});
window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();deferredPrompt=e;$('#installBtn').hidden=false});$('#installBtn').onclick=async()=>{if(deferredPrompt){deferredPrompt.prompt();await deferredPrompt.userChoice;deferredPrompt=null;$('#installBtn').hidden=true}};
window.addEventListener('online',()=>{$('#netLabel').textContent='ONLINE';$('#netDot').style.background='#6df49a'});window.addEventListener('offline',()=>{$('#netLabel').textContent='OFFLINE';$('#netDot').style.background='#ff765f'});
if('mediaSession'in navigator){navigator.mediaSession.setActionHandler('play',()=>!playing&&startAudio());navigator.mediaSession.setActionHandler('pause',()=>playing&&stopAudio());navigator.mediaSession.setActionHandler('previoustrack',()=>selectWorld(current-1));navigator.mediaSession.setActionHandler('nexttrack',()=>selectWorld(current+1));}
if('serviceWorker'in navigator)window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js').catch(()=>{}));
window.addEventListener('keydown',e=>{if(e.code==='Space'&&e.target.tagName!=='INPUT'){e.preventDefault();toggle()}if(e.code==='ArrowRight')nextWorld(1);if(e.code==='ArrowLeft')nextWorld(-1);if(e.key.toLowerCase()==='f')toggleFavorite();if(e.key.toLowerCase()==='s'){shuffleMode=!shuffleMode;localStorage.srShuffle=shuffleMode?'1':'0';updateMasterControls()}});
applySettings();renderControls();updateWorld();updateMasterControls();if(settings.defaultTimer)setTimer(settings.defaultTimer);
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
