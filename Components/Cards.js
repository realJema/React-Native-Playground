import React, { Component } from "react";
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native";
import { Tile } from 'react-native-elements';
import { Actions } from "react-native-router-flux";

export default class Cards extends Component {
   goToAbout(articleID){
     console.log('loading article - ', articleID);
    Actions.article({articleID: articleID});
  };
  render() {
    return (
      <TouchableOpacity onClick={() => this.goToAbout(this.props.data._id)}>
        <Tile
          imageSrc={this.props.data.img}
          imageContainerStyle={{
            width: Dimensions.get("window").width - 30,
            // height: 250,
            borderRadius: 10,
            overflow: "hidden", // this does magic
          }}
          activeOpacity={0.9}
          title={
            this.props.data.title.length > 30
              ? this.props.data.title.substring(0, 30 - 3) + "..."
              : this.props.data.title
          }
          titleStyle={{
            position: "absolute",
            left: 10,
            bottom: 50,
          }}
          caption={
            this.props.data.sub_title.length > 80
              ? this.props.data.sub_title.substring(0, 80 - 3) + ""
              : this.props.data.sub_title
          }
          captionStyle={{
            position: "absolute",
            left: 10,
            bottom: 10,
            width: "90%",
            textAlign: "left",
            opacity: 0.6,
          }}
          containerStyle={{
            alignItems: "center",
            marginBottom: 5,
          }}
          titleNumberOfLines={1}
          featured
        />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 5,
  },
  imageContainer: {
    width: Dimensions.get('window').width - 30,
    // height: 250,
    borderRadius: 10,
    overflow: 'hidden', // this does magic
  },
  title: {
    position: 'absolute',
    left: 10,
    bottom: 50,
  },
  caption: {
    position: 'absolute',
    left: 10,
    bottom: 10,
    width: '90%',
    textAlign: 'left',
    opacity: 0.6,
  },
})
