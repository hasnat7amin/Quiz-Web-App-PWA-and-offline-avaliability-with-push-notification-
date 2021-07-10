import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyCnmXOeiLmav_rTdiw9GTP5V_J5m4EhFWc",
    authDomain: "quiz-app-6a9ba.firebaseapp.com",
    projectId: "quiz-app-6a9ba",
    storageBucket: "quiz-app-6a9ba.appspot.com",
    messagingSenderId: "482516086574",
    appId: "1:482516086574:web:9e7eb0f7f8a3f8c45854bf"
  };
  firebase.initializeApp(firebaseConfig);
  const messaging = firebase.messaging()

  export default function requestPermission() {
    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        console.log('Notification permission granted.');
        messaging.getToken().then((currentToken) => {
          if (currentToken) {
            console.log("Token => ", currentToken)
          } else {
            // Show permission request UI
            console.log('No registration token available. Request permission to generate one.');
            // ...
          }
        }).catch((err) => {
          console.log('An error occurred while retrieving token. ', err);
          // ...
        });
        
      } else {
        console.log('Unable to get permission to notify.');
      }
    });
  }