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
import React, {useEffect, useMemo, useState} from 'react';
import Sound from 'react-native-sound';
import {
  PLAYBACK,
  VOLUME,
  DARK,
  SONG_ERROR,
  JUMP_INTERVAL,
} from '../../constants/en';
import {styles} from './SongInfo.styles';
import {useRoute} from '@react-navigation/native';
import {stylesDark} from './SongInfoDark.styles';
import {useDispatch, useSelector} from 'react-redux';
import {showSoundBar} from '../../redux/Actions';

export function SongInfo() {
  const theme = useColorScheme();
  const isDarkTheme = theme === DARK;
  const [playing, setPlaying] = useState(false);
  const route = useRoute();
  const dispatch = useDispatch();
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
    if (sound.isPlaying()) {
      sound.pause();
      setPlaying(false);
      dispatch(
        showSoundBar({
          show: false,
          sound: sound,
        }),
      );
    } else {
      sound.play();
      dispatch(
        showSoundBar({
          trackName: route.params.item.trackName,
          preview: route.params.item.preview,
          artwork: route.params.item.artwork,
          show: true,
          sound: sound,
        }),
      );
      //setPlaying(true);
    }
  };
  const jumpPrev10Seconds = () => {
    jumpSeconds(-JUMP_INTERVAL);
  };
  const jumpNext10Seconds = () => {
    jumpSeconds(JUMP_INTERVAL);
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
