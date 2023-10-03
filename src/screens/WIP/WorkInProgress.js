import React, {useState} from 'react';
import {useQuery} from '@tanstack/react-query';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {SearchBar} from '@rneui/themed';

const WorkInProgress = ({darkModeEnabled}) => {
  const [search, setSearch] = useState('');
  const [enabled, setEnabled] = useState(false);
  const {data} = useQuery({
    queryKey: ['repoData', search],
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
    return (
      <View style={{height: 0.5, width: '100%', backgroundColor: '#C8C8C8'}} />
    );
  };
  const ItemView = ({item}) => {
    if (item === undefined) {
    } else {
      return (
        <Text style={styles.itemStyle} onPress={() => getItem(item)}>
          {item}
        </Text>
      );
    }
  };
  const getItem = item => {
    //todo
  };

  const showData = () => {
    if (data === undefined) {
      return [];
    } else {
      return data.results.map(p => p.trackName);
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View>
        <SearchBar
          placeholder="Buscar..."
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

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  itemStyle: {
    padding: 10,
  },
});

export default WorkInProgress;
