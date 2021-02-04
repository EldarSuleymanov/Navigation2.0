import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {configureStore} from './modules/redux';
import MyDrawer from './modules/navigation/drawer'


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
