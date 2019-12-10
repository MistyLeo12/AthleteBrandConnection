import React, { Component } from "react";
import logo from "./logo.svg";
import { NavBar } from "./NavBar";
import { Cards } from "./Cards";
import { MultipleItems } from "./MultipleItems";
import { CustomArrows } from "./CustomArrows";
import { PreviousNextMethods } from "./PreviousNextMethods";
import { Reviews } from "./Reviews.jsx";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <br />
        <Reviews />

        <br />
      </div>
    );
  }
}
