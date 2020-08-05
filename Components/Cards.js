import React, { Component } from "react";
import { Image, StyleSheet, View, Dimensions} from "react-native";
import { Tile } from 'react-native-elements';

export default class Cards extends Component {
  render() {
    return (
      <Tile
        imageSrc={this.props.data.img}
        imageContainerStyle={styles.imageContainer}
        activeOpacity={0.9}
        title={
          this.props.data.title.length > 30
            ? this.props.data.title.substring(0, 30 - 3) + "..."
            : this.props.data.title
        }
        titleStyle={styles.title}
        caption={
          this.props.data.sub_title.length > 80
            ? this.props.data.sub_title.substring(0, 80 - 3) + ""
            : this.props.data.sub_title
        }
        captionStyle={styles.caption}
        containerStyle={styles.container}
        titleNumberOfLines={1}
        featured
      />
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
