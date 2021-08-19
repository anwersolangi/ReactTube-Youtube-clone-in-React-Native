import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  ScrollView,
  Linking,
  TextInput,
  VirtualizedList,
} from 'react-native';
import {getMonthString, numberSeperator} from '../Utils/Util';
import User from '../Utils/User.json';
import Icon from 'react-native-vector-icons/Ionicons';
import dayjs from 'dayjs';
import {BottomModal, Button, Alert} from '../Modules';
import DateTimePicker from '@react-native-community/datetimepicker';
import Countries from '../Utils/countries.json';

const Option = ({icon, text, onPress}) => {
  return (
    <Pressable style={styles.optionContainer} onPress={onPress}>
      <View style={styles.iconContainer}>
        <Icon name={icon} color="#fff" size={22} style={styles.icon} />
      </View>
      <Text style={styles.optionText}>{text}</Text>
    </Pressable>
  );
};

const PayOption = ({logo, payer, min, onPress}) => {
  return (
    <Pressable style={styles.payOption} onPress={onPress}>
      <Image source={logo} style={styles.logo} resizeMode="contain" />
      <Text style={styles.payer}>{payer}</Text>
      <Text style={styles.minPay}>Min ${min}</Text>
    </Pressable>
  );
};

const LastPay = ({amount, method, date}) => {
  return (
    <View style={styles.transHistory}>
      <Text style={styles.transactionText}>{amount}</Text>
      <Text style={styles.transactionText}>{method}</Text>
      <Text style={styles.transactionText}>{date}</Text>
    </View>
  );
};

