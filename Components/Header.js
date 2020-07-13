import React, { Component } from "react";

import { View, Text, StyleSheet, ImageBackground, Image } from "react-native";

export default class Header extends Component {
    render() {
        return (
            <ImageBackground
                style={styles.headerbg}
                source={require('../assets/bg1.jpg')}
            >
                <View style={styles.headercontainer}>
                    <View style={styles.profilepiccontainer}>
                        <Image
                            style={styles.mypic}
                            source={require('../assets/pp.PNG')}
                            />
                    </View>
                    <Text style={styles.name}>realjema</Text>
                    <Text style={styles.liner}>Graphic Designer</Text>
                </View>

            </ImageBackground>
        );
    }
}
const styles = StyleSheet.create({
    headerbg: {
        flex: 1,
        width: null,
        alignSelf: 'stretch',
    },
    headercontainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: 'rgba(0,0,0,0.6)',
    }, 
    profilepiccontainer: {
        width: 150,
        height: 150,
    },
    mypic: {
        flex: 1,
        width: null,
        alignSelf: 'stretch',
        borderRadius: 90,
        borderWidth: 3,
        borderColor: 'white',
    },
    name: {
        marginTop: 18,
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
    },
    liner: {
        color: 'white',
        fontSize: 15,
        fontStyle: 'italic',
    },
});
