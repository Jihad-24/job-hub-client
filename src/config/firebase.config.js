import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBL0DZ6y8p0R_7LSm4ga6Xi2jV08OBq3as",
    authDomain: "user-email-password-auth-c9cfa.firebaseapp.com",
    projectId: "user-email-password-auth-c9cfa",
    storageBucket: "user-email-password-auth-c9cfa.appspot.com",
    messagingSenderId: "1049838808196",
    appId: "1:1049838808196:web:e432b470188019a0a266d1"
};

const app = initializeApp(firebaseConfig);

export default app;