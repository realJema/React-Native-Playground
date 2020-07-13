import React, { Component } from "react";

import { View, Text, StyleSheet } from "react-native";
import Card from './Card';

export default class Body extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.column1}>
                    <Card imageSource={require('../assets/pretty.jpg')} title="Hello1" desc="world" />
                </View>
                <View style={styles.column2}>
                    <Card imageSource={require('../assets/pretty.jpg')} title="Hello2" desc="world" />
                </View>
                <View style={styles.full}>
                    <Card imageSource={require('../assets/pretty.jpg')} title="Hello3" desc="world" />
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
    },
    column1: {
        flex: 1,
        padding: 5,
    },
    column2: {
        flex: 1,
        padding: 5,
    },
    full: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
    }
});
