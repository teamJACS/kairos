import React, { useState } from 'react'
import { Picker, Text, StyleSheet, View, TextInput, Button } from 'react-native'

const SignUp = () => {
    const [currency, setCurrency] = useState('US Dollar');
    return (
        <View >
            <Text > Sign Up For Sieun's Mentorship </Text>
            <View>
                <TextInput
                    placeholder="Email" />
                <TextInput
                    secureTextEntry={true}
                    placeholder="Password"
                />
                <TextInput
                    secureTextEntry={true}
                    placeholder="Confirm Password"
                />
                {/* <Picker
                    selectedValue={currency}
                    onValueChange={currentCurrency => setCurrency(currentCurrency)}>
                    <Picker.Item label="USD" value="US Dollars" />
                    <Picker.Item label="BTC" value="Bitcoin" />
                    <Picker.Item label="TSLA" value="Tesla Share(s)" />
                </Picker>
                <Text>
                    Select how you'll pay her: {currency}
                </Text> */}
            </View>
        </View>
    )
}

export default SignUp
