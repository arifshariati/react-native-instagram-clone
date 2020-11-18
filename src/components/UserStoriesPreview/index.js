import React from 'react';
import {FlatList} from 'react-native';

//components
import UserStoryPreview from '../UserStoryPreview';

//styles
import styles from './styles';

//mock data
import data from '../../data/stories';

const UserStoriesPreview = () => {
  return (
    <FlatList
      style={styles.container}
      data={data}
      keyExtractor={({user: {id}}) => id}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({item}) => <UserStoryPreview story={item} />}
    />
  );
};

export default UserStoriesPreview;
