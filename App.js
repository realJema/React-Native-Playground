import React, { Component, useState } from "react";
import { StyleSheet, Text, View, Image, ScrollView, Dimensions } from "react-native";

import First from './Components/First';
import Red from './Components/Red';
import Blue from './Components/Blue';
import Green from './Components/Green';
import Horizontal from './Components/Horizontal';
import Colors from './Components/Colors';
import Login from './Components/Login';

export default function App() {
  const [text, setText] = useState("");
  return (
    <Login />
  );
}

const styles = StyleSheet.create({
  container: {},
});
