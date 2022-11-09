import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAIzq8vD0F50Lq2MFx7LSnPiiFa0DAzPBI",
  authDomain: "richardbeletattilinks.firebaseapp.com",
  projectId: "richardbeletattilinks",
  storageBucket: "richardbeletattilinks.appspot.com",
  messagingSenderId: "66232583617",
  appId: "1:66232583617:web:d2b00c3f804eb5a007db40",
  measurementId: "G-F30TWWBEM9"
};

const firebaseApp = initializeApp(firebaseConfig)

const db = getFirestore(firebaseApp)
const auth = getAuth(firebaseApp);

export { db, auth }