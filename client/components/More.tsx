import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { SafeAreaView } from 'react-navigation'
import { Button, ListItem } from 'react-native-elements';
import { useDispatch } from 'react-redux';
import { setUserId } from '../redux/actions/actions';

const More = () => {
  const dispatch = useDispatch()
  const logout = () => dispatch(setUserId(null))
  const list = [
    {
      title: 'Home',
      icon: 'home'
    },
    {
      title: 'List View',
      icon: 'list'
    },
    {
      title: 'Add New',
      icon: 'add'
    },
    {
      title: 'Settings',
      icon: 'settings'
    },
  ]

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>...</Text>
      <View>
        {
          list.map((item, i) => (
            <ListItem
              key={i}
              title={item.title}
              leftIcon={{ name: item.icon }}
              bottomDivider
            />
          ))
        }
      </View>

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
    backgroundColor: "white"
  },
  header: { 
    flexDirection: 'row', 
    fontSize: 25, 
    fontWeight: "bold", 
    color: "dodgerblue", 
    alignSelf: 'center' 
  },
  footer: {
    margin: 10,
    flex: 1,
    justifyContent: 'flex-end'
  }
});