import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import MyDrawer from './Navigation/drawer';
import {Provider} from 'react-redux';
// import {createStackNavigator} from '@react-navigation/stack';
// const Stack = createStackNavigator();

import {PersistGate} from 'redux-persist/lib/integration/react';
import {configureStore} from './Navigation/Screens/entertain/MovieApp/src/redux/store';

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
