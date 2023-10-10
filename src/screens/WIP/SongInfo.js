import {
  Text,
  View,
  Image,
  SafeAreaView,
  Button,
  Alert,
  useColorScheme,
} from 'react-native';
import React, {useCallback, useEffect, useMemo} from 'react';
import Sound from 'react-native-sound';
import {PLAYBACK, PLAY, VOLUME, DARK, SONG_ERROR} from '../../constants/en';
import {styles} from './SongInfo.styles';
import {useRoute} from '@react-navigation/native';
import {stylesDark} from './SongInfoDark.styles';

export function SongInfo() {
  const theme = useColorScheme();
  const isDarkTheme = theme === DARK;

  Sound.setCategory(PLAYBACK);
  const route = useRoute();
  const sound = useMemo(() => {
    return new Sound(route.params.item.preview, null, error => {
      if (error) {
        Alert.alert(SONG_ERROR, [
          {text: 'OK', onPress: () => console.log(error.message)},
        ]);
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
    <SafeAreaView
      style={
        isDarkTheme === true ? stylesDark.containerDark : styles.container
      }>
      <View>
        <Text
          style={
            isDarkTheme === true ? stylesDark.textTitleDark : styles.textTitle
          }>
          {route.params.item.trackName}
        </Text>
        <Text
          style={
            isDarkTheme === true ? stylesDark.textTitleDark : styles.textTitle
          }>
          {route.params.item.artist}
        </Text>
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
