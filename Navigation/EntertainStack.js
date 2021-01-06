import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import IconStack from './Screens/entertain/iconsEntertain';
import NothingStack from './Screens/entertain/nothing';
import MovieApp from './Screens/entertain/MovieApp/src/App';

const Stack = createStackNavigator();

const EntertainmentStack = () => {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen name="Entertainment" component={IconStack} options ={{headerShown: false}}/>
        <Stack.Screen name="Movie Searcher" component={MovieApp} />
        <Stack.Screen name="Nothing" component={NothingStack}  />
      </Stack.Navigator>
    </>
  );
};

export default EntertainmentStack;

// {props.route.params.banana}