import React, { Component } from 'react';
import logo from './logo.svg';
import firebase from "firebase";
import { StyledFirebaseAuth } from "react-firebaseui/StyledFirebaseAuth";
import { NavBar } from './NavBar';
import { Cards } from './Cards';
import { MultipleItems } from './MultipleItems';
import { CustomArrows } from './CustomArrows';
import { PreviousNextMethods } from './PreviousNextMethods';
import './App.css';


export default class App extends Component <Props> {
  render () {
    return (
      <div className="App">
        <NavBar />
        <br />
        <CustomArrows />
        <br />
        <PreviousNextMethods />
        <br />
      </div>
    );
  }
}
