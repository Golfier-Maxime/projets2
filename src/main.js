import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'

// Import fonction d'initialisation du SDK Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";

// Votre configuration de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDzQvQc6nj_zu-YH24tS6nNGeb_99qbEGc",
    authDomain: "sae203-mmi.firebaseapp.com",
    projectId: "sae203-mmi",
    storageBucket: "sae203-mmi.appspot.com",
    messagingSenderId: "936655326197",
    appId: "1:936655326197:web:44454b34376da5c0b36ebc"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);

const app = createApp(App)

app.use(router)

app.mount('#app')

