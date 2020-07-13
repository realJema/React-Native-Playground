import React, { Component } from "react";

import { View, Text, StyleSheet, Image } from "react-native";

export default class Slider extends Component {
    render() {
        return (
            <Image 
                source={require('../assets/pretty.jpg')} 
                style={styles.hero}
                />
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    hero: {
        height: 250,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
