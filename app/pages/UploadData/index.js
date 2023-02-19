import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import banner from '@assets/images/banner.jpeg';
import ongkir from '@assets/images/send-money.png';
import upload from '@assets/images/cloud-computing.png';
import { CustomText } from '@components';
import { useTheme } from 'react-native-paper';

const Home = () => {
  const {colors} = useTheme()
  return (
    <View style={styles.container}>
      <View style={styles.menuContainer}>
      <CustomText color={colors.white} variant="subtitle2" bold style={{marginBottom: 24, marginTop: 16}}>
        UPLOAD FILE DATA
      </CustomText>
        <TouchableOpacity style={[styles.menuItem, styles.shadow]}>
          <Image
            source={upload}
            style={styles.icon}
          />
          <CustomText style={styles.menuText}>File</CustomText>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.menuItem2, styles.shadow]}>
          <CustomText style={styles.menuText}>Upload</CustomText>
        </TouchableOpacity>
        <View>
        <CustomText style={{color: colors.white}} bold>Info</CustomText>
        <CustomText style={{color: colors.white}}>Tipe file: Ms Excell (.xlsx)</CustomText>
        <CustomText style={{color: colors.white}}>Kolom: ['Prov.', 'Kab.', 'Kec.', 'Kel.', 'Kode Pos', 'Ongkir']</CustomText>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d90b14',
  },
  bannerContainer: {
    height: 200,
    marginBottom: 20,
    overflow: 'hidden',
    paddingBottom: 2
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 2, // for Android
  },
  bannerImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  menuContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  menuItem: {
    width: '100%',
    height: 120,
    backgroundColor: '#f0f0f0',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  menuItem2: {
    width: '100%',
    height: 60,
    backgroundColor: '#f0f0f0',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  menuText: {
    fontWeight: 'bold',
    color: '#d90b14',
  },
  icon: {
    width: 50,
    height: 50,
    marginBottom: 10
  },
  version: {
    marginTop: 28, 
    // textAlign: 'center',
    width: '100%'
  }
});

export default Home;