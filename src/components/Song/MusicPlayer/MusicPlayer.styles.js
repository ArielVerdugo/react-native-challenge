import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    backgroundColor: 'rgb(209, 17, 17)',
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
    fontSize: 16,
    marginTop: 13,
    color: 'white',
    fontWeight: 'bold',
  },
  songArtist: {
    fontSize: 20,
    marginTop: 10,
    color: 'white',
  },
  itemPlayStyle: {
    width: 45,
    height: 45,
    marginTop: 5,
  },
});
