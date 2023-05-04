// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeFW_PaseKbfengLOEVBs6oFjBqWmCY1Q",
  authDomain: "chef-s-delight.firebaseapp.com",
  projectId: "chef-s-delight",
  storageBucket: "chef-s-delight.appspot.com",
  messagingSenderId: "626410068025",
  appId: "1:626410068025:web:77fd4bc60070e0541015e8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;