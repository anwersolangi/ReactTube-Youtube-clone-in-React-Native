import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  VirtualizedList,
  Pressable,
} from 'react-native';

import HomeData from '../Utils/HomeData.json';
import Icon from 'react-native-vector-icons/Ionicons';
import React, {useState} from 'react';
import {CoverVideo} from '../Modules';
import Modal from 'react-native-modal';
import Orientation from 'react-native-orientation-locker';
import {useFocusEffect} from '@react-navigation/native';
import {BottomModal} from '../Modules';

const Option = ({onPress, icon, title}) => {
  return (
    <Pressable style={styles.option} onPress={onPress}>
      <Icon name={icon} color="#282828" size={25} />
      <Text style={styles.optionText}>{title}</Text>
    </Pressable>
  );
};

const HomeScreen = props => {
  const [optionModal, setOptionModal] = useState(false);
  const [profileModal, setProfileModal] = useState(false);

  useFocusEffect(() => {
    props.navigation.dangerouslyGetParent().setOptions({
      headerRight: headerProps => (
        <View style={styles.homeRight}>
          <TouchableOpacity
            style={styles.rightButton}
            onPress={() => props.navigation.navigate('Notifications')}>
            <Icon name="notifications-outline" color="#282828" size={26} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.rightButton}
            onPress={() => props.navigation.navigate('Search')}>
            <Icon name="search-outline" color="#282828" size={26} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.rightButton}
            onPress={() => setProfileModal(true)}>
            <Image
              source={{
                uri: 'https://avatars.githubusercontent.com/u/37410529?v=4',
              }}
              style={styles.channelAvtar}
            />
          </TouchableOpacity>
        </View>
      ),
    });
  });

  useFocusEffect(() => {
    Orientation.lockToPortrait();
  });

  const Comp = ({item, index}) => {
    return (
      <CoverVideo
        onPress={() =>
          props.navigation.navigate('Player', {
            videoIndex: index,
          })
        }
        thumbnail={item?.thumb}
        channelAction={() =>
          props.navigation.navigate('ChannelScreen', {
            channelName: item?.channel,
          })
        }
        channelAvtar={'https://s3.envato.com/files/335035895/thumbnail.png'}
        title={item?.title}
        channelName={item?.channel}
        uploaded={item?.uploaded}
        views={item?.views}
        action={() => setOptionModal(true)}
      />
    );
  };

  return (
    <View style={styles.container}>
      <VirtualizedList
        data={HomeData}
        getItemCount={() => HomeData.length}
        getItem={(data, index) => data[index]}
        contentContainerStyle={{flexGrow: 1}}
        renderItem={Comp}
        keyExtractor={(item, index) => index.toString()}
      />
      <Modal
        isVisible={optionModal}
        style={styles.modal}
        onBackdropPress={() => setOptionModal(!optionModal)}
        onBackButtonClick={() => setOptionModal(!optionModal)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalLine} />
          <View style={styles.modalHeader}>
            <Text style={styles.modalHeading}>Options</Text>
            <Pressable onPress={() => setOptionModal(!optionModal)}>
              <Icon name="close-outline" color="#282828" size={26} />
            </Pressable>
          </View>
          <Pressable style={styles.button}>
            <Icon name="time-outline" color="#282828" size={24} />
            <Text style={styles.buttonText}>Save to Watch later</Text>
          </Pressable>
          <Pressable style={styles.button}>
            <Icon name="flag-outline" color="#282828" size={24} />
            <Text style={styles.buttonText}>Report</Text>
          </Pressable>
        </View>
      </Modal>
      <BottomModal
        isVisible={profileModal}
        dismiss={() => setProfileModal(false)}>
        <View style={styles.optionContainer}>
          <Option title="Settings" icon="settings-outline" />
          <Option title="Watch letter" icon="time-outline" />
          <Option title="History" icon="refresh-outline" />
          <Option title="Help & feedback" icon="help-circle-outline" />
          <Option title="Privacy policy" icon="shield-checkmark-outline" />
          <Option title="Terms & Conditions" icon="reader-outline" />
          <Option title="About us" icon="information-circle-outline" />
        </View>
      </BottomModal>
      <View style={styles.margin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    flexGrow: 1,
  },
  channelAvtar: {
    width: 28,
    height: 28,
    borderRadius: 28 / 2,
  },

  modal: {
    margin: 0,
    justifyContent: 'flex-end',
  },
  modalContainer: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    padding: 4,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: 8,
  },
  buttonText: {
    fontFamily: 'Roboto-Light',
    fontSize: 18,
    marginHorizontal: 6,
  },
  modalLine: {
    borderBottomWidth: 4,
    borderBottomColor: '#282828',
    width: '11%',
    alignSelf: 'center',
    borderRadius: 10,
    marginVertical: 6,
    opacity: 0.7,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginBottom: 4,
  },
  modalHeading: {
    fontFamily: 'Roboto-Medium',
    fontSize: 20,
    marginHorizontal: 10,
  },
  margin: {
    marginBottom: 48,
  },
  homeRight: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    justifyContent: 'space-around',
  },
  rightButton: {
    marginHorizontal: 8,
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
  },
  optionContainer: {
    marginHorizontal: 11,
    marginBottom: 4,
  },
  option: {
    flexDirection: 'row',
    marginVertical: 5,
    padding: 5,
  },
  optionText: {
    fontFamily: 'Roboto-Light',
    marginLeft: 10,
    fontSize: 18,
    color: '#212121',
  },
});

export default HomeScreen;
