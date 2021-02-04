import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  secondaryScreen: {
    fontSize: 24,
    color: 'white',
  },
  primaryScreen: {
    fontSize: 30,
    color: 'white',
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  secondaryScreenText: {
    flex: 2,
    backgroundColor: '#29362c',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  primaryScreenText: {
    flex: 1,
    backgroundColor: '#0c170f',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  buttons: {
    flex: 7,
    flexDirection: 'row',
  },
  numbers: {
    flex: 3,
    backgroundColor: '#156b2d',
  },
  operations: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'stretch',
    backgroundColor: '#2c5236',
  },
  btn: {
    flex: 1,
    fontSize: 50,
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
});
