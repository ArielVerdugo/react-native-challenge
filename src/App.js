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
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {MainStack} from './components/Navigation/AppNavigation';

const App = () => {

  LogBox.ignoreAllLogs();
  const queryClient = new QueryClient();

  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
        <MainStack />
      </QueryClientProvider>
    </NavigationContainer>
  );
};

export default App;
