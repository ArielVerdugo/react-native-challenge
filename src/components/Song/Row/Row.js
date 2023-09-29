import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './Row.styles';

const OPACITY = 0.52;
const ICON_SIZE = 32;
const ICON_COLOR = '#ff1744';

const CHEVRON_ICON_SIZE = 20;
const CHEVRON_ICON_COLOR = '#cccccc';

const Row = ({title, icon}) => (
  <TouchableOpacity style={styles.container} activeOpacity={OPACITY}>
    <View style={styles.leftContainer}>
      <Icon name={icon} size={ICON_SIZE} color={ICON_COLOR} />
      <Text style={styles.text}>{title}</Text>
    </View>
    <Icon
      name="chevron-right"
      size={CHEVRON_ICON_SIZE}
      color={CHEVRON_ICON_COLOR}
    />
  </TouchableOpacity>
);

export default Row;
