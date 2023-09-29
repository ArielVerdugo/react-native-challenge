import {StyleSheet} from 'react-native';

const ICON_SIZE = 26;

const INACTIVE_COLOR = '#757575';
const PRIMARY_COLOR = '#ff1744';

const BLUR_AMOUNT = 15;

const styles = StyleSheet.create({
  blur: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  tabBar: {
    position: 'absolute',
  },
  tabBarLabel: {
    fontWeight: '400',
  },
  headerRight: {
    fontSize: 18,
    fontWeight: '400',
    color: '#ff1744',
  },
});

export {ICON_SIZE, INACTIVE_COLOR, PRIMARY_COLOR, BLUR_AMOUNT};
export default styles;
