import React, {useState} from 'react';
import { Router, Scene } from "react-native-router-flux";

import TabViewExample from './Components/TabViewExample';

import Home from "./Components/Home";
import Article from "./Components/Article";

export default function App() {
  return (
    <Router>
      <Scene key="root">
        <Scene key="home" component={Home} hideNavBar={true}/>
        <Scene key="article" component={Article}  hideNavBar={true}/>
      </Scene>
    </Router>
  );
}

