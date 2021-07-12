import React, {useCallback, useState} from 'react';
import {
  View,
  Text,
  VirtualizedList,
  Image,
  StyleSheet,
  Pressable,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import VideoData from '../Utils/HomeData.json';
import Icon from 'react-native-vector-icons/Ionicons';
import {heightPercentageToDP, widthPercentageToDP} from '../Utils/DpToPixel';
import BottomModal from '../Modules/BottomModal';
import {Description} from '../Screens/Channel';
import {PieChart} from 'react-native-chart-kit';

const ModalOption = props => {
  const {selected, icon, text, onPress} = props;
  return (
    <TouchableOpacity
      style={selected ? styles.selectedOption : styles.modalHead}
      onPress={onPress}>
      <View style={selected ? styles.selectedIcon : styles.iconContain}>
        <Icon
          name={selected ? 'checkmark' : icon}
          size={22}
          color={selected ? 'white' : '#04abf2'}
        />
      </View>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const BarChart = props => {
  const {data, accessor} = props;
  const getNumbersFromArray = data.map(a => a[accessor]);
  const getTotal = getNumbersFromArray.reduce((a, b) => {
    return a + b;
  }, 0);
  return data.map(item => {
    const percent = `${Math.round((item[accessor] / getTotal) * 100)}%`;
    return (
      <View style={styles.barChartContainer} key={item?.id}>
        <Text style={styles.barText}>{item?.name}</Text>
        <View style={styles.bar}>
          <View
            style={{
              ...styles.filled,
              width: percent,
            }}
          />
        </View>
        <Text>{percent}</Text>
      </View>
    );
  });
};

const UserVideo = props => {
  const [modal, setModal] = useState(false);
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(null);
  const [selectedModalValue, setSelectedModalValue] = useState('lifetime');
  const [selectedModal, setSelectedModal] = useState(false);

  const chartConfig = {
    decimalPlaces: 0, // optional, defaults to 2dp
    fillShadowGradient: '#04abf2',
    fillShadowGradientOpacity: 1,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16,
    },
  };

  const trafficSourceData = [
    {
      name: 'App search',
      views: 307,
      color: 'rgba(0, 113, 209, 1)',
      legendFontFamily: 'Roboto-Medium',
      legendFontColor: '#7F7F7F',
      legendFontSize: 14,
    },
    {
      name: 'Direct or unknown',
      views: 25,
      color: 'rgba(99, 179, 0, 1)',
      legendFontFamily: 'Roboto-Medium',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'External',
      views: 17,
      color: 'rgba(230, 153, 14, 1)',
      legendFontFamily: 'Roboto-Medium',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Suggested Videos',
      views: 3,
      color: '#9b59b6',
      legendFontFamily: 'Roboto-Medium',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Channel Page',
      views: 2,
      color: '#1abc9c',
      legendFontFamily: 'Roboto-Medium',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
  ];

  const genderData = [
    {
      name: 'Men',
      counts: 1000,
      color: '#0095f6',
      legendFontFamily: 'Roboto-Medium',
      legendFontColor: '#7F7F7F',
      legendFontSize: 16,
    },
    {
      name: 'Women',
      counts: 720,
      color: '#00376b',
      legendFontFamily: 'Roboto-Medium',
      legendFontColor: '#7F7F7F',
      legendFontSize: 16,
    },
  ];

  const topLocation = [
    {
      id: 1,
      name: 'Pakisan',
      counts: 5172,
    },
    {
      id: 2,
      name: 'UAE',
      counts: 412,
    },
    {
      id: 3,
      name: 'USA',
      counts: 846,
    },
    {
      id: 4,
      name: 'India',
      counts: 12,
    },
  ];

  const onClick = index => {
    setSelectedVideoIndex(index);
    setModal(true);
    return;
  };

  const dismiss = () => {
    setModal(false);
    setSelectedVideoIndex(null);
  };

  const selectedVal = useCallback(() => {
    return selectedModalValue === 'lifetime'
      ? 'Lifetime'
      : selectedModalValue === 'month'
      ? 'Month'
      : 'Weekly';
  }, [selectedModalValue]);

  const getCount = useCallback(() => {
    return selectedModalValue === 'lifetime'
      ? VideoData[selectedVideoIndex]?.lifeTimeEarning
      : selectedModalValue === 'month'
      ? VideoData[selectedVideoIndex]?.monthEarning
      : VideoData[selectedVideoIndex]?.weekEarning;
  }, [selectedModalValue, selectedVideoIndex]);

  const setVal = val => {
    setSelectedModalValue(val);
    setSelectedModal(false);
  };

  const editHandler = () => {
    setModal(false);
    props.navigation.navigate('EditVideo', {
      videoTitle: VideoData[selectedVideoIndex]?.title,
      index: selectedVideoIndex,
    });
  };

  return (
    <View style={styles.container}>
      <VirtualizedList
        data={VideoData}
        getItem={(item, index) => item[index]}
        getItemCount={() => VideoData.length}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => {
          return (
            <Pressable
              onPress={() => onClick(index)}
              style={styles.videoContainer}>
              <Image
                source={{
                  uri: `http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/${item?.thumb}`,
                }}
                resizeMode="cover"
                style={styles.thumbnail}
              />
              <View style={styles.detailContainer}>
                <View style={styles.titleContainer}>
                  <Text style={styles.listVideoTitle} numberOfLines={2}>
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
              </View>
            </Pressable>
          );
        }}
        ItemSeparatorComponent={() => <View style={styles.seperator} />}
      />
      <BottomModal scrollView isVisible={modal} dismiss={dismiss}>
        <ScrollView style={{flex: 1}} contentContainerStyle={{flexGrow: 1}}>
          <View style={styles.heading}>
            <Text
              style={
                styles.modalHeading
              }>{`${VideoData[selectedVideoIndex]?.title}: Insight `}</Text>
            <TouchableOpacity onPress={editHandler}>
              <Icon name="pencil-outline" color="#212121" size={28} />
            </TouchableOpacity>
          </View>
          <View style={styles.modalShadow} />
          <View style={styles.modalDetail}>
            <Description
              count={VideoData[selectedVideoIndex]?.likes}
              icon="heart"
            />
            <Description
              count={VideoData[selectedVideoIndex]?.dislikes}
              icon="heart-dislike"
            />
            <Description
              count={VideoData[selectedVideoIndex]?.totalDownloads}
              icon="download"
            />
            <Description
              head={VideoData[selectedVideoIndex]?.totalShare}
              icon="share-social"
            />
          </View>
          <View style={styles.modalShadow} />
          <View style={styles.modalTile}>
            <View style={styles.heading}>
              <Text style={styles.title}>Overview:</Text>
              <Pressable
                style={styles.optionSelect}
                onPress={() => setSelectedModal(true)}>
                <Text style={styles.optionText}>{selectedVal()}</Text>
              </Pressable>
            </View>
            <View style={styles.modalDetail}>
              <Description head={getCount()} title="Earning" />
              <Description count={1248123} title="Views" />
              <Description count={3475687} title="Watch Hours" />
            </View>
            <View style={styles.modalShadow} />
            <Text style={styles.title}>Traffic source: </Text>
            <PieChart
              data={trafficSourceData}
              width={widthPercentageToDP('85%')}
              height={230}
              chartConfig={chartConfig}
              accessor={'views'}
              backgroundColor={'transparent'}
              paddingLeft={'10'}
              center={[0, 5]}
            />
            <View style={styles.modalShadow} />
            <Text style={styles.title}>Audience: </Text>
            <PieChart
              data={genderData}
              width={widthPercentageToDP('89%')}
              height={230}
              chartConfig={chartConfig}
              accessor={'counts'}
              backgroundColor={'transparent'}
              paddingLeft={'15'}
            />
            <View style={styles.modalShadow} />
            <Text style={styles.title}>Top Locations:</Text>
            <BarChart data={topLocation} accessor={'counts'} />
            <View style={styles.modalShadow} />
            <Text style={styles.title}>Description: </Text>
            <Text
              style={styles.description}
              numberOfLines={2}
              ellipsizeMode="tail">
              {VideoData[selectedVideoIndex]?.description}
            </Text>
          </View>
        </ScrollView>
        <BottomModal
          isVisible={selectedModal}
          dismiss={() => setSelectedModal(false)}>
          <View>
            <Text style={styles.modalHeading}>Overview analytics</Text>
            <ModalOption
              text="This Month"
              icon="calendar"
              selected={selectedModalValue === 'month'}
              onPress={() => setVal('month')}
            />
            <ModalOption
              text="This Week"
              icon="calendar"
              selected={selectedModalValue === 'week'}
              onPress={() => setVal('week')}
            />
            <ModalOption
              text="Lifetime"
              icon="calendar"
              selected={selectedModalValue === 'lifetime'}
              onPress={() => setVal('lifetime')}
              s
            />
          </View>
        </BottomModal>
      </BottomModal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  thumbnail: {
    width: '35%',
    height: heightPercentageToDP('10%'),
    borderRadius: 8,
  },
  videoContainer: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 8,
    width: '100%',
    alignItems: 'flex-start',
  },
  detailContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
    marginHorizontal: 10,
    alignItems: 'center',
    width: '48%',
  },
  listVideoTitle: {
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
  modalHeading: {
    fontFamily: 'Roboto-Medium',
    fontSize: 17,
    textAlign: 'center',
  },
  modalShadow: {
    width: '100%',
    borderBottomWidth: 2,
    borderBottomColor: '#e1e1e1',
    marginVertical: 6,
  },
  modalDetail: {
    flexDirection: 'row',
    marginHorizontal: 10,
    width: '90%',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  modalTile: {
    marginVertical: 6,
  },
  heading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '97%',
    marginHorizontal: 10,
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Roboto-Medium',
    fontSize: 17,
    color: '#212121',
    marginHorizontal: 8,
  },
  optionSelect: {
    backgroundColor: '#ecf3fd',
    borderRadius: 7,
    marginHorizontal: 5,
    width: '20%',
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionText: {
    color: '#04abf2',
    fontFamily: 'Roboto-Medium',
    fontSize: 14,
  },
  iconContain: {
    backgroundColor: 'rgba(4, 171, 242, 0.2)',
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  modalHead: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginVertical: 7,
    paddingHorizontal: 12,
    paddingVertical: 5,
  },
  text: {
    fontFamily: 'Roboto-Light',
    fontSize: 17,
    color: '#212121',
  },
  selectedOption: {
    backgroundColor: '#e5effd',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 6,
    marginVertical: 2,
    paddingHorizontal: 12,
  },
  selectedIcon: {
    backgroundColor: '#04abf2',
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  bar: {
    width: '68%',
    height: 20,
    borderRadius: 4,
    backgroundColor: '#f4f4f4',
    marginHorizontal: 13,
  },
  filled: {
    backgroundColor: '#47afff',
    height: 20,
    borderTopStartRadius: 4,
    borderBottomStartRadius: 4,
  },
  barChartContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 8,
    marginVertical: 6,
  },
  barText: {
    fontFamily: 'Roboto-Light',
    fontSize: 17,
    color: '#212121',
    textAlign: 'justify',
    width: '15%',
  },
  description: {
    fontFamily: 'Roboto-Light',
    fontSize: 18,
    marginHorizontal: 10,
    color: '#212121',
  },
});

export default UserVideo;
