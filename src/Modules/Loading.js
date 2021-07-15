import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';

const Loader = props => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#212121" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default Loader;
