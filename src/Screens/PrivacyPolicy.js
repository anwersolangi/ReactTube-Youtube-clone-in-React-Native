import React from 'react';
import {View, ScrollView, Text, StyleSheet} from 'react-native';

const PrivacyPolicy = props => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}>
      <Text style={styles.heading}>Privacy policy</Text>
      <Text style={styles.title}>Who we are?</Text>
      <View style={styles.paraContainer}>
        <Text style={styles.para}>
          Provide name and contact details of the data controller. This will
          typically be your business or you, if you are a sole trader. Where
          applicable, you should include the identity and contact details of the
          controller’s representative and/or the data protection officer.
        </Text>
      </View>
      <Text style={styles.title}>What information do we collect?</Text>
      <View style={styles.paraContainer}>
        <Text style={styles.para}>
          Specify the types of personal information you collect, eg names,
          addresses, user names, etc. You should include specific details on:
          how you collect data (eg when a user registers, purchases or uses your
          services, completes a contact form, signs up to a newsletter, etc)
          what specific data you collect through each of the data collection
          method if you collect data from third parties, you must specify
          categories of data and source if you process sensitive personal data
          or financial information, and how you handle this {'\n\n'}You may want
          to provide the user with relevant definitions in relation to personal
          data and sensitive personal data.
        </Text>
      </View>
      <Text style={styles.title}>How do we use personal information?</Text>
      <View style={styles.paraContainer}>
        <Text style={styles.para}>
          Describe in detail all the service- and business-related purposes for
          which you will process data. For example, this may include things
          like: personalisation of content, business information or user
          experience account set up and administration delivering marketing and
          events communication carrying out polls and surveys internal research
          and development purposes providing goods and services legal
          obligations (eg prevention of fraud) meeting internal audit
          requirements
          {'\n\n'}Please note this list is not exhaustive. You will need to
          record all purposes for which you process personal data.
        </Text>
      </View>
      <Text style={styles.title}>
        What legal basis do we have for processing your personal data?
      </Text>
      <View style={styles.paraContainer}>
        <Text style={styles.para}>
          Describe the relevant processing conditions contained within the GDPR.
          There are six possible legal grounds: consent contract legitimate
          interests vital interests public task legal obligation
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
      <Text style={styles.title}>Your rights in relation to personal data</Text>
      <View style={styles.paraContainer}>
        <Text style={styles.para}>
          Under the GDPR, you must respect the right of data subjects to access
          and control their personal data. In your privacy notice, you must
          outline their rights in respect of: access to personal information
          correction and deletion withdrawal of consent (if processing data on
          condition of consent) data portability restriction of processing and
          objection lodging a complaint with the Information Commissioner’s
          Office You should explain how individuals can exercise their rights,
          and how you plan to respond to subject data requests. State if any
          relevant exemptions may apply and set out any identity verifications
          procedures you may rely on. Include details of the circumstances where
          data subject rights may be limited, eg if fulfilling the data subject
          request may expose personal data about another person, or if you’re
          asked to delete data which you are required to keep by law.
        </Text>
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
});

export default PrivacyPolicy;
