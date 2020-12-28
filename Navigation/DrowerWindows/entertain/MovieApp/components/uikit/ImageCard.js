import React from 'react';
import {Image, Text, StyleSheet, View} from 'react-native';
import {h, w} from '../../components/constants';

const ImageCard = (data) => {
  const {h1, cover, container} = styles;
  const {image, name} = data.data.show;

  let isImageNull =
    image == null
      ? 'https://upload.wikimedia.org/wikipedia/commons/0/0a/No-image-available.png'
      : image.medium;

  return (
    <View style={container}>
      <Image style={cover} source={{uri: isImageNull}} />
      <Text style={h1}>{name}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
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

export {ImageCard};
