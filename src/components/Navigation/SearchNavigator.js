import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import { NAVIGATION } from '@/constants';
import { Home, MovieDetails } from '@/screens';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles, {ICON_SIZE, INACTIVE_COLOR, PRIMARY_COLOR} from './styles';
import WorkInProgress from '../../screens/WIP/WorkInProgress';
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
        name={'Search'}
        component={WorkInProgress}
        options={{
          tabBarIcon: SearchIcon,
          title: 'Search',
        }}
      />
      <Stack.Screen
        component={SongInfo}
        name={'Song Info'}
        options={{title: 'Song Info'}}
      />
    </Stack.Navigator>
  );
}
