import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, View, Text, Button, ActivityIndicator, AsyncStorage } from "react-native";
import { createStackNavigator, StackNavigationProp } from "@react-navigation/stack";
import { NavigationContainer, RouteProp } from "@react-navigation/native";
import { AuthContext } from '../src/AuthProvider'
import { Center } from "./Center";
import { AuthParamList, AuthNavProps } from '../src/AuthParamList'
import { AppTabs } from '../src/AppTabs'
import SignUp from './SignUp'
import SignIn from './SignIn'


interface RoutesProps { }

const Stack = createStackNavigator<AuthParamList>()



function Register({ navigation, route }: AuthNavProps<"Register">) {
    return (
        <Center>
            <Text>route name: {route.name}</Text>
            < SignUp />
            <Button

                title="go to login"
                onPress={() => {
                    navigation.navigate("Login");
                    // navigation.goBack()
                }}
            />
        </Center>
    );
}

function Login({ navigation }: AuthNavProps<"Login">) {
    const { user, login } = useContext(AuthContext);
    return (
        <Center>
            <SignIn />
            <Button
                color="white"
                title="Sign In"
                onPress={() => {
                    login();
                }}
            />
            <Button
                color="white"
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
                )}
        </NavigationContainer>
    );
}