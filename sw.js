const CACHE='shinra-omega-journeys-6.1';
const ASSETS=['./','./index.html','./style.css','./app.js','./manifest.json','./icon-192.png','./icon-512.png','./shinra-symbol.png','./shinra-omega-logo.png','./sample-forest.wav','./sample-rain.wav','./sample-ocean.wav','./sample-radio.wav','./sample-wood.wav','./sample-bell.wav','./sample-bamboo.wav'];
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS)))});
self.addEventListener('message',event=>{if(event.data&&event.data.type==='SKIP_WAITING')self.skipWaiting()});
self.addEventListener('activate',event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key!==CACHE).map(key=>caches.delete(key)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',event=>{if(event.request.method!=='GET')return;event.respondWith(fetch(event.request).then(response=>{const copy=response.clone();caches.open(CACHE).then(cache=>cache.put(event.request,copy));return response}).catch(()=>caches.match(event.request).then(cached=>cached||caches.match('./index.html'))))});
