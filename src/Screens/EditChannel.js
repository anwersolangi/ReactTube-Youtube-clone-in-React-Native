import React, {useState} from 'react';
import {
  View,
  ScrollView,
  TextInput,
  Text,
  StyleSheet,
  Image,
  Pressable,
} from 'react-native';
import {heightPercentageToDP} from '../Utils/DpToPixel';
import User from '../Utils/User.json';
import Icon from 'react-native-vector-icons/Ionicons';
import {Button} from '../Modules';

const EditChannel = props => {
  const [name, setName] = useState('');
  return (
    <ScrollView style={styles.container}>
      <View style={styles.comp}>
        <Text style={styles.compHeading}>Personal Details</Text>
        <View style={styles.horizontalLine} />
        <TextInput
          val={name}
          style={styles.input}
          onChange={val => setName(val)}
          placeholder="Name"
          placeholderTextColor="#b8b8b8"
        />
        <TextInput
          val={name}
          style={styles.input}
          onChange={val => setName(val)}
          placeholder="username"
          placeholderTextColor="#b8b8b8"
        />
        <TextInput
          val={name}
          style={styles.input}
          onChange={val => setName(val)}
          placeholder="Location"
          placeholderTextColor="#b8b8b8"
        />
      </View>
      <View style={{...styles.comp, height: heightPercentageToDP('27%')}}>
        <Text style={styles.compHeading}>Avtar & Cover</Text>
        <View style={styles.horizontalLine} />
        <View style={styles.coverContainer}>
          <Image
            source={{uri: User?.cover}}
            style={styles.cover}
            resizeMode="contain"
          />
          <View style={styles.coverOverlay} />
          <Pressable style={styles.editButton}>
            <Icon
              name="pencil"
              color="#fff"
              size={20}
              style={styles.coverButton}
            />
          </Pressable>
        </View>
        <View style={styles.avtarContainer}>
          <Image
            source={{uri: User?.avtar}}
            style={styles.avtar}
            resizeMode="cover"
          />
          <View style={styles.overlay} />
          <Pressable>
            <Icon
              name="pencil"
              color="#fff"
              size={20}
              style={styles.absoluteElem}
            />
          </Pressable>
        </View>
      </View>
      <View style={styles.comp}>
        <Text style={styles.compHeading}>Account Details</Text>
        <View style={styles.horizontalLine} />
        <TextInput
          val={name}
          style={styles.input}
          onChange={val => setName(val)}
          placeholder="Email"
          placeholderTextColor="#b8b8b8"
        />
        <TextInput
          val={name}
          style={styles.input}
          onChange={val => setName(val)}
          placeholder="Password"
          placeholderTextColor="#b8b8b8"
        />
        <TextInput
          val={name}
          style={styles.input}
          onChange={val => setName(val)}
          placeholder="Mobile number"
          keyboardType="phone-pad"
          placeholderTextColor="#b8b8b8"
        />
      </View>
      <Button
        styleProps={styles.sendButton}
        title="Submit"
        textStyle={styles.buttonText}
        isLoading={false}
        onPress={() => props.navigation.goBack()}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fbfdff',
  },
  comp: {
    margin: 10,
    backgroundColor: '#fff',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 4,
    width: '93%',
    alignSelf: 'center',
  },
  compHeading: {
    fontFamily: 'Roboto-Medium',
    fontSize: 16.4,
    textTransform: 'capitalize',
  },
  horizontalLine: {
    width: '100%',
    borderBottomColor: '#b8b8b8',
    borderBottomWidth: 1.4,
    marginBottom: 10,
    marginTop: 5,
  },
  input: {
    borderBottomColor: '#b8b8b8',
    borderBottomWidth: 1.4,
    width: '100%',
    fontFamily: 'Roboto-Medium',
    fontSize: 15,
    color: '#212121',
  },
  coverContainer: {
    width: '100%',
    height: heightPercentageToDP('17%'),
    borderRadius: 8,
  },
  cover: {
    width: '100%',
    height: heightPercentageToDP('17%'),
    borderRadius: 8,
  },
  avtarContainer: {
    position: 'absolute',
    width: 85,
    height: 85,
    borderRadius: 85 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    top: 120,
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: '#fff',
  },
  avtar: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.3)',
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  coverOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.3)',
    width: '100%',
    borderRadius: 8,
  },
  absoluteElem: {
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center',
  },
  editButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 95,
    right: 7,
  },
  sendButton: {
    backgroundColor: '#04abf2',
    width: '40%',
    height: 45,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginVertical: 8,
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'Roboto-Medium',
  },
});

export default EditChannel;
