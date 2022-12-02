import React, {useState} from 'react';
import {Animated, Pressable, StyleSheet, Text, View} from 'react-native';

export default Opacity = () => {
  const [animation, setAnimation] = useState(new Animated.Value(1));

  const hideBox = () => {
    Animated.timing(animation, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  const showBox = () => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, {opacity: animation}]}></Animated.View>
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
