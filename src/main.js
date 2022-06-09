import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'

import mitt from 'mitt';

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAUmKeWJQVuB7pCLH51QihJOfpzxPXXr2I",
    authDomain: "projet-s2-fa4a9.firebaseapp.com",
    projectId: "projet-s2-fa4a9",
    storageBucket: "projet-s2-fa4a9.appspot.com",
    messagingSenderId: "409826824151",
    appId: "1:409826824151:web:410e6329ec32c124754592"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);

const app = createApp(App)

export const emitter = mitt();
app.config.globalProperties.emitter = emitter;

app.use(router)

app.mount('#app')
