// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyBNuFbbRfn4L2Fda8oNWlRJZyLlsbhNR9M",
    authDomain: "bill-pc.firebaseapp.com",
    projectId: "bill-pc",
    storageBucket: "bill-pc.appspot.com",
    messagingSenderId: "441196656488",
    appId: "1:441196656488:web:cb94c8bef32036c8a588dd",
    measurementId: "G-GGH04XYGHZ"
});

const messaging = firebase.messaging();