import React, { Component } from 'react';
import { Header } from "react-native-elements";

export default class Header1 extends Component {
  render() {
    return (
      <Header
        leftComponent={{ icon: "menu", color: "#fff" }}
        centerComponent={{ text: "REAL", style: { color: "#fff" } }}
        rightComponent={{ icon: "home", color: "#fff" }}
      />
    );
  }
}
