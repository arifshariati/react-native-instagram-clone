import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
//components
import ProfilePicture from '../ProfilePicture';

//styles
import styles from './styles';

const UserStoryPreview = (props) => {
  const {
    story: {
      user: {id, imageUri, name},
    },
  } = props;
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('Story', {userId: id});
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <ProfilePicture uri={imageUri} />
      <Text style={styles.name}>{name}</Text>
    </TouchableOpacity>
  );
};
export default UserStoryPreview;
