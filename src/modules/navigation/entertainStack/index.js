import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import IconStack from '../../../screens/entertain/iconEntertain';
import NothingStack from '../../../components/nothing';
import MovieApp from '../../../screens/entertain/movieApp';

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