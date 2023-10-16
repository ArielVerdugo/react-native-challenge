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
import {Provider} from 'react-redux';
import {Store} from './redux/Store';

const App = () => {

  LogBox.ignoreAllLogs();
  const queryClient = new QueryClient();

  return (
    <Provider store={Store}>
      <NavigationContainer>
        <QueryClientProvider client={queryClient}>
          <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
          <MainStack />
        </QueryClientProvider>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
