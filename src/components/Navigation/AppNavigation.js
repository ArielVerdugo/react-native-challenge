import React from 'react';
import {Platform, Text} from 'react-native';
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
import WorkInProgress from '../../screens/WIP/WorkInProgress';

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
const MainStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={BottomTabNavigator}
      options={{
        headerRight: () => <Text style={styles.headerRight}>Edit</Text>,
        headerLargeTitle: true,
        headerLargeTitleShadowVisible: false,
      }}
    />
    <Stack.Screen
      name="Player"
      component={Player}
      options={{
        animation: 'slide_from_bottom',
        headerShown: false,
      }}
    />
    <Stack.Screen name="WIP" component={WorkInProgress} />
  </Stack.Navigator>
);

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Library"
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: styles.tabBarLabel,
        tabBarActiveTintColor: PRIMARY_COLOR,
        tabBarInactiveTintColor: INACTIVE_COLOR,
        tabBarStyle: styles.tabBar,
        ...(IS_IOS && {
          tabBarBackground: () => (
            <BlurView
              blurType="chromeMaterialLight"
              style={styles.blur}
              blurAmount={BLUR_AMOUNT}
              reducedTransparencyFallbackColor="white"
            />
          ),
        }),
      }}>
      <Tab.Screen
        name="ListenNow"
        component={WorkInProgress}
        options={{
          tabBarIcon: PlayNowIcon,
          title: 'Listen Now',
        }}
      />
      <Tab.Screen
        name="Explore"
        component={WorkInProgress}
        options={{
          tabBarIcon: ExploreIcon,
          title: 'Explore',
        }}
      />
      <Tab.Screen
        name="Radio"
        component={WorkInProgress}
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
      <Tab.Screen
        name="Search"
        component={WorkInProgress}
        options={{
          tabBarIcon: SearchIcon,
          title: 'Search',
        }}
      />
    </Tab.Navigator>
  );
};

export {MainStack};
