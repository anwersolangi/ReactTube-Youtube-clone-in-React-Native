import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Pressable,
} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/Ionicons';
import {BottomModal, Button} from '../Modules';
import {heightPercentageToDP, widthPercentageToDP} from '../Utils/DpToPixel';
import {Input} from './Login';

const Login = props => {
  const [isSecure, setIsSecure] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [image, setImage] = useState(null);

  const options = {
    mediaType: 'photo',
    maxWidth: 480,
    maxHeight: 480,
  };

  const pickerHandler = async response => {
    if (!response.didCancel) {
      let uri = response.assets[0]?.uri;
      setImage(uri);
      setShowModal(false);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Pressable style={styles.profileContainer}>
        <Image
          source={
            image ? {uri: image} : require('../../assets/defaultProfile.jpg')
          }
          style={styles.profile}
        />
        <Pressable style={styles.addProfile} onPress={() => setShowModal(true)}>
          <Icon name="camera-outline" size={24} color="#fff" />
        </Pressable>
      </Pressable>
      <View style={styles.contentContainer}>
        <Text style={styles.heading}>Create account</Text>
        <View style={styles.socialContainer}>
          <View style={styles.socialButton}>
            <Icon size={28} name="logo-google" color="#242526" />
          </View>
          <View style={styles.socialButton}>
            <Icon size={28} name="logo-facebook" color="#1877f2" />
          </View>
          <View style={styles.socialButton}>
            <Icon size={28} name="logo-twitter" color="#1DA1F2" />
          </View>
        </View>
        <Text style={styles.loginWith}>Or create with email...</Text>
        <Input placeholder="Email ID" icon="at-outline" />
        <Input placeholder="Full Name" icon="person-outline" />
        <Input placeholder="Username" icon="person-outline" />
        <Input
          placeholder="Password"
          icon="lock-closed-outline"
          isPass
          securePass={isSecure}
          secureChange={() => setIsSecure(!isSecure)}
        />
        <Button
          title="Create Account"
          styleProps={styles.button}
          textStyle={styles.buttonText}
        />
        <View style={styles.row}>
          <Text style={styles.loginWith}>Already have an account? </Text>
          <Pressable onPress={() => props.navigation.goBack()}>
            <Text style={styles.link}>Login</Text>
          </Pressable>
        </View>
      </View>
      <BottomModal isVisible={showModal} dismiss={() => setShowModal(false)}>
        <View
          style={styles.pickerModal}
          onPress={() => launchCamera(options, pickerHandler)}>
          <Text style={styles.inputLabel}>Select</Text>
          <Pressable style={styles.modalOption}>
            <Text style={styles.modalText}>Camera</Text>
          </Pressable>
          <Pressable
            style={styles.modalOption}
            onPress={() => launchImageLibrary(options, pickerHandler)}>
            <Text style={styles.modalText}>Gallery</Text>
          </Pressable>
        </View>
      </BottomModal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    marginHorizontal: 15,
  },
  heading: {
    color: '#192948',
    fontFamily: 'Roboto-Medium',
    fontSize: 28,
    marginBottom: 10,
    marginTop: 15,
  },
  loginImage: {
    width: widthPercentageToDP('100%'),
    height: heightPercentageToDP('34%'),
  },
  inputContainer: {
    borderBottomColor: '#e4e6e5',
    borderBottomWidth: 1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  input: {
    fontFamily: 'Roboto-Medium',
    fontSize: 15,
    color: '#212121',
    width: '95%',
  },
  button: {
    backgroundColor: '#0165ff',
    borderWidth: 0,
    width: widthPercentageToDP('85'),
    height: heightPercentageToDP('6'),
  },
  buttonText: {
    color: '#fff',
  },
  loginWith: {
    textAlign: 'center',
    color: '#9097a3',
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
  },
  socialButton: {
    borderColor: '#e4e6e5',
    borderWidth: 1.4,
    width: widthPercentageToDP('25'),
    height: heightPercentageToDP('7'),
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
  },
  logo: {
    width: 30,
    height: 30,
  },
  socialContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: widthPercentageToDP('80'),
    alignSelf: 'center',
    marginVertical: 15,
  },
  link: {
    color: '#2862ab',
    textAlign: 'center',
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
    marginHorizontal: 8,
  },
  row: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    paddingBottom: 10,
  },
  profileContainer: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    elevation: 6,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profile: {
    width: 145,
    height: 145,
    borderRadius: 145 / 2,
  },
  addProfile: {
    position: 'absolute',
    bottom: -8,
    width: 35,
    height: 35,
    borderRadius: 33 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0165ff',
  },
  modalOption: {
    width: '95%',
    height: heightPercentageToDP('8'),
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    alignItems: 'center',
    marginVertical: 10,
    backgroundColor: '#efefef',
  },
  modalText: {
    color: '#212121',
    fontFamily: 'Roboto-Medium',
    fontSize: 18,
  },
  inputLabel: {
    fontFamily: 'Roboto-Medium',
    fontSize: 22,
    color: '#414852',
    marginHorizontal: 4,
    marginVertical: 5,
    alignSelf: 'center',
  },
});

export default Login;
