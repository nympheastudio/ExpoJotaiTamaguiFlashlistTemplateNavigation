// src/navigator/Navigator.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { useAtom } from 'jotai';
import screens from '../screensConfig';
import { primaryColorAtom, darkModeAtom } from '../store/settingsAtoms';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { TamaguiProvider, Theme } from 'tamagui';
import config from '../../tamagui.config';
import { Ionicons } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const createStack = (screenName) => {
  return ({ navigation }) => {
    const [primaryColor] = useAtom(primaryColorAtom);
    const [isDarkMode] = useAtom(darkModeAtom);

    return (
      <Stack.Navigator
        initialRouteName={screenName}
        screenOptions={{
          headerStyle: {
            backgroundColor: primaryColor,
          },
          headerTintColor: isDarkMode ? '#fff' : '#000',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.openDrawer()} style={{ marginLeft: 10 }}>
              <Ionicons name="menu" size={24} color={isDarkMode ? '#fff' : '#000'} />
            </TouchableOpacity>
          ),
        }}
      >
        <Stack.Screen name={screenName} component={screens[screenName]} />
      </Stack.Navigator>
    );
  };
};

const Navigator = () => {
  const [primaryColor] = useAtom(primaryColorAtom);
  const [isDarkMode] = useAtom(darkModeAtom);

  const MyTheme = {
    dark: isDarkMode,
    colors: {
      primary: primaryColor,
      background: isDarkMode ? '#000' : '#fff',
      card: isDarkMode ? '#000' : '#fff',
      text: isDarkMode ? '#fff' : '#000',
      border: isDarkMode ? '#000' : '#fff',
    },
  };

  return (
    <TamaguiProvider config={config}>
      <Theme name={isDarkMode ? 'dark' : 'light'}>
        <View style={styles.container}>
          <NavigationContainer theme={MyTheme}>
            <Drawer.Navigator
              screenOptions={{
                headerShown: false, // Désactiver l'en-tête du Drawer.Navigator
              }}
            >
              <Drawer.Screen name="Home" component={createStack('Home')} />
              <Drawer.Screen name="Example" component={createStack('Example')} />
              <Drawer.Screen name="Profile" component={createStack('Profile')} />
              <Drawer.Screen name="Data" component={createStack('Data')} />
              <Drawer.Screen name="Settings" component={createStack('Settings')} />
            </Drawer.Navigator>
          </NavigationContainer>
        </View>
      </Theme>
    </TamaguiProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',  // Assure un arrière-plan blanc
  },
});

export default Navigator;
