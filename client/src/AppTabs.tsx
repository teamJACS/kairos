import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AppParamList } from './AppParamList';
import { View } from "react-native";
import JobListView from '../components/JobListView';
import Listing from '../components/Listing'
import { HomePage } from '../components/HomePage';
import More from '../components/More';

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
      <Tabs.Screen name='Add New' component={Listing}/>
      <Tabs.Screen name='More' component={More}/>
    </Tabs.Navigator>
  )
}