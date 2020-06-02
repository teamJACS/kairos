import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Button, ActivityIndicator, AsyncStorage } from "react-native";
import { createStackNavigator, StackNavigationProp } from "@react-navigation/stack";
import { NavigationContainer, RouteProp } from "@react-navigation/native";

import { Center } from "./Center";
import { AuthParamList, AuthNavProps } from '../src/AuthParamList'

interface RoutesProps {

}

const Stack = createStackNavigator<AuthParamList>()



function Register({ navigation, route }: AuthNavProps<'Register'>) {
    return (
        <Center>
            <Text>route name: {route.name}</Text>
            <Button title="go to login" onPress={() => {
                navigation.navigate("Login")
            }} />
        </Center >
    );
}

function Login({ navigation }: AuthNavProps<'Login'>) {
    return (
        <Center>
            <Text>Login Screen</Text>
            <Button title="go to register" onPress={() => {
                navigation.navigate("Register")
            }} />
        </Center >
    );
}

export const Routes: React.FC<RoutesProps> = ({ }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        AsyncStorage.getItem("user")
            .then(userString => {
                console.log(userString)
            })
            .catch(err => {
                console.log(err)
                setLoading(false)
            })
    }, [])

    if (loading) {
        return (
            <Center>
                <ActivityIndicator size="large" />
            </Center >
        )
    }


    return (
        <NavigationContainer>
            <Stack.Navigator
                // screenOptions={{
                //     header: () => null
                // }}
                initialRouteName="Register"
            >
                <Stack.Screen
                    options={{
                        headerTitle: 'Sign In'
                    }}
                    name='Login'
                    component={Login} />
                <Stack.Screen
                    options={{
                        headerTitle: "Sign Up"
                    }}
                    name='Register'
                    component={Register} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}