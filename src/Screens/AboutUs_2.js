import React from 'react';
import {
  View,
  Linking,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
} from 'react-native';
import {KText} from '../Modules';
import Icon from 'react-native-vector-icons/Ionicons';

const RowComp = props => {
  const {count, desc} = props;
  return (
    <View style={styles.rowComp}>
      <KText style={styles.counter} text={count} suffix={'+'} />
      <Text numberOfLines={2} style={styles.option}>
        {desc}
      </Text>
    </View>
  );
};

const AboutComp = props => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}>
      <Text style={styles.heading}>About us</Text>
      <Text style={styles.headingDesc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Text>
      <View style={styles.card}>
        <Text style={styles.cardText}>Videos for all</Text>
      </View>
      <View style={styles.row}>
        <RowComp count={200000000} desc="Users" />
        <RowComp count={1600000} desc="Paid subscribers" />
      </View>
      <View style={styles.row}>
        <RowComp count={100000000} desc="Total videos" />
        <RowComp count={154000} desc="New videos uploaded daily" />
      </View>
      <View style={styles.paraContainer}>
        <Text style={styles.leftHeading}>The story behind</Text>
        <Text style={styles.para}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </Text>
      </View>
      <View style={styles.paraContainer}>
        <Text style={styles.rightHeading}>Created with love</Text>
        <Text style={styles.para}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.heading}>Reach out to me</Text>
        <View style={styles.footerRow}>
          <Pressable onPress={() => Linking.openURL('tel: +923212325161')}>
            <Icon name="call-outline" color="#ffba00" size={38} />
          </Pressable>
          <Pressable
            onPress={() =>
              Linking.openURL('mailto: anwerthesolangi@gmail.com')
            }>
            <Icon name="mail-outline" color="#14c192" size={38} />
          </Pressable>
          <Pressable
            onPress={() =>
              Linking.openURL(
                `whatsapp://send?phone=${+923212325161}&text=${'Hey there opened whatsapp for you'}`,
              )
            }>
            <Icon name="logo-whatsapp" color="#4FCE5D" size={38} />
          </Pressable>
        </View>
      </View>
    </ScrollView>
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
  heading: {
    fontFamily: 'Roboto-Medium',
    fontSize: 32,
    color: '#212121',
    textAlign: 'center',
  },
  leftHeading: {
    fontFamily: 'Roboto-Medium',
    fontSize: 32,
    color: '#212121',
  },
  rightHeading: {
    fontFamily: 'Roboto-Medium',
    fontSize: 32,
    color: '#212121',
    textAlign: 'right',
  },
  headingDesc: {
    fontFamily: 'Roboto-Medium',
    fontSize: 15,
    color: '#303b4a',
    textAlign: 'center',
    marginHorizontal: 3,
  },
  card: {
    backgroundColor: '#2d8fff',
    width: '100%',
    height: 80,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 12,
  },
  cardText: {
    color: '#fff',
    fontFamily: 'Roboto-Medium',
    fontSize: 24,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginHorizontal: 15,
    marginVertical: 10,
  },
  rowComp: {
    alignItems: 'center',
    width: '80%',
  },
  counter: {
    color: '#1a2e3b',
    fontSize: 28,
    fontFamily: 'Roboto-Medium',
  },
  option: {
    color: '#192e3b',
    fontSize: 16,
    fontFamily: 'Roboto-Medium',
    textAlign: 'center',
    flexShrink: 1,
    width: '50%',
  },
  paraContainer: {
    margin: 10,
  },
  para: {
    fontFamily: 'Roboto-Medium',
    fontSize: 13.5,
    color: '#212121',
    flexShrink: 1,
  },
  footer: {
    alignItems: 'center',
  },
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '60%',
    marginHorizontal: 12,
    marginBottom: 18,
    marginTop: 10,
  },
});

export default AboutComp;
