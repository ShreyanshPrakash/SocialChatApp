import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import { App } from './src/app';
import { store } from './src/redux/root.store';


ReactDOM.render(
    <Provider store={ store }>
        <App/>
    </Provider>,
    document.getElementById('app')
)


// register sw and other prompts
registerServiceWorker();
getNotification();
function registerServiceWorker(){

    if( 'serviceWorker' in navigator ){
        navigator.serviceWorker.register('./service.worker.js').then( event => {
            console.log("Service worker registered successfully", event );
        }).catch( err => {
            console.log('Error registering service worker', err);
        })
    }else{
        console.log('Service worker is not supported');
    }

}

let defferedEvent;
window.addEventListener( 'beforeInstallPrompt', event => {
    event.preventDefault();
    defferedEvent = event;
    showAddTOHomeScreenBanner();
})

function showAddTOHomeScreenBanner(){
    // do class related stuffs
    // use portal to show the banner
    // on click of banner, call the next method
    addToHomeScreen();

}

function addToHomeScreen(){
    // hide the custom banner
    defferedEvent.prompt();
    defferedEvent.userChoice( choice => {
        // if( choice === 'install' )
    })
    // install event will be fired and sw can listen to it.
}


function getNotification(){

    Notification.requestPermission().then( event => {
        console.log( event )
        if( Notification.permission === 'granted' ){
            console.log("Granted");

        }else{
            console.log('rejected');
        }

    }).catch( err => {
        console.log( err );
    })

}