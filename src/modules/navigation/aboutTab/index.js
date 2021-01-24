import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import settingsScreen from '../../../screens/about/settingsScreen';
import profileScreen from '../../../screens/about/profileScreen';



const Tab = createBottomTabNavigator();

const TabStack = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: {
          fontSize: 24,
          fontWeight: 'bold',
        },
        tabStyle: {
          padding: 10,
        },
        activeTintColor: 'orange',
        inactiveTintColor: 'black',
      }}>
      <Tab.Screen name="Profile" component={profileScreen} />
      <Tab.Screen name="Settings" component={settingsScreen} />
    </Tab.Navigator>
  );
};

export default TabStack;
