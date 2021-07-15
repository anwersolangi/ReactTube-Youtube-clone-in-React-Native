import React, {useState} from 'react';
import {
  View,
  Text,
  VirtualizedList,
  StyleSheet,
  ImageBackground,
  ActivityIndicator,
  Image,
  ScrollView,
  Pressable,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Videos from '../Utils/HomeData.json';
import {IconText} from '../Modules';
import {widthPercentageToDP} from '../Utils/DpToPixel';
import {numberFormat} from '../Utils/Util';

const VideoTile = props => {
  const {thumbnail, title, channel, views, onPress, onChannelPress} = props;
  return (
    <Pressable style={styles.videoView} onPress={onPress}>
      <Image
        source={{
          uri: `http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/${thumbnail}`,
        }}
        style={styles.thumbnail}
        resizeMode="cover"
      />
      <Text style={styles.title}>{title}</Text>
      <Pressable onPress={onChannelPress}>
        <Text style={styles.tileChannel}>{channel}</Text>
      </Pressable>
      <Text style={styles.views}>{`${numberFormat(views)} views`}</Text>
    </Pressable>
  );
};

const ListFooter = ({onPress}) => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.seeMore}>
        <Icon name="add-outline" color="#212121" size={22} />
      </View>
      <Text style={styles.title}>See More</Text>
    </Pressable>
  );
};

const Explore = props => {
  const randomInt = Math.floor(Math.random() * Videos.length);
  const [thumbLoading, setThumbLoading] = useState(true);
  const trendedVideo = Videos[randomInt];
  const slicedData = Videos.slice(0, 6);

  const TrendingItems = ({item}) => {
    return (
      <VideoTile
        title={item?.title}
        channel={item?.channel}
        thumbnail={item?.thumb}
        views={item?.views}
        onChannelPress={() =>
          props.navigation.navigate('ChannelScreen', {
            channelName: item?.channel,
          })
        }
      />
    );
  };

  const Footer = screenTitle => {
    return <ListFooter onPress={() => screenNavigator(screenTitle)} />;
  };

  const screenNavigator = screenTitle => {
    props.navigation.navigate('VideosScreen', {
      screenName: screenTitle,
      listId: 1,
    });
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}>
      <ImageBackground
        source={{
          uri: `http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/${trendedVideo?.thumb}`,
        }}
        resizeMode="cover"
        style={styles.trendThumb}
        onLoad={() => setThumbLoading(false)}>
        {thumbLoading && <ActivityIndicator size="large" color="#fff" />}
        <View style={styles.overlay} />
        <View style={styles.trendContainer}>
          <View style={styles.row}>
            <Image
              source={{
                uri: 'https://s3.envato.com/files/335035895/thumbnail.png',
              }}
              style={styles.trendAvtar}
              resizeMode="cover"
            />
            <Text style={styles.channelName}>{trendedVideo?.channel}</Text>
          </View>
          <Icon name="flame" size={28} color="#ff9f00" />
        </View>
        <View style={styles.trendTitleContainer}>
          <Text style={styles.trendedVideoTitle}>{trendedVideo?.title}</Text>
          <Text style={styles.channelName}>#trending</Text>
        </View>
      </ImageBackground>
      <View style={styles.videosContainer}>
        <IconText
          icon="flame"
          text="Trending"
          iconColor="#04abf2"
          onPress={() => screenNavigator('Trending')}
        />
        <VirtualizedList
          horizontal
          data={slicedData}
          getItem={(item, index) => item[index]}
          getItemCount={() => slicedData.length}
          renderItem={TrendingItems}
          removeClippedSubviews
          maxToRenderPerBatch={3}
          initialNumToRender={5}
          ListFooterComponentStyle={styles.footer}
          ListFooterComponent={() => Footer('Trending')}
          keyExtractor={(item, index) => index.toString()}
        />
        <View style={styles.space} />
        <IconText
          icon="videocam-outline"
          text="Latest videos"
          iconColor="#ff9f00"
          onPress={() => screenNavigator('Latest videos')}
        />
        <VirtualizedList
          horizontal
          data={slicedData}
          getItem={(item, index) => item[index]}
          getItemCount={() => slicedData.length}
          renderItem={TrendingItems}
          removeClippedSubviews
          maxToRenderPerBatch={3}
          initialNumToRender={5}
          ListFooterComponentStyle={styles.footer}
          ListFooterComponent={() => Footer('Latest videos')}
          keyExtractor={(item, index) => index.toString()}
        />
        <View style={styles.space} />
        <IconText
          icon="film-outline"
          text="FILM & ANIMATION"
          iconColor="#ff9f00"
          onPress={() => screenNavigator('FILM & ANIMATION')}
        />
        <VirtualizedList
          horizontal
          data={slicedData}
          getItem={(item, index) => item[index]}
          getItemCount={() => slicedData.length}
          renderItem={TrendingItems}
          removeClippedSubviews
          maxToRenderPerBatch={3}
          initialNumToRender={5}
          ListFooterComponentStyle={styles.footer}
          ListFooterComponent={() => Footer('Films & Animations')}
          keyExtractor={(item, index) => index.toString()}
        />
        <View style={styles.space} />
        <IconText
          icon="musical-notes-outline"
          text="Music"
          iconColor="#ff9f00"
          onPress={() => screenNavigator('Music')}
        />
        <VirtualizedList
          horizontal
          data={slicedData}
          style={styles.listStyle}
          getItem={(item, index) => item[index]}
          getItemCount={() => slicedData.length}
          renderItem={TrendingItems}
          removeClippedSubviews
          maxToRenderPerBatch={3}
          initialNumToRender={5}
          ListFooterComponentStyle={styles.footer}
          ListFooterComponent={() => Footer('Music')}
          keyExtractor={(item, index) => index.toString()}
        />
        <View style={styles.bottom} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
    backgroundColor: '#fff',
  },
  trendThumb: {
    height: 220,
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  trendAvtar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  trendContainer: {
    flexDirection: 'row',
    marginHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  channelName: {
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
    color: '#fff',
    marginHorizontal: 6,
  },
  trendTitleContainer: {
    flexDirection: 'row',
    marginHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  trendedVideoTitle: {
    fontFamily: 'Roboto-Medium',
    fontSize: 15,
    color: '#fff',
  },
  videosContainer: {
    marginVertical: 12,
  },
  thumbnail: {
    width: 148,
    height: 83,
    borderRadius: 10,
  },
  videoView: {
    marginHorizontal: 5,
    width: widthPercentageToDP('35'),
  },
  title: {
    fontFamily: 'Roboto-Medium',
    fontSize: 14.5,
    color: '#212121',
  },
  tileChannel: {
    color: '#04abf2',
    fontFamily: 'Roboto-Medium',
    fontSize: 13,
  },
  footer: {
    marginHorizontal: 5,
    top: 15,
  },
  seeMore: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#212121',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  space: {
    height: 8,
    marginVertical: 5,
  },
  bottom: {
    height: 48,
  },
});

export default Explore;
