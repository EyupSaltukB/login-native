// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1V68kzrCKQm60lqMwERRbrKsdq5VJ92k",
  authDomain: "login-native-6721d.firebaseapp.com",
  projectId: "login-native-6721d",
  storageBucket: "login-native-6721d.appspot.com",
  messagingSenderId: "477729151580",
  appId: "1:477729151580:web:899dec0b58bdc6efcee499"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
})