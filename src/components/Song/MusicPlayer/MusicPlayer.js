import React from 'react';
import {Text, View, Image, Pressable} from 'react-native';
import {RewindIcon, PlayIcon} from '../../../assets/images';
import {useSelector} from 'react-redux';
import {getSoundBar} from '../../../redux/SoundBarSelector';
import {useNavigationState} from '@react-navigation/native';
import {styles} from './MusicPlayer.styles';

export const MusicPlayer = () => {
  const soundBar = useSelector(getSoundBar);
  const sound = soundBar[0]?.sound;
  var index = useNavigationState(
    state => state?.routes[0]?.state?.routes[4]?.state?.index,
  );

  const playPause = () => {
    sound.isPlaying() ? sound.pause() : sound.play();
  };

  if (soundBar[0]?.show && index !== 1) {
    return (
      <View style={styles.container}>
        <Image
          style={styles.songImage}
          accessibilityIgnoresInvertColors={true}
          source={{uri: soundBar[0].artwork}}
        />
        <Text style={styles.songTitle}>{soundBar[0].trackName}</Text>
        <Pressable onPress={playPause}>
          <Image
            style={styles.itemPlayStyle}
            accessibilityIgnoresInvertColors={true}
            source={PlayIcon}
          />
        </Pressable>
      </View>
    );
  }
};
