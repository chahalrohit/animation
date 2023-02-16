import React from 'react';
import {Animated, TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const HEADER_HEIGHT = 200;

const AnimatedHeader = ({animatedValue}) => {
  const insets = useSafeAreaInsets();

  const headerHeight = animatedValue.interpolate({
    inputRange: [0, HEADER_HEIGHT + insets.top],
    outputRange: [HEADER_HEIGHT + insets.top, insets.top + 44],
    extrapolate: 'clamp',
  });

  return (
    <Animated.View
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10,
        height: headerHeight,
        backgroundColor: 'lightblue',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text
        style={{
          color: '#fff',
          fontSize: 25,
          fontWeight: 'bold',
          textAlign: 'center',
        }}>
        A List of Books
      </Text>
    </Animated.View>
  );
};

export default AnimatedHeader;
