import React from 'react';
import {Text, TouchableOpacity, View, Image} from 'react-native';
import Menu from '../../../components/mainHeader';
import {styles} from './styles';

const link = require('../../../assets/img/rainbow3.jpg');
const link2 = require('../../../assets/img/0.jpg');

const IconStack = ({navigation, route}) => {
  return (
    <>
      <Menu navigation={navigation} route={route} />
      <View style={styles.mainView}>
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.calcIcon}
            onPress={() => {
              navigation.navigate('Calculator');
            }}>
            <Image style={styles.image} source={link2} />
          </TouchableOpacity>
          <Text style={styles.calcText}>Calculator</Text>
        </View>

        <View style={styles.container}>
          <TouchableOpacity
            style={styles.calcIcon}
            onPress={() => {
              navigation.navigate('Nothing');
            }}>
            <Image style={styles.image} source={link} />
          </TouchableOpacity>
          <Text style={styles.calcText}>Something else</Text>
        </View>
      </View>
    </>
  );
};
export default IconStack;
