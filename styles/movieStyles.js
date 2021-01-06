import {StyleSheet} from 'react-native';
import {h, w} from '../Navigation/Screens/entertain/MovieApp/src/Components/constants';

export const styles = StyleSheet.create({
  //stili header
  viewStyle: {
    backgroundColor: '#99917c',
    height: 50,
    justifyContent: 'center',
    paddingLeft: 2,
  },
  textStyle: {
    color: '#420987',
    fontSize: 28,
  },
  // stili image
  h1: {
    color: 'black',
    fontSize: 18,
    alignSelf: 'center',
    textAlign: 'center',
    width: w / 2.4,
  },
  cover: {
    width: w / 2.4,
    height: h / 2.4,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  container: {
    width: w / 2,
    paddingVertical: 20,
    paddingHorizontal: 20,
    //backgroundColor: '#99917c',
    resizeMode: 'center',
  },
});
