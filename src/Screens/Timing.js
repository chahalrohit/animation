import React, {useEffect, useState, useRef} from 'react';
import {
  Animated,
  View,
  Text,
  StatusBar,
  Pressable,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
} from 'react-native';

const FadeInOut = props => {
  const fadeAnimation = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(fadeAnimation, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(fadeAnimation, {
      toValue: 0,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View style={{opacity: fadeAnimation}}>
        <Text style={styles.animationText}>Hello Me!</Text>
      </Animated.View>
      <View style={[styles.childView1, {}]}>
        <StatusBar backgroundColor="white" barStyle="dark-content" />
        <TouchableOpacity onPress={fadeIn} style={styles.fadeInBtn}>
          <Text style={{color: 'white', paddingHorizontal: 5}}>FadeIn</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={fadeOut} style={styles.fadeOutBtn}>
          <Text style={{color: 'white', paddingHorizontal: 5}}>FadeOut</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default FadeInOut;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  animationText: {
    backgroundColor: 'skyblue',
    color: 'white',
    padding: 5,
    textAlign: 'center',
    marginTop: 150,
    marginHorizontal: 50,
  },
  childView1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fadeInBtn: {
    paddingHorizontal: 20,
    backgroundColor: 'tomato',
    padding: 20,
  },
  fadeOutBtn: {
    paddingHorizontal: 16,
    backgroundColor: 'tomato',
    padding: 20,
    marginTop: 10,
  },
});
