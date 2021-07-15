import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  ActivityIndicator,
  StyleSheet,
  Dimensions,
  Pressable,
  ScrollView,
} from 'react-native';
import Videos from '../Utils/HomeData.json';
import Icon from 'react-native-vector-icons/Ionicons';
import {Loader} from '../Modules';

const {height} = Dimensions.get('window');

const Component = ({onPress, thumbnail, text, icon, videos}) => {
  return (
    <Pressable onPress={onPress}>
      <ImageBackground
        source={{uri: thumbnail}}
        style={styles.background}
        resizeMode="cover">
        <View style={styles.overlay} />
        <View style={styles.descContainer}>
          <Icon name={icon} color="#fff" size={32} />
          {videos && (
            <View>
              <Text style={styles.title}>{text}</Text>
              <Text style={styles.totalVideos}>{`${videos} Videos`}</Text>
            </View>
          )}
          <View />
        </View>
      </ImageBackground>
    </Pressable>
  );
};

const Library = props => {
  const [subscription, setSubscription] = useState(null);
  const [watchLater, setWatchLater] = useState(null);
  const [recentWatch, setRecentWatch] = useState(null);
  const [downloads, setDownloads] = useState(null);
  const [likedVideos, setLikedVideos] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [thumbLink] = useState(
    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/',
  );

  useEffect(() => {
    let isMounted = true;
    const setStates = () => {
      if (isMounted) {
        setSubscription(Videos[Math.floor(Math.random() * Videos.length)]);
        setWatchLater(Videos[Math.floor(Math.random() * Videos.length)]);
        setDownloads(Videos[Math.floor(Math.random() * Videos.length)]);
        setLikedVideos(Videos[Math.floor(Math.random() * Videos.length)]);
        setRecentWatch(Videos[Math.floor(Math.random() * Videos.length)]);
        setIsLoading(false);
      }
    };
    setStates();
    return () => {
      isMounted = false;
    };
  }, []);

  const screenNavigator = screenTitle => {
    props.navigation.navigate('VideosScreen', {
      screenName: screenTitle,
      listId: 1,
    });
  };

  if (isLoading) {
    return (
      <View>
        <ActivityIndicator size="large" color="#212121" />
      </View>
    );
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}>
      <Component
        thumbnail={thumbLink + subscription?.thumb}
        text="Following"
        icon="checkmark-done-outline"
        videos={12}
        onPress={() => screenNavigator('Following')}
      />
      <Component
        thumbnail={thumbLink + watchLater?.thumb}
        text="Watch Later"
        icon="time-outline"
        videos={12}
        onPress={() => screenNavigator('Watch Later')}
      />
      <Component
        thumbnail={thumbLink + recentWatch?.thumb}
        text="Recently Watched"
        icon="calendar-outline"
        videos={12}
        onPress={() => screenNavigator('Recently Watched')}
      />
      <Component
        thumbnail={thumbLink + downloads?.thumb}
        text="Downloaded"
        icon="download-outline"
        videos={12}
        onPress={() => screenNavigator('Downloading')}
      />
      <Component
        thumbnail={thumbLink + likedVideos?.thumb}
        text="Liked"
        icon="heart-outline"
        videos={12}
        onPress={() => screenNavigator('Liked')}
      />
      <View style={styles.space} />
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
  loaderContainer: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    width: '100%',
    height: height / 5,
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'Roboto-Medium',
    fontSize: 25,
    color: '#fff',
    marginHorizontal: 8,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  descContainer: {
    marginHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  totalVideos: {
    color: '#04abf2',
    fontFamily: 'Roboto-Medium',
    fontSize: 15,
    marginHorizontal: 10,
  },
  space: {
    height: 48,
  },
});

export default Library;
