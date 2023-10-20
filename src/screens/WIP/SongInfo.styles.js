import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  textTitle: {
    fontSize: 20,
    fontWeight: '500',
    paddingTop: 5,
  },
  imageHeader: {
    height: 330,
    width: 330,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    overflow: 'hidden',
  },
  playerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
    marginTop: 15,
  },
  itemPlayStyle: {
    width: 60,
    height: 60,
  },
  itemRewindForwardStyle: {
    width: 40,
    height: 40,
    marginTop: 5,
  },
  slider: {
    width: 320,
    opacity: 1,
    height: 50,
    marginTop: 5,
  },
});
