import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AppParamList } from './AppParamList';
import { View } from "react-native";
import { Center } from "../components/Center";
import JobListView from '../components/JobListView';
<<<<<<< HEAD
import { Listing } from '../components/Listing'
=======
import Listing from '../components/Listing'
import { useDispatch } from 'react-redux'
import { setUserId } from '../redux/actions/actions';
>>>>>>> 2ac5d74a81b80dcb132526c1c340aa2aba3f6835
import { HomePage } from '../components/HomePage';

interface AppTabsProps {

}

const Tabs = createBottomTabNavigator<AppParamList>();

function Home() {
  return (
    <View>
      <HomePage />
    </View>
  );
}

export const AppTabs: React.ComponentType<AppTabsProps> = ({ }) => {

  return (
    <Tabs.Navigator>
      <Tabs.Screen name='Home' component={Home} />
      <Tabs.Screen name='List View' component={JobListView} />
      <Tabs.Screen name='Add/Update' component={Listing} />
    </Tabs.Navigator>
  )
}