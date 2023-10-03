import React from 'react';
import {TouchableOpacity, Text, View, useColorScheme} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import stylesDark from './RowDark.styles';
import styles from './Row.styles';
import {DARK} from '../../../constants/en';

const OPACITY = 0.52;
const ICON_SIZE = 32;
const ICON_COLOR = '#ff1744';

const CHEVRON_ICON_SIZE = 20;
const CHEVRON_ICON_COLOR = '#cccccc';

const Row = ({title, icon}) => {
  const theme = useColorScheme();
  const isDarkTheme = theme === DARK;
  return (
    <TouchableOpacity style={styles.container} activeOpacity={OPACITY}>
      <View style={styles.leftContainer}>
        <Icon name={icon} size={ICON_SIZE} color={ICON_COLOR} />
        <Text style={isDarkTheme ? stylesDark.text : styles.text}>{title}</Text>
      </View>
      <Icon
        name="chevron-right"
        size={CHEVRON_ICON_SIZE}
        color={CHEVRON_ICON_COLOR}
      />
    </TouchableOpacity>
  );
};

export default Row;
