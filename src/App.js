import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList.js'
import MessageList from './components/MessageList.js'

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
    this.handleClickroom = this.handleClickroom.bind(this);
    this.state = {
      activeroom: "",
      activeroomkey: ""
    };
    
  }
  
  handleClickroom(name, key) {
    this.setState({activeroom: name, activeroomkey:key });
  }

  render() {
    return (
      <div>
    <RoomList 
      firebase = {firebase}   
      handleClickroom = {this.handleClickroom}
      {...this.state}
      />    
      <MessageList
      firebase = {firebase} 
      {...this.state}
      />   
      </div> 
    );
  }

}

export default App;