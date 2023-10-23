import React, {useState} from 'react';
import {Text, View, Image, Pressable} from 'react-native';
import {PauseIcon, PlayIcon} from '../../../assets/images';
import {useSelector} from 'react-redux';
import {getSoundBarData} from '../../../redux/SoundBarSelector';
import {useNavigationState} from '@react-navigation/native';
import {styles} from './MusicPlayer.styles';
import {SONG_INFO_SCREEN} from '../../../constants/en';

export const MusicPlayer = () => {
  const soundBarData = useSelector(getSoundBarData);
  const [isPlaying, setIsPlaying] = useState(true);
  const searchedSong = soundBarData?.sound;
  const currentScreen = useNavigationState(
    state => state?.routes[0]?.state?.routes[4]?.state?.index,
  );

  const playPause = () => {
    if (searchedSong.isPlaying()) {
      setIsPlaying(false);
      searchedSong.pause();
    } else {
      setIsPlaying(true);
      searchedSong.play(success => {
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
