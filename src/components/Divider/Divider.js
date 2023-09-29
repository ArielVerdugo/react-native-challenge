import React from 'react';
import {View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  line: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#bdbdbd',
  },
});

const Divider = ({height, borderBottomWidth}) => (
  <View style={[styles.line, {height, borderBottomWidth}]} />
);

export default Divider;
