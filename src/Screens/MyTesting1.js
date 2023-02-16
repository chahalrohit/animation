import React, {useState, useRef, useEffect} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  Animated,
  Easing,
  ScrollView,
} from 'react-native';

export default () => {
  const animation = useRef(new Animated.Value(1)).current;

  const timingAnimation = () => {
    Animated.timing(animation, {
      toValue: 360,
      useNativeDriver: true,
      duration: 5000,
      // easing: Easing.back(),
      easing: Easing.bounce,
    }).start();
  };

  const springAnimation = () => {
    Animated.spring(animation, {
      toValue: 2,
      friction: 2,
      tension: 160,
    }).start(() => {
      Animated.timing(animation, {
        toValue: 1,
      }).start();
    });
  };

  const rotate = animation.interpolate({
    inputRange: [0, 360],
    outputRange: ['0deg', '360deg'],
  });

  const heightInterpolate = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['rgb(255,255,0,170)', 'rgb(255,170,255,0)'],
  });

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <ScrollView
        contentContainerStyle={{backgroundColor: 'red'}}
        scrollEventThrottle={16}
        onScroll={e => {
          e.nativeEvent.contentOffset.x
        }}>
        <Pressable onPress={springAnimation}>
          <Animated.View
            style={{
              height: 150,
              width: 150,
              backgroundColor: 'green',
              borderTopRightRadius: 150,
              // opacity: animation,
              // transform: [{translateY: animation}],
              transform: [{scaleY: animation}],
              // transform: [{rotateY: rotate}, {rotateX: rotate}],
            }}></Animated.View>
        </Pressable>
      </ScrollView>
    </View>
  );
};
