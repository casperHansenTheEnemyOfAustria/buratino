self.addEventListener("install", function(event){
    event.waitUntil(
        caches.open("sw-cache").then(function(chache){
            return caches.add("index.html", "js/buttonsAndCurtain.js", "js/collisionDetection.js", "js/curtain.js", "js/index.js", "js/overlays.js", "js/tables.js", "js/youtubeButtons.js", "scss/main.css")
        })
    )
})

self.addEventListener("fetch", function(event){
    event.respondWith(
        caches.match(event.request).then(function(response){
            return response || fetch(event.request)
        })
    )
})