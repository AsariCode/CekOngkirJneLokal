import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { useTheme } from 'react-native-paper';
import logo from '@assets/images/logo.png';
import { CustomText } from "@components";
import simpledata from "@assets/data/simpledata.json"



const SplashScreen = ({ navigation }) => {
  const { colors } = useTheme();
  const [data, setData] = useState([]);

  const filtered = () => {
    const dataToInput = simpledata || []
    // const filteredData = dataToInput.filter(item => item.KEC === "Salem");
    const filteredData = dataToInput.filter(item => item.KEC.indexOf("Bantar") > -1);
    setData(filteredData)
  }

  return (
    <View style={[styles.container, {backgroundColor: colors.primary}]}>
      {console.log("Dataaa", data)}
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
      <TouchableOpacity onPress={()=>filtered()}>
        <CustomText>PressMe</CustomText>
      </TouchableOpacity>
      {data?.map((record) => (
        <CustomText>{record.PROV} - {record.KAB} - {record.KEC} </CustomText>
      ))}

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