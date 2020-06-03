import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, View, Text, Button, ActivityIndicator, AsyncStorage, TextInput } from "react-native";
import { createStackNavigator, StackNavigationProp } from "@react-navigation/stack";
import { NavigationContainer, RouteProp } from "@react-navigation/native";
import { AuthContext } from '../src/AuthProvider'
import { Center } from "./Center";
import { AuthParamList, AuthNavProps } from '../src/AuthParamList'
import { AppTabs } from '../src/AppTabs'
import SignUp from './SignUp'
import SignIn from './SignIn'
// import { TextInput } from "react-native-gesture-handler";


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
    const [username, setUsername] = React.useState('username');
    const [pw, setPw] = React.useState('password');
    return (
        <Center>
            <SignIn />
            <TextInput
                style={{ height: 40, borderColor: 'white', borderWidth: 1, width: 110, textAlign: 'center' }}
                onChangeText={text => setUsername(text)}
                value={username}
            />

            <TextInput
                style={{ height: 40, borderColor: 'white', borderWidth: 1, width: 110, textAlign: 'center' }}
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