self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('void-echo-v3').then((cache) => {
      return cache.addAll([
        '/SA-SHADOW-HUB/music.html',
        '/SA-SHADOW-HUB/manifest.json',
        '/SA-SHADOW-HUB/favicon.png'
      ]);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
