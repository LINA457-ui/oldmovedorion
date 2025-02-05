require('dotenv').config();
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase App
const app = firebase.initializeApp(firebaseConfig);

// Initialize Firebase Services
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();




// REACT_APP_FIREBASE_API_KEY=your_api_key_here
// REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain_here
// REACT_APP_FIREBASE_PROJECT_ID=your_project_id_here
// REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket_here
// REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id_here
// REACT_APP_FIREBASE_APP_ID=your_app_id_here
// REACT_APP_FIREBASE_MEASUREMENT_ID=your_measurement_id_here


// // const firebaseConfig = {
// //   apiKey: "AIzaSyDTkXjNDPdbOeo32CaCkglIy-6nzuszEJM",
// //   authDomain: "orion-investment-2b141.firebaseapp.com",
// //   projectId: "orion-investment-2b141",
// //   storageBucket: "orion-investment-2b141.appspot.com",
// //   messagingSenderId: "911866094162",
// //   appId: "1:911866094162:web:bfe2dc2323995f4585358b",
// //   measurementId: "G-12SQKBDR1S",
// // };