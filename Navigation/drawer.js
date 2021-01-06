import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import EntertainmentStack from './EntertainStack';
import ToolStaack from './ToolsStack';
import TabStack from './AboutTab';
import WebviewStack from './Screens/news/webview';

// import {createStackNavigator} from '@react-navigation/stack';
// const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

const MyDrawer = (props) => {
  return (
    <>
      <Drawer.Navigator
        drawerStyle={{
          backgroundColor: 'darkgrey',
          borderTopRightRadius: 50,
          borderBottomRightRadius: 50,
          padding: 25,
        }}
        drawerContentOptions={{
          labelStyle: {
            fontSize: 18,
            textAlign: 'center',
            fontWeight: 'bold',
          },
          activeTintColor: 'black',
          inactiveTintColor: '#afbf1d',
          activeBackgroundColor: '#97ed02',
          inactiveBackgroundColor: 'green',
          itemStyle: {
            marginVertical: 20,
          },
        }}>
        <Drawer.Screen name="News" component={WebviewStack} />
        <Drawer.Screen name="Entertainment" component={EntertainmentStack} />
        <Drawer.Screen name="Tools" component={ToolStaack} />
        <Drawer.Screen name="About me" component={TabStack} />
      </Drawer.Navigator>
    </>
  );
};

export default MyDrawer;
