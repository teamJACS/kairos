import React, { useContext } from "react";
import { createStackNavigator} from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { AuthContext } from '../src/AuthProvider'
import { AuthParamList } from '../src/AuthParamList'
import { AppTabs } from '../src/AppTabs'
import SignUp from './SignUp'
import Login from './Login'
import Landing from './Landing'

interface RoutesProps { }

const Stack = createStackNavigator<AuthParamList>()

export const Routes: React.FC<RoutesProps> = ({ }) => {
  const { userId } = useContext(AuthContext)

  return (
    <NavigationContainer>
      {userId ? (
        <AppTabs />
      ) : (
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
          initialRouteName="Landing"
        >
          <Stack.Screen 
            name="Landing"
            component={Landing}
          />
          <Stack.Screen
            name='Login'
            component={Login} 
          />
          <Stack.Screen
            options={{
                headerTitle: "Register"
            }}
            name='Register'
            component={SignUp} />
        </Stack.Navigator>
          )}
    </NavigationContainer>
  );
}