import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AppParamList } from './AppParamList';
import { View } from "react-native";
import { Center } from "../components/Center";
import JobListView from '../components/JobListView';
import { Listing } from '../components/Listing'
import { useDispatch } from 'react-redux'
import { setUserId } from '../redux/actions/actions';
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


function AddUpdateListing() {
  return (
    <Center>
      <Listing />
    </Center>
  );
}

export const AppTabs: React.ComponentType<AppTabsProps> = ({ }) => {

  return (
    <Tabs.Navigator>
      <Tabs.Screen name='Home' component={Home} />
      <Tabs.Screen name='List View' component={JobListView} />
      <Tabs.Screen name='Add/Update' component={AddUpdateListing} />
    </Tabs.Navigator>
  )
}