import React, {useState, useEffect} from 'react';
import {FlatList} from 'react-native';

import {API, graphqlOperation} from 'aws-amplify';

import {listPosts} from '../../../graphql/queries';
//components
import UserStoriesPreview from '../UserStoriesPreview';
import Post from '../Post';

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const postData = await API.graphql(graphqlOperation(listPosts));
      setPosts(postData.data.listPosts.items);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <FlatList
      data={posts}
      keyExtractor={({imageUri}) => imageUri}
      renderItem={({item}) => <Post post={item} />}
      ListHeaderComponent={UserStoriesPreview}
    />
  );
};
export default Feed;
