import React from 'react';
import {ImageBackground, StatusBar} from 'react-native';
import {BlurView} from '@react-native-community/blur';
import styles from './Player.styles';
import {useRoute} from '@react-navigation/native';
import WorkInProgress from '../WIP/WorkInProgress';

const Player = () => {
  const {
    params: {cover},
  } = useRoute();
  return (
    <ImageBackground source={cover} style={styles.background}>
      <StatusBar barStyle="light-content" />
      <BlurView
        style={styles.blur}
        blurType="chromeMaterialDark"
        blurAmount={32}>
        <WorkInProgress darkModeEnabled />
      </BlurView>
    </ImageBackground>
  );
};

export default Player;
