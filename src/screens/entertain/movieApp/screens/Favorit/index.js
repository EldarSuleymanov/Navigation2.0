import React from 'react';
import {Text, ScrollView} from 'react-native';
import {connect, useDispatch, useSelector} from 'react-redux';
import ImageCard from '../../Components/ImageCard';

const FavoriteScreen = ({route}) => {
  const data1 = useSelector((state) => state.favoriteReducer.data);

  const temp = data1.map((item, index) => (
    <ImageCard data={item} key={index} rootName={route.name} />
  ));
  return (
    <ScrollView style={{backgroundColor: 'grey'}}>
      {temp.length ? (
        temp
      ) : (
        <Text style={{padding: 20, textAlign: 'center', fontWeight: 'bold'}}>
          There is no favorite movies in this list
        </Text>
      )}
    </ScrollView>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     data1: state.favoriteReducer.data,
//   };
// };

// export default connect(mapStateToProps, null)(FavoriteScreen);

export default FavoriteScreen;
