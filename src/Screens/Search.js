import {useFocusEffect} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  TextInput,
  VirtualizedList,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {heightPercentageToDP, widthPercentageToDP} from '../Utils/DpToPixel';
import RecentWords from '../Utils/RecentWords';
import {Loader, CoverVideo} from '../Modules';
import Videos from '../Utils/HomeData.json';

const Search = props => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [searchText, setSearchText] = useState('');
  const [searchResult, setSearchResult] = useState(null);

  useEffect(() => {
    let isMounted = true;
    const getWords = () => {
      if (isMounted && data === null) {
        setData(RecentWords);
        setIsLoading(false);
      }
    };
    getWords();
    return () => {
      isMounted = false;
    };
  }, [isLoading, data]);

  const searchResultHandler = () => {
    if (!searchText) {
      return;
    }
    setIsLoading(true);
    try {
      setSearchResult(Videos);
    } catch (err) {
      console.log('Error');
    }
    setIsLoading(false);
    return;
  };

  useFocusEffect(() => {
    props.navigation.setOptions({
      headerTitle: () => (
        <TextInput
          placeholder="Search"
          style={styles.searchInput}
          placeholderTextColor="#696969"
          value={searchText}
          onChangeText={val => setSearchText(val)}
          onSubmitEditing={searchResultHandler}
        />
      ),
      headerRight: headerProps => (
        <TouchableOpacity style={styles.rightButton}>
          <Icon name="mic" color="#282828" size={26} />
        </TouchableOpacity>
      ),
    });
  });

  if (isLoading) {
    return <Loader />;
  }

  const WordComp = ({item}) => {
    return (
      <Pressable style={styles.words}>
        <Icon name="repeat-outline" size={24} color="#212121" />
        <Text style={styles.title}>{item?.word}</Text>
        <Icon name="resize-outline" size={24} color="#212121" />
      </Pressable>
    );
  };

  const VideoComp = ({index, item}) => {
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
      />
    );
  };

  return (
    <View style={styles.container}>
      <VirtualizedList
        data={searchResult ? searchResult : data}
        getItemCount={() => (searchResult ? searchResult.length : data.length)}
        getItem={(item, index) => item[index]}
        renderItem={searchResult ? VideoComp : WordComp}
        keyExtractor={(item, index) => index?.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchInput: {
    width: widthPercentageToDP('72%'),
    backgroundColor: '#f2f2f2',
    height: heightPercentageToDP('5.8%'),
    borderRadius: 5,
    color: '#212121',
    fontFamily: 'Roboto-Medium',
    fontSize: 15,
    paddingHorizontal: 7,
  },
  rightButton: {
    marginHorizontal: 5,
    width: 35,
    height: 35,
    backgroundColor: '#f2f2f2',
    borderRadius: 35 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  words: {
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
    width: widthPercentageToDP('80'),
  },
});

export default Search;
