import firebase from 'firebase';
import 'firebase/storage';
import 'firebase/firestore';

// const firebaseConfig = {
//    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//    appId: process.env.REACT_APP_FIREBASE_APP_ID,
//    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
// };
const firebaseConfig = {
   apiKey: 'AIzaSyBHJPG1m7y3QRbrAkcvxU12Em3dZowEIeE',
   authDomain: 'testing-346bd.firebaseapp.com',
   projectId: 'testing-346bd',
   storageBucket: 'testing-346bd.appspot.com',
   messagingSenderId: '894087106343',
   appId: '1:894087106343:web:d36385f5d10c4242a2e302',
   measurementId: 'G-EG00SS82L3',
};

firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
