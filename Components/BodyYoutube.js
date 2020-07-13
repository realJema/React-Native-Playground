import React, { Component } from "react";

import { View, Text, StyleSheet, Image } from "react-native";

export default class BodyYoutube extends Component {
    render() {
        let video = this.props.video
        return (
          <View style={styles.container}>
            <Image
              source={require("../assets/" + video.image)}
              style={{ height: 200, borderRadius: 5 }}
            />
            <View style={styles.textcontainer}>
              <Image
                source={require("../assets/" + video.image)}
                style={styles.pp}
              />
                <View style={styles.innercontainer}>
                        
                <Text style={styles.videoTitle}>{video.title}</Text>
                <Text style={styles.videoDescr}>{video.descr}</Text>
              </View>
            </View>
          </View>
        );
    }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "#000",
  },
  textcontainer: {
    marginLeft: 10,
    paddingRight: 5,
    flexDirection: "row",
    paddingTop: 15,
  },
  videoTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#fff",
    marginRight: 4,
  },
  pp: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: "#fff",
  },
  innercontainer: {
    marginLeft: 10,
    padding: 5,
  },
    videoDescr: {
        fontSize: 12,
        color: '#fff',
        marginTop: 5,
  }
});
