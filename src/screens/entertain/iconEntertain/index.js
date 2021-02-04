import React from 'react';
import {Text, TouchableOpacity, View, Image} from 'react-native';
import Menu from '../../../components/mainHeader';
import {styles} from './styles';

const link = require('../../../assets/img/rainbow3.jpg');
const link2 = require('../../../assets/img/icon.png');
const IconStack = ({navigation, route}) => {
  return (
    <>
      <Menu navigation={navigation} route={route} />
      <View style={styles.mainView}>
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.movieIcon}
            onPress={() => {
              navigation.navigate('Movie Searcher');
            }}>
            <Image style={styles.image} source={link2} />
          </TouchableOpacity>
          <Text style={styles.movieText}>Movie searcher</Text>
        </View>

        <View style={styles.container}>
          <TouchableOpacity
            style={styles.movieIcon}
            onPress={() => {
              navigation.navigate('Nothing');
            }}>
            <Image style={styles.image} source={link} />
          </TouchableOpacity>
          <Text style={styles.movieText}>Something else</Text>
        </View>
      </View>
    </>
  );
};
export default IconStack;
