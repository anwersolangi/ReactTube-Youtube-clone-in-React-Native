import React from 'react';
import {StyleSheet, View} from 'react-native';
import Modal from 'react-native-modal';

const BottomModal = props => {
  const {children, isVisible, dismiss, scrollView} = props;
  return (
    <Modal
      isVisible={isVisible}
      swipeDirection="down"
      style={styles.modal}
      onBackButtonPress={dismiss}
      onBackdropPress={dismiss}
      onSwipeComplete={dismiss}
      propagateSwipe={true}
      scrollOffset={1}
      scrollTo={() => {}}
      useNativeDriverForBackdrop
      {...props}>
      <View
        style={
          scrollView
            ? // eslint-disable-next-line react-native/no-inline-styles
              {...styles.viewContainer, height: '65%'}
            : styles.viewContainer
        }>
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
    borderBottomColor: '#e4e8ec',
    width: '10%',
    alignSelf: 'center',
    borderRadius: 10,
    marginVertical: 10,
  },
});

export default BottomModal;
