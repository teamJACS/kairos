import React, { useContext } from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AppParamList } from './AppParamList';
import { Text, Button } from "react-native";
import { Center } from "../components/Center";
import { AuthContext } from './AuthProvider';
import JobListView from '../components/JobListView';

interface AppTabsProps {

}

const Tabs = createBottomTabNavigator<AppParamList>();

function Home() {
  const { logout } = useContext(AuthContext)
  return (
    <Center>
      <Text>Home</Text>
      <Button title='logout' onPress={() => logout()} />
    </Center>
  );
}
function Application() {
  return (
    <Center>
        <Text>Application</Text>
    </Center>
  );
}

export const AppTabs: React.FC<AppTabsProps> = ({ }) => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name='Home' component={Home} />
      <Tabs.Screen name='Application' component={Application} />
      <Tabs.Screen name='ListView' component={JobListView} />
    </Tabs.Navigator>
  )
}