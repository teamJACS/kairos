import React, { useContext } from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AppParamList } from './AppParamList';
import { Text, View, SafeAreaView, StyleSheet } from "react-native";
import { Center } from "../components/Center";
import { AuthContext } from './AuthProvider';
import JobListView from '../components/JobListView';

import { Listing } from '../components/Listing'
import { useQuery } from '@apollo/react-hooks'
import { Button } from 'react-native-elements';
import { HomePage } from '../components/HomePage';
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
		<View>
			<HomePage />
			<View style={styles.button}>
				<Button
					title='logout'
					type="outline"
					raised={true}
					titleStyle={{ color: "#fafafa", fontWeight: "bold" }}
					containerStyle={{ borderWidth: 1 }}
					buttonStyle={{ backgroundColor: "#99ccff", borderRadius: 10, }}
					onPress={() => logout()}
				>
				</Button>
			</View>
		</View>
	);
}
const styles = StyleSheet.create({
	button: {
		flex: 1,
		justifyContent: 'flex-end',
		marginBottom: 15,
		position: 'absolute',
		bottom: 0
	}
})

function AddUpdateListing() {
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
			<Tabs.Screen name='List View' component={JobListView} />
			<Tabs.Screen name='Add/Update' component={AddUpdateListing} />
		</Tabs.Navigator>
	)
}