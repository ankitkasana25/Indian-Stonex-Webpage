// firebase.js
import { initializeApp, getApps, getApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAnalytics, isSupported } from "firebase/analytics";

// ✅ Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTt32jFQ1cyXoVhodlvrb9-7TtkgplZ_s",
  authDomain: "indian-stonex.firebaseapp.com",
  projectId: "indian-stonex",
  storageBucket: "indian-stonex.firebasestorage.app",
  messagingSenderId: "773356832611",
  appId: "1:773356832611:web:da8ca1cac9a94dee95f556",
  measurementId: "G-DR795QQHSC",
  databaseURL: "https://indian-stonex-default-rtdb.firebaseio.com/",
};

// ✅ Avoid re-initializing if app already exists
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// ✅ Safe database initialization
const db = getDatabase(app);

// ✅ Initialize analytics only on client-side
let analytics;
if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}

export { app, db, analytics };
