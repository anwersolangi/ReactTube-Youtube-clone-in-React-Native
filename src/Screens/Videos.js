import React from 'react';
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

const VideosScreen = props => {
  return (
    <VirtualizedList
      data={Videos}
      getItemCount={() => Videos.length}
      getItem={(item, index) => item[index]}
      contentContainerStyle={styles.container}
      renderItem={({item}) => {
        return (
          <Pressable style={styles.videoTile}>
            <Image
              source={{
                uri: `http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/${item?.thumb}`,
              }}
              style={styles.thumbnail}
            />
            <View style={styles.descContainer}>
              <Text style={styles.title} numberOfLines={2}>
                {item?.title}
              </Text>
              <Text style={styles.channelTitle} numberOfLines={1}>
                {item?.channel}
              </Text>
              <Text style={styles.views}>{numberFormat(item?.views)}</Text>
            </View>
            <Pressable style={styles.menu}>
              <Icon name="ellipsis-vertical" size={24} color="#212121" />
            </Pressable>
          </Pressable>
        );
      }}
      keyExtractor={(item, index) => index?.toString()}
    />
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
});

export default VideosScreen;
