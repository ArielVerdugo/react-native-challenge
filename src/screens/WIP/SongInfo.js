import {
  Text,
  View,
  Image,
  SafeAreaView,
  Button,
  Alert,
  useColorScheme,
} from 'react-native';
import {PlayIcon, play} from '../../assets/images';
import React, {useCallback, useEffect, useMemo, useState} from 'react';
import Sound from 'react-native-sound';
import {PLAYBACK, PLAY, VOLUME, DARK, SONG_ERROR} from '../../constants/en';
import {styles} from './SongInfo.styles';
import {useRoute} from '@react-navigation/native';
import {stylesDark} from './SongInfoDark.styles';

export function SongInfo() {
  const theme = useColorScheme();
  const isDarkTheme = theme === DARK;
  const [playing, setPlaying] = useState(false);
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

  const playSong = useCallback(playPause, [sound]);

  const playPause = () => {
    if (sound.isPlaying()) {
      sound.pause();
      console.log('entro pause');
      setPlaying(false);
    } else {
      sound.play();
      console.log('entro play');
      //setPlaying(true);
    }
  };
  const jumpPrev15Seconds = () => {
    jumpSeconds(-10);
  };
  const jumpNext15Seconds = () => {
    jumpSeconds(10);
  };

  const jumpSeconds = secondsToJump => {
    sound.getCurrentTime(seconds => {
      var time = seconds + secondsToJump;
      if (time < 0) {
        time = 0;
      } else if (time > sound.getDuration) {
        time = sound.getDuration;
      }
      sound.setCurrentTime(time);
    });
  };

  return (
    <SafeAreaView
      style={
        isDarkTheme === true ? stylesDark.containerDark : styles.container
      }>
      <View>
        <View>
          <Image
            style={styles.imageHeader}
            accessibilityIgnoresInvertColors={true}
            source={{uri: `${route.params.item.artwork}`}}
          />
        </View>
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
        <View style={styles.playerContainer}>
          <Button
            style={styles.itemPlayStyle}
            accessibilityIgnoresInvertColors={true}
            title={'-10'}
            onPress={jumpPrev15Seconds}
          />
          <Button
            style={styles.itemPlayStyle}
            accessibilityIgnoresInvertColors={true}
            title={playing ? 'Stop' : 'Play'}
            onPress={playPause}
          />
          <Button
            style={styles.itemPlayStyle}
            accessibilityIgnoresInvertColors={true}
            title={'+10'}
            onPress={jumpNext15Seconds}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
