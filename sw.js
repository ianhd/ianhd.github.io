var cacheName = 'hello-pwa';
var filesToCache = [
  '/',
  '/css/style.css',
  //'/js/main.js',
  '/favicon.ico'
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(e) {
  console.log("Installing sw.js");
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
});

/* Serve cached content when offline */
self.addEventListener('fetch', function(e) {
  // console.log("Fetching " + e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
