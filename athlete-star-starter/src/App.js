import React, { Component } from "react";
import logo from "./logo.svg";
import { NavBar } from "./NavBar";
import { Cards } from "./Cards";
import { MultipleItems } from "./MultipleItems";
import { CustomArrows } from "./CustomArrows";
import { PreviousNextMethods } from "./PreviousNextMethods";

import { Profile } from "./Profile";

import "./App.css";
import fire from "./fire";

export default class App extends Component<Props> {
  render() {
    return (
      <div className="App">
        <NavBar />
        <br />
        <Profile />

        <br />
      </div>
    );
  }
}
