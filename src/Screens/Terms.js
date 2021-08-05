import dayjs from 'dayjs';
import React from 'react';
import {View, ScrollView, Text, StyleSheet} from 'react-native';

const PrivacyPolicy = props => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}>
      <Text style={styles.heading}>Terms & Conditions</Text>
      <Text style={styles.title}>Write your Terms Of Use here.?</Text>
      <View style={styles.paraContainer}>
        <Text style={styles.para}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis sdnostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </View>

      <Text style={styles.title}>When do we share personal data?</Text>
      <View style={styles.paraContainer}>
        <Text style={styles.para}>
          Explain that you will treat personal data confidentially and describe
          the circumstances when you might disclose or share it. Eg, when
          necessary to provide your services or conduct your business
          operations, as outlined in your purposes for processing. You should
          provide information on: how you will share the data what safeguards
          you will have in place what parties you may share the data with and
          why
        </Text>
      </View>
      <Text style={styles.title}>
        How long do we keep your personal data for?
      </Text>
      <View style={styles.paraContainer}>
        <Text style={styles.para}>
          Provide specific information on the length of time you will keep the
          information for in relation to each processing purpose. The GDPR
          requires you to retain data for no longer than reasonably necessary.
          Include details of your data or records retention schedules, or link
          to additional resources where these are published.
        </Text>
      </View>
      <Text style={styles.lastUpdate}>
        Last Updated: {dayjs(new Date()).format('YYYY MMMM DD')}
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    marginHorizontal: 14,
  },
  heading: {
    color: '#1a1816',
    fontFamily: 'Roboto-Black',
    fontSize: 40,
  },
  title: {
    color: '#212121',
    fontFamily: 'Roboto-Medium',
    fontSize: 22,
    marginVertical: 8,
  },
  paraContainer: {
    backgroundColor: '#f8f6f5',
    padding: 10,
    borderRadius: 8,
  },
  para: {
    fontFamily: 'Roboto-Medium',
    fontSize: 14.5,
    color: '#212121',
    textAlign: 'justify',
  },
  lastUpdate: {
    color: '#979797',
    fontFamily: 'Roboto-Medium',
    fontSize: 15,
    marginVertical: 10,
  },
});

export default PrivacyPolicy;
