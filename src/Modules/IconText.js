import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ModalOption = ({icon, text, onPress, iconColor}) => {
  return (
    <Pressable style={styles.row} onPress={onPress}>
      <Icon name={icon} color={iconColor ? iconColor : '#202020'} size={26} />
      <Text style={styles.visibilityText}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  visibilityText: {
    fontFamily: 'Roboto-Medium',
    fontSize: 15,
    marginHorizontal: 6,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
    paddingHorizontal: 10,
  },
});

export default ModalOption;
