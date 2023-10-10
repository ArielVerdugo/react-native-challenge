import {Text, View, Image, SafeAreaView, Button, Alert} from 'react-native';
import React, {useCallback, useEffect, useMemo} from 'react';
import Sound from 'react-native-sound';
import {PLAYBACK, PLAY, VOLUME} from '../../constants/en';
import {styles} from './SongInfo.styles';
import {useRoute} from '@react-navigation/native';

export function SongInfo() {
  Sound.setCategory(PLAYBACK);
  const route = useRoute();
  const sound = useMemo(() => {
    return new Sound(route.params.item.preview, null, error => {
      if (error) {
        console.log('este es el error' + error.message);
      }
    });
  }, [route]);

  useEffect(() => {
    sound.setVolume(VOLUME);
    return () => {
      sound.release();
    };
  });

  const playSong = useCallback(() => sound.play(), [sound]);

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
        <Button title={PLAY} onPress={playSong} />
      </View>
    </SafeAreaView>
  );
}
