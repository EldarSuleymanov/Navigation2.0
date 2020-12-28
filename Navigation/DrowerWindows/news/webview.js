import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Menu from '../../menuFunc';
import {WebView} from 'react-native-webview';

const WebviewStack = ({navigation, route}) => {
  return (
    <>
      <Menu navigation={navigation} route={route} />
      <WebView
        source={{
          uri: 'https://www.day.az/',
        }}
      />
    </>
  );
};
export default WebviewStack;
