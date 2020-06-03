import React, { useContext } from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput, SafeAreaView } from 'react-native';
import { Header } from 'react-native-elements';

export const HomePage = () => {
  return (
    <SafeAreaView>
      <Header centerComponent={{ text: "Home Page", style: { color: "white", fontWeight: "bold", fontSize: 30 } }} />
    </SafeAreaView>
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