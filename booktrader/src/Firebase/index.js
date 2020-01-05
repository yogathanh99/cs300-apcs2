import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyApblc7LRi2MPuRPW9cgPHzfgYhatakzOw',
  authDomain: 'booktrader-cs300.firebaseapp.com',
  databaseURL: 'https://booktrader-cs300.firebaseio.com',
  projectId: 'booktrader-cs300',
  storageBucket: 'booktrader-cs300.appspot.com',
  messagingSenderId: '71817993585',
  appId: '1:71817993585:web:701965839f417cf6f9aad0',
  measurementId: 'G-7K733JLGB0',
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
