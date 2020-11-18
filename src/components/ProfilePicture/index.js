import React from 'react';

import {View, Image} from 'react-native';

//styles
import styles from './styles';

const ProfilePicture = ({uri, size = 76}) => {
  return (
    <View style={[styles.container, {width: size + 14, height: size + 14}]}>
      <Image
        style={[styles.image, {width: size, height: size}]}
        source={{uri}}
      />
    </View>
  );
};

export default ProfilePicture;
