const firebaseConfig = {
  apiKey: "AIzaSyA8llOf1FwcwHWETusV9T6DphCIBAFd9D0",
  authDomain: "investmentorion.firebaseapp.com",
  projectId: "investmentorion",
  storageBucket: "investmentorion.firebasestorage.app",
  messagingSenderId: "914571699893",
  appId: "1:914571699893:web:6f97d2a547125d736900fc",
};

// Initialize Firebase App
const app = firebase.initializeApp(firebaseConfig);

// Initialize Firebase Services
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();







// apiKey: "AIzaSyDTkXjNDPdbOeo32CaCkglIy-6nzuszEJM",
//   authDomain: "orion-investment-2b141.firebaseapp.com",
//     projectId: "orion-investment-2b141",
//       storageBucket: "orion-investment-2b141.appspot.com",
//         messagingSenderId: "911866094162",
//           appId: "1:911866094162:web:bfe2dc2323995f4585358b",
//             measurementId: "G-12SQKBDR1S",