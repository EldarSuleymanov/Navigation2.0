import React from 'react';
import {WebView} from 'react-native-webview';
import Menu from '../menuFunc';

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
