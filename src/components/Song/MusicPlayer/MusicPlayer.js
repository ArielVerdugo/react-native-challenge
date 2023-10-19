import React, {useState, useEffect} from 'react';
import {Text, View, Image, Pressable} from 'react-native';
import {PauseIcon, PlayIcon} from '../../../assets/images';
import {useSelector} from 'react-redux';
import {getSoundBar} from '../../../redux/SoundBarSelector';
import {useNavigationState} from '@react-navigation/native';
import {styles} from './MusicPlayer.styles';

export const MusicPlayer = () => {
  const soundBar = useSelector(getSoundBar);
  const [isPlaying, setIsPlaying] = useState(true);
  const sound = soundBar[0]?.sound;
  var index = useNavigationState(
    state => state?.routes[0]?.state?.routes[4]?.state?.index,
  );

  const playPause = () => {
    if (sound.isPlaying()) {
      setIsPlaying(false);
      sound.pause();
    } else {
      setIsPlaying(true);
      sound.play();
    }
  };

  if (sound?.getDuration === 0) {
    setIsPlaying(false);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      sound?.getCurrentTime(seconds => {
        if (seconds === 0) {
          setIsPlaying(false);
        }
      });
    }, 1000);
    return () => clearInterval(interval);
  });

  if (soundBar[0]?.show && index !== 1) {
    return (
      <View style={styles.container}>
        <Image
          style={styles.songImage}
          accessibilityIgnoresInvertColors={true}
          source={{uri: soundBar[0].artwork}}
        />
        <Text style={styles.songTitle}>
          {soundBar[0].trackName + ' - ' + soundBar[0].artist}
        </Text>
        <Pressable onPress={playPause}>
          <Image
            style={styles.itemPlayStyle}
            accessibilityIgnoresInvertColors={true}
            source={isPlaying ? PauseIcon : PlayIcon}
          />
        </Pressable>
      </View>
    );
  }
};
