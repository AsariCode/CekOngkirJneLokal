
import React, { useState } from 'react';
import { Modal, StyleSheet, TextInput, View, Text, FlatList, TouchableOpacity } from 'react-native';

import { CustomText } from '@components';
import { useTheme } from 'react-native-paper';
import simpledata from "@assets/data/simpledata.json";
import { black } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';


const CekOngkir = () => {
  const { colors } = useTheme()
  const data = simpledata || []
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState(null);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);

  const handleInputChange = (text) => {
    setQuery(text);
    const filteredData = data.filter(item =>
      item.search.toLowerCase().indexOf(text.toLowerCase()) > -1
    );
    setFilteredSuggestions(filteredData);
  };

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => {
        setSelected(item)
        setQuery(item.search);
        setFilteredSuggestions([]);
      }}
    >
      <Text style={styles.itemText}>{item.search}</Text>
    </TouchableOpacity>
  );

  console.log("filteredSuggestions", filteredSuggestions)
  return (
    <View style={styles.container}>
      <View style={styles.menuContainer}>
        {/* <CustomText color={colors.charcoal} variant="subtitle2" bold style={{ marginBottom: 24, marginTop: 16 }}>
          CEK ONGKIR
        </CustomText> */}
        <View style={{marginTop: 24, marginBottom: 16}}>
          <CustomText style={{color: 'black', marginBottom: 4}} bold>Kota Asal</CustomText>
          <TextInput
            placeholder="Kota Asal"
            editable={false}
            value={"KOTA WONOSOBO"}
            style={styles.inputDisabled}
          />
          <CustomText style={{color: 'black', marginBottom: 4}} bold>Kota Tujuan (cari kecamatan)</CustomText>
          <TextInput
            style={styles.input}
            onChangeText={handleInputChange}
            value={query}
            placeholder="Kota Tujuan"
          />
          {filteredSuggestions.length > 0 &&
            <FlatList
              style={{
                backgroundColor: 'white',
                minHeight: 200,
                marginBottom: 16,
                borderWidth: 1,
                borderRadius: 8,
                borderColor: 'gray'
              }}
              data={filteredSuggestions}
              renderItem={renderItem}
            // keyExtractor={(item) => item.kec}
            />
          }
        </View>
        <View>
          <CustomText color={colors.charcoal}  bold>Hasil Pencarian:</CustomText>
          {selected ?
            <>
              {/* <CustomText color={colors.charcoal} >Kota Asal: Kab. Wonosobo  </CustomText> */}
              <CustomText color={colors.charcoal} style={{marginTop: 4}} >Tujuan: Kec. {selected.KEC} - Kab. {selected.KAB} - Prov. {selected.PROV} - {selected.KODE_POS} </CustomText>
              <CustomText color={colors.charcoal}  style={{marginTop: 4}} >Service: REG </CustomText>
              <CustomText color={colors.charcoal}  style={{marginTop: 4}} >Estimasi: {selected.REG1}{selected.REG2 && ` - ${selected.REG2}`} hari </CustomText>
              <CustomText color={colors.primary} style={{marginTop: 8}}  bold>Ongkir: {numberWithCommas(selected.ONGKIR)}  </CustomText>
            </>
            :
            <>
              <CustomText color={colors.charcoal}  >Belum ada hasil pencarian</CustomText>
            </>
          }
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
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
  input: {
    padding: 10, 
    marginBottom: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'gray',
    color: 'black'
  },
  inputDisabled: {
    padding: 10, 
    marginBottom: 24,
    backgroundColor: "#F8F8F8",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'gray',
    color: "#d90b14"
  },
  modal: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    margin: 40,
    flex: 1,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    color: 'black'
  },
  itemText: {
    fontSize: 16,
    color: 'black'
  },
});

export default CekOngkir;