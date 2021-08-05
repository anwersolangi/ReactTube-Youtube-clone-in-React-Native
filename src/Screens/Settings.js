import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
  Image,
  TextInput,
} from 'react-native';
import {heightPercentageToDP} from '../Utils/DpToPixel';
import User from '../Utils/User.json';
import Icon from 'react-native-vector-icons/Ionicons';
import {Alert, Button, BottomModal} from '../Modules';

const Option = ({onPress, text, icon}) => {
  return (
    <Pressable style={styles.optionContainer} onPress={onPress}>
      <Icon name={icon} color="#303b4a" size={26} />
      <Text style={styles.option}>{text}</Text>
      <Icon name="chevron-forward-outline" color="#212121" size={27} />
    </Pressable>
  );
};

const Settings = props => {
  const [deleteModal, setDeleteModal] = useState(false);
  const [monetizationModal, setMonetizationModal] = useState(false);
  const [infoModal, setInfoModal] = useState(false);
  const [infoAlert, setInfoAlert] = useState(false);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}>
      <View style={styles.profileContainer}>
        <Image source={{uri: User?.avtar}} style={styles.avtar} />
        <Text style={styles.channelName}>{User?.name}</Text>
        <Text style={styles.channelMail}>{User?.email}</Text>

        <Button
          styleProps={styles.editButton}
          title="Edit Profile"
          textStyle={styles.buttonText}
          isLoading={false}
          onPress={() =>
            props.navigation.navigate('EditProfile', {channelName: User?.name})
          }
        />
      </View>
      <Text style={styles.heading}>App</Text>
      <View style={styles.modeContainer}>
        <Option text="Downloads" icon="download-outline" />
      </View>
      <Text style={styles.heading}>General</Text>
      <View style={styles.modeContainer}>
        <Option
          text="Earnings"
          icon="wallet-outline"
          onPress={() => props.navigation.navigate('Earnings')}
        />
        <Option
          text="Monetizations"
          icon="logo-usd"
          onPress={() => setMonetizationModal(true)}
        />
        <Option
          text="Purchases"
          icon="cart-outline"
          onPress={() => props.navigation.navigate('Purchases')}
        />
        <Option
          text="Verification"
          icon="checkmark-circle"
          onPress={() => props.navigation.navigate('Verification')}
        />
        <Option
          text="Blocked Users"
          icon="close-circle-outline"
          onPress={() => props.navigation.navigate('BlockedList')}
        />
        <Option
          text="My Information"
          icon="clipboard-outline"
          onPress={() => setInfoModal(true)}
        />
        <Option
          text="Delete account"
          icon="trash-outline"
          onPress={() => setDeleteModal(true)}
        />
      </View>
      <Text style={styles.heading}>Anwer Solangi © </Text>
      <Alert
        isVisible={deleteModal}
        dismiss={() => setDeleteModal(false)}
        title="Delete Account"
        message="Are you sure you want to delete this account"
        buttons={[
          {onPress: () => console.log('Test'), title: 'Yes'},
          {cancellable: true, title: 'No'},
        ]}
      />
      <BottomModal
        isVisible={monetizationModal}
        dismiss={() => setMonetizationModal(false)}>
        <View style={styles.modalContainer}>
          <Text style={styles.info}>
            Earn (0.2 USD) for each advertisement click you get from your
            videos!
          </Text>
          <View style={styles.horizontalLine} />
          <TextInput
            placeholder="Subscription Price"
            placeholderTextColor="#737373"
            style={styles.rowInput}
          />
        </View>
        <Button
          styleProps={styles.editButton}
          title="Save"
          textStyle={styles.buttonText}
          isLoading={false}
        />
      </BottomModal>
      <BottomModal isVisible={infoModal} dismiss={() => setInfoModal(false)}>
        <View style={styles.modalContainer}>
          <Text style={styles.info}>
            Please choose which information you want to download
          </Text>
          <Pressable
            style={styles.modalOption}
            onPress={() => setInfoAlert(true)}>
            <Icon name="information-circle" size={26} color="#04abf2" />
            <Text style={styles.modalText}>My information </Text>
          </Pressable>
          <Pressable style={styles.modalOption}>
            <Icon name="videocam" size={26} color="#4caf50" />
            <Text style={styles.modalText}>Videos</Text>
          </Pressable>
        </View>
      </BottomModal>
      <Alert
        isVisible={infoAlert}
        dismiss={() => setInfoAlert(false)}
        title="Password required"
        message="Please re-enter your password to download information"
        buttons={[
          {onPress: () => console.log('Test'), title: 'Okay'},
          {cancellable: true, title: 'Cancel'},
        ]}>
        <TextInput
          placeholder="Password"
          placeholderTextColor="#737373"
          style={styles.rowInput}
        />
      </Alert>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    backgroundColor: '#f6f6f6',
    flexGrow: 1,
  },
  profileContainer: {
    width: '100%',
    height: heightPercentageToDP('35'),
    padding: 13,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modeContainer: {
    width: '100%',
    padding: 13,
    backgroundColor: '#fff',
  },
  avtar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  channelName: {
    fontFamily: 'Roboto-Medium',
    fontSize: 17,
    color: '#212121',
    marginVertical: 5,
  },
  channelMail: {
    color: '#606060',
    fontFamily: 'Roboto-Medium',
    fontSize: 14,
  },
  editButton: {
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
  heading: {
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
    color: '#9c9c9c',
    paddingVertical: 10,
    marginHorizontal: 12,
  },
  option: {
    fontFamily: 'Roboto-Medium',
    fontSize: 15,
    color: '#212121',
    width: '80%',
  },
  optionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 8,
    alignItems: 'center',
    marginVertical: 8.6,
  },
  info: {
    backgroundColor: '#f8f9fb',
    fontFamily: 'Roboto-Medium',
    color: '#111111',
    fontSize: 15,
  },
  rowInput: {
    color: '#212121',
    fontFamily: 'Roboto-Medium',
    fontSize: 15,
    borderWidth: 1,
    borderColor: '#d6d6d6',
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  horizontalLine: {
    borderBottomColor: '#ebebeb',
    borderBottomWidth: 1.5,
    marginVertical: 10,
  },
  modalOption: {
    flexDirection: 'row',
    width: '95%',
    height: heightPercentageToDP('8'),
    alignSelf: 'center',
    borderRadius: 7,
    alignItems: 'center',
    marginVertical: 10,
    backgroundColor: '#efefef',
    paddingHorizontal: 10,
  },
  modalText: {
    color: '#212121',
    fontFamily: 'Roboto-Medium',
    fontSize: 17,
    marginHorizontal: 20,
  },
  modalContainer: {
    marginHorizontal: 11,
    marginBottom: 4,
  },
});

export default Settings;
