import React, { useEffect } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { useTheme } from 'react-native-paper';
import logo from '@assets/images/logo.png'


const SplashScreen = ({ navigation }) => {
    const theme = useTheme();

//   useEffect(() => {
//     setTimeout(() => {
//       navigation.replace('HalamanBerikutnya');
//     }, 3000);
//   }, []);

  return (
    <View style={[styles.container, {backgroundColor: theme.colors.primary}]}>
      <Image
        source={logo}
        style={styles.logo}
      />
      <Text>Imam</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 200,
  },
});

export default SplashScreen;