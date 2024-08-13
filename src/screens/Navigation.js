import * as React from 'react';
import Profile from './Profile1';
import Posts from './Posts1';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

function Navigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Posts" component={Posts} />
    </Stack.Navigator>
  );
}

export default Navigation;
