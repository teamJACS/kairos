import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import SignUp from './SignUp';

const logo = require('../resources/logo_size.jpg');


export default function SignIn() {
    return (
        <View>
            <Text>Welcome to Kairos</Text>
            <Image source={logo} />
            <Button
                onPress={SignUp}
                title="Create New Account"
            />
        </View>

    )
}

const styles = StyleSheet.create({

})