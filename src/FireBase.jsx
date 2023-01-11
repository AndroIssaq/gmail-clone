// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
const firebaseConfig = {
    apiKey: "AIzaSyDBrB-hXHZelBYUiKen2xneRHuBtom-Ek4",
    authDomain: "fir-134a5.firebaseapp.com",
    projectId: "fir-134a5",
    storageBucket: "fir-134a5.appspot.com",
    messagingSenderId: "345191215725",
    appId: "1:345191215725:web:91fd77847cecc8c5730564",
    measurementId: "G-5H6M40W3B8"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 export const auth=getAuth(app)