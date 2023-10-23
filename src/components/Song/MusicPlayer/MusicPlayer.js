import React, {useState, useEffect} from 'react';
import {Text, View, Image, Pressable} from 'react-native';
import {PauseIcon, PlayIcon} from '../../../assets/images';
import {useSelector} from 'react-redux';
import {getSoundBarData} from '../../../redux/SoundBarSelector';
import {useNavigationState} from '@react-navigation/native';
import {styles} from './MusicPlayer.styles';
import {SONG_INFO_SCREEN, ZERO_SECONDS} from '../../../constants/en';

export const MusicPlayer = () => {
  const soundBarData = useSelector(getSoundBarData);
  const [isPlaying, setIsPlaying] = useState(true);
  const songToPlay = soundBarData?.sound;
  const currentScreen = useNavigationState(
    state => state?.routes[0]?.state?.routes[4]?.state?.index,
  );

  const playPause = () => {
    if (songToPlay.isPlaying()) {
      setIsPlaying(false);
      songToPlay.pause();
    } else {
      setIsPlaying(true);
      songToPlay.play(success => {
        if (success) {
          setIsPlaying(false);
        }
      });
    }
  };

  if (soundBarData?.showSoundBar && currentScreen !== SONG_INFO_SCREEN) {
    return (
      <View style={styles.container}>
        <Image
          style={styles.songImage}
          accessibilityIgnoresInvertColors={true}
          source={{uri: soundBarData.artwork}}
        />
        <Text style={styles.songTitle}>
          {soundBarData.trackName + ' - ' + soundBarData.artist}
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
