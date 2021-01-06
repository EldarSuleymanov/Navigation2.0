import React from 'react';
import {createStackNavigator, HeaderTitle} from '@react-navigation/stack';
import CalcStack from './Screens/tools/calc';
import NothingStack from './Screens/entertain/nothing';
import IconStack from './Screens/tools/iconsTool';

const Stack = createStackNavigator();

const ToolStaack = () => {
  return (
    <Stack.Navigator >
      <Stack.Screen name="Tools" component={IconStack} options ={{headerShown: false}} />      
      <Stack.Screen name="Calculator" component={CalcStack} />
      <Stack.Screen name="Nothing" component={NothingStack} />
    </Stack.Navigator>
  );
};

export default ToolStaack;