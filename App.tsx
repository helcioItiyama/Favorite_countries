import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';

import { useFonts, PatuaOne_400Regular } from '@expo-google-fonts/patua-one';

import ExpoLoading from 'expo-app-loading';
import theme from './src/global/styles/theme';
import { Route } from './src/routes/Route';

const App = () => {
  const [fontsLoaded] = useFonts({
    PatuaOne_400Regular,
  });

  if (!fontsLoaded) {
    return <ExpoLoading />;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ThemeProvider theme={theme}>
        <StatusBar backgroundColor={theme.colors.superDark} />
        <Route />
      </ThemeProvider>
    </SafeAreaView>
  );
};

export default App;
