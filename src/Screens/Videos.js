import React, {useState} from 'react';
import {
  View,
  Text,
  VirtualizedList,
  Pressable,
  Image,
  StyleSheet,
} from 'react-native';
import Videos from '../Utils/HomeData.json';
import Icon from 'react-native-vector-icons/Ionicons';
import {numberFormat} from '../Utils/Util';
import Modal from 'react-native-modal';

const VideosScreen = props => {
  const [optionModal, setOptionModal] = useState(false);

  const renderItem = ({item, index}) => {
    return (
      <Pressable
        style={styles.videoTile}
        onPress={() =>
          props.navigation.navigate('Player', {
            videoIndex: index,
          })
        }>
        <Image
          source={{
            uri: item?.thumb,
          }}
          style={styles.thumbnail}
        />
        <View style={styles.descContainer}>
          <Text style={styles.title} numberOfLines={2}>
            {item?.title}
          </Text>
          <Text
            style={styles.channelTitle}
            numberOfLines={1}
            onPress={() =>
              props.navigation.navigate('ChannelScreen', {
                channelName: item?.channel,
              })
            }>
            {item?.channel}
          </Text>
          <Text style={styles.views}>{numberFormat(item?.views)}</Text>
        </View>
        <Pressable style={styles.menu} onPress={() => setOptionModal(true)}>
          <Icon name="ellipsis-vertical" size={24} color="#212121" />
        </Pressable>
      </Pressable>
    );
  };

  return (
    <View>
      <VirtualizedList
        data={Videos}
        getItemCount={() => Videos.length}
        getItem={(item, index) => item[index]}
        contentContainerStyle={styles.container}
        renderItem={renderItem}
        keyExtractor={(item, index) => index?.toString()}
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  videoTile: {
    marginVertical: 6,
    marginHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  thumbnail: {
    width: 180,
    height: 100,
    borderRadius: 10,
  },
  descContainer: {
    marginHorizontal: 8,
    width: '43%',
  },
  title: {
    fontFamily: 'Roboto-Medium',
    fontSize: 14,
    color: '#040201',
  },
  channelTitle: {
    fontFamily: 'Roboto-Light',
    fontSize: 13,
    color: '#04abf2',
  },
  views: {
    fontFamily: 'Roboto-Light',
    fontSize: 14,
    color: '#606060',
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
  buttonText: {
    fontFamily: 'Roboto-Light',
    fontSize: 18,
    marginHorizontal: 6,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: 8,
  },
});

export default VideosScreen;
