import React from "react";
import { StyleSheet, View, Text } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";

interface RoutesProps {

}

const Stack = createStackNavigator()

export const Routes: React.FC<RoutesProps> = ({ }) => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='' />
        </Stack.Navigator>
    );
}