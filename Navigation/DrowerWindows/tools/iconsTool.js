import React from 'react';
import {Text, TouchableOpacity, StyleSheet, View, Image} from 'react-native';
import Menu from '../../menuFunc';

// const IconStack = (props) => {
//   return (
//     <>
//       <Menu navigation={props.navigation} />


const link = require('../../../images/rainbow3.jpg');
const link2 = require('../../../images/0.jpg');

const IconStack = ({navigation, route}) => {
  return (
    <>
      <Menu navigation={navigation} route={route} />
      <View style={{flexDirection: 'row', justifyContent: "space-around"}}>
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.calcIcon}
            onPress={() => {
              navigation.navigate('Calculator');
            }}>
            <Image
              style={{width: '100%', height: 150, resizeMode: 'contain'}}
              source={link2}
            />
          </TouchableOpacity>
          <Text style={styles.calcText}>Calculator</Text>
        </View>

        {/* <View style={styles.container}>
          <TouchableOpacity
            style={styles.calcIcon}
            onPress={() => {
              navigation.navigate('Calculator');
            }}>
            <Image
              style={{width: '100%', height: 150, resizeMode: 'contain'}}
              source={link}
            />
          </TouchableOpacity>
          <Text style={styles.calcText}>Something else</Text>
        </View> */}
      </View>
    </>
  );
};
export default IconStack;

const styles = StyleSheet.create({
  calcIcon: {
    // height: 92,
    // width: 92,
    // margin: 20,
    width: '100%',
  },
  calcText: {
    // width: 92,
    textAlign: 'center',
  },
  container: {
    width: '40%',
    justifyContent: 'center',
  },
});
