import React, { Component } from "react";

import { View, Text, StyleSheet, Dimensions } from "react-native";

export default class Mid extends Component {
    render() {
        return (
          <View style={styles.mid}>
            <View style={[styles.outerview, styles.leftbar]}>
              <Text style={styles.textone}>75+</Text>
              <Text style={styles.texttwo}>Images</Text>
            </View>
            <View style={styles.outerview}>
              <Text style={styles.textone}>100k +</Text>
              <Text style={styles.texttwo}>Subscribers</Text>
            </View>
          </View>
        );
    }
}
const styles = StyleSheet.create({
    mid: {
        flexDirection: 'row',
        borderTopWidth: 5,
        backgroundColor: '#CF000F',
        borderTopColor: '#fff',
        width: Dimensions.get('window').width,
    },
    outerview: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
    },
    textone: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    texttwo: {
        color: '#fff',
        fontSize: 14,
        marginTop: 5,
    },
    leftbar: {
        borderRightWidth: 4,
        borderRightColor: '#fff',
    }
});
