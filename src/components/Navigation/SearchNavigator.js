import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles, {ICON_SIZE, INACTIVE_COLOR, PRIMARY_COLOR} from './styles';
import Search from '../../screens/WIP/Search';
import {SongInfo} from '../../screens/WIP/SongInfo';

const Stack = createNativeStackNavigator();

export function SearchNavigator() {
  const SearchIcon = ({focused}) => (
    <Icon
      name="magnify"
      size={ICON_SIZE}
      color={focused ? PRIMARY_COLOR : INACTIVE_COLOR}
    />
  );

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: SearchIcon,
          title: 'Search',
        }}
      />
      <Stack.Screen
        component={SongInfo}
        name="Song Info"
        options={{
          title: 'Song Info',
          headerShown: false,
          animationTypeForReplace: 'push',
          animation: 'slide_from_bottom',
        }}
      />
    </Stack.Navigator>
  );
}
