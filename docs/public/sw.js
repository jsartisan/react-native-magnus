// The Gatsby site registered a service worker (gatsby-plugin-offline) at /sw.js.
// Browsers that still have it would keep serving the old cached Gatsby pages.
// This replacement unregisters itself and clears the old caches on activation.
self.addEventListener('install', () => self.skipWaiting());

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(keys.map((key) => caches.delete(key)));
      await self.registration.unregister();
      const clients = await self.clients.matchAll({ type: 'window' });
      clients.forEach((client) => client.navigate(client.url));
    })()
  );
});
