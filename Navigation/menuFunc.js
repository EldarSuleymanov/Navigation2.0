import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet, Image} from 'react-native';

// const Menu = (props) => {
//   return (
//     <View style={{flexDirection: 'row', flex: 0.1, backgroundColor: 'grey'}}>
//       <TouchableOpacity
//         style={styles.container}
//         onPress={() => props.navigation.toggleDrawer()}>
//         <Text>Menu</Text>
//       </TouchableOpacity>
//       <Text style={styles.text}>Navigation App</Text>
//     </View>
//   );
// };

const Menu = ({navigation, route}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity
        style={styles.container}
        onPress={() => navigation.toggleDrawer()}>
        <Image style ={{width:"100%", height: "100%", flex:1}} source = {require("../images/pokemol.jpeg")}/>
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
