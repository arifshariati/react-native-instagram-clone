import React, {useState, useEffect} from 'react';
import {FlatList} from 'react-native';

import {API, graphqlOperation} from 'aws-amplify';
import {listStorys} from '../../../graphql/queries';
//components
import UserStoryPreview from '../UserStoryPreview';

//styles
import styles from './styles';

const UserStoriesPreview = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    fetchStories();
  }, []);

  const fetchStories = async () => {
    try {
      const storiesData = await API.graphql(graphqlOperation(listStorys));

      setStories(storiesData.data.listStorys.items);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <FlatList
      style={styles.container}
      data={stories}
      keyExtractor={({user: {id}}) => id}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({item}) => <UserStoryPreview story={item} />}
    />
  );
};

export default UserStoriesPreview;
