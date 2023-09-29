import {StyleSheet} from 'react-native';

const TILE_SIZE = 185;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    paddingRight: 16,
  },
  image: {
    borderRadius: 6,
    width: TILE_SIZE,
    height: TILE_SIZE,
  },
  text: {
    fontWeight: '400',
  },
  subtitle: {
    color: '#757575',
  },
});

export default styles;
