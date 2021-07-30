import React, {useState} from 'react';
import {
  View,
  Text,
  VirtualizedList,
  TextInput,
  StyleSheet,
  Image,
} from 'react-native';
import List from '../Utils/BlockedUsers.json';
import Icon from 'react-native-vector-icons/Ionicons';
import {Button} from '../Modules';
import {widthPercentageToDP} from '../Utils/DpToPixel';

const BlockedUser = props => {
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchValue, setSearchValue] = useState(null);

  const onChangeText = val => {
    setSearchValue(val);
    const filteredArray = List.filter(value =>
      value?.username.toLowerCase().includes(val.toLowerCase()),
    );
    setFilteredUsers(filteredArray);
  };

  const itemCount = () => {
    return searchValue && searchValue.length !== 0
      ? filteredUsers.length
      : List.length;
  };

  const Item = ({item}) => {
    return (
      <View style={styles.profileContainer}>
        <Image
          source={{uri: item?.profileAvtar}}
          style={styles.profileAvtar}
          resizeMode="cover"
        />
        <View style={styles.detailContainer}>
          <Text>{item?.username}</Text>
          <Text style={styles.email}>{item?.email}</Text>
        </View>
        <Button
          title="Remove"
          styleProps={styles.button}
          textStyle={styles.buttonText}
        />
      </View>
    );
  };

  const EmptyComponent = () => {
    return (
      <View style={styles.emptyContainer}>
        <Icon name="person-circle-outline" color="#192948" size={170} />
        <Text style={styles.head}>No User</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.text}>
          List of accounts you blocked or restricted.
        </Text>
        <View style={styles.inputContainer}>
          <Icon name="search-outline" size={26} color="#9ba3ae" />
          <TextInput
            value={searchValue}
            placeholder="Search user"
            placeholderTextColor="#d0d5da"
            style={styles.input}
            maxLength={256}
            autoCapitalize="none"
            onChangeText={onChangeText}
          />
        </View>
        <VirtualizedList
          data={searchValue && searchValue.length !== 0 ? filteredUsers : List}
          getItemCount={itemCount}
          getItem={(item, index) => item[index]}
          renderItem={Item}
          ListEmptyComponent={EmptyComponent}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    marginHorizontal: 10,
    flexGrow: 1,
  },
  inputContainer: {
    borderColor: '#e5e7eb',
    borderWidth: 1.5,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  input: {
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
    color: '#212121',
    width: '90%',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  profileAvtar: {
    width: 55,
    height: 55,
    borderRadius: 55 / 2,
  },
  detailContainer: {
    width: widthPercentageToDP('54.2%'),
    marginHorizontal: 10,
  },
  email: {
    fontFamily: 'Roboto-Medium',
    fontSize: 14,
    color: '#6b727e',
  },
  button: {
    width: widthPercentageToDP('22%'),
    backgroundColor: '#fff',
    borderColor: '#e5e7eb',
    elevation: 2,
  },
  buttonText: {
    color: '#f23f5e',
  },
  text: {
    fontFamily: 'Roboto-Medium',
    fontSize: 15,
    color: '#212121',
  },
  emptyContainer: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  head: {
    fontFamily: 'Roboto-Medium',
    fontSize: 22,
    textAlign: 'center',
    color: '#181818',
  },
});

export default BlockedUser;
