import React, { Component } from 'react';
import logo from './logo.svg';
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { NavBar } from './NavBar';
import { Cards } from './Cards';
import { CustomArrows } from './CustomArrows';
import { PreviousNextMethods } from './PreviousNextMethods';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import fire from './fire';



function writeUserData(userId, name, email, photoURL) {
  firebase.firestore().collection('Users').doc(userId).set({
    email: email,
    profilePicture: photoURL,
    favoriteAtheletes: [''],
    firstName: '',
    lastName: '',
    username: name
  });
}


class Login extends NavBar
{


  render () {
    return (
      <div className="App">
        <br />
        {this.state.isSignedIn ?
          <span>
            {writeUserData(firebase.auth().currentUser.uid, firebase.auth().currentUser.displayName, firebase.auth().currentUser.email,  firebase.auth().currentUser.photoURL)}
            <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
            <img alt="profile pic" src={firebase.auth().currentUser.photoURL} />
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
export
{
  Login
};
