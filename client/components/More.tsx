import React from "react";
import { SafeAreaView, Text, StyleSheet, View } from "react-native";
import { Button } from 'react-native-elements';
import { useDispatch } from 'react-redux';
import { setUserId } from '../redux/actions/actions';
import { Column } from "sequelize-typescript";

const More = () => {
  const dispatch = useDispatch()
  const logout = () => dispatch(setUserId(null))

  return (
    <SafeAreaView>
      <Text>Testing</Text>

      <View style={styles.footer}>
        <Button
          title='Logout'
          type="clear"
          raised={true}
          titleStyle={{ color: "#fafafa", fontWeight: "bold" }}
          buttonStyle={{ backgroundColor: "#99ccff", borderRadius: 10, }}
          onPress={logout}
        >
        </Button>
      </View>
    </SafeAreaView>
  );
}

export default More

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
      flexDirection: 'column',
      justifyContent: 'flex-end', 
  },
});