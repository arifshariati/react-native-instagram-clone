import React from 'react';
import {View, Text} from 'react-native';

//icons
import Icon from 'react-native-vector-icons/Entypo';

//components
import ProfilePicture from '../../../ProfilePicture';

//styles
import styles from './styles';

const Header = ({imageUri, name}) => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <ProfilePicture uri={imageUri} size={45} />
        <Text style={styles.name}>{name}</Text>
      </View>
      <View style={styles.right}>
        <Icon name="dots-three-vertical" size={17} />
      </View>
    </View>
  );
};
export default Header;
