import React, {useState} from 'react';
import {
  Pressable,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {heightPercentageToDP} from '../Utils/DpToPixel';
import {numberFormat} from '../Utils/Util';
import Loader from './Loading';

const CoverVideo = props => {
  const [isLoading, setIsLoading] = useState(true);

  const {
    onPress,
    thumbnail,
    channelAvtar,
    channelName,
    action,
    title,
    channelAction,
    views,
    uploaded,
  } = props;

  return (
    <Pressable onPress={onPress}>
      {isLoading && <Loader />}
      <Image
        source={{
          uri: thumbnail,
        }}
        onLoad={() => setIsLoading(false)}
        resizeMode="cover"
        style={styles.thumbnail}
      />
      <View style={styles.detailContainer}>
        <Pressable onPress={channelAction}>
          <Image
            style={styles.channelAvtar}
            source={{
              uri: channelAvtar,
            }}
            resizeMode="cover"
          />
        </Pressable>
        <View style={styles.titleContainer}>
          <Text style={styles.videoTitle} numberOfLines={2}>
            {title}
          </Text>
          <Text style={styles.channelName} numberOfLines={2}>
            {`${channelName} . ${numberFormat(views)} views . ${
              uploaded === 'just now' ? 'just now' : `${uploaded} ago`
            }`}
          </Text>
        </View>
        <TouchableOpacity style={styles.menuButton} onPress={action}>
          <Icon name="ellipsis-vertical" size={14} color="#6c6c6c" />
        </TouchableOpacity>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
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
  channelName: {
    color: '#9c9c9c',
  },
  channelAvtar: {
    width: 28,
    height: 28,
    borderRadius: 28 / 2,
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
});

export default CoverVideo;
