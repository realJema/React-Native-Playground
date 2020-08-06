import React, { Component } from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Text
} from "react-native";


export default class World extends Component {
  //Define your state for your component.
  state = {
    article: [],
    loadingArticle: true,
  };
  

  render() {
    return <ScrollView style={styles.container}>
      <View>
        <Text>Got here</Text>
        <Text>{this.props.articleID}</Text>
      </View>
    </ScrollView>;
  }
}

const styles = StyleSheet.create({
  container: {
    
  },
});
