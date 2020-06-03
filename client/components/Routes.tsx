import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, View, Text, Button, ActivityIndicator, AsyncStorage, TextInput } from "react-native";
import { createStackNavigator, StackNavigationProp } from "@react-navigation/stack";
import { NavigationContainer, RouteProp } from "@react-navigation/native";
import { AuthContext } from '../src/AuthProvider'
import { Center } from "./Center";
import { AuthParamList, AuthNavProps } from '../src/AuthParamList'
import { AppTabs } from '../src/AppTabs'
import SignUp from './SignUp'
import Login from './Login'
import Landing from './Landing'

interface RoutesProps { }

const Stack = createStackNavigator<AuthParamList>()

export const Routes: React.FC<RoutesProps> = ({ }) => {
  const { user, login } = useContext(AuthContext)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // check if the user is logged in or not
    // logic here to authenticate 
    AsyncStorage.getItem("user")
      .then(userString => {
        if (userString) {
            // decode it
            login();
        }
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  if (loading) {
    return (
      <Center>
          <ActivityIndicator size="large" />
      </Center >
    )
  }

  return (
    <NavigationContainer>
      {user ? (
        <AppTabs />
      ) : (
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
          initialRouteName="Landing"
        >
          <Stack.Screen 
            name="Landing"
            component={Landing}
          />
          <Stack.Screen
            name='Login'
            component={Login} 
          />
          <Stack.Screen
            options={{
                headerTitle: "Register"
            }}
            name='Register'
            component={SignUp} />
        </Stack.Navigator>
          )}
    </NavigationContainer>
  );
}