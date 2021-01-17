import React, {Component} from 'react';
import {ActivityIndicator, View} from 'react-native';
import {styles} from './styles';

class Loading extends Component {
  render() {
    return (
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
    );
  }
}

export default Loading;
