import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {FlatList, ScrollView, Text, View} from 'react-native';
import styles from './Home.styles';
import {Row, Divider, Tile} from '../../components';
import {
  DATA,
  FOR_YOU_DATA,
  RECENTLY_ADDED_DATA,
  DIVIDER_SIZES,
} from './Constants';

const Home = () => {
  const {navigate} = useNavigation();
  const openPlayer = item => navigate('Player', item);

  return (
    <>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={styles.container}>
        <View style={styles.header}>
          {DATA.map(({title, icon}) => (
            <Row title={title} icon={icon} />
          ))}
          <Divider height={DIVIDER_SIZES.SHORT} />
          <Text style={styles.h1}>Recently Added</Text>
        </View>

        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.list}
          data={RECENTLY_ADDED_DATA}
          renderItem={({item}) => (
            <Tile
              onPress={openPlayer}
              cover={item.cover}
              title={item.song}
              subtitle={item.artist}
            />
          )}
        />

        <View style={styles.header}>
          <Divider height={DIVIDER_SIZES.TINY} />
          <Text style={styles.h1}>Today's Top Hits</Text>
        </View>

        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.list}
          data={FOR_YOU_DATA}
          renderItem={({item}) => (
            <Tile
              onPress={openPlayer}
              cover={item.cover}
              title={item.song}
              subtitle={item.artist}
            />
          )}
        />
        <Divider height={DIVIDER_SIZES.LONG} />
      </ScrollView>
    </>
  );
};

export default Home;
