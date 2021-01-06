import React from 'react';
import {Image, Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {styles} from '../../../../../../styles/movieStyles';
import {FavoriteAdd, FavoriteDeleted} from '../redux/actions';

const ImageCard = (props) => {
  const {h1, cover, container} = styles;
  const {image, name, id} = props.data.show;

  const isMovieFavorite = props.data1.find((item) => item.show.id === id);
  let isImageNull =
    image == null
      ? 'https://upload.wikimedia.org/wikipedia/commons/0/0a/No-image-available.png'
      : image.medium;

  return (
    <View style={container}>
      <Image style={cover} source={{uri: isImageNull}} />
      <Text style={h1}>{name}</Text>
      <View style={{flexDirection: 'row'}}>
        {props.rootName === 'Search' ? (
          <TouchableOpacity
            disabled={isMovieFavorite}
            style={{backgroundColor: 'green'}}
            onPress={() => props.add(props.data)}>
            <Text>{isMovieFavorite ? 'Alredy added' : 'Add'}</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={{backgroundColor: 'red'}}
            onPress={() => props.delete(props.data)}>
            <Text>Delete</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    data1: state.favoriteReducer.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    add: (movie) => {
      dispatch(FavoriteAdd(movie));
    },
    delete: (movie) => {
      dispatch(FavoriteDeleted(movie));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ImageCard);
