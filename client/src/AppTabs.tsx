import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';
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
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'ios-home'
          } else if (route.name === 'List View') {
            iconName = 'ios-list';
          } else if (route.name === 'Add New') {
            iconName = 'ios-add-circle-outline';
          } else if (route.name === 'More') {
            iconName = 'ios-more';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tabs.Screen name='Home' component={Home} />
      <Tabs.Screen name='List View' component={JobListView} />
      <Tabs.Screen name='Add New' component={Listing}/>
      <Tabs.Screen name='More' component={More}/>
    </Tabs.Navigator>
  )
}