import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  lightText: {
    color: 'white',
  },
  title: {
    fontSize: 22,
    paddingHorizontal: 20,
  },
  subtitle: {
    fontSize: 14,
  },
  separator: {
    height: 8,
  },
});

const WorkInProgress = ({darkModeEnabled}) => (
  <View style={styles.container}>
    <Text
      style={[styles.text, styles.title, darkModeEnabled && styles.lightText]}>
      This feature or screen is not yet implemented.
    </Text>
    <View style={styles.separator} />
    <Text
      style={[
        styles.text,
        styles.subtitle,
        darkModeEnabled && styles.lightText,
      ]}>
      Check out the feature requirements on your take-home assignment.
    </Text>
  </View>
);

export default WorkInProgress;
