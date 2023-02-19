import React from 'react';
import {
  SafeAreaView, Text, View,
} from 'react-native';
import { MD3LightTheme as DefaultTheme, Provider as PaperProvider, useTheme } from 'react-native-paper';
import NavigationRouter from './app/NavigationRouter';


const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#d90b14',
    secondary: '#7c1416',
    acentColor: '#da4c4d',
    brown50: '#c6aaa2',
    brown10: '#fdf5ed'
  },
};

function App(): JSX.Element {
  return (
    <PaperProvider theme={theme}>
      <SafeAreaView style={{flex: 1}}>
        <NavigationRouter />
      </SafeAreaView>
    </PaperProvider>
  );
}
export default App;
