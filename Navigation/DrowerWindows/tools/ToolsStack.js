import React from 'react';
import {createStackNavigator, HeaderTitle} from '@react-navigation/stack';
import CalcStack from './calc';
import IconStack from './iconsTool';
import { Header } from 'react-native/Libraries/NewAppScreen';

const Stack = createStackNavigator();

const ToolStaack = () => {
  return (
    <Stack.Navigator >
      <Stack.Screen name="Tools" component={IconStack} options ={{headerShown: false}} />      
      <Stack.Screen name="Calculator" component={CalcStack} />
    </Stack.Navigator>
  );
};

export default ToolStaack;