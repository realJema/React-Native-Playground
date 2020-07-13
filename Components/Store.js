import React, { Component, useState } from "react";
import { StyleSheet, Text, View, Image, ScrollView, Dimensions } from "react-native";

import Slider from "./Slider";
import Body from "./Body";

export default function Store() {
  const [text, setText] = useState("");
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.brand}>OBILI</Text>
      <Slider />
      <Body />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  brand: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    padding: 10,
  },
});
