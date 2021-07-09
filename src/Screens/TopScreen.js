import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  Pressable,
} from 'react-native';
import UserData from '../Utils/User.json';

const UserScreen = props => {
  return (
    <View style={styles.container}>
      <ImageBackground source={{uri: UserData?.cover}} style={styles.cover}>
        <Image source={{uri: UserData?.avtar}} style={styles.avtar} />
        <Pressable style={styles.editButton}>
          <Text style={styles.buttonText}>Edit</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  cover: {
    width: '100%',
    height: 170,
    backgroundColor: 'rgba(0,0,0,0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avtar: {
    height: 70,
    width: 70,
    borderRadius: 35,
  },
  editButton: {
    backgroundColor: '#e4e6eb',
    width: '38%',
    height: 43,
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  buttonText: {
    fontFamily: 'Roboto-Medium',
    fontSize: 15,
    color: '#171717',
  },
});

export default UserScreen;
