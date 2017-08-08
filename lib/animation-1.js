import React from 'react';
import {View, Text, StyleSheet, Animated, TouchableOpacity} from 'react-native';

class Example1 extends React.Component {
  translate = new Animated.Value(0);

  componentDidMount() {
    Animated.timing(this.translate, {
      toValue: 300,
      duration: 1500
    }).start();
  }

  render() {
    const ani_style = {
      transform: [{translateY: this.translate}, {translateX: this.translate}]
    };
    return <Animated.View style={[styles.box, ani_style]} />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  box: {
    backgroundColor: 'tomato',
    height: 150,
    width: 150
  }
});

class Example2 extends React.Component {
  scale = new Animated.Value(1);
  scale_y = new Animated.Value(1);
  start = () => {
    Animated.parallel([
      Animated.timing(this.scale, {
        toValue: 2,
        duration: 2000
      }),
      Animated.timing(this.scale_y, {
        toValue: 3,
        duration: 1500
      })
    ]).start();
  };

  render() {
    const box = {
      width: 100,
      height: 100,
      backgroundColor: 'tomato',
      transform: [
        {scale: this.scale}
        // {scaleY: this.scale_y}
      ]
    };
    return (
      <TouchableOpacity onPress={this.start}>
        <Animated.View style={[box]} />
      </TouchableOpacity>
    );
  }
}

export default class extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Example2 />
      </View>
    );
  }
}
