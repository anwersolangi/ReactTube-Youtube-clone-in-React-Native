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
import {heightPercentageToDP} from '../Utils/DpToPixel';
import Modal from 'react-native-modal';
import Orientation from 'react-native-orientation-locker';
import {useFocusEffect} from '@react-navigation/native';

const HomeScreen = props => {
  const [optionModal, setOptionModal] = useState(false);

  useFocusEffect(() => {
    Orientation.lockToPortrait();
  });

  return (
    <View style={styles.container}>
      <VirtualizedList
        data={HomeData}
        getItemCount={() => HomeData.length}
        getItem={(data, index) => data[index]}
        contentContainerStyle={{flexGrow: 1}}
        renderItem={data => {
          return (
            <Pressable
              onPress={() =>
                props.navigation.navigate('Player', {
                  videoIndex: data?.index,
                })
              }>
              <Image
                source={{
                  uri: `http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/${data?.item?.thumb}`,
                }}
                resizeMode="cover"
                style={styles.thumbnail}
              />
              <View style={styles.detailContainer}>
                <Pressable
                  onPress={() =>
                    props.navigation.navigate('ChannelScreen', {
                      channelName: data?.item?.channel,
                    })
                  }>
                  <Image
                    style={styles.channelAvtar}
                    source={{
                      uri: 'https://s3.envato.com/files/335035895/thumbnail.png',
                    }}
                    resizeMode="cover"
                  />
                </Pressable>
                <View style={styles.titleContainer}>
                  <Text style={styles.videoTitle} numberOfLines={2}>
                    {data?.item?.title}
                  </Text>
                  <Text style={styles.channelName} numberOfLines={2}>
                    {`${data?.item?.channel} . ${data?.item?.views} views . ${
                      data?.item?.uploaded === 'just now'
                        ? 'just now'
                        : `${data?.item?.uploaded} ago`
                    }`}
                  </Text>
                </View>
                <TouchableOpacity
                  style={styles.menuButton}
                  onPress={() => setOptionModal(true)}>
                  <Icon name="ellipsis-vertical" size={14} color="#6c6c6c" />
                </TouchableOpacity>
              </View>
            </Pressable>
          );
        }}
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
  thumbnail: {
    width: '100%',
    height: heightPercentageToDP('26%'),
  },
  detailContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
    marginHorizontal: 10,
    alignItems: 'center',
  },
  channelAvtar: {
    width: 35,
    height: 35,
    borderRadius: 35 / 2,
  },
  videoTitle: {
    color: '#282828',
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
    letterSpacing: 0.1,
  },
  titleContainer: {
    flexDirection: 'column',
    width: '80%',
  },
  channelName: {
    color: '#9c9c9c',
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
});

export default HomeScreen;
