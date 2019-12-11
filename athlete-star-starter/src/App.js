
import React, { Component } from 'react';
import logo from './logo.svg';
import { NavBar } from './NavBar';
import { Cards } from './Cards';
import { CustomArrows } from './CustomArrows';
import { PreviousNextMethods } from './PreviousNextMethods';
import { Soccer } from './Soccer';
import { Football } from './football';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import firebase from 'firebase'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <br />
        <CustomArrows />
        <br />
        <PreviousNextMethods />
        <br />
        <Soccer />
        <br />
        <Football />
        <br />
      </div>
    );
  }
}
