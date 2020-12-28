import React from 'react';
import {Text, TouchableOpacity, ImageBackground} from 'react-native';
import Menu from '../../menuFunc';

const link = require('../../../images/01.jpg');
const settingsScreen = ({navigation, route}) => {
  return (
    <>
      <Menu navigation={navigation} route={route} />
      <ImageBackground style={{flex: 0.9, opacity:0.7}}  source={link}>
      </ImageBackground>
        <Text style ={{fontSize:50, fontWeight: "bold", position: 'absolute', top: 50}}>"Settings" page in working right now, try again later</Text>
    </>
  );
};
export default settingsScreen;
