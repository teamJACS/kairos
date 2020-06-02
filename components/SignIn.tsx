import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import SignUp from './SignUp';

const logo = require('../resources/logo_size.jpg');


export default function SignIn() {

    const [loginStatus, setLogin] = useState(false)
    console.log('App executed')

    const handleSignUp = () => setLogin(true)

    if (loginStatus) {
        return (
            <View>
                <SignUp />
            </View>
        )
    } else {
        return (
            <View>
                <Text>Welcome to Kairos</Text>
                <Image source={logo} />
                <Button
                    onPress={handleSignUp}
                    title="Create New Account"
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({

})