import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  VirtualizedList,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {widthPercentageToDP} from '../Utils/DpToPixel';
import {Loader} from '../Modules';
import Data from '../Utils/Notifications';

const Notifications = props => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    const getWords = () => {
      if (isMounted && data === null) {
        setData(Data);
        setIsLoading(false);
      }
    };
    getWords();
    return () => {
      isMounted = false;
    };
  }, [isLoading, data]);

  if (isLoading) {
    return <Loader />;
  }

  const WordComp = ({item}) => {
    return (
      <Pressable style={styles.notificationContainer}>
        <Image source={{uri: item?.channelAvtar}} style={styles.avtar} />
        <Text numberOfLines={2} style={styles.title}>
          {item?.notification}
        </Text>
        <Image
          source={{uri: item?.image}}
          style={styles.thumbnail}
          resizeMode="cover"
        />
      </Pressable>
    );
  };

  const EmptyComp = () => {
    return (
      <View style={styles.emptyContainer}>
        <Icon name="notifications-outline" color="#192948" size={150} />
        <Text style={styles.emptyHeading}>Your notifications livehere</Text>
        <Text style={styles.emptyText}>
          Follow your favorite channels, or upload your favorite videos to get
          latest notifications here
        </Text>
      </View>
    );
  };

  return (
    <VirtualizedList
      data={data}
      style={styles.container}
      getItemCount={() => data.length}
      getItem={(item, index) => item[index]}
      renderItem={WordComp}
      keyExtractor={(item, index) => index?.toString()}
      ListEmptyComponent={EmptyComp}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  notificationContainer: {
    flexDirection: 'row',
    marginHorizontal: 8,
    alignItems: 'center',
    marginVertical: 10,
  },
  title: {
    fontFamily: 'Roboto-Medium',
    color: '#212121',
    fontSize: 15,
    marginHorizontal: 8,
    width: widthPercentageToDP('50'),
  },
  avtar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  thumbnail: {
    width: 120,
    height: 65,
    borderRadius: 3,
  },
  emptyContainer: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyHeading: {
    color: '#181818',
    fontFamily: 'Roboto-Medium',
    fontSize: 24,
  },
  emptyText: {
    color: '#606060',
    fontFamily: 'Roboto-Medium',
    fontSize: 15,
    textAlign: 'center',
    marginHorizontal: 10,
  },
});

export default Notifications;
