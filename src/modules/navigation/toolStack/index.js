import React from 'react';
import {createStackNavigator, HeaderTitle} from '@react-navigation/stack';
import CalcStack from '../../../screens/tools/calculator';
import NothingStack from '../../../components/nothing';
import IconStack from '../../../screens/tools/iconsTool';

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