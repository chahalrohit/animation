import React, {useRef, useState} from 'react';
import {Animated, Dimensions, StyleSheet, Text, View} from 'react-native';
const {width} = Dimensions.get('screen');
const data = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

export default function ScrollProgress() {
  const scrollY = useRef(new Animated.Value(0)).current;
  const [height1, setHeight1] = useState(100);
  const [height2, setHeight2] = useState(100);
  const translateX = scrollY.interpolate({
    inputRange: [0, height1 - height2],
    outputRange: [-width, 0],
  });

  return (
    <View>
      <Animated.ScrollView
        onContentSizeChange={(_, h) => {
          setHeight1(h);
          console.log('h : ', h);
        }}
        onLayout={e => setHeight2(e.nativeEvent.layout.height)}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {
            useNativeDriver: false,
          },
        )}>
        {data.map(x => (
          <View style={styles.item} key={x}>
            <Text>{x}</Text>
          </View>
        ))}
      </Animated.ScrollView>
      <Animated.View style={[styles.bar, {transform: [{translateX}]}]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    height: 100,
    marginVertical: 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightblue',
  },
  bar: {
    height: 10,
    backgroundColor: 'red',
    width: '100%',
    position: 'absolute',
  },
});
