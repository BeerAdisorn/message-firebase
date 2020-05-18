import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyBI_f-n7B6V_OMoSxUG7jzWfAm45FyQeAA",
  authDomain: "message-firebase-5e80f.firebaseapp.com",
  databaseURL: "https://message-firebase-5e80f.firebaseio.com",
  projectId: "message-firebase-5e80f",
  storageBucket: "message-firebase-5e80f.appspot.com",
  messagingSenderId: "895707823632",
  appId: "1:895707823632:web:22ace12df0200410bbd495",
  measurementId: "G-XY5CHC4L3L"
};
firebase.initializeApp(config);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
