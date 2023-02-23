import React from 'react';
import {
  View, 
} from 'react-native';
import { MD3LightTheme as DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import NavigationRouter from './app/NavigationRouter';


const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#d90b14',
    secondary: '#7c1416',
    acentColor: '#da4c4d',
    brown50: '#c6aaa2',
    brown10: '#fdf5ed',
    white: '#fff',
    charcoal: '#101010',
    black: '#000',
    lightGray: "#F8F8F8",
    lightGray2: "#D3D3D3"
  },
};

function App(): JSX.Element {
  return (
    <PaperProvider theme={theme}>
      <View style={{flex: 1}}>
        <NavigationRouter />
      </View>
    </PaperProvider>
  );
}
export default App;
