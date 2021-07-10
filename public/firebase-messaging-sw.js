importScripts('https://www.gstatic.com/firebasejs/8.6.8/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.6.8/firebase-messaging.js');

const firebaseConfig = {
    apiKey: "AIzaSyCnmXOeiLmav_rTdiw9GTP5V_J5m4EhFWc",
    authDomain: "quiz-app-6a9ba.firebaseapp.com",
    projectId: "quiz-app-6a9ba",
    storageBucket: "quiz-app-6a9ba.appspot.com",
    messagingSenderId: "482516086574",
    appId: "1:482516086574:web:9e7eb0f7f8a3f8c45854bf"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.messaging();
