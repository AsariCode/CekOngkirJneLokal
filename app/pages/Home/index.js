import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import banner from '@assets/images/banner.jpeg';
import ongkir from '@assets/images/send-money.png';
import upload from '@assets/images/cloud-computing.png';
import { CustomText } from '@components';
import { useTheme } from 'react-native-paper';

const Home = ({navigation}) => {
  const {colors} = useTheme()
  return (
    <View style={styles.container}>
      <View style={[styles.bannerContainer, styles.shadow]}>
        <Image
          source={banner}
          style={styles.bannerImage}
        />
      </View>
      <View style={styles.menuContainer}>
      <CustomText color={colors.white} variant="subtitle2" bold style={{marginBottom: 24, marginTop: 16}}>
        CEK ONGKIR VIP CUSTOMER { '\n' }JNE KAB. WONOSOBO
      </CustomText>
        {/* <TouchableOpacity style={[styles.menuItem, styles.shadow]} 
          onPress={()=>navigation.navigate('UploadData')}>
          <Image
            source={upload}
            style={styles.icon}
          />
          <CustomText style={styles.menuText}>Upload Data</CustomText>
        </TouchableOpacity> */}
        <TouchableOpacity style={[styles.menuItem, styles.shadow]}
          onPress={()=>navigation.navigate('CekOngkir')}>

          <Image
            source={ongkir}
            style={styles.icon}
          />
          <CustomText style={styles.menuText}>Cek Ongkir</CustomText>
        </TouchableOpacity>

        <CustomText style={styles.version} color={colors.white}>Versi: 0.0.1</CustomText>
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
    marginTop: 16, 
    // textAlign: 'center',
    width: '100%'
  }
});

export default Home;