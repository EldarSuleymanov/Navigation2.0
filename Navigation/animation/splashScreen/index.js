import React, {Component} from 'react';
import {Animated, View, Easing, Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {Splash} from '../../Screens/entertain/MovieApp/src/redux/actions';
import {styles} from './styles';

class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.animatedValue = new Animated.Value(0);
    this.animatedValue1 = new Animated.Value(0);
    this.animatedValue2 = new Animated.Value(0);
    this.animatedValue3 = new Animated.Value(0);
    this.animatedValue4 = new Animated.Value(1);
    this.animatedValue5 = new Animated.Value(0);
  }

  componentDidMount() {
    this.animate();
  }

  animate() {
    const startScaleAnimation = () => {
      Animated.timing(this.animatedValue4, {
        toValue: 2,
        timing: 1200,
        delay: 4000,
        useNativeDriver: false,
      }).start();
    };
    const createAnimation = function (value, duration, easing, delay = 0) {
      return Animated.timing(value, {
        toValue: 1,
        duration,
        easing,
        delay,
        useNativeDriver: false,
      });
    };
    Animated.parallel([
      createAnimation(this.animatedValue, 1000, Easing.bounce),
      createAnimation(this.animatedValue1, 1000, Easing.bounce, 1000),
      createAnimation(this.animatedValue2, 1000, Easing.bounce, 2000),
      createAnimation(this.animatedValue3, 1000, Easing.bounce, 3000),
      createAnimation(this.animatedValue5, 1000, Easing.bounce, 4000),
      startScaleAnimation(),
    ]).start(() => this.props.changeTriger());
  }

  render() {
    console.log('pro', this.props);
    const animatedStyle = this.animatedValue.interpolate({
      inputRange: [1, 2],
      outputRange: [1, 2],
    });

    const movingMargin = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['140%', '0%'],
    });
    const movingMargin1 = this.animatedValue1.interpolate({
      inputRange: [0, 1],
      outputRange: ['0%', '75%'],
    });
    const movingMargin2 = this.animatedValue2.interpolate({
      inputRange: [0, 1],
      outputRange: ['-25%', '110%'],
    });
    const movingMargin3 = this.animatedValue3.interpolate({
      inputRange: [0, 1],
      outputRange: ['87.5%', '15%'],
    });

    const colorChange = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['red', 'orange'],
    });
    const colorChange1 = this.animatedValue1.interpolate({
      inputRange: [0, 1],
      outputRange: ['orange', 'yellow'],
    });
    const colorChange2 = this.animatedValue2.interpolate({
      inputRange: [0, 1],
      outputRange: ['yellow', 'blue'],
    });
    const colorChange3 = this.animatedValue3.interpolate({
      inputRange: [0, 1],
      outputRange: ['blue', 'violet'],
    });

    const opacityChange = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0.2, 1],
    });
    const opacityChange1 = this.animatedValue1.interpolate({
      inputRange: [0, 1],
      outputRange: [0.2, 1],
    });
    const opacityChange2 = this.animatedValue2.interpolate({
      inputRange: [0, 1],
      outputRange: [0.2, 1],
    });
    const opacityChange3 = this.animatedValue3.interpolate({
      inputRange: [0, 1],
      outputRange: [0.2, 1],
    });
    const opacityChange4 = this.animatedValue4.interpolate({
      inputRange: [1, 2],
      outputRange: [0.2, 1],
    });
    const opacityChange5 = this.animatedValue5.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
    });

    const rotateY = this.animatedValue4.interpolate({
      inputRange: [1, 1.5, 2],
      outputRange: ['0deg', '180deg', '0deg'],
    });

    return (
      <View style={[styles.container]}>
        {/* jeltiy */}
        <Animated.View
          style={[
            styles.animatedViewContainer,
            {
              opacity: opacityChange1,
              marginLeft: movingMargin1,
              backgroundColor: colorChange1,
            },
          ]}
        />
        {/* orange */}
        <Animated.View
          style={[
            styles.animatedViewContainer,
            {
              opacity: opacityChange,
              marginTop: movingMargin,
              backgroundColor: colorChange,
            },
          ]}
        />
        <Animated.View
          style={[
            styles.animatedViewContainer,
            {
              opacity: opacityChange2,
              left: 280,
              marginTop: movingMargin2,
              backgroundColor: colorChange2,
            },
          ]}
        />
        <Animated.View
          style={[
            styles.animatedViewContainer,
            {
              opacity: opacityChange3,
              marginLeft: movingMargin3,
              backgroundColor: colorChange3,
            },
          ]}
        />
        <Animated.Image
          source={require('../../../images/pika.png')}
          style={[
            styles.animatedImage,
            {
              opacity: opacityChange4,
              transform: [{scale: animatedStyle}, {rotateY}],
            },
          ]}
        />
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeTriger: () => dispatch(Splash(false)),
  };
};

export default connect(null, mapDispatchToProps)(SplashScreen);
