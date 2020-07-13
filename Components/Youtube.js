import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import Navbar from "./Navbar";
import Tabbar from "./Tabbar";
import BodyYoutube from "./BodyYoutube";

import data from './data.json';
import BodyMain from "./BodyMain";

export default class Youtube extends Component {
    render() {
        return (
          
            <View style={styles.container}>
                <Navbar style={styles.navbar}/>
                <BodyMain />
                <Tabbar />
            </View>
      );
  } 
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
        backgroundColor: '#fff',
    position: 'relative',
    }, 
    navbar: {
        position: 'absolute',
        top: 0,
    },
});
