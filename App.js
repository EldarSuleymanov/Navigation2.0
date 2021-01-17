import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {View, TouchableOpacity, Text, AppState} from 'react-native';
import MyDrawer from './Navigation/drawer';
import {Provider, useDispatch} from 'react-redux';
import NetInfo from '@react-native-community/netinfo';

// import {createStackNavigator} from '@react-navigation/stack';
// const Stack = createStackNavigator();

import {PersistGate} from 'redux-persist/lib/integration/react';
import {configureStore} from './Navigation/Screens/entertain/MovieApp/src/redux/store';
import {useRef} from 'react';
import {netActionCreator} from './Navigation/Screens/entertain/MovieApp/src/redux/actions';

const {store, persistor} = configureStore();
const App = () => {
  
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <MyDrawer />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
