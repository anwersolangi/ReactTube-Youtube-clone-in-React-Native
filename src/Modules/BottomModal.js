import React from 'react';
import {StyleSheet, View} from 'react-native';
import Modal from 'react-native-modal';

const BottomModal = props => {
  const {children, isVisible, dismiss} = props;
  return (
    <Modal
      isVisible={isVisible}
      swipeDirection="down"
      style={styles.modal}
      onBackButtonPress={dismiss}
      onBackdropPress={dismiss}
      onSwipeComplete={dismiss}>
      <View style={styles.viewContainer}>
        <View style={styles.modalLine} />
        {children}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  viewContainer: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  modalLine: {
    borderBottomWidth: 4,
    borderBottomColor: '#040201',
    width: '10%',
    alignSelf: 'center',
    borderRadius: 10,
    marginVertical: 10,
  },
});

export default BottomModal;
