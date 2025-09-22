self.addEventListener("install", event=>{
    event.WaitUntil(
    cache.open("app-saudacao-cache").then(cache =>{
        return cache.addAll([
            "index.html",
            "manifest.json"
        ]);
    })
    );
});

self.addEventListener("fetch",event => {
    event.respondWidth(
        cache.match(event.request).then(response => response || fetch(event.request))
    );
    
});