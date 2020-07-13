import React, { Component } from "react";

import { View, Text, StyleSheet, ScrollView, Image, Dimensions, TouchableOpacity } from "react-native";

import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Navbar extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.navbar}>
                    <View style={styles.moveright}>
                        <Image style={styles.logo}
                            source={require('../assets/youtube-play.png')} />
                        <Text style={styles.logoname}>JemaTube</Text>
                    </View>
                    <View style={styles.moveright}>
                        <TouchableOpacity>
                            <Icon name="search" size={27} style={styles.icons}/>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Icon name="account-circle" size={27} style={styles.icons}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
  container: {},

  navbar: {
    // marginTop: 35,
    height: 55,
    backgroundColor: "#fff",
    elvation: 3,

    // paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  logo: {
    width: 50,
    height: 40,
    resizeMode: "contain",
  },
  logoname: {
      fontWeight: "bold",
      fontSize: 20,
      fontFamily: 'Roboto',
  },
  moveright: {
    flexDirection: "row",
    alignItems: "center",
  },
  icons: {
    padding: 5,
    marginLeft: 15,
  },
});
