import React from 'react';
import {StyleSheet, View, Text, Pressable} from 'react-native';
import Modal from 'react-native-modal';

const Alert = props => {
  const {isVisible, dismiss, title, message, buttons, children} = props;
  return (
    <Modal
      isVisible={isVisible}
      style={styles.modal}
      onBackButtonPress={dismiss}
      onBackdropPress={dismiss}
      useNativeDriverForBackdrop
      {...props}>
      <View style={styles.viewContainer}>
        <View style={styles.modalLine} />
        <Text style={styles.modalHeading}>{title}</Text>
        <Text style={styles.modalText}>{message}</Text>
        {children}
        <View style={styles.modalOptionContainer}>
          {buttons &&
            buttons.map(item => {
              return (
                <Pressable
                  onPress={item?.cancellable ? dismiss : item?.onPress}
                  key={Math.random() * 10}>
                  <Text style={styles.actionText}>{item?.title}</Text>
                </Pressable>
              );
            })}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    alignItems: 'center',
  },
  viewContainer: {
    backgroundColor: '#fff',
    width: '85%',
    borderRadius: 6,
    paddingVertical: 6,
    paddingHorizontal: 13,
  },
  modalLine: {
    borderBottomWidth: 4,
    borderBottomColor: '#e4e8ec',
    width: '10%',
    alignSelf: 'center',
    borderRadius: 10,
    marginVertical: 10,
  },
  modalText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16.7,
    color: '#9098a3',
  },
  actionText: {
    fontFamily: 'Roboto-Medium',
    fontSize: 13.8,
    color: '#212121',
    marginHorizontal: 12,
  },
  modalOptionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginBottom: 10,
  },
  modalHeading: {
    fontFamily: 'Roboto-Black',
    fontSize: 22,
    color: '#212121',
    textAlign: 'center',
  },
});

export default Alert;
