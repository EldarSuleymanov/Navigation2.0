import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import IconStack from './iconsEntertain';
import MovieApp from './MovieApp/MainFile';

const Stack = createStackNavigator();

const EntertainmentStack = () => {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen name="Entertainment" component={IconStack} options ={{headerShown: false}}/>
        <Stack.Screen name="Movie Searcher" component={MovieApp} />
      </Stack.Navigator>
    </>
  );
};

export default EntertainmentStack;

// {props.route.params.banana}