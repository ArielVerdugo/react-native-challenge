/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {StatusBar, LogBox} from 'react-native';
import {
  NavigationContainer,
  createNavigationContainerRef,
} from '@react-navigation/native';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {MainStack} from './components/Navigation/AppNavigation';
import {Provider} from 'react-redux';
import {Store} from './redux/Store';

const App = () => {

  LogBox.ignoreAllLogs();
  const queryClient = new QueryClient();

  const navigationRef = createNavigationContainerRef();
  const [routeName, setRouteName] = useState();

  return (
    <Provider store={Store}>
      <NavigationContainer
        ref={navigationRef}
        onReady={() => {
          setRouteName(navigationRef.getCurrentRoute().name);
        }}
        onStateChange={async () => {
          const currentRouteName = navigationRef.getCurrentRoute().name;
          setRouteName(currentRouteName);
        }}>
        <QueryClientProvider client={queryClient}>
          <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
          <MainStack routeName={routeName} />
        </QueryClientProvider>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
