import {
  Text,
  View,
  Image,
  SafeAreaView,
  Alert,
  Pressable,
  useColorScheme,
} from 'react-native';
import {PlayIcon, RewindIcon, ForwardIcon} from '../../assets/images';
import React, {useEffect, useMemo} from 'react';
import Sound from 'react-native-sound';
import {PLAYBACK, VOLUME, DARK, SONG_ERROR} from '../../constants/en';
import {styles} from './SongInfo.styles';
import {useRoute} from '@react-navigation/native';
import {stylesDark} from './SongInfoDark.styles';

Sound.setCategory(PLAYBACK);

export function SongInfo() {
  const theme = useColorScheme();
  const isDarkTheme = theme === DARK;
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

  const playPause = () => {
    sound.isPlaying() ? sound.pause() : sound.play();
  };
  const jumpPrev10Seconds = () => {
    jumpSeconds(-10);
  };
  const jumpNext10Seconds = () => {
    jumpSeconds(10);
  };

  const jumpSeconds = secondsToJump => {
    sound.getCurrentTime(seconds => {
      let time = seconds + secondsToJump;
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
      style={isDarkTheme ? stylesDark.containerDark : styles.container}>
      <View>
        <View>
          <Image
            style={styles.imageHeader}
            accessibilityIgnoresInvertColors={true}
            source={{uri: route.params.item.artwork}}
          />
        </View>
        <Text style={isDarkTheme ? stylesDark.textTitleDark : styles.textTitle}>
          {route.params.item.trackName}
        </Text>
        <Text style={isDarkTheme ? stylesDark.textTitleDark : styles.textTitle}>
          {route.params.item.artist}
        </Text>
        <View style={styles.playerContainer}>
          <Pressable onPress={jumpPrev10Seconds}>
            <Image
              style={styles.itemRewindForwardStyle}
              accessibilityIgnoresInvertColors={true}
              source={RewindIcon}
            />
          </Pressable>
          <Pressable onPress={playPause}>
            <Image
              style={styles.itemPlayStyle}
              accessibilityIgnoresInvertColors={true}
              source={sound.isPlaying() ? ForwardIcon : PlayIcon}
            />
          </Pressable>
          <Pressable onPress={jumpNext10Seconds}>
            <Image
              style={styles.itemRewindForwardStyle}
              accessibilityIgnoresInvertColors={true}
              source={ForwardIcon}
            />
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}
