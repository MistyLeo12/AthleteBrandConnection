import React, { Component } from 'react';
import logo from './logo.svg';
import { NavBar } from './NavBar';
import './App.css';

export default class App extends Component <Props> {
  render () {
    return (
      <div className="App">
        <NavBar />
      </div>
    );
  }
}
