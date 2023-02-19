import React, { useEffect } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { useTheme } from 'react-native-paper';
import logo from '@assets/images/logo.png';
import { CustomText } from "@components";
import realm from "@database"


const SplashScreen = ({ navigation }) => {
  const { colors } = useTheme();

  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 1000);
  }, []);

  return (
    <View style={[styles.container, {backgroundColor: colors.primary}]}>
      <Image
        source={logo}
        style={styles.logo}
      />
      <CustomText color={colors.white} variant="title" bold style={{marginBottom: 8, marginTop: 16}}>
        CEK ONGKIR KHUSUS OLSHOP 
      </CustomText>
      <CustomText color={colors.white} variant="subtitle2" bold>
        JNE KAB. WONOSOBO
      </CustomText>
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