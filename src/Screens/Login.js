import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  Pressable,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Button} from '../Modules';
import {heightPercentageToDP, widthPercentageToDP} from '../Utils/DpToPixel';
import {displayName} from '../../app.json';

export const Input = ({
  placeholder,
  icon,
  value,
  onChange,
  securePass,
  isPass,
  secureChange,
}) => {
  return (
    <View style={styles.inputContainer}>
      <Icon color="#9097a3" size={24} name={icon} />
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#9097a3"
        value={value}
        onChangeText={onChange}
        style={styles.input}
        secureTextEntry={securePass}
      />
      {isPass && (
        <Pressable onPress={secureChange}>
          <Icon
            name={securePass ? 'eye-off-outline' : 'eye-outline'}
            color="#9097a3"
            size={23}
          />
        </Pressable>
      )}
    </View>
  );
};

const Login = props => {
  return (
    <ScrollView style={styles.container}>
      <Image
        source={require('../../assets/login.png')}
        style={styles.loginImage}
        resizeMode="contain"
      />
      <View style={styles.contentContainer}>
        <Text style={styles.heading}>Login</Text>
        <Input placeholder="Email ID" icon="at-outline" />
        <Input placeholder="Password" icon="lock-closed-outline" />
        <Button
          title="Login"
          styleProps={styles.button}
          textStyle={styles.buttonText}
        />
        <Text style={styles.loginWith}>Or, login with</Text>
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
        <View style={styles.row}>
          <Text style={styles.loginWith}>New to {displayName}?</Text>
          <Pressable onPress={() => props.navigation.navigate('Signup')}>
            <Text style={styles.link}>Register</Text>
          </Pressable>
        </View>
      </View>
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
    marginVertical: 15,
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
    width: widthPercentageToDP('80'),
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
});

export default Login;
