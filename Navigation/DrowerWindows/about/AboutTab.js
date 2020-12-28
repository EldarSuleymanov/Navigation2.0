import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import profileScreen from './profile';
import settingsScreen from './settings';

const Tab = createBottomTabNavigator();

const TabStack = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Profile" component={profileScreen} />
      <Tab.Screen name="Settings" component={settingsScreen} />      
    </Tab.Navigator>
  );
}; 

export default TabStack;
