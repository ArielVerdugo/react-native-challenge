import React from 'react';
import {Text, View, Image, SafeAreaView, Button} from 'react-native';
import Sound from 'react-native-sound';
import {PLAYBACK, PLAY} from '../../constants/en';
import {styles} from './SongInfo.styles';

export function SongInfo({route}) {
  Sound.setCategory(PLAYBACK);

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
        <Text style={styles.textTitle}>{route.params.item.trackName}</Text>
        <Text style={styles.textTitle}>{route.params.item.artist}</Text>
        <Image
          style={styles.imageHeader}
          accessibilityIgnoresInvertColors={true}
          source={{uri: `${route.params.item.artwork}`}}
        />
        <Button title={PLAY} onPress={sound.play} />
      </View>
    </SafeAreaView>
  );
}
