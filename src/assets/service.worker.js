
let CACHE_NAME = "ChatAppV1";

self.addEventListener( 'install', event => {

    caches.open( CACHE_NAME).then( event => {

        event.addAll([
            '/index.html',
            '/manifest.json'
        ]);
        
    }).catch( err => {
        console.log('Error while opening cache', err );
    })

});

self.addEventListener( 'fetch', event => {
    console.log("fetch");
    event.respondWith( getCustomRequest( event ) );

})

async function getCustomRequest( event ){

    try{
        let cacheResponse = await caches.match( event.request );
        if( cacheResponse )
            return cacheResponse;
        
        let networkResponse = await fetch( event.request );
        let cache = await caches.open( CACHE_NAME );
        cache.put( event.request, networkResponse.clone() );
        return networkResponse;
    }catch( err ){
        console.log("Error while fetch", err );
    }

}


self.addEventListener( 'notificatioclose', event => {

});

self.addEventListener( 'notificationclick', event => {
    
})