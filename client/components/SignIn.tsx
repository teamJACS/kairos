import React, { useContext } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { Center } from './Center'
import { AuthContext } from '../src/AuthProvider'


const logo = require('../../assets/kairos_logo.png');


export default function SignIn() {

    return (
        <View style={styles.text}>
            <Text style={{ color: "skyblue", fontSize: 40, fontWeight: "bold" }} >Welcome User</Text>
            <Image source={logo} />
        </View>
    )

}

const styles = StyleSheet.create({
    text: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
})