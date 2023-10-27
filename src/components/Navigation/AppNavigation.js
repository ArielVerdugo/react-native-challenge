import React, {useState} from 'react';
import {Platform, Text, useColorScheme} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../../screens/Home/Home';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {BlurView} from '@react-native-community/blur';
import styles, {
  BLUR_AMOUNT,
  ICON_SIZE,
  INACTIVE_COLOR,
  PRIMARY_COLOR,
} from './styles';
import Player from '../../screens/Player/Player';
import Search from '../../screens/WIP/Search';
import {SearchNavigator} from './SearchNavigator';
import {DARK} from '../../constants/en';
import {MusicPlayer} from '../Song/MusicPlayer/MusicPlayer';

const IS_IOS = Platform.OS === 'ios';

const PlayNowIcon = ({focused}) => (
  <Icon
    name="play-circle"
    size={ICON_SIZE}
    color={focused ? PRIMARY_COLOR : INACTIVE_COLOR}
  />
);

const ExploreIcon = ({focused}) => (
  <Icon
    name="compass"
    size={ICON_SIZE}
    color={focused ? PRIMARY_COLOR : INACTIVE_COLOR}
  />
);

const RadioIcon = ({focused}) => (
  <Icon
    name="radio-tower"
    size={ICON_SIZE}
    color={focused ? PRIMARY_COLOR : INACTIVE_COLOR}
  />
);

const LibraryIcon = ({focused}) => (
  <Icon
    name="music-box-multiple"
    size={ICON_SIZE}
    color={focused ? PRIMARY_COLOR : INACTIVE_COLOR}
  />
);

const SearchIcon = ({focused}) => (
  <Icon
    name="magnify"
    size={ICON_SIZE}
    color={focused ? PRIMARY_COLOR : INACTIVE_COLOR}
  />
);

const Stack = createNativeStackNavigator();

const MainStack = props => {
  const theme = useColorScheme();
  const isDarkTheme = theme === DARK;
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        options={{
          headerRight: () => <Text style={styles.headerRight}>Edit</Text>,
          headerLargeTitle: true,
          headerLargeTitleShadowVisible: false,
          headerStyle: {
            backgroundColor: isDarkTheme ? '#212529' : 'white',
          },
          headerTitleStyle: {
            color: isDarkTheme ? 'white' : '#212529',
          },
        }}>
        {() => <BottomTabNavigator {...props} />}
      </Stack.Screen>
      <Stack.Screen
        name="Player"
        component={Player}
        options={{
          animation: 'slide_from_bottom',
          headerShown: false,
        }}
      />
      <Stack.Screen name="WIP" component={Search} />
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

const BottomTabNavigator = route => {
  const theme = useColorScheme();
  const isDarkTheme = theme === DARK;
  const [song, setSong] = useState();

  return (
    <>
      <Tab.Navigator
        initialRouteName="Library"
        screenOptions={{
          headerShown: true,
          tabBarLabelStyle: styles.tabBarLabel,
          tabBarActiveTintColor: PRIMARY_COLOR,
          tabBarInactiveTintColor: INACTIVE_COLOR,
          tabBarStyle: isDarkTheme === true ? styles.tabBarDark : styles.tabBar,
        }}>
        <Tab.Screen
          name="ListenNow"
          component={Search}
          options={{
            tabBarIcon: PlayNowIcon,
            title: 'Listen Now',
          }}
        />
        <Tab.Screen
          name="Explore"
          component={Search}
          options={{
            tabBarIcon: ExploreIcon,
            title: 'Explore',
          }}
        />
        <Tab.Screen
          name="Radio"
          component={Search}
          options={{
            tabBarIcon: RadioIcon,
            title: 'Radio',
          }}
        />
        <Tab.Screen
          name="Library"
          component={Home}
          options={{
            tabBarIcon: LibraryIcon,
            title: 'Library',
          }}
        />
        <Tab.Screen name="Search">
          {() => <SearchNavigator setSong={setSong} />}
        </Tab.Screen>
      </Tab.Navigator>
      <MusicPlayer route={route} song={song} />
    </>
  );
};

export {MainStack};
