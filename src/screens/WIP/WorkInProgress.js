import React, {useState} from 'react';
import {useQuery} from '@tanstack/react-query';
import {Text, View, SafeAreaView, FlatList} from 'react-native';
import {SearchBar} from '@rneui/themed';
import {SEARCH_DATA, HINT_SEARCH} from '../../constants/en';
import {styles} from '../WIP/WrokInProgress.styles';

const WorkInProgress = ({darkModeEnabled, navigation}) => {
  const [search, setSearch] = useState('');
  const [enabled, setEnabled] = useState(false);
  const {data} = useQuery({
    queryKey: [{SEARCH_DATA}, search],
    enabled: enabled,
    queryFn: () =>
      fetch(
        `https://itunes.apple.com/search?term=${search.replace(
          /\s/g,
          '+',
        )}&entity=song&attribute=artistTerm&attribute=songTerm&attribute=albumTerm&media=music`,
      ).then(res => res.json()),
  });
  const updateSearch = searchValue => {
    setEnabled(true);
    setSearch(searchValue);
  };

  const ItemSeparatorView = () => {
    return <View style={styles.itemSeparator} />;
  };
  const ItemView = ({item}) => {
    if (item === undefined) {
    } else {
      return (
        <Text style={styles.itemStyle} onPress={() => getItem(item)}>
          {item.trackName}
        </Text>
      );
    }
  };
  const getItem = item => {
    navigation.navigate('Song Info', {item: item});
  };

  const showData = () => {
    if (data === undefined) {
      return [];
    } else {
      return data.results.map(p => ({
        trackName: p.trackName,
        preview: p.previewUrl,
        artwork: p.artworkUrl100,
        artist: p.artistName,
      }));
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <SearchBar
          placeholder={HINT_SEARCH}
          onChangeText={updateSearch}
          value={search}
        />
        <FlatList
          data={showData()}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={ItemSeparatorView}
          renderItem={ItemView}
        />
      </View>
    </SafeAreaView>
  );
};

export default WorkInProgress;
