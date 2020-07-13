import React, { Component } from "react";

import { View, Text, StyleSheet, ImageBackground, Dimensions } from "react-native";
import OverlayText from "./OverlayText";

export default class App extends Component {
  render() {
    return (
      <ImageBackground
        style={styles.image}
        source={this.props.imageSource}>
        <OverlayText title={this.props.title} desc={this.props.desc}/>
      </ImageBackground>
    )
  }
}
const styles = StyleSheet.create({
  image: {
    height: 200,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  block: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
});
