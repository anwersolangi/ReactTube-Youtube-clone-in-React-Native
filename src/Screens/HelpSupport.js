import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Pressable,
  VirtualizedList,
  FlatList,
  ScrollView,
  Linking,
  TextInput,
} from 'react-native';
import {heightPercentageToDP, widthPercentageToDP} from '../Utils/DpToPixel';
import Icon from 'react-native-vector-icons/Ionicons';
import FAQ from '../Utils/Faq.json';
import TopicData from '../Utils/Topic.json';
import Modal from 'react-native-modal';
import {BottomModal, Button} from '../Modules';

const ScrollableList = ({children, onScroll, contentContainerStyle}) => {
  return (
    <FlatList
      data={[]}
      style={styles.body}
      contentContainerStyle={contentContainerStyle}
      onScroll={onScroll}
      keyExtractor={() => 'key'}
      renderItem={null}
      ListHeaderComponent={<>{children}</>}
    />
  );
};

const Topic = ({icon, title, onPress, children}) => {
  return (
    <Pressable style={styles.topic} onPress={onPress}>
      {icon && (
        <Icon name={icon} color="#2d3245" size={48} style={styles.megaphone} />
      )}
      {children}
      <Text style={styles.topicText}>{title}</Text>
    </Pressable>
  );
};

