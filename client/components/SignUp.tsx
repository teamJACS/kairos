import React, { useState } from 'react'
import { Picker, Text, StyleSheet, View, TextInput, Button, Image } from 'react-native'

const icon = require('../../assets/icon_board.png');

const SignUp = () => {
  const [currency, setCurrency] = useState('US Dollar');
  return (
    <View style={{ paddingBottom: 35 }}>
      <Text style={{ color: "skyblue", fontWeight: "bold", fontSize: 20, paddingBottom: 12 }}> Please Enter Your Email and Password </Text>
      <View >
        <TextInput style={{ fontSize: 15 }}
          placeholder="Email" />
        <TextInput style={{ fontSize: 15 }}
          secureTextEntry={true}
          placeholder="Password"
        />
        <TextInput style={{ fontSize: 15 }}
          secureTextEntry={true}
          placeholder="Confirm Password"
        />
      </View>
    </View>
  )
}

export default SignUp
