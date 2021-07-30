import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  TextInput,
} from 'react-native';
import {heightPercentageToDP, widthPercentageToDP} from '../Utils/DpToPixel';
import Icon from 'react-native-vector-icons/Ionicons';
import {BottomModal, Button} from '../Modules';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const Process = props => {
  const {step, text, onPress, enabled = true, done} = props;
  return (
    <Pressable
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        ...styles.stepContainer,
        backgroundColor: !enabled ? '#f9f9f9' : '#fff',
      }}
      {...props}
      onPress={enabled ? onPress : null}>
      <View>
        <Text style={styles.step}>Step {step}</Text>
        <Text style={styles.detail}>{text}</Text>
      </View>
      <Icon
        name={done ? 'checkmark-circle' : 'cloud-upload-outline'}
        color={done ? '#04abf2' : '#b7b7b7'}
        size={28}
      />
    </Pressable>
  );
};

const Verification = props => {
  const [modal, setModal] = useState(false);
  const [infoModal, setInfoModal] = useState(false);
  const [photoID, setPhotoID] = useState(null);
  const [selfie, setSelfie] = useState(null);
  const [pickerValue, setPickerValue] = useState('id');
  const [info, setInfo] = useState(false);
  const [fullName, setFullName] = useState('');
  const [message, setMessage] = useState('');

  const options = {
    mediaType: 'photo',
    maxWidth: 480,
    maxHeight: 480,
  };

  const pickerHandler = async response => {
    if (!response.didCancel) {
      const uri = response.assets[0]?.uri;
      if (pickerValue === 'id') {
        setPhotoID(uri);
      } else {
        console.log('Selfie => ', selfie);
        setSelfie(uri);
      }
      setModal(false);
    }
  };

  const showModal = val => {
    setModal(true);
    setPickerValue(val);
  };

  const infoSubmit = () => {
    setInfo(true);
    setInfoModal(false);
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}>
      <View style={styles.head}>
        <Text style={styles.heading}>Submit Documents</Text>
        <Text style={styles.description}>
          We need verify your information. Please submit the documents below,
          we'll review your verification request, and provide you verified badge
          once we review your request.
        </Text>
      </View>
      <Process
        done={photoID}
        step={1}
        text="Photo ID"
        onPress={() => showModal('id')}
      />
      <Process
        step={2}
        enabled={photoID}
        done={selfie}
        text="Take Selfie"
        onPress={() => showModal('selfie')}
      />
      <Process
        icon="cloud-upload-outline"
        step={3}
        enabled={selfie}
        done={info}
        text="Your information"
        onPress={() => setInfoModal(true)}
      />
      <Button
        title="Submit Request"
        styleProps={styles.button}
        textStyle={styles.buttonText}
      />
      <BottomModal isVisible={modal} dismiss={() => setModal(false)}>
        <View style={styles.pickerModal}>
          <Text style={styles.inputLabel}>Select</Text>
          <Pressable
            style={styles.modalOption}
            onPress={() => launchCamera(options, pickerHandler)}>
            <Text style={styles.modalText}>Camera</Text>
          </Pressable>
          <Pressable
            style={styles.modalOption}
            onPress={() => launchImageLibrary(options, pickerHandler)}>
            <Text style={styles.modalText}>Gallery</Text>
          </Pressable>
        </View>
      </BottomModal>
      <BottomModal isVisible={infoModal} dismiss={() => setInfoModal(false)}>
        <View style={styles.infoModal}>
          <TextInput
            value={fullName}
            onChangeText={val => setFullName(val)}
            placeholder="Full Name"
            placeholderTextColor="#d0d5da"
            style={styles.input}
            maxLength={40}
          />
          <TextInput
            value={message}
            onChangeText={val => setMessage(val)}
            placeholder="Message"
            placeholderTextColor="#d0d5da"
            multiline
            style={styles.multilineInput}
            maxLength={180}
          />
          <Text style={styles.charLeft}>{`${message.length}/180`}</Text>
          <Button title="Submit" onPress={infoSubmit} />
        </View>
      </BottomModal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
  },
  head: {
    top: 23,
    marginVertical: 10,
    marginHorizontal: 12,
  },
  heading: {
    fontFamily: 'Roboto-Medium',
    fontSize: 28,
    color: '#212121',
    textAlign: 'center',
    marginVertical: 10,
  },
  description: {
    color: '#292929',
    fontFamily: 'Roboto-Medium',
    fontSize: 15,
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 18,
  },
  stepContainer: {
    borderRadius: 4,
    width: widthPercentageToDP('95%'),
    height: 80,
    marginHorizontal: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  step: {
    color: '#d0d0d0',
    fontFamily: 'Roboto-Medium',
    fontSize: 16.5,
    marginVertical: 8,
  },
  detail: {
    color: '#0c0c0c',
    fontFamily: 'Roboto-Medium',
    fontSize: 18,
  },
  inputLabel: {
    fontFamily: 'Roboto-Medium',
    fontSize: 17,
    color: '#414852',
    marginHorizontal: 4,
    marginVertical: 5,
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
  input: {
    borderRadius: 5,
    borderWidth: 1.5,
    borderColor: '#b4b4b4',
    width: '100%',
    marginHorizontal: 14,
    marginVertical: 10,
    color: '#0c0c0c',
    fontFamily: 'Roboto-Medium',
    fontSize: 15,
  },
  multilineInput: {
    borderRadius: 5,
    borderWidth: 1.5,
    borderColor: '#b4b4b4',
    width: '100%',
    height: heightPercentageToDP('14%'),
    marginHorizontal: 14,
    marginVertical: 10,
    color: '#0c0c0c',
    fontFamily: 'Roboto-Medium',
    fontSize: 14.6,
    textAlignVertical: 'top',
  },
  infoModal: {
    marginHorizontal: 10,
    alignItems: 'center',
  },
  charLeft: {
    color: '#0c0c0c',
    fontFamily: 'Roboto-Medium',
    fontSize: 13,
    alignSelf: 'flex-end',
  },
  button: {
    borderRadius: 30,
    borderWidth: 0,
    width: '80%',
    height: 55,
    backgroundColor: '#04abf2',
  },
  buttonText: {
    color: '#fff',
  },
});

export default Verification;
