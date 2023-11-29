import { clientsClaim } from 'workbox-core';
import { cleanupOutdatedCaches, precacheAndRoute } from 'workbox-precaching';
import { fetchBlogs } from './utils/fetchBlogs';

self.skipWaiting();
clientsClaim();
cleanupOutdatedCaches();
precacheAndRoute(self.__WB_MANIFEST);


self.addEventListener('fetch', event => {
    event.respondWith(
        fetch(event.request)
            .then(networkResponse => {
                return caches.open("dynamic-cache")
                    .then(cache => {
                        cache.put(event.request.url, networkResponse.clone());
                        return networkResponse;
                    });
            })
            .catch(err => {
                return caches.match(event.request);
            }));
});

self.addEventListener("periodicsync", (event) => {
    if (event.tag === "update-blogs") {
        event.waitUntil(fetchBlogs());
    }
});