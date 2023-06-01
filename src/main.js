import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { initializeApp } from "firebase/app";

const app = createApp(App)

const firebaseConfig = {
    apiKey: "AIzaSyAbGCNh3392rebTmNRa9uZHCOkQJFpjzMc",
    authDomain: "kanten-project-3dd34.firebaseapp.com",
    projectId: "kanten-project-3dd34",
    storageBucket: "kanten-project-3dd34.appspot.com",
    messagingSenderId: "364632056797",
    appId: "1:364632056797:web:cd3383cec67ef56916cc34",
    measurementId: "G-EXFLTQGQSP"
  };

app.use(router)

app.mount('#app')
