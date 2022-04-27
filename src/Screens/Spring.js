import React, {useState} from 'react';
import {
  Animated,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

const Spring = () => {
  const [animationValue, setAnimationValue] = useState(new Animated.Value(1));
  const [objectState, setObjectState] = useState(0);

  const scaleIn = () => {
    Animated.spring(animationValue, {
      toValue: 2,
      friction: 2.4,
      tension: 50,
      useNativeDriver: true,
    }).start();
    setObjectState(1);
  };

  const scaleOut = () => {
    Animated.spring(animationValue, {
      toValue: 1,
      friction: 2.4,
      tension: 50,
      useNativeDriver: true,
    }).start();
    setObjectState(0);
  };

  const animatedStyle = {
    transform: [{scale: animationValue}],
  };

  return (
    <View style={styles.MainContainer}>
      <TouchableWithoutFeedback
        onPress={() => (objectState === 0 ? scaleIn() : scaleOut())}>
        <Animated.View
          style={[styles.animatedBox, animatedStyle]}></Animated.View>
      </TouchableWithoutFeedback>
    </View>
  );
};
export default Spring;

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
  },
  animatedBox: {
    width: 100,
    height: 100,
    backgroundColor: '#33691E',
  },
});
