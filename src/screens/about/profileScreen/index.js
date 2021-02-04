import React from 'react';
import {Text, ImageBackground} from 'react-native';
import Menu from '../../../components/mainHeader';
import {styles} from './styles';

const link = require('../../../assets/img/01.jpg');
const profileScreen = ({navigation, route}) => {
  return (
    <>
      <Menu navigation={navigation} route={route} />
      <ImageBackground
        style={{flex: 0.9, opacity: 0.7}}
        source={link}></ImageBackground>
      <Text style={styles.text}>
        "Profile" page in working right now, try again later
      </Text>
    </>
  );
};
export default profileScreen;
