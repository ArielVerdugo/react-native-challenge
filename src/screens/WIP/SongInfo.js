import {
  Text,
  View,
  Image,
  SafeAreaView,
  Alert,
  Pressable,
  useColorScheme,
} from 'react-native';
import {
  PlayIcon,
  RewindIcon,
  ForwardIcon,
  PauseIcon,
} from '../../assets/images';
import React, {useEffect, useMemo, useState} from 'react';
import Sound from 'react-native-sound';
import {
  VOLUME,
  DARK,
  SONG_ERROR,
  PLAYBACK,
  JUMP_INTERVAL,
} from '../../constants/en';
import {styles} from './SongInfo.styles';
import {useRoute} from '@react-navigation/native';
import {stylesDark} from './SongInfoDark.styles';
import {useDispatch} from 'react-redux';
import {toggleSoundBar} from '../../redux/Actions';

Sound.setCategory(PLAYBACK);

export function SongInfo() {
  const theme = useColorScheme();
  const isDarkTheme = theme === DARK;
  const [isPlaying, setPlaying] = useState(false);
  const route = useRoute();
  const dispatch = useDispatch();
  var showSoundBar = false;
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
  });

  const playPause = () => {
    if (sound.isPlaying()) {
      showSoundBar = false;
      setPlaying(false);
      sound.pause();
    } else {
      showSoundBar = true;
      setPlaying(true);
      sound.play();
    }
    const {trackName, preview, artwork, artist} = route.params.item;
    dispatch(
      toggleSoundBar({
        trackName: trackName,
        preview: preview,
        artwork: artwork,
        artist: artist,
        sound: sound,
        showSoundBar: showSoundBar,
      }),
    );
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

  useEffect(() => {
    const interval = setInterval(() => {
      sound.getCurrentTime(seconds => {
        if (seconds === 0) {
          setPlaying(false);
        }
      });
    }, 1000);
    return () => clearInterval(interval);
  });

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
              source={isPlaying ? PauseIcon : PlayIcon}
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
