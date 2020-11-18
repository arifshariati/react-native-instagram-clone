import React from 'react';
import {View, Text} from 'react-native';

//components
import ProfilePicture from '../ProfilePicture';

//styles
import styles from './styles';

const Story = ({imageUri, name}) => {
  return (
    <View>
      <ProfilePicture uri={imageUri} />
      <Text style={styles.name}>{name}</Text>
    </View>
  );
};
export default Story;
