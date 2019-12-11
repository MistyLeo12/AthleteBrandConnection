import React, { Component } from "react";
import logo from "./logo.svg";
import { NavBar } from "./NavBar";
import { Cards } from "./Cards";
import { CustomArrows } from "./CustomArrows";
import { PreviousNextMethods } from "./PreviousNextMethods";
import { Reviews } from "./Reviews.jsx";
import { PlayerProfile } from './PlayerProfile';
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <br />
        <CustomArrows />
        <br />
        <PreviousNextMethods />
      </div>
    );
  }
}
