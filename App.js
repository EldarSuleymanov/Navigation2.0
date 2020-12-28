import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import MyDrawer from './Navigation/drawer';
// import {createStackNavigator} from '@react-navigation/stack';
// const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
};

export default App;
