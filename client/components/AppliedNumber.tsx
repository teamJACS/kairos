import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

export const AppliedNumber = () => {
    const [number, setNumber] = useState('3')
    return (
        <Text style={styles.number}>
            {number}
        </Text>
    )
}

const styles = StyleSheet.create({
    number: {
        fontSize: 50,
    }
})