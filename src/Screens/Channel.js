import {useFocusEffect} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  TouchableOpacity,
  VirtualizedList,
} from 'react-native';
import Modal from 'react-native-modal';
import ChannelData from '../Utils/Channel.json';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeData from '../Utils/HomeData.json';
import {heightPercentageToDP} from '../Utils/DpToPixel';
import {getMonthString} from '../Utils/Util';

const Option = props => {
  return (
    <Pressable style={styles.option} onPress={props.onPress}>
      <Text style={styles.optionText}>{props.title}</Text>
    </Pressable>
  );
};

export const Description = props => {
  return (
    <View style={styles.descView}>
      <Text style={styles.descHead}>{props.head}</Text>
      <Text style={styles.descTitle}>{props.title}</Text>
    </View>
  );
};

const ChannelScreen = props => {
  const [optionsModal, setOptionsModal] = useState(false);

  useFocusEffect(() => {
    props.navigation.dangerouslyGetParent().setOptions({
      headerRight: headerProps => (
        <TouchableOpacity
          style={styles.rightButton}
          onPress={() => setOptionsModal(!optionsModal)}>
          <Icon name="ellipsis-vertical" color="#040201" size={22} />
        </TouchableOpacity>
      ),
    });
  });

  return (
    <View style={{flex: 1}}>
      <VirtualizedList
        data={HomeData}
        getItemCount={() => HomeData.length}
        getItem={(data, index) => data[index]}
        ListHeaderComponent={() => {
          return (
            <View>
              <Image
                source={{uri: ChannelData[0]?.cover}}
                style={{width: '100%', height: 154}}
                resizeMode="contain"
              />
              <Image
                style={styles.channelAvtar}
                source={{uri: ChannelData[0]?.avtar}}
              />
              <Text style={styles.channelName}>{ChannelData[0]?.name}</Text>
              <Pressable style={styles.followButton}>
                <Text style={styles.buttonText}>Follow</Text>
              </Pressable>
              <View style={styles.channelDescription}>
                <Description
                  head={ChannelData[0]?.moreInfo?.followers}
                  title="Followers"
                />
                <Text style={styles.divider}>|</Text>
                <Description
                  head={ChannelData[0]?.moreInfo?.totalVideos}
                  title="Videos"
                />
                <Text style={styles.divider}>|</Text>
                <Description
                  head={`${getMonthString(
                    new Date().getMonth(),
                  )} ${new Date().getFullYear()}`}
                  title="Joined on"
                />
              </View>
              <Pressable
                style={styles.channelDescription}
                onPress={() =>
                  props.navigation?.navigate('ChannelScreen', {screen: 'About'})
                }>
                <Text numberOfLines={2} style={styles.description}>
                  {ChannelData[0]?.description}
                </Text>
                <Icon
                  name="chevron-forward-outline"
                  size={28}
                  color="#040201"
                />
              </Pressable>
              <Text style={styles.heading}>Latest Videos</Text>
            </View>
          );
        }}
        initialNumToRender={5}
        renderItem={({item, index}) => {
          return (
            <Pressable
              onPress={() =>
                props.navigation.navigate('Player', {
                  videoIndex: index,
                })
              }
              style={{
                flexDirection: 'row',
                marginHorizontal: 8,
                marginVertical: 4,
                width: '100%',
                alignItems: 'flex-start',
              }}>
              <Image
                source={{
                  uri: `http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/${item?.thumb}`,
                }}
                resizeMode="cover"
                style={styles.thumbnail}
              />
              <View style={styles.detailContainer}>
                <View style={styles.titleContainer}>
                  <Text style={styles.videoTitle} numberOfLines={2}>
                    {item?.title}
                  </Text>
                  <Text style={styles.videoDescription} numberOfLines={2}>
                    {`${item?.views} views . ${
                      item?.uploaded === 'just now'
                        ? 'just now'
                        : `${item?.uploaded} ago`
                    }`}
                  </Text>
                </View>
                <TouchableOpacity>
                  <Icon name="ellipsis-vertical" size={14} color="#6c6c6c" />
                </TouchableOpacity>
              </View>
            </Pressable>
          );
        }}
        ListFooterComponent={() => {
          return <View style={{height: 80}} />;
        }}
        keyExtractor={(item, index) => index.toString()}
      />

      <Modal
        isVisible={optionsModal}
        style={styles.modal}
        swipeDirection="down"
        onSwipeComplete={e => setOptionsModal(false)}
        onBackButtonPress={() => setOptionsModal(false)}
        onBackdropPress={() => setOptionsModal(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalLine} />
          <Option title="Report" />
          <Option title="Block User" />
          <Option title="Restrict" />
          <Option title="Subscribe" />
          <Option title="Copy Profile URL" />
          <Option title="Share profile" />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalContainer: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    padding: 2,
  },
  modalLine: {
    borderBottomWidth: 4,
    borderBottomColor: '#040201',
    width: '10%',
    alignSelf: 'center',
    borderRadius: 10,
    marginVertical: 10,
  },
  option: {
    marginHorizontal: 12,
    marginVertical: 9,
  },
  optionText: {
    fontFamily: 'Roboto-Light',
    fontSize: 18,
    color: '#040201',
  },
  channelCover: {
    width: '100%',
    height: '34%',
    resizeMode: 'contain',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightButton: {
    marginHorizontal: 3,
    alignSelf: 'center',
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
  },
  channelAvtar: {
    marginVertical: 12,
    alignSelf: 'center',
    width: 80,
    height: 80,
    borderRadius: 80 / 2,
  },
  channelName: {
    fontFamily: 'Roboto-Black',
    fontSize: 20,
    color: '#040201',
    textAlign: 'center',
    letterSpacing: 0.23,
  },
  followButton: {
    alignSelf: 'center',
    marginVertical: 4,
  },
  buttonText: {
    fontFamily: 'Roboto-Medium',
    fontSize: 18,
    letterSpacing: 0.29,
  },
  channelDescription: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 4,
  },
  divider: {
    fontFamily: 'Roboto-Light',
    fontSize: 33,
    color: '#929292',
    marginHorizontal: 5,
  },
  descHead: {
    fontFamily: 'Roboto-Medium',
    fontSize: 15,
  },
  descView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  descTitle: {
    fontFamily: 'Roboto-Medium',
    fontSize: 13.7,
    color: '#929292',
  },
  description: {
    fontFamily: 'Roboto-Medium',
    fontSize: 13,
    letterSpacing: 0.17,
    textAlign: 'center',
    width: '85%',
    alignSelf: 'center',
    color: '#929292',
  },
  heading: {
    fontFamily: 'Roboto-Black',
    color: '#040201',
    fontSize: 16,
    margin: 8,
  },
  thumbnail: {
    width: '45%',
    height: heightPercentageToDP('12%'),
    borderRadius: 8,
  },
  detailContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
    marginHorizontal: 10,
    alignItems: 'center',
    width: '48%',
  },

  videoTitle: {
    color: '#282828',
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
    letterSpacing: 0.1,
    width: '100%',
  },
  titleContainer: {
    flexDirection: 'column',
    width: '80%',
  },
  videoDescription: {
    color: '#9c9c9c',
    fontFamily: 'Roboto-Medium',
    fontSize: 12,
  },
});

export default ChannelScreen;
