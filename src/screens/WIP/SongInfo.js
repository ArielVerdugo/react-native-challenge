import React from 'react';
import {Text, View, Image, StyleSheet, SafeAreaView} from 'react-native';

export function SongInfo({route}) {
  console.log(route.params.item);
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.trackTitle}>{route.params.item.trackName}</Text>
        <Text style={styles.trackTitle}>{route.params.item.artist}</Text>
        <Image
          style={styles.imageHeader}
          accessibilityIgnoresInvertColors={true}
          source={{uri: `${route.params.item.artwork}`}}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  trackTitle: {
    padding: 10,
    fontSize: 20,
    fontWeight: '500',
  },
  trackArtist: {
    padding: 10,
    fontSize: 20,
    fontWeight: '500',
  },
  header: {
    paddingHorizontal: 16,
  },
  h1: {
    fontSize: 26,
    fontWeight: '700',
  },
  imageHeader: {
    height: 400,
    width: '100%',
  },
});
