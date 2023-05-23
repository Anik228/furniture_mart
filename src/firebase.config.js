
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'


const firebaseConfig = {
  apiKey: "AIzaSyB2qiUklBPt1r8v-gOu5yN_pEPgd0coq68",
  authDomain: "maltimart-4e50c.firebaseapp.com",
  projectId: "maltimart-4e50c",
  storageBucket: "maltimart-4e50c.appspot.com",
  messagingSenderId: "1023861494670",
  appId: "1:1023861494670:web:8c922809f16e2d55be8adf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export const db=getFirestore(app)
export const storage=getStorage(app)
export default app;