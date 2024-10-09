const firebaseConfig = {
  apiKey: "AIzaSyBPEXcNJGorp0Apw8hNhbBg7Rk5EpbgbBI",
  authDomain: "orion-investment-636b0.firebaseapp.com",
  projectId: "orion-investment-636b0",
  storageBucket: "orion-investment-636b0.appspot.com",
  messagingSenderId: "556792471177",
  appId: "1:556792471177:web:9c8d988141e2d8cb503058",
  measurementId: "G-QVPWNEJ005"
};
    const app = firebase.initializeApp(firebaseConfig);
    const db = firebase.firestore();
    const auth = firebase.auth();
    const storage = firebase.storage();

