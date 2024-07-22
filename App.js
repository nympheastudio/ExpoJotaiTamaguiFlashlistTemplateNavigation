// App.js
import 'react-native-match-media-polyfill';
import React from 'react';
import { Provider as JotaiProvider, useAtom } from 'jotai';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TamaguiProvider, Theme } from 'tamagui';
import config from './tamagui.config';
import Navigator from './src/navigator/Navigator';
import { darkModeAtom } from './src/store/settingsAtoms';
import { StyleSheet, View } from 'react-native';

const queryClient = new QueryClient();

const AppContent = () => {
  const [isDarkMode] = useAtom(darkModeAtom);

  return (
    <Theme name={isDarkMode ? 'dark' : 'light'}>
      <View style={[styles.container, { backgroundColor: isDarkMode ? '#000' : '#fff' }]}>
        <Navigator />
      </View>
    </Theme>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <QueryClientProvider client={queryClient}>
        <JotaiProvider>
          <TamaguiProvider config={config}>
            <AppContent />
          </TamaguiProvider>
        </JotaiProvider>
      </QueryClientProvider>
    </GestureHandlerRootView>
  );
}
