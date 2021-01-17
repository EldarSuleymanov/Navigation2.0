import React from 'react';
import {WebView} from 'react-native-webview';
import {useSelector} from 'react-redux';
import Loading from '../../animation/loadingScreen';
import Menu from '../menuFunc';

const WebviewStack = ({navigation, route}) => {
  const netConnection = useSelector((state) => state.netReducer.netConnection);
  return (
    <>
      <Menu navigation={navigation} route={route} />
      <WebView
        onError={() => {
          if (netConnection) {
            alert('there is a problem in loading newspage. Try again');
          } else {
            alert('there is a problem in loading newspage. Try again');
          }
        }}
        renderLoading={() => <Loading />}
        source={{
          uri: 'https://www.day.az/',
        }}
      />
    </>
  );
};
export default WebviewStack;
