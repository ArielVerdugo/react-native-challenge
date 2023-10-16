import React from 'react';
import {Text, View, Image, StyleSheet, Pressable} from 'react-native';
import {RewindIcon, PlayIcon} from '../../../assets/images';
import {useSelector} from 'react-redux';
import {getSoundBar} from '../../../redux/SoundBarSelector';

export const MusicPlayer = () => {
  const soundBar = useSelector(getSoundBar);
  const sound = soundBar[0]?.sound;

  const playPause = () => {
    if (sound?.isPlaying()) {
      sound?.pause();
    } else {
      sound?.play();
    }
  };

  if (soundBar[0]?.show) {
    return (
      <View style={styles.container}>
        <Image
          style={styles.songImage}
          accessibilityIgnoresInvertColors={true}
          source={{uri: `${soundBar[0].artwork}`}}
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

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    backgroundColor: 'rgba(229,228,224,255)',
    width: '100%',
    height: 50,
    bottom: 49,
  },
  songImage: {
    width: 30,
    height: 30,
    marginLeft: 10,
    marginTop: 10,
  },
  songTitle: {
    fontSize: 20,
    marginTop: 10,
  },
  itemPlayStyle: {
    width: 45,
    height: 45,
    marginTop: 5,
  },
});
