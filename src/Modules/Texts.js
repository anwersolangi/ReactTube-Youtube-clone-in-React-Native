import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {numberFormat, numberSeperator} from '../Utils/Util';

const KText = props => {
  const {text, style, prefix, suffix} = props;
  return (
    <Text style={[styles.text, style]} {...props}>
      {prefix}
      {numberFormat(Number(text))}
      {suffix}
    </Text>
  );
};

const AmountText = props => {
  const {text, style} = props;
  return (
    <Text style={[styles.text, style]} {...props}>
      ${numberSeperator(Number(text))}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#212121',
    fontFamily: 'Roboto-Medium',
    fontSize: 15,
  },
});

export {KText, AmountText};
