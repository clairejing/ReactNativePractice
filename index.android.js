/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class ReactNativePractice extends Component {
  render() {
    return (
      <Text style={styles.base}/>
      <View style={styles.background}/>
      <View style={[styles.base, styles.background]}/>
      <View style={[styles.base, this.state.active && styles.active]} />
      <View style={[styles.base, {
        width: this.state.width,
        height: this.state.width * this.state.aspectRatio
      }]}

    );
  }
}


var styles = StyleSheet.create({
  base: {
    width: 38,
    height: 38,
  },
  background: {
    backgroundColor: '#222222',
  },
  active: {
    borderWidth: 2,
    borderColor: '#00ff00',
  }
});


var List = React.createClass({
  propTypes: {
    style: View.propTypes.style,
    elementStyle: View.propTypes.style,
  },
  render: function(){
    return (
      <View style={this.props.style}>
        {elements.map((element) => <View style={[styles.element, this.props.elementStyle]}/>)}
      </View>
    );
  }
});

<List style={styles.list} elementStyle={styles.listElement}/>


AppRegistry.registerComponent('ReactNativePractice', () => ReactNativePractice);
