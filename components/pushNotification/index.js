'use client';

import { useEffect } from "react";

export default function PushNotification(){
    function savePushSubscription( data ){
        localStorage.setItem( 'SUB', JSON.stringify( data ) )
    }

    async function pushRecord(){
        if ("serviceWorker" in navigator && "PushManager" in window) {
            try {
              // Register the service worker.
              const swReg = await navigator.serviceWorker.ready
          
              // Subscribe for push notifications.
              const pushSubscription = await swReg.pushManager.subscribe({
                userVisibleOnly: true
              });
          
              // Save the push subscription to the database.
              savePushSubscription(pushSubscription);
            } catch (error) {
              // Handle errors.
              console.error("Error subscribing for push notifications.", error);
            }
          } else {
            // Push notifications are not supported by the browser.
            console.error("Push notifications are not supported by the browser.");
          }
    }

    useEffect(()=>{
        pushRecord()
        return;
    },[])

    return <></>
}