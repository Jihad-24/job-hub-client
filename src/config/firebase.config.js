import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDMDNq-72xiwq225SXEE6WFTJgdltuUOg8",
  authDomain: "market-place-exchange.firebaseapp.com",
  projectId: "market-place-exchange",
  storageBucket: "market-place-exchange.appspot.com",
  messagingSenderId: "961416194847",
  appId: "1:961416194847:web:5d5e27744228739d2b5e2a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;