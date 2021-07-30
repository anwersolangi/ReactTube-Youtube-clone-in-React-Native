import React from 'react';
import {Pressable, Text, StyleSheet, ActivityIndicator} from 'react-native';

const Button = props => {
  const {title, onPress, styleProps, textProps, textStyle, isLoading} = props;
  return (
    <Pressable
      style={[styles.editButton, styleProps]}
      onPress={onPress}
      {...props}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <Text style={[styles.buttonText, textStyle]} {...textProps}>
          {title}
        </Text>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  editButton: {
    width: '38%',
    height: 43,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    borderWidth: 1.7,
    borderColor: '#04abf2',
    alignSelf: 'center',
  },
  buttonText: {
    fontFamily: 'Roboto-Medium',
    fontSize: 15,
    color: '#04abf2',
  },
});

export default Button;
