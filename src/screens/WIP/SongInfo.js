import React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  Button,
} from 'react-native';
import Sound from 'react-native-sound';

export function SongInfo({route}) {
  Sound.setCategory('Playback');

  const sound = new Sound(
    route.params.item.preview,
    route.params.item.preview,
    error => {
      if (error) {
        console.log(error.message);
      }
    },
  );
  sound.setVolume(2);
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
        <Button title={'Play'} onPress={sound.play} />
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
    height: 300,
    width: '100%',
  },
});
