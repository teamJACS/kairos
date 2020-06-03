import React from "react";
import { Button, Image, View, StyleSheet } from "react-native";
import { AuthNavProps } from '../src/AuthParamList'

function Landing({ navigation }: AuthNavProps<"Login">) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image  source={require('../../assets/kairos_logo.png')} />
      </View>

      <View style={styles.footer}>
        <Button
          color="dodgerblue"
          title="Log In"
          onPress={() => {
            navigation.navigate("Login");
          }}
        />
        <Button
          color="dodgerblue"
          title="Create Account"
          onPress={() => {
              navigation.navigate("Register");
          }}
        />
      </View>
    </View>
  );
}

export default Landing

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#b6e1f6'
  },
  header: {
      flex: 3,
      marginTop: 30,
      justifyContent: 'center',
      alignItems: 'center'
  },
  footer: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#fff',
  },
});