import React, { useContext, useState } from "react";
import { StyleSheet, Dimensions, Text, View, TouchableOpacity } from "react-native";
import { AuthNavProps } from '../src/AuthParamList'
import { Input, Button } from 'react-native-elements';
import { AUTH_USER } from "../src/queries";
import { useLazyQuery } from "@apollo/react-hooks";
import { AuthContext } from "../src/AuthProvider";

type User = null | { username: string };

const Login = ({ navigation }: AuthNavProps<"Login">) => {
  const { setUserId } = useContext(AuthContext)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const [getUserId, { loading, error, data }] = useLazyQuery(AUTH_USER, {
    variables: {
      email, 
      password
    }
  });
  
  const handleChangeEmail = (email: string) => {
    setEmail(email)
  }
  const handleChangePassword = (password: string) => {
    setPassword(password)
  }
  
  const login = () => {
    getUserId()
    console.log(loading, data)
    if(!loading && data && data.auth && data.auth.id) {
      setUserId(data.auth.id)
      console.log(data.auth.id)
      navigation.navigate('Landing')
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text_header}>Welcome Back!</Text>
      </View>

      <View style={styles.footer}>
        <Input 
          placeholder="email@address.com"
          leftIcon={{ type: 'material', name: 'email' }}
          onChangeText={(email) => handleChangeEmail(email)}
        />
        <Input 
          placeholder="Password"
          leftIcon={{ type: 'material', name: 'lock' }}
          secureTextEntry
          errorStyle={{ color: 'red' }}
          errorMessage='ENTER A VALID ERROR HERE'
          onChangeText={(pw) => handleChangePassword(pw)}
        />

        <Button
          style={styles.button}
          title="Log In"
          buttonStyle={{
            backgroundColor:'dodgerblue'
          }}
          onPress={login}
        />
        <View style={styles.goBack}>
          <Text> 
            Don't have an account?
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Register')}
          >
            <Text> Sign Up </Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  );
}

const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#b6e1f6'
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  footer: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30
  },
  logo: {
    width: height_logo,
    height: height_logo
  },
  title: {
    color: '#05375a',
    fontSize: 30,
    fontWeight: 'bold'
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30
  },
  text: {
    color: 'grey',
    marginTop:5
  },
  button: {
    marginTop: 10,
  },
  signIn: {
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row'
  },
  textSign: {
    color: 'white',
    fontWeight: 'bold'
  },
  goBack: {
    marginTop: 10,
    display: 'flex',
    alignItems: 'center'
  },
});

export default Login

