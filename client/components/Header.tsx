import React, { useContext } from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.headerText}>Check Your Job Status's Here</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'skyblue'

  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
    backgroundColor: 'skyblue'
  }
})