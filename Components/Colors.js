import React, { Component, useState } from "react";
import { StyleSheet, Text, View, Image, ScrollView, Dimensions } from "react-native";

export default class Colors extends Component {
     render() {
        return (
                <ScrollView horizontal={true} pagingEnabled={true} style={styles.container}>
                <View style={styles.outer}>
                    <Text style={styles.innerText}>Welcome to LCD app</Text>
                </View>
                <View style={[styles.outer, styles.red]}>
                    <Text style={styles.innerText}>Best quality videos</Text>
                </View>
                <View style={[styles.outer, styles.green]}>
                    <Text style={styles.innerText}>Available on ios and Android</Text>
                </View>
                </ScrollView>
            );
    }
}

const styles = StyleSheet.create({
  container: {},
  outer: {
    backgroundColor: "#007bb6",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  innerText: {
    color: "#fff",
    fontSize: 23,
    fontWeight: "bold",
  },
  red: {
    backgroundColor: 'red',
  },
  green: {
    backgroundColor: 'green',
  }
});
