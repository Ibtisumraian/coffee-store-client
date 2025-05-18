import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_VITE_apiKey,
  authDomain: import.meta.env.VITE_VITE_authDomain,
  projectId: import.meta.env.VITE_VITE_projectId,
  storageBucket: import.meta.env.VITE_VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_VITE_messagingSenderId,
  appId: import.meta.env.VITE_VITE_appId,
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);