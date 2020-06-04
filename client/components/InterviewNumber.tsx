import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

export const InterviewNumber = () => {
    const [number, setNumber] = useState('4')
    return (
        <Text style={styles.number}>
            {number}
        </Text>
    )
}

const styles = StyleSheet.create({
    number: {
        fontSize: 50,
        paddingRight: 25,
        // marginLeft: 'auto',
        // marginRight: 'auto'
    }
})