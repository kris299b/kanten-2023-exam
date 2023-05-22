import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAnalytics } from "firebase/analytics";



const firebaseConfig = {
  apiKey: "AIzaSyAbGCNh3392rebTmNRa9uZHCOkQJFpjzMc",
  authDomain: "kanten-project-3dd34.firebaseapp.com",
  projectId: "kanten-project-3dd34",
  storageBucket: "kanten-project-3dd34.appspot.com",
  messagingSenderId: "364632056797",
  appId: "1:364632056797:web:cd3383cec67ef56916cc34",
  measurementId: "G-EXFLTQGQSP"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export {db} 