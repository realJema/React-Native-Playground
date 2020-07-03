import React, { Component } from "react";

import { View, Text, StyleSheet, Image, Dimensions, KeyboardAvoidingView } from "react-native";

import LoginForm from './LoginForm';

export default class Login extends Component {
    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <View style={styles.logocontainer}>
                    <Image
                        style={styles.logo}
                        source={require('../assets/logo.PNG')}
                    />
                    <Text style={styles.title}>Sustainable Solutions for Africa</Text>
                </View>
                <View style={styles.myform}>
                   <LoginForm />
                </View>
            </KeyboardAvoidingView>
        );
    }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logocontainer: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    width: Dimensions.get("window").width,
  },
  logo: {
    width: Dimensions.get("window").width - 160,
    height: 50,
    resizeMode: "contain",
  },
  title: {
      color: "black",
      fontSize: 11,
  },
  myform: {
    flex: 1,
  },
});
