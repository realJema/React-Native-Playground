import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  FlatList,
  ActivityIndicator,
} from "react-native";

import TabViewExample from "./TabViewExample";
import Header1 from "./Header";

export default class Home extends Component {
  render() {
    return (
      <View>
        <Header1 />
        <TabViewExample />
      </View>
    );
  }
}
