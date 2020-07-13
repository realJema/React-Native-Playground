import React, { Component, useState } from "react";
import { StyleSheet, Text, View, Image, ScrollView, Dimensions } from "react-native";

import First from './Components/First';
import Red from './Components/Red';
import Blue from './Components/Blue';
import Green from './Components/Green';
import Horizontal from './Components/Horizontal';
import Colors from './Components/Colors';
import Login from './Components/Login';
import Card from "./Components/Card";
import Slider from "./Components/Slider";
import Body from "./Components/Body";
import Store from "./Components/Store";
import Header from "./Components/Header";
import Mid from "./Components/Mid";
import BodyBio from "./Components/BodyBio";
import Youtube from "./Components/Youtube";

export default function App() {
  const [text, setText] = useState("");
  return (
    <View style={styles.container}>
      <Youtube />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor: '#fff',
  }, 
});
