const VERSION='6.4';
const CACHE='shinra-omega-fusion-matrix-6.4';
const ASSETS=['./','./index.html','./style.css','./app.js','./manifest.json','./version.json','./icon-192.png','./icon-512.png','./shinra-symbol.png','./shinra-omega-logo.png','./sample-forest.wav','./sample-rain.wav','./sample-ocean.wav','./sample-radio.wav','./sample-wood.wav','./sample-bell.wav','./sample-bamboo.wav'];
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
