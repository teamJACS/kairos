import React, { useContext } from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AppParamList } from './AppParamList';
import { Text, Button, View } from "react-native";
import { Center } from "../components/Center";
import { AuthContext } from './AuthProvider';

import Header from '../components/Header';


interface AppTabsProps {

}

const Tabs = createBottomTabNavigator<AppParamList>();

function Home() {
	const { logout } = useContext(AuthContext)
	return (
		<Center>
			<Header />
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
		</Tabs.Navigator>
	)
}