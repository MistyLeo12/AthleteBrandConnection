import React, { Component } from 'react';
import logo from './logo.svg';
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { NavBar } from './NavBar';
import { Cards } from './Cards';
import { MultipleItems } from './MultipleItems';
import { CustomArrows } from './CustomArrows';
import { PreviousNextMethods } from './PreviousNextMethods';
import './App.css';


firebase.initializeApp({
  apiKey: "AIzaSyDy1LlgOmltOLOjfsisTBWuKH9XrCfWMa4",
  authDomain: "athlete-market.firebaseapp.com"
})

export default class App extends Component <Props> {
  state={isSignedIn: false }
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }

  componentDidMount = () => {

    firebase.auth().onAuthStateChanged(user => {
      this.setState({isSignedIn:!!user})
      console.log("user", user)
    })
  }
  render () {
    return (
      <div className="App">
        <NavBar />
        <br />
        <br />
        {this.state.isSignedIn ?
          <span>
            <div> Signed In </div>
            <button onClick={() => firebase.auth().signOut()}>Sign out</button>
            <h1>Welcome {firebase.auth().currentUser.displayname}</h1>
            <img alt="profile pic" src={firebase.auth().currentUser.photoURL} />
            <CustomArrows />
            <br />
            <PreviousNextMethods />
          </span>
          :
        (
        <StyledFirebaseAuth
          uiConfig={this.uiConfig}
          firebaseAuth={firebase.auth()}
          />
        )
      }
      </div>
    );
  }
}
