import React, {useState} from 'react';
import {useQuery} from '@tanstack/react-query';
import {Text, View, SafeAreaView, FlatList} from 'react-native';
import {SearchBar} from '@rneui/themed';
import {SEARCH_DATA, HINT_SEARCH} from '../../constants/en';
import {styles} from './Search.styles';
import {SearchController} from '../../controllers/SearchController';

const Search = ({darkModeEnabled, navigation}) => {
  var searchWord = '';
  const [search, setSearch] = useState('');
  const searchController = new SearchController();
  const {data, refetch} = useQuery({
    queryKey: [SEARCH_DATA],
    enabled: false,
    queryFn: () => searchController.getSongs(searchWord),
  });
  const updateSearch = searchValue => {
    searchWord = searchValue;
    setSearch(searchValue);
    refetch();
  };

  const ItemSeparatorView = () => {
    return <View style={styles.itemSeparator} />;
  };
  const ItemView = ({item}) => {
    return (
      <Text style={styles.itemStyle} onPress={() => getItem(item)}>
        {item?.trackName}
      </Text>
    );
  };
  const getItem = item => {
    console.log(item);
    navigation.navigate('Song Info', {item: item});
  };

  const showData = () => {
    return data?.results.map(p => ({
      trackName: p.trackName,
      preview: p.previewUrl,
      artwork: p.artworkUrl100,
      artist: p.artistName,
    }));
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
          keyExtractor={(item, index) => item.key}
          ItemSeparatorComponent={ItemSeparatorView}
          renderItem={ItemView}
        />
      </View>
    </SafeAreaView>
  );
};

export default Search;
