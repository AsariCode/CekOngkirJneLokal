import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';

const CustomText = (props) => {
  const { variant, children, style, bold, color } = props;
  
  const styles = StyleSheet.create({
    text: {
      fontSize: 15,
      fontFamily: 'OpenSans-Regular',
      color: color,
      fontWeight: bold ? 'bold' : 'normal'
    },
    title: {
      fontSize: 24,
      fontFamily: 'OpenSans-Bold',
      color: color,
      fontWeight: bold ? 'bold' : 'normal',
    },
    subtitle: {
      fontSize: 20,
      fontFamily: 'OpenSans-SemiBold',
      fontWeight: bold ? 'bold' : 'normal',
      color: color,
    },
    subtitle2: {
      fontSize: 18,
      fontFamily: 'OpenSans-SemiBold',
      fontWeight: bold ? 'bold' : 'normal',
      color: color,
    },
  });

  const getTextStyles = () => {
    switch (variant) {
      case 'title':
        return styles.title;
      case 'subtitle':
        return styles.subtitle;
      case 'subtitle2':
        return styles.subtitle2;
      default:
        return styles.text;
    }
  };

  return (
    <Text style={[getTextStyles(), style]}>{children}</Text>
  );
};

export default CustomText;