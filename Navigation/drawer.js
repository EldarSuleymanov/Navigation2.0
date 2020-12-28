import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import WebviewStack from './DrowerWindows/news/webview';
import EntertainmentStack from './DrowerWindows/entertain/EntertainStack';
import ToolStaack from './DrowerWindows/tools/ToolsStack';
import TabStack from './DrowerWindows/about/AboutTab';
import {View, TouchableOpacity, Text} from 'react-native';
import Menu from './menuFunc';

// import {createStackNavigator} from '@react-navigation/stack';
// const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

const MyDrawer = (props) => {  
  return (
    <>     
      <Drawer.Navigator>        
        <Drawer.Screen name="News" component={WebviewStack} />
        <Drawer.Screen name="Entertainment" component={EntertainmentStack} />
        <Drawer.Screen name="Tools" component={ToolStaack} />
        <Drawer.Screen name="About me" component={TabStack} />
      </Drawer.Navigator>
    </>
  );
};

export default MyDrawer;