const Earnings = props => {
  const [datePicker, setDatePicker] = useState(false);
  const [date, setDate] = useState(new Date(1598051730000));
  const [bottomModal, setBottomModal] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('pk');
  const [countryPicker, setCountryPicker] = useState(false);
  const [isBankContent, setIsBankContent] = useState(false);
  const [flagLink] = useState(
    'https://raw.githubusercontent.com/stefangabos/world_countries/master/flags/32x32/',
  );

  const onChange = (event, selectedDate) => {
    if (event.type === 'dismissed') {
      setDatePicker(false);
      return;
    }
    const currentDate = selectedDate || date;
    setDate(currentDate);
    setDatePicker(false);
  };

  const PaypalContent = paypalProps => {
    return (
      <View>
        <Text style={styles.month}>
          Get paid by credit or debit card, PayPal transfer or even via bank
          account in just few clicks. All you need is your email address or
          mobile number.{' '}
          <Text
            style={styles.link}
            onPress={() => Linking.openURL('https://www.paypal.com/')}>
            More about PayPal
          </Text>{' '}
          |
          <Text
            style={styles.link}
            onPress={() =>
              Linking.openURL(
                'https://www.paypal.com/us/webapps/mpp/account-selection',
              )
            }>
            {' '}
            Create an account
          </Text>
        </Text>
        <TextInput
          placeholder="Email"
          style={styles.input}
          placeholderTextColor="#b8b8b8"
          keyboardType="email-address"
        />
        <TextInput
          placeholder="Confirm email"
          style={styles.input}
          placeholderTextColor="#b8b8b8"
          keyboardType="email-address"
        />
        <Button title="Set payout" />
      </View>
    );
  };

  const BankTransfer = bankProps => {
    const filtered = Countries.filter(c => c.code === selectedCountry);
    const link = `${flagLink + filtered[0]?.code}.png`;
    return (
      <ScrollView>
        <Text style={styles.heading}>Bank transfer</Text>
        <Text>Country of bank account</Text>
        <Pressable
          style={styles.selectedCountry}
          onPress={() => setCountryPicker(true)}>
          <Image source={{uri: link}} style={styles.flag} />
          <Text style={styles.selectedCountryText}>{filtered[0]?.name}</Text>
          <Icon name="caret-down" size={22} color="#212121" />
        </Pressable>
        <Text style={styles.heading}>Your bank information</Text>
        <TextInput
          placeholder="Bank Name"
          style={styles.input}
          placeholderTextColor="#b8b8b8"
          keyboardType="email-address"
        />
        <TextInput
          placeholder="Bank branch"
          style={styles.input}
          placeholderTextColor="#b8b8b8"
          keyboardType="email-address"
        />
        <TextInput
          placeholder="Bank branch city"
          style={styles.input}
          placeholderTextColor="#b8b8b8"
          keyboardType="email-address"
        />
        <TextInput
          placeholder="Account number"
          style={styles.input}
          placeholderTextColor="#b8b8b8"
          keyboardType="email-address"
        />
        <TextInput
          placeholder="Account Title/Holder name"
          style={styles.input}
          placeholderTextColor="#b8b8b8"
          keyboardType="email-address"
        />
        <Text style={styles.heading}>Your information</Text>
        <TextInput
          placeholder="Account Name"
          style={styles.input}
          placeholderTextColor="#b8b8b8"
          keyboardType="email-address"
        />
        <TextInput
          placeholder="Billing address"
          style={styles.input}
          placeholderTextColor="#b8b8b8"
          keyboardType="email-address"
        />
        <TextInput
          placeholder="City"
          style={styles.input}
          placeholderTextColor="#b8b8b8"
          keyboardType="email-address"
        />
        <TextInput
          placeholder="State"
          style={styles.input}
          placeholderTextColor="#b8b8b8"
          keyboardType="email-address"
        />
        <TextInput
          placeholder="Postal code"
          style={styles.input}
          placeholderTextColor="#b8b8b8"
          keyboardType="email-address"
        />
        <Button title="Set payout" />
        <View style={styles.space} />
      </ScrollView>
    );
  };

  const countrySelector = code => {
    setSelectedCountry(code);
    setCountryPicker(false);
  };

  const renderItem = ({item}) => {
    return (
      <Pressable
        style={styles.payoptionContainer}
        onPress={() => countrySelector(item?.code)}>
        <Image
          source={{uri: `${flagLink + item?.code}.png`}}
          style={styles.flag}
        />
        <Text style={styles.selectedCountryText}>{item?.name}</Text>
      </Pressable>
    );
  };

  const BankModal = () => {
    setIsBankContent(true);
    setBottomModal(true);
  };

  const modalDismiss = () => {
    setBottomModal(false);
    setIsBankContent(false);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.head}>
        <View>
          <Text style={styles.month}>{`${getMonthString(
            new Date().getMonth(),
          )} ${Math.floor(Math.random() * 30)}`}</Text>
          <Text style={styles.desc}>Next payment date</Text>
        </View>
        <Text style={styles.month}>${numberSeperator(1540)}</Text>
      </View>
      <View style={styles.horizontalLine} />
      <View style={styles.card}>
        <Text style={styles.earning}>${User?.monthEarning}</Text>
        <View style={styles.cardOption}>
          <Option icon="time-outline" text="Auto payment" />
          <Option
            icon="calendar-outline"
            text="Schedule"
            onPress={() => setDatePicker(true)}
          />
        </View>
      </View>
      <View style={styles.card}>
        <Text style={styles.heading}>Payout method</Text>
        <View style={styles.payoptionContainer}>
          <PayOption
            logo={require('../../assets/ppLogo.png')}
            payer="Paypal"
            min="50"
            onPress={() => setBottomModal(true)}
          />
          <PayOption
            logo={require('../../assets/payoneerLogo.png')}
            payer="Payoneer"
            min="20"
          />
          <PayOption
            logo={require('../../assets/bankLogo.png')}
            payer="Bank Transfer"
            min="100"
            onPress={BankModal}
          />
        </View>
      </View>
      <View style={styles.transactionContainer}>
        <View style={styles.line} />
        <View style={styles.historyContainer}>
          <Text style={styles.transText}>Payout history</Text>
          <LastPay
            amount={'$1237'}
            method="Payoneer"
            date={dayjs(new Date()).format('MMM DD YYYY')}
          />
          <LastPay
            amount={'$26712'}
            method="Payoneer"
            date={dayjs(new Date()).format('MMM DD YYYY')}
          />
          <LastPay
            amount={'$75'}
            method="Payoneer"
            date={dayjs(new Date()).format('MMM DD YYYY')}
          />
        </View>
      </View>
      {datePicker && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={'date'}
          display="spinner"
          onChange={onChange}
        />
      )}
      <BottomModal
        isVisible={bottomModal}
        scrollView={isBankContent}
        dismiss={modalDismiss}>
        <View style={styles.modalContainer}>
          {isBankContent ? BankTransfer() : PaypalContent()}
        </View>
      </BottomModal>
      <Alert
        isVisible={countryPicker}
        dismiss={() => setCountryPicker(false)}
        title="Countries">
        <VirtualizedList
          data={Countries}
          getItem={(item, index) => item[index]}
          getItemCount={() => Countries.length}
          renderItem={renderItem}
          style={styles.countriesList}
        />
      </Alert>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCFCFC',
  },
  head: {
    flexDirection: 'row',
    marginHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '95%',
  },
  month: {
    fontFamily: 'Roboto-Medium',
    fontSize: 17,
    color: '#212121',
  },
  desc: {
    fontFamily: 'Roboto-Medium',
    fontSize: 14,
    color: '#bababa',
  },
  horizontalLine: {
    borderBottomWidth: 1.7,
    borderBottomColor: '#ededed',
    marginVertical: 10,
  },
  card: {
    width: '90%',
    height: 200,
    backgroundColor: '#fff',
    elevation: 4,
    borderRadius: 10,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 12,
  },
  earning: {
    fontFamily: 'Roboto-Black',
    fontSize: 40,
    color: '#212121',
  },
  iconContainer: {
    backgroundColor: '#4670b2',
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionContainer: {
    alignItems: 'center',
    marginHorizontal: 15,
  },
  optionText: {
    fontFamily: 'Roboto-Medium',
    fontSize: 15,
    color: '#a9a9ab',
  },
  cardOption: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 15,
  },
  heading: {
    fontFamily: 'Roboto-Medium',
    fontSize: 18,
    color: '#212121',
  },
  payoptionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  payOption: {
    width: 80,
    height: 80,
    borderRadius: 8,
    backgroundColor: '#f6f6f6',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
    marginVertical: 10,
  },
  logo: {
    width: 30,
    height: 30,
  },
  minPay: {
    backgroundColor: '#e6ebf0',
    width: '100%',
    color: '#212121',
    textAlign: 'center',
    alignSelf: 'flex-end',
    borderRadius: 4,
  },
  payer: {
    fontFamily: 'Roboto-Medium',
    fontSize: 13,
    color: '#212121',
    textAlign: 'center',
  },
  transactionContainer: {
    backgroundColor: '#fff',
    width: '100%',
    flex: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: 10,
  },
  line: {
    alignSelf: 'center',
    width: '10%',
    height: 5,
    marginVertical: 10,
    borderRadius: 4,
    backgroundColor: '#f0f0f0',
  },
  transText: {
    color: '#b1b5b8',
    fontFamily: 'Roboto-Medium',
    fontSize: 15,
  },
  historyContainer: {
    marginVertical: 6,
    marginHorizontal: 10,
  },
  transHistory: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 7,
    marginVertical: 8,
  },
  transactionText: {
    fontFamily: 'Roboto-Medium',
    fontSize: 14,
    color: '#212121',
    width: '38%',
  },
  modalContainer: {
    margin: 10,
  },
  link: {
    color: '#0084B4',
  },
  input: {
    borderBottomColor: '#b8b8b8',
    borderBottomWidth: 1.4,
    width: '100%',
    fontFamily: 'Roboto-Medium',
    fontSize: 15,
    color: '#212121',
  },
  selectedCountry: {
    flexDirection: 'row',
    width: '96%',
    alignSelf: 'center',
    height: 42,
    borderRadius: 6,
    borderWidth: 1.4,
    borderColor: '#e4e8ec',
    alignItems: 'center',
  },
  flag: {
    width: 26,
    height: 26,
    marginHorizontal: 10,
  },
  selectedCountryText: {
    fontFamily: 'Roboto-Medium',
    fontSize: 15,
    color: '#212121',
    width: '80%',
  },
  countriesList: {
    height: 400,
  },
  space: {
    height: 20,
  },
});

export default Earnings;
