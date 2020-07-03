import React, { Component } from "react";

import { View, Text, StyleSheet, TouchableOpacity, TextInput, Dimensions } from "react-native";

export default class LoginForm extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder="username"
                />
                <TextInput
                    style={styles.input}
                    placeholder="password"
                />
                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    height: 50,
    backgroundColor: "#e8e8e8",
    padding: 6,
    marginBottom: 10,
    color: "#fff",
  },

  buttonContainer: {
    backgroundColor: "blue",
    paddingVertical: 15,
  },

  buttonText: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
  },
});
