import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import MessageList from './components/MessageList';

class App extends Component {
  constructor(props) {
    super(props);
    var firebaseConfig = {
      apiKey: "AIzaSyBI_f-n7B6V_OMoSxUG7jzWfAm45FyQeAA",
      authDomain: "message-firebase-5e80f.firebaseapp.com",
      databaseURL: "https://message-firebase-5e80f.firebaseio.com",
      projectId: "message-firebase-5e80f",
      storageBucket: "message-firebase-5e80f.appspot.com",
      messagingSenderId: "895707823632",
      appId: "1:895707823632:web:22ace12df0200410bbd495",
      measurementId: "G-XY5CHC4L3L"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }

  render() {
    return (
      <div className="container">
        <Header title="Simple Firebase App" />
        <div className="columns">
          <div className="column is-3"></div>
          <div className="column is-6">
            <MessageList db={firebase} />
          </div>
        </div>

      </div>
    )
  }
}

export default App;
