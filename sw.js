const CACHE='mikhael-v5-4-20260913';
const ASSETS=['./','./index.html','./manifest.webmanifest','./src/styles.css','./src/app.js','./data/block1-content.json','./data/alphabet.json','./data/vocalization.json','./data/reader.json','./data/morphology.json','./data/grammar.json','./data/reader-vocab.json','./icons/icon.svg'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith(caches.match(e.request).then(cached=>cached||fetch(e.request).then(r=>{const copy=r.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));return r}).catch(()=>caches.match('./index.html'))))});
