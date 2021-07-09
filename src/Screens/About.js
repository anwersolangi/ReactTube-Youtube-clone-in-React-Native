import React from 'react';
import {View, Text, StyleSheet, Pressable, Linking} from 'react-native';
import ChannelData from '../Utils/Channel.json';
import Icon from 'react-native-vector-icons/Ionicons';

const SocialLink = props => {
  const {title, iconSize, url, icon, type, iconColor} = props;
  return (
    <Pressable
      style={styles.socialContainer}
      type="logo"
      onPress={() => url && Linking.openURL(url)}>
      <Icon
        name={
          type === 'url'
            ? 'globe-outline'
            : type === 'logo'
            ? `logo-${icon}`
            : icon
        }
        color={iconColor ? iconColor : '#212121'}
        size={iconSize ? iconSize : 20}
      />
      <Text
        style={{
          ...styles.link,
          color: type === 'logo' || type === 'url' ? '#1568d6' : '#212121',
        }}>
        {title}
      </Text>
    </Pressable>
  );
};

const AboutScreen = props => {
  const data = ChannelData[0];

  const SocialAccounts = accounts => {
    const {facebook, twitter, instagram, website} = accounts;
    return (
      <View>
        {twitter && (
          <SocialLink
            title="Twitter"
            url={twitter}
            icon={'twitter'}
            iconColor="#1DA1F2"
            type="logo"
          />
        )}
        {website && (
          <SocialLink
            title="Website"
            icon={'globe-outline'}
            type="url"
            url={website}
            iconColor="#212121"
          />
        )}
        {facebook && (
          <SocialLink
            title="Facebook"
            url={facebook}
            icon={'facebook'}
            iconColor="#1877f2"
            type="logo"
          />
        )}
        {instagram && (
          <SocialLink
            title="Instagram"
            url={instagram}
            type="logo"
            icon={'instagram'}
            iconColor="#fb3958"
          />
        )}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.heading}>Description</Text>
        <Text style={styles.content}>{data?.description}</Text>
        <View style={styles.space} />
        <Text style={styles.heading}>Links</Text>
        {SocialAccounts(data?.links)}
        <View style={styles.space} />
        <Text style={styles.heading}>More Info</Text>
        <SocialLink
          title="yourlink.com/dummychannel"
          iconSize={28}
          type="url"
          url={'https://codecanyon.net/user/anwersolangi/portfolio'}
        />
        <SocialLink
          title={data?.moreInfo?.location}
          icon="earth-outline"
          iconSize={28}
        />
        <SocialLink
          icon="information-circle-outline"
          title={new Date(data?.moreInfo?.joined).toDateString()}
          iconSize={28}
        />
        <SocialLink
          title={`${data?.moreInfo?.totalViews} views`}
          icon="trending-up-outline"
          iconSize={28}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  contentContainer: {
    marginHorizontal: 15,
    marginTop: 8,
  },
  heading: {
    fontFamily: 'Roboto-Black',
    fontSize: 18,
    color: '#212121',
    marginVertical: 10,
  },
  content: {
    color: '#2c2c2c',
    fontFamily: 'Roboto-Medium',
    fontSize: 14,
  },
  space: {
    height: 25,
  },
  socialContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  link: {
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
    marginLeft: 14,
  },
});

export default AboutScreen;
