import React from 'react';
import {View, Text, VirtualizedList, StyleSheet} from 'react-native';
import Categories from '../Utils/Categories.json';
import Icon from 'react-native-vector-icons/Ionicons';

const Explore = props => {
  return (
    <View style={styles.container}>
      <VirtualizedList
        data={Categories}
        getItemCount={() => Categories.length}
        getItem={(data, index) => data[index]}
        contentContainer={{margin: 8, flex: 1}}
        renderItem={({item}) => {
          return (
            <View style={styles.tile}>
              <Text>{item?.category}</Text>
            </View>
          );
        }}
        keyExtractor={(item, index) => index.toString()}
        horizontal
      />
      <Text>Explore</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  tile: {
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 14,
    padding: 5,
  },
});

export default Explore;
