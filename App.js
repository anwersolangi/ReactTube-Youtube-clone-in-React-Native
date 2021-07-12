import {Image, StyleSheet, TouchableOpacity, View, Text} from 'react-native';

import HomeScreen from './src/Screens/HomeScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from './src/Screens/SplashScreen';
import Explore from './src/Screens/Explore';
import Player from './src/Screens/Player';
import ChannelScreen from './src/Screens/Channel';
import AboutScreen from './src/Screens/About';
import Videos from './src/Screens/Videos';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import UserScreen from './src/Screens/User';
import UserData from './src/Utils/User.json';
import EditVideo from './src/Screens/EditVideo';
import UserVideo from './src/Screens/UserVideo';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const TopBar = createMaterialTopTabNavigator();

const MainTabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          position: 'absolute',
          elevation: 0,
          shadowOpacity: 0,
          borderTopWidth: 0.5,
          bottom: 0,
          height: 48,
        },
        labelStyle: {
          fontFamily: 'Roboto-Light',
          fontSize: 12,
        },
        activeTintColor: '#000',
      }}
      initialRouteName="SplashScreen"
      backBehavior="history">
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: tabInfo => (
            <Icon
              name={tabInfo.focused ? 'home' : 'home-outline'}
              size={25}
              color="#282828"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          tabBarLabel: 'Explore',
          tabBarIcon: tabInfo => (
            <Icon
              name={tabInfo.focused ? 'compass' : 'compass-outline'}
              size={25}
              color="#282828"
            />
          ),
        }}
      />
      <Tab.Screen
        name="User"
        component={UserChannel}
        options={{
          tabBarLabel: 'User',
          tabBarIcon: tabInfo => (
            <Image source={{uri: UserData?.avtar}} style={styles.tabAvtar} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const ChannelStack = () => {
  return (
    <TopBar.Navigator
      backBehavior="history"
      tabBarOptions={{
        activeTintColor: '#040201',
        labelStyle: {
          fontFamily: 'Roboto-Medium',
          fontSize: 16,
        },
        indicatorStyle: {
          backgroundColor: '#040201',
        },
      }}>
      <TopBar.Screen name="Home" component={ChannelScreen} />
      <TopBar.Screen name="Videos" component={Videos} />
      <TopBar.Screen name="About" component={AboutScreen} />
    </TopBar.Navigator>
  );
};

function UserChannel() {
  return (
    <TopBar.Navigator
      lazy
      removeClippedSubviews={false}
      backBehavior="history"
      tabBarOptions={{
        style: {
          borderBottomWidth: 0,
        },
        activeTintColor: '#212121',
        labelStyle: {
          fontFamily: 'Roboto-Medium',
          fontSize: 15,
        },
        indicatorStyle: {
          backgroundColor: '#212121',
        },
      }}>
      <TopBar.Screen name="User" component={UserScreen} />
      <TopBar.Screen name="Video" component={UserVideo} />
      <TopBar.Screen name="About" component={AboutScreen} />
    </TopBar.Navigator>
  );
}

const App = props => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Main"
          component={MainTabs}
          options={({navigation, roue}) => ({
            headerStyle: {
              height: 45,
            },
            headerTitleAlign: 'left',
            headerTitle: () => (
              <Image
                source={require('./assets/logo.png')}
                style={styles.logo}
                resizeMode="contain"
              />
            ),
            headerRight: () => (
              <View style={styles.homeRight}>
                <TouchableOpacity style={styles.rightButton}>
                  <Icon
                    name="notifications-outline"
                    color="#282828"
                    size={26}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.rightButton}>
                  <Icon name="search-outline" color="#282828" size={26} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.rightButton}>
                  <Image
                    source={{
                      uri: 'https://avatars.githubusercontent.com/u/37410529?v=4',
                    }}
                    style={styles.channelAvtar}
                  />
                </TouchableOpacity>
              </View>
            ),
          })}
        />
        <Stack.Screen
          name="Player"
          component={Player}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ChannelScreen"
          initialParams={{optionsModal: false}}
          component={ChannelStack}
          options={({navigation, route}) => ({
            headerStyle: {
              height: 45,
            },
            headerTitleAlign: 'left',
            headerTitle: () => (
              <Text style={styles.channelName}>
                {route?.params.channelName}
              </Text>
            ),
          })}
        />
        <Stack.Screen
          name="EditVideo"
          initialParams={{optionsModal: false}}
          component={EditVideo}
          options={({navigation, route}) => ({
            headerStyle: {
              height: 45,
            },
            headerTitleAlign: 'left',
            headerTitle: () => (
              <Text style={styles.channelName}>{route?.params.videoTitle}</Text>
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 90,
  },
  homeRight: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    justifyContent: 'space-around',
  },
  channelAvtar: {
    width: 28,
    height: 28,
    borderRadius: 28 / 2,
  },
  rightButton: {
    marginHorizontal: 8,
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
  },
  channelName: {
    fontFamily: 'Roboto-Medium',
    fontSize: 17.5,
    color: '#040201',
  },
  channelButton: {
    marginHorizontal: 3,
    alignSelf: 'center',
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
  },
  tabAvtar: {
    width: 20,
    height: 20,
    borderRadius: 10,
  },
});

export default App;
