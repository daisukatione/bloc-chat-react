import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList.js'

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBIuuOi-I6dplEsxJzEinIAOzL6pwYWa78",
    authDomain: "bloc-chat-react-c40ea.firebaseapp.com",
    databaseURL: "https://bloc-chat-react-c40ea.firebaseio.com",
    projectId: "bloc-chat-react-c40ea",
    storageBucket: "bloc-chat-react-c40ea.appspot.com",
    messagingSenderId: "242262322372"
  };
  firebase.initializeApp(config);

class App extends Component {
  constructor(props) {
    super(props);

    
  }


  render() {
    return (
    <RoomList 
      firebase = {firebase}
      />    
    );
  }

}

export default App;
