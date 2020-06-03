import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, View, Text, Button, ActivityIndicator, AsyncStorage, TextInput, } from "react-native";
import { createStackNavigator, StackNavigationProp } from "@react-navigation/stack";
import { NavigationContainer, RouteProp } from "@react-navigation/native";
import { Input } from 'react-native-elements';
import { AuthContext } from '../src/AuthProvider'
import { Center } from "./Center";
import { AuthParamList, AuthNavProps } from '../src/AuthParamList'
import { AppTabs } from '../src/AppTabs'
import SignUp from './SignUp'
import SignIn from './SignIn'
import { TouchableOpacity } from "react-native-gesture-handler";
// import { TextInput } from "react-native-gesture-handler";


interface RoutesProps { }

const Stack = createStackNavigator<AuthParamList>()



function Register({ navigation, route }: AuthNavProps<"Register">) {
  return (
    <Center>
      <SignUp />
      <TouchableOpacity
        style={{ backgroundColor: "skyblue", padding: 10, borderRadius: 15, }}
        onPress={() => {
          navigation.navigate("Login");
          // navigation.goBack()
        }}
      >
        <Text style={{ color: "white", fontSize: 17, fontWeight: "bold" }}>Create</Text>
      </TouchableOpacity>
    </Center >
  );
}

function Login({ navigation }: AuthNavProps<"Login">) {
  const { user, login } = useContext(AuthContext);
  const [username, setUsername] = React.useState('');
  const [pw, setPw] = React.useState('');
  return (
    <Center>
      <SignIn />
      <TextInput
        placeholder='username'
        style={{ height: 50, borderColor: 'white', borderWidth: 1, width: 135, textAlign: 'center', fontSize: 18 }}
        onChangeText={text => setUsername(text)}
        value={username}
      />

      <TextInput
        placeholder='password'
        style={{ height: 50, borderColor: 'white', borderWidth: 1, width: 135, textAlign: 'center', fontSize: 18 }}
        onChangeText={text => setPw(text)}
        value={pw}
      />

      <Button
        color="dodgerblue"
        title="Sign In"
        onPress={() => {
          login();
        }}
      />
      <Button
        color="dodgerblue"
        title="Create New User"
        onPress={() => {
          navigation.navigate("Register");
        }}
      />
    </Center>
  );
}

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
            // screenOptions={{
            //     header: () => null
            // }}
            initialRouteName="Login"
          >
            <Stack.Screen
              options={{
                headerTitle: 'Login'
              }}
              name='Login'
              component={Login} />
            <Stack.Screen
              options={{
                headerTitle: "Register"
              }}
              name='Register'
              component={Register} />
          </Stack.Navigator>
        )}
    </NavigationContainer>
  );
}