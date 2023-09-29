import React from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import Divider from '../../Divider';
import styles from './Tile.styles';

const TILE_OPACITY = 0.7;

const Tile = ({title, subtitle, cover, onPress}) => {
  const handleOnPress = () => onPress({title, subtitle, cover});

  return (
    <TouchableOpacity
      activeOpacity={TILE_OPACITY}
      style={styles.container}
      onPress={handleOnPress}>
      <Image source={cover} style={styles.image} />
      <Divider height={6} />
      <Text>{title}</Text>
      <Divider height={2} />
      <Text style={[styles.text, styles.subtitle]}>{subtitle}</Text>
    </TouchableOpacity>
  );
};

export default Tile;
