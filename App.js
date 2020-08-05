import React, {useState} from 'react';
import { StyleSheet, Text, ScrollView, View, FlatList, ActivityIndicator} from 'react-native';

import TabViewExample from './Components/TabViewExample';

import Header1 from "./Components/Header";

export default function App() {
  return (
    <View>
      <Header1 />
      <TabViewExample/>
    </View>
  );
}

