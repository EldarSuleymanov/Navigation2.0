import React from 'react';
import {Text, TouchableOpacity, StyleSheet, View,Image} from 'react-native';
import Menu from '../menuFunc';

const link = require('../../../images/rainbow3.jpg');
const link2 = require('../../../images/icon.png');
const IconStack = ({navigation, route}) => {
  return (
    <>
      <Menu navigation={navigation} route={route} />
      <View style={{flexDirection: 'row', justifyContent: "space-around"}}>
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.movieIcon}
            onPress={() => {
              navigation.navigate('Movie Searcher');
            }}>
            <Image
              style={{width: '100%', height: 150, resizeMode: 'contain'}}
              source={link2}
            />
          </TouchableOpacity>
          <Text style={styles.movieText}>Movie searcher</Text>
        </View>

        <View style={styles.container}>
          <TouchableOpacity
            style={styles.movieIcon}
            onPress={() => {
              navigation.navigate('Nothing');
            }}>
            <Image
              style={{width: '100%', height: 150, resizeMode: 'contain'}}
              source={link}
            />
          </TouchableOpacity>
          <Text style={styles.movieText}>Something else</Text>
        </View>
      </View>
    </>
  );
};
export default IconStack;

const styles = StyleSheet.create({
  movieIcon: {
    width: '100%',
  },
  movieText: {
    textAlign: 'center',
  },
  container: {
    width: '40%',
    justifyContent: 'center',
  },
});
