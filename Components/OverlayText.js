import React, { Component } from "react";

import { View, Text, StyleSheet } from "react-native";

export default class OverlayText extends Component {
    render() {
        return (
            <View>
                <Text style={styles.title}>{this.props.title}</Text>
                <Text style={styles.desc}>{this.props.desc}</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    title: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 3,
        borderRadius: 10,

        elevation: 1,
        color: 'white',
        fontWeight: 'bold',
    },
    desc: {
        color: 'white',
        fontWeight: 'bold',
    },
});
