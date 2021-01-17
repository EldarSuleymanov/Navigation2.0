import React, {useEffect, useRef, useState} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import EntertainmentStack from './EntertainStack';
import ToolStaack from './ToolsStack';
import TabStack from './AboutTab';
import WebviewStack from './Screens/news/webview';
import {useSelector} from 'react-redux';
import SplashScreen from './animation/splashScreen';
import {Provider, useDispatch} from 'react-redux';
import NetInfo from '@react-native-community/netinfo';
import {netActionCreator} from './Screens/entertain/MovieApp/src/redux/actions';
import {AppState} from 'react-native';

// import {createStackNavigator} from '@react-navigation/stack';
// const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();
let NetInfoSubscriprion = null;

const MyDrawer = (props) => {
  const triger = useSelector((state) => state.splashReducer.trigger);
  const dispatch = useDispatch();
  const connectChange = (state) => {
    dispatch(netActionCreator(state.isInternetReachable));
  };
  const appState = useRef(AppState.currentState);

  useEffect(() => {
    //zamena mount
    AppState.addEventListener('change', _handleAppStateChange);
    NetInfoSubscriprion = NetInfo.addEventListener(connectChange);
    return () => {
      AppState.removeEventListener('change', _handleAppStateChange);
      NetInfoSubscriprion && NetInfoSubscriprion();
    };
  }, []);

  const _handleAppStateChange = (nextAppState) => {
    if (
      appState.current.match(/inactive|background/) &&
      nextAppState === 'active'
    ) {
      alert('Welcome back');
    }

    appState.current = nextAppState;
  };
  return (
    <>
      {triger ? (
        <SplashScreen />
      ) : (
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
      )}
    </>
  );
};

export default MyDrawer;
