const CACHE_STATIC_NAME = "v6";

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys()
            .then(keyList => {
                return Promise.all(keyList.map(function (key) {
                    if (key !== CACHE_STATIC_NAME) {
                        return caches.delete(key);
                    }
                }));
            })
            .then(() => {
                caches.open(CACHE_STATIC_NAME)
                    .then((cache) => {
                        cache.addAll([
                            '/',
                            '/index.html',
                            '/styles.css',
                            '/App.jsx',
                            '/firebase.js',
                            'https://unpkg.com/react@18/umd/react.production.min.js',
                            'https://unpkg.com/react-dom@18/umd/react-dom.production.min.js',
                            'https://unpkg.com/@babel/standalone/babel.min.js',
                            'https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js',
                            'https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js',
                            'https://www.gstatic.com/firebasejs/10.7.0/firebase-database.js'
                        ]);
                    });
            })
    );
    return self.clients.claim();
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                if (response) return response;
                else {
                    return fetch(event.request)
                        .catch(function (err) { });
                }
            })
    );
});