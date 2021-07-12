import React, {useState} from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  ScrollView,
  Image,
  Pressable,
} from 'react-native';
import {heightPercentageToDP, widthPercentageToDP} from '../Utils/DpToPixel';
import Videos from '../Utils/HomeData.json';
import Icon from 'react-native-vector-icons/Ionicons';
import {BottomModal, Button} from '../Modules';

const TextLabel = props => {
  const {label, title, onChange, multiline} = props;
  return (
    <View>
      <Text style={styles.inputLabel}>{label}</Text>
      <TextInput
        style={multiline ? styles.multiline : styles.textInput}
        placeholder="Video title"
        value={title}
        multiline={multiline}
        onChangeText={onChange}
        {...props}
      />
    </View>
  );
};

const ModalOption = props => {
  const {icon, text, onPress} = props;
  return (
    <Pressable style={styles.row} onPress={onPress}>
      <Icon name={icon} color="#202020" size={26} />
      <Text style={styles.visibilityText}>{text}</Text>
    </Pressable>
  );
};

const EditVideo = props => {
  const {index} = props.route?.params;
  const video = Videos[index];
  const [title, setTitle] = useState(video?.title);
  const [description, setDescription] = useState(video?.description);
  const [modal, setModal] = useState(false);
  const [visibilityModal, setVisibilityModal] = useState(false);
  const [visibilityText, setVisibilityText] = useState('Public');
  const [visIcon, setVisIcon] = useState('earth');

  const setVisibility = (icon, text) => {
    setVisibilityText(text);
    setVisIcon(icon);
    setVisibilityModal(false);
    return;
  };

  return (
    <>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentView}>
        <TextLabel
          label="Title"
          title={title}
          onChange={val => setTitle(val)}
          maxLength={100}
        />
        <Text style={styles.counter}>{`${title.length} / 100`}</Text>
        <TextLabel
          label="Description"
          multiline
          title={description}
          onChange={val => setDescription(val)}
        />
        <Text style={styles.inputLabel}>Thumbnail</Text>
        <Pressable
          style={styles.thumbnailContainer}
          onPress={() => setModal(true)}>
          <Image
            source={{
              uri: `http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/${video?.thumb}`,
            }}
            style={styles.thumbnail}
            resizeMode="cover"
          />
          <View style={styles.icon}>
            <Icon
              name="add-outline"
              color={'#fff'}
              size={28}
              style={styles.absIcon}
            />
          </View>
          <View style={styles.overlay} />
        </Pressable>
        <Pressable
          style={styles.visibility}
          onPress={() => setVisibilityModal(true)}>
          <View style={styles.row}>
            <Icon
              name={`${visIcon}-outline`}
              color="#1e2321"
              size={20}
              style={styles.absIcon}
            />
            <Text style={styles.visibilityText}>{visibilityText}</Text>
          </View>
          <Icon
            name="caret-down"
            color="#606060"
            size={20}
            style={styles.absIcon}
          />
        </Pressable>
        <Button title="Update" />
      </ScrollView>
      <BottomModal isVisible={modal} dismiss={() => setModal(false)}>
        <View style={styles.pickerModal}>
          <Text style={styles.inputLabel}>Select</Text>
          <Pressable style={styles.modalOption}>
            <Text style={styles.modalText}>Camera</Text>
          </Pressable>
          <Pressable style={styles.modalOption}>
            <Text style={styles.modalText}>Gallery</Text>
          </Pressable>
        </View>
      </BottomModal>
      <BottomModal
        isVisible={visibilityModal}
        dismiss={() => setVisibilityModal(false)}>
        <View>
          <Text style={styles.modalHeading}>Select Audience</Text>
          <ModalOption
            text="Public"
            icon="earth-outline"
            onPress={() => setVisibility('earth', 'Public')}
          />
          <ModalOption
            text="My followers"
            icon="people"
            onPress={() => setVisibility('people', 'My followers')}
          />
          <ModalOption
            text="Private"
            icon="eye-off-outline"
            onPress={() => setVisibility('eye-off', 'Private')}
          />
        </View>
      </BottomModal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentView: {
    flexGrow: 1,
    margin: 10,
  },
  inputLabel: {
    fontFamily: 'Roboto-Medium',
    fontSize: 17,
    color: '#414852',
    marginHorizontal: 4,
    marginVertical: 5,
  },
  textInput: {
    fontFamily: 'Roboto-Medium',
    color: '#2f3742',
    borderWidth: 1.4,
    borderColor: '#dbdddf',
    borderRadius: 8,
  },
  multiline: {
    fontFamily: 'Roboto-Medium',
    color: '#2f3742',
    borderWidth: 1.4,
    borderColor: '#dbdddf',
    borderRadius: 8,
    height: 200,
    textAlignVertical: 'top',
  },
  counter: {
    color: '#606060',
    fontFamily: 'Roboto-Medium',
    fontSize: 14,
  },
  thumbnailContainer: {
    width: '100%',
    height: heightPercentageToDP('27%'),
    borderRadius: 8,
    marginVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  thumbnail: {
    width: widthPercentageToDP('95%'),
    height: heightPercentageToDP('27%'),
    borderRadius: 8,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.3)',
    width: widthPercentageToDP('95%'),
    height: heightPercentageToDP('27%'),
    borderRadius: 8,
  },
  icon: {
    position: 'absolute',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
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
  pickerModal: {
    height: 200,
  },
  visibility: {
    flexDirection: 'row',
    height: heightPercentageToDP('7'),
    borderWidth: 1.5,
    borderColor: '#dbdddf',
    borderRadius: 8,
    alignItems: 'center',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
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
  modalHeading: {
    color: '#212121',
    fontFamily: 'Roboto-Medium',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default EditVideo;
