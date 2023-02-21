// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {SplashScreen, Home, CekOngkir} from "./pages";

const Stack = createNativeStackNavigator();

function NavigationRouter() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="SplashScreen" 
          component={SplashScreen} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Home" 
          component={Home} 
          options={{ headerShown: false }}
        />
        {/* <Stack.Screen 
          name="UploadData" 
          component={UploadData} 
          options={{ headerShown: false }}
        /> */}
         <Stack.Screen 
          name="CekOngkir" 
          component={CekOngkir} 
          options={{ 
            title: 'Cek Ongkir', 
            headerStyle: {
              // backgroundColor: '#d90b14'
            },
            headerTitleStyle: {
              // color: 'white'
            }
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default NavigationRouter;