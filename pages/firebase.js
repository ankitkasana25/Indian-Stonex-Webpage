// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);