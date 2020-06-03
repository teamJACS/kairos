import React, { useContext } from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AppParamList } from './AppParamList';
import { Text, Button, View } from "react-native";
import { Center } from "../components/Center";
import { AuthContext } from './AuthProvider';
import JobListView from '../components/JobListView';

import { Listing } from '../components/Listing'

import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag';


interface AppTabsProps {

}

const Tabs = createBottomTabNavigator<AppParamList>();

const FIRST_QUERY = gql`
query {
  user {
 		jobs {
      company
      location
      notes
    }
  }
}
`
function Home() {
	const { logout } = useContext(AuthContext)
	return (
		<Center>
			<Text>Home</Text>
			<Button title='logout' onPress={() => logout()} />
		</Center>
	);
}

function CreateReactApp() {
	return (
		<Center>
			<Listing />
		</Center>
	);
}

export const AppTabs: React.ComponentType<AppTabsProps> = ({ }) => {
	const { loading, error, data } = useQuery(FIRST_QUERY)


	function Application(): any {
		if (loading) return <Center><Text>Loading...</Text></Center>
		if (!loading && data) {
			return (
				<Center>
					<Text>Sieun from {data.user.jobs[0].company} in {data.user.jobs[0].location} says {data.user.jobs[0].notes}</Text>
				</Center>
			);
		}
		if (error) return <Center><Text>{error.message}</Text></Center>
	}
	return (
		<Tabs.Navigator>
			<Tabs.Screen name='Home' component={Home} />
			<Tabs.Screen name='Application' component={Application} />
			<Tabs.Screen name='ListView' component={JobListView} />
			<Tabs.Screen name='CRA' component={CreateReactApp} />
		</Tabs.Navigator>
	)
}