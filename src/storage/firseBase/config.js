import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyC9-cqJs70IESkg6t-OZeCL50pJlTqhTA8',
  authDomain: 'uploadimageshoe.firebaseapp.com',
  projectId: 'uploadimageshoe',
  storageBucket: 'uploadimageshoe.appspot.com',
  messagingSenderId: '149304088306',
  appId: '1:149304088306:web:90f75cc674256ef5f0226b',
};

const app = initializeApp(firebaseConfig);
export const imageDb = getStorage(app);
