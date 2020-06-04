import React, { useContext } from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AppParamList } from './AppParamList';
import { Text, Button, View } from "react-native";
import { Center } from "../components/Center";
import { AuthContext } from './AuthProvider';
import JobListView from '../components/JobListView';
import { Listing } from '../components/Listing'
import { useDispatch } from 'react-redux'
import { setUserId } from '../redux/actions/actions';

interface AppTabsProps {

}

const Tabs = createBottomTabNavigator<AppParamList>();


function CreateReactApp() {
  return (
    <Center>
      <Listing />
    </Center>
  );
}

export const AppTabs: React.ComponentType<AppTabsProps> = ({ }) => {

  function Home() {
    const dispatch = useDispatch()
    const logout = () => dispatch(setUserId(null))
    return (
      <Center>
        <Text>Home</Text>
        <Button title='logout' onPress={logout} />
      </Center>
    );
  }


  return (
    <Tabs.Navigator>
      <Tabs.Screen name='Home' component={Home} />
      <Tabs.Screen name='ListView' component={JobListView} />
      <Tabs.Screen name='CRA' component={CreateReactApp} />
    </Tabs.Navigator>
  )
}