const HelpandSupport = props => {
  const [data] = useState(FAQ);
  const [topics] = useState(TopicData);
  const [faqModal, setFaqModal] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [topicModal, setTopicModal] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [contactUsModal, setContactUsModal] = useState(false);

  const renderItem = ({item, index}) => {
    return (
      <Pressable style={styles.question} onPress={() => questionOpen(index)}>
        <Text style={styles.text}>{item?.question}</Text>
        <Icon name="chevron-forward-outline" color="#60686e" size={18} />
      </Pressable>
    );
  };

  const Seperator = () => {
    return <View style={styles.line} />;
  };

  const questionOpen = index => {
    setSelectedIndex(index);
    setFaqModal(true);
  };

  const topicSelect = index => {
    setSelectedTopic(index);
    setTopicModal(true);
  };

  const topicRender = ({item, index}) => {
    return (
      <Topic
        icon={item?.icon}
        title={item?.topic}
        onPress={() => topicSelect(index)}>
        {item?.text && <Text style={styles.copyright}>{item?.text}</Text>}
      </Topic>
    );
  };

  const dismissFaqModal = () => {
    setFaqModal(false);
  };

  const dismissTopicModal = () => {
    setTopicModal(false);
  };

  return (
    <ScrollableList
      style={styles.container}
      contentContainerStyle={styles.contentContainer}>
      <ImageBackground
        source={require('../../assets/helpCenter.png')}
        style={styles.backgroundImage}
        resizeMode="cover">
        <Pressable
          style={styles.contactUs}
          onPress={() => setContactUsModal(true)}>
          <View style={styles.icon}>
            <Icon name="chatbubble-ellipses-outline" color="#fff" size={31} />
          </View>
          <Text style={styles.contactText}>Write to us</Text>
          <Icon name="chevron-forward-outline" color="#fff" size={20} />
        </Pressable>
      </ImageBackground>
      <View style={styles.card}>
        <Text style={styles.cardHeading}>Frequently asked</Text>
        <VirtualizedList
          data={data}
          getItemCount={() => data.length}
          getItem={(item, index) => item[index]}
          renderItem={renderItem}
          ItemSeparatorComponent={Seperator}
        />
      </View>
      <View style={styles.card}>
        <Text style={styles.cardHeading}>Popular topics</Text>
        <VirtualizedList
          data={topics}
          getItemCount={() => topics.length}
          getItem={(item, index) => item[index]}
          renderItem={topicRender}
          horizontal
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      <View style={styles.card}>
        <Text style={styles.cardHeading}>Directly reach to us</Text>
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
      <View style={styles.space} />
      <Modal
        isVisible={faqModal}
        style={styles.modal}
        backdropOpacity={0.4}
        onBackButtonPress={dismissFaqModal}
        onBackdropPress={dismissFaqModal}
        useNativeDriver>
        <View style={styles.modalContainer}>
          <Pressable style={styles.modalClose} onPress={dismissFaqModal}>
            <Icon name="close-outline" color="#fff" size={34} />
          </Pressable>
          {selectedIndex !== false && (
            <View>
              <Text style={styles.modalQuestion}>
                {data[selectedIndex]?.question}
              </Text>
              <ScrollView style={styles.modalAnswer}>
                <Text>{data[selectedIndex]?.answer}</Text>
              </ScrollView>
            </View>
          )}
        </View>
      </Modal>
      <Modal
        isVisible={topicModal}
        style={styles.modal}
        backdropOpacity={0.6}
        onBackButtonPress={dismissTopicModal}
        onBackdropPress={dismissTopicModal}
        useNativeDriver>
        <View style={styles.topicModal}>
          <View style={styles.modalTop}>
            <Pressable style={styles.modalClose} onPress={dismissTopicModal}>
              <Icon name="close-outline" color="#fff" size={34} />
            </Pressable>
            {selectedTopic !== false && (
              <View>
                <Text style={styles.modalTopic}>
                  {topics[selectedTopic]?.topic}
                </Text>
                <Text style={styles.topicDescription}>
                  {topics[selectedTopic]?.description}
                </Text>
              </View>
            )}
          </View>
          {selectedTopic !== false && (
            <View style={styles.topicCard}>
              <FlatList
                data={topics[selectedTopic]?.questions}
                renderItem={renderItem}
              />
            </View>
          )}
        </View>
      </Modal>
      <BottomModal
        isVisible={contactUsModal}
        dismiss={() => setContactUsModal(false)}>
        <View style={styles.contactContainer}>
          <Text style={styles.modalHeading}>Contact us</Text>
          <Text style={styles.label}>Your Name</Text>
          <View style={styles.textInput}>
            <Icon name="person-outline" color="#181818" size={24} />
            <TextInput
              style={styles.input}
              placeholder="Your name"
              placeholderTextColor={'#b5b3c0'}
            />
          </View>
          <Text style={styles.label}>Mail</Text>
          <View style={styles.textInput}>
            <Icon name="mail-outline" color="#181818" size={24} />
            <TextInput
              style={styles.input}
              placeholder="yourmail@mail.com"
              placeholderTextColor={'#b5b3c0'}
            />
          </View>
          <Text style={styles.label}>Message</Text>
          <TextInput
            style={styles.inputMessage}
            multiline
            placeholder="Your message"
            placeholderTextColor={'#b5b3c0'}
          />
          <Button title="Send message" />
        </View>
      </BottomModal>
    </ScrollableList>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e9e8ee',
  },
  contentContainer: {
    flexGrow: 1,
  },
  backgroundImage: {
    width: '100%',
    height: 230,
    backgroundColor: '#fff',
  },
  contactUs: {
    width: widthPercentageToDP('90'),
    height: heightPercentageToDP('8'),
    backgroundColor: '#00C6FF',
    borderRadius: 2,
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    position: 'absolute',
    top: 200,
  },
  icon: {
    backgroundColor: '#0078FF',
    height: '100%',
    justifyContent: 'center',
    width: 60,
    alignItems: 'center',
  },
  contactText: {
    color: '#fff',
    fontFamily: 'Roboto-Medium',
    fontSize: 18,
    marginHorizontal: 10,
    width: widthPercentageToDP('60'),
  },
  card: {
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 6,
    width: widthPercentageToDP('91'),
    alignSelf: 'center',
    top: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 0.1,
    marginVertical: 10,
  },
  cardHeading: {
    fontFamily: 'Roboto-Black',
    color: '#181818',
    fontSize: 18,
    marginTop: 6,
    marginBottom: 10,
    letterSpacing: 0.7,
  },
  question: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    paddingVertical: 4,
  },
  text: {
    fontFamily: 'Roboto-Light',
    fontSize: 18,
    color: '#181818',
    flexShrink: 1,
    width: widthPercentageToDP('80'),
  },
  line: {
    borderBottomColor: '#f4f4f4',
    width: '100%',
    borderBottomWidth: 1.7,
  },
  topicContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginVertical: 8,
    alignItems: 'center',
  },
  topic: {
    alignItems: 'center',
  },
  topicText: {
    width: '80%',
    textAlign: 'center',
  },
  copyright: {
    fontFamily: 'Roboto-Medium',
    fontSize: 58,
    color: '#2d3245',
    marginBottom: -22,
    top: -13,
  },
  space: {
    height: 30,
    marginVertical: 10,
  },
  modal: {
    margin: 0,
    justifyContent: 'flex-end',
  },
  modalContainer: {
    width: '100%',
    height: heightPercentageToDP('92'),
    borderTopStartRadius: 12,
    borderTopEndRadius: 12,
    backgroundColor: '#44515a',
  },
  modalClose: {
    alignSelf: 'flex-end',
    marginHorizontal: 12,
    marginTop: 10,
  },
  modalQuestion: {
    color: '#fdfefb',
    fontFamily: 'Roboto-Medium',
    fontSize: 22,
    marginHorizontal: 10,
    letterSpacing: 0.7,
  },
  modalAnswer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    width: widthPercentageToDP('93'),
    alignSelf: 'center',
    marginVertical: 12,
  },
  modalTopic: {
    color: '#fdfefb',
    fontFamily: 'Roboto-Medium',
    fontSize: 22,
    marginHorizontal: 10,
    letterSpacing: 0.7,
    textAlign: 'center',
  },
  topicModal: {
    width: '100%',
    height: heightPercentageToDP('95'),
    borderTopStartRadius: 12,
    borderTopEndRadius: 12,
    backgroundColor: '#fff',
  },
  modalTop: {
    backgroundColor: '#44515a',
    borderTopStartRadius: 12,
    borderTopEndRadius: 12,
    paddingVertical: 8,
    paddingHorizontal: 7,
  },
  topicDescription: {
    color: '#c7d1d6',
    fontFamily: 'Roboto-Medium',
    fontSize: 15,
    marginHorizontal: 10,
    paddingBottom: heightPercentageToDP('13'),
  },
  topicCard: {
    borderRadius: 8,
    backgroundColor: '#fff',
    borderTopColor: '#94d2f3',
    borderTopWidth: 5,
    borderTopStartRadius: 8,
    borderTopEndRadius: 8,
    marginHorizontal: 12,
    padding: 10,
    position: 'absolute',
    top: heightPercentageToDP('13') + heightPercentageToDP('10'),
    width: widthPercentageToDP('91'),
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 12,
    marginBottom: 18,
    marginTop: 10,
  },
  modalHeading: {
    fontFamily: 'Roboto-Black',
    fontSize: 22,
    color: '#181818',
    textAlign: 'center',
  },
  contactContainer: {
    paddingVertical: 10,
    marginHorizontal: 12,
    marginVertical: 8,
  },
  label: {
    fontFamily: 'Roboto-Medium',
    fontSize: 16.5,
    color: '#181818',
  },
  textInput: {
    borderColor: '#e2e1e8',
    borderWidth: 1.5,
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 7,
    marginVertical: 8,
  },
  input: {
    fontFamily: 'Roboto-Medium',
    fontSize: 17,
    color: '#181818',
    width: '92%',
  },
  inputMessage: {
    height: 200,
    fontFamily: 'Roboto-Medium',
    fontSize: 17,
    color: '#181818',
    textAlignVertical: 'top',
    borderColor: '#e2e1e8',
    borderWidth: 1.5,
    borderRadius: 6,
    width: '100%',
  },
});

export default HelpandSupport;
