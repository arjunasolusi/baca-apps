// Service worker minimal -- hanya untuk memenuhi syarat "Add to Home Screen".
// Tidak melakukan caching agresif supaya data selalu fresh dari Google Sheet.
self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  // no-op: selalu ambil dari network
});
