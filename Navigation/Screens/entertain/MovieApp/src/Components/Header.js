import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../../../../../../styles/movieStyles';

export const Header = (props) => {
  const {viewStyle, textStyle} = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.title}</Text>
    </View>
  );
};
