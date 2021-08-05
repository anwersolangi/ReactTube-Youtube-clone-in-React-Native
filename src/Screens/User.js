import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import UserData from '../Utils/User.json';
import {Description} from '../Screens/Channel';
import {numberSeperator} from '../Utils/Util';
import {LineChart, BarChart} from 'react-native-chart-kit';
import {AllTimes, MonthLabels, WeekLabels} from '../Utils/Labes';
import {heightPercentageToDP, widthPercentageToDP} from '../Utils/DpToPixel';
import Icon from 'react-native-vector-icons/Ionicons';
import {BottomModal, Button} from '../Modules';
import {displayName} from '../../app.json';

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43],
    },
  ],
};

const UserScreen = props => {
  const [viewData, setViewData] = useState('week');
  const [uploadModal, setUploadModal] = useState(false);
  const [noContent, setNoContent] = useState(true);
  const [loggedUser] = useState(true);

  const chartConfig = {
    decimalPlaces: 0, // optional, defaults to 2dp
    color: (opacity = 1) => '#04abf2',
    strokeWidth: 1,
    barPercentage: 0.5,
    fillShadowGradient: '#04abf2',
    fillShadowGradientOpacity: 1,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    height: 5000,
    style: {
      borderRadius: 16,
    },
    propsForBackgroundLines: {
      strokeWidth: 1,
      stroke: '#04abf2',
      strokeDasharray: '0',
    },
  };

  const getWidth = widthData => {
    let width = 96;
    return widthData.length >= 25 ? width + 4 + widthData.length : width;
  };

  if (!loggedUser) {
    return (
      <View style={styles.loginContainer}>
        <Image
          source={require('../../assets/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.loginHeading}>Join the family</Text>
        <Text style={styles.description}>
          Create your {displayName} Account or Login to share your videos with
          the community
        </Text>
        <Button
          title="Register or Login"
          styleProps={styles.loginButton}
          textStyle={styles.loginText}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        <Image source={{uri: UserData?.avtar}} style={styles.avtar} />
        <Text style={styles.name}>{UserData?.name}</Text>
        <Button title="Edit" />
        <View style={styles.channelDescription}>
          <Description
            head={numberSeperator(UserData?.totalFollowers)}
            title="Followers"
          />
          <Text style={styles.divider}>|</Text>
          <Description
            head={`$ ${UserData?.totalEarning}`}
            title="Total Earnings"
          />
          <Text style={styles.divider}>|</Text>
          <Description
            head={numberSeperator(UserData?.totalViews)}
            title="Views"
          />
        </View>
        {noContent ? (
          <View style={styles.noContent}>
            <Image
              source={require('../../assets/noContent.png')}
              style={styles.vector}
              resizeMode="contain"
            />
            <View style={styles.noContentDetail}>
              <Text style={styles.noContentHeading}>No Content available</Text>
              <Button title="Upload Video" />
            </View>
          </View>
        ) : (
          <View>
            <Text style={styles.heading}>Analytics</Text>
            <View style={styles.division}>
              <Text
                style={
                  viewData === 'allTime' ? styles.selectedOption : styles.option
                }
                onPress={() => setViewData('allTime')}>
                All Times
              </Text>
              <Text
                style={
                  viewData === 'month' ? styles.selectedOption : styles.option
                }
                onPress={() => setViewData('month')}>
                This Month
              </Text>
              <Text
                style={
                  viewData === 'week' ? styles.selectedOption : styles.option
                }
                onPress={() => setViewData('week')}>
                This Week
              </Text>
            </View>
            <ScrollView
              horizontal={true}
              contentOffset={
                getWidth(
                  viewData === 'month'
                    ? MonthLabels
                    : viewData === 'week'
                    ? WeekLabels
                    : AllTimes,
                ) < 90
                  ? {x: 10000, y: 0}
                  : {x: 0, y: 0}
              }
              showsHorizontalScrollIndicator={false}>
              <LineChart
                data={{
                  labels:
                    viewData === 'month'
                      ? MonthLabels
                      : viewData === 'week'
                      ? WeekLabels
                      : AllTimes,
                  datasets: [
                    {
                      data:
                        viewData === 'month'
                          ? UserData?.thisMonthsViews
                          : viewData === 'week'
                          ? UserData?.thisWeeksViews
                          : UserData?.allTime,
                    },
                  ],
                }}
                width={widthPercentageToDP(
                  getWidth(
                    viewData === 'month'
                      ? MonthLabels
                      : viewData === 'week'
                      ? WeekLabels
                      : AllTimes,
                  ).toString(),
                )}
                height={240}
                yAxisInterval={1}
                chartConfig={{
                  backgroundColor: '#e26a00',
                  backgroundGradientFrom: '#fb8c00',
                  backgroundGradientTo: '#ffa726',
                  decimalPlaces: 0, // optional, defaults to 2dp
                  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                  labelColor: (opacity = 1) =>
                    `rgba(255, 255, 255, ${opacity})`,
                  style: {
                    borderRadius: 16,
                  },
                  propsForDots: {
                    r: '6',
                    strokeWidth: '2',
                    stroke: '#ffa726',
                  },
                }}
                x
                bezier
                style={styles.chart}
                verticalLabelRotation={340}
              />
            </ScrollView>
            <Text style={styles.heading}>Earning</Text>
            <BarChart
              style={styles.chart}
              data={data}
              width={widthPercentageToDP('96%')}
              height={230}
              yAxisLabel="$"
              chartConfig={chartConfig}
              withInnerLines={false}
            />
            <TouchableOpacity
              style={styles.floatingButton}
              onPress={() => setUploadModal(true)}>
              <Icon name="add-outline" color="#fff" size={28} />
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
      <View style={styles.margin} />
      <BottomModal
        isVisible={uploadModal}
        dismiss={() => setUploadModal(false)}>
        <View>
          <Pressable style={styles.modalOption}>
            <View style={styles.iconStyle}>
              <Icon name="cloud-upload-outline" color="#212121" size={28} />
            </View>
            <Text style={styles.option}>Upload a video</Text>
          </Pressable>
          <Pressable style={styles.modalOption}>
            <View style={styles.iconStyle}>
              <Icon name="radio-outline" color="#212121" size={28} />
            </View>
            <Text style={styles.option}>Go live</Text>
          </Pressable>
        </View>
      </BottomModal>
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
  avtar: {
    height: 90,
    width: 90,
    borderRadius: 90 / 2,
    alignSelf: 'center',
    marginVertical: 10,
  },
  name: {
    fontFamily: 'Roboto-Black',
    fontSize: 20,
    color: '#212121',
    textAlign: 'center',
    letterSpacing: 0.28,
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
  division: {
    flexDirection: 'row',
  },
  option: {
    fontFamily: 'Roboto-Medium',
    fontSize: 14,
    marginHorizontal: 10,
    padding: 8,
    color: '#212121',
  },
  selectedOption: {
    fontFamily: 'Roboto-Medium',
    fontSize: 14,
    backgroundColor: '#ecf3fd',
    color: '#04abf2',
    padding: 8,
    borderRadius: 7,
    marginHorizontal: 10,
  },
  heading: {
    fontFamily: 'Roboto-Medium',
    fontSize: 17,
    padding: 11,
    backgroundColor: '#212121',
    color: '#fff',
    marginVertical: 6,
  },
  floatingButton: {
    backgroundColor: '#04abf2',
    width: 50,
    height: 50,
    borderRadius: 25,
    position: 'absolute',
    marginHorizontal: 10,
    alignItems: 'center',
    bottom: 57,
    right: 10,
    justifyContent: 'center',
  },
  margin: {
    height: 48,
  },
  iconStyle: {
    width: 45,
    height: 45,
    borderRadius: 45 / 2,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalOption: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
    paddingRight: 53,
    marginHorizontal: 7,
  },
  loginContainer: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200,
  },
  loginHeading: {
    fontFamily: 'Roboto-Black',
    color: '#181818',
    fontSize: 29,
  },
  description: {
    fontFamily: 'Roboto-Medium',
    color: '#929292',
    fontSize: 18,
    textAlign: 'center',
  },
  loginButton: {
    backgroundColor: '#00C6FF',
    borderWidth: 0,
    borderRadius: 30,
  },
  loginText: {
    color: '#fff',
  },
  noContent: {
    alignItems: 'center',
  },
  noContentHeading: {
    color: '#606060',
    fontFamily: 'Roboto-Medium',
    fontSize: 17,
  },
  vector: {
    width: widthPercentageToDP('90'),
  },
  noContentDetail: {
    top: -40,
    width: '100%',
    alignItems: 'center',
  },
});

export default UserScreen;
