import React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import {styles} from './styles';

const Menu = ({navigation, route}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity
        style={styles.container}
        onPress={() => navigation.toggleDrawer()}>
        <Image
          style={styles.image}
          source={require('../../assets/img/pokemol.jpeg')}
        />
      </TouchableOpacity>
      <Text style={styles.text}>{route?.name}</Text>
    </View>
  );
};

export default Menu;
