self.addEventListener("install", event=>{
    event.WaitUntil(
    cache.open("app-saudacao-cache").then(cache =>{
        return cache.addAll([
            "index.html",
            "manifest.json",
            "icone-192.png",
            "icone-512.png"
        ]);
    })
    );
});

self.addEventListener("fetch",event => {
    event.respondWidth(
        cache.match(event.request).then(response => response || fetch(event.request))
    );
    
});