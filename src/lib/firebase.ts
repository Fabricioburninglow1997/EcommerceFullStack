import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDYto-iiW-W9j1h8a5bYUNykqspPuzvj0s",
  authDomain: "analytics-app-4d30e.firebaseapp.com",
  projectId: "analytics-app-4d30e",
  storageBucket: "analytics-app-4d30e.firebasestorage.app",
  messagingSenderId: "190204564540",
  appId: "1:190204564540:web:218ad8e5f09ecbe4305f39"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);