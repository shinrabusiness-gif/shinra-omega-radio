const VERSION='7.1.0';
const CACHE='shinra-omega-silk-master-7.1.0';
const ASSETS=["./","./index.html","./style.css","./app.js","./manifest.json","./version.json","./icon-192.png","./icon-512.png","./shinra-symbol.png","./shinra-omega-logo.png","./sample-ash-wind.wav","./sample-bamboo.wav","./sample-bell.wav","./sample-bubble-field.wav","./sample-cedar-leaves.wav","./sample-choir-air.wav","./sample-city-distant.wav","./sample-cosmic-static.wav","./sample-ember-fire.wav","./sample-forest.wav","./sample-glass-chime.wav","./sample-ion-pulse.wav","./sample-koto.wav","./sample-metal-resonance.wav","./sample-mountain-string.wav","./sample-neon-hum.wav","./sample-ocean.wav","./sample-pressure-crack.wav","./sample-radio.wav","./sample-rain.wav","./sample-summit-bell.wav","./sample-summit-drone.wav","./sample-summit-string.wav","./sample-summit-wind.wav","./sample-wood.wav","./omega-aquatoc-bed.ogg","./omega-aquatoc-motion.ogg","./omega-aquatoc-signature.ogg","./omega-black-sun-bed.ogg","./omega-black-sun-motion.ogg","./omega-black-sun-signature.ogg","./omega-celestial-veil-bed.ogg","./omega-celestial-veil-motion.ogg","./omega-celestial-veil-signature.ogg","./omega-crimson-rain-bed.ogg","./omega-crimson-rain-motion.ogg","./omega-crimson-rain-signature.ogg","./omega-mountain-blood-bed.ogg","./omega-mountain-blood-motion.ogg","./omega-mountain-blood-signature.ogg","./omega-starless-void-bed.ogg","./omega-starless-void-motion.ogg","./omega-starless-void-signature.ogg","./omega-sunroot-vale-bed.ogg","./omega-sunroot-vale-motion.ogg","./omega-sunroot-vale-signature.ogg"];
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS)))});
self.addEventListener('message',event=>{
  if(event.data&&event.data.type==='SKIP_WAITING')self.skipWaiting();
  if(event.data&&event.data.type==='GET_VERSION'&&event.source)event.source.postMessage({type:'SW_VERSION',version:VERSION});
});
self.addEventListener('activate',event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key!==CACHE).map(key=>caches.delete(key)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET')return;
  const url=new URL(event.request.url);
  if(url.pathname.endsWith('/version.json')){event.respondWith(fetch(event.request,{cache:'no-store'}).catch(()=>caches.match('./version.json')));return;}
  event.respondWith(fetch(event.request).then(response=>{const copy=response.clone();caches.open(CACHE).then(cache=>cache.put(event.request,copy));return response}).catch(()=>caches.match(event.request).then(cached=>cached||caches.match('./index.html'))));
});
