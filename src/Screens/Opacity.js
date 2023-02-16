import React, {useRef, useState} from 'react';
import {Animated, Pressable, StyleSheet, Text, View, Image} from 'react-native';

export default Opacity = () => {
  const animationRef = useRef(new Animated.Value(1)).current;

  const hideBox = () => {
    Animated.timing(animationRef, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  const showBox = () => {
    Animated.timing(animationRef, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../Assets/Images/programmer.png')}
        style={StyleSheet.absoluteFill}
        resizeMode='contain'
      />
      <Animated.View
        style={[
          styles.box,
          {transform: [{scaleY: animationRef}]},
        ]}></Animated.View>
      <Pressable onPress={() => hideBox()}>
        <Text>Hide</Text>
      </Pressable>
      <Pressable onPress={() => showBox()}>
        <Text>Show</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    height: 150,
    width: 150,
    backgroundColor: 'tomato',
  },
});
