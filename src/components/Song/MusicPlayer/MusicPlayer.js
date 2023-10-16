import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import {RewindIcon, PlayIcon} from '../../../assets/images';

export const MusicPlayer = () => (
  <View style={styles.container}>
    <Image
      style={styles.songImage}
      accessibilityIgnoresInvertColors={true}
      source={RewindIcon}
    />
    <Text style={styles.songTitle}>{'Partner in crime'}</Text>
    <Image
      style={styles.itemPlayStyle}
      accessibilityIgnoresInvertColors={true}
      source={PlayIcon}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(229,228,224,255)',
    height: 60,
  },
  songImage: {
    width: 20,
    height: 20,
    marginLeft: 10,
  },
  songTitle: {
    fontSize: 20,
    marginTop: 15,
  },
  itemPlayStyle: {
    width: 65,
    height: 65,
  },
});
