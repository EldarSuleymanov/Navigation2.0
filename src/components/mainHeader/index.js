import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet, Image} from 'react-native';

const Menu = ({navigation, route}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity
        style={styles.container}
        onPress={() => navigation.toggleDrawer()}>
        <Image style ={{width:"100%", height: "100%", flex:1}} source = {require("../../assets/img/pokemol.jpeg")}/>
      </TouchableOpacity>
      <Text style={styles.text}>{route?.name}</Text>
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: {
    flex: 0.2,
    height: 50,
    backgroundColor: 'green',
  },
  text: {
    color: 'black',
    flex: 0.8,
    height: 50,
    backgroundColor:"grey",
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 26,
  },
});
