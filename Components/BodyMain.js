import React, { Component } from "react";
import { StyleSheet, Text, View, Image, ScrollView, Dimensions } from "react-native";

import BodyYoutube from "./BodyYoutube";

import data from './data.json';

export default class BodyMain extends Component {
    render() {
        return (
          <ScrollView>
            <BodyYoutube video={data.posts[0]} />
            <BodyYoutube video={data.posts[1]} />
        </ScrollView>
      );
  } 
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor: '#fff',
  }, 
});
