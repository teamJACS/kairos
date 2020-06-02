import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Center } from "./Center";

interface RoutesProps {

}

const Stack = createStackNavigator()

function Login() {
    return (
        <Center>
            <Text>Hello</Text>
        </Center >
    );
}

export const Routes: React.FC<RoutesProps> = ({ }) => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Login' component={Login} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}