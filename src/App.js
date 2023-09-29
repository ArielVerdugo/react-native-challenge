/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StatusBar, LogBox} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import {MainStack} from './components/Navigation/AppNavigation';

const App = () => {

  LogBox.ignoreAllLogs();

  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <MainStack />
    </NavigationContainer>
  );
};

export default App;
