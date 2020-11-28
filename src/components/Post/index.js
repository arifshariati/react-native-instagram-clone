import React from 'react';
import {View} from 'react-native';

import moment from 'moment';
//components
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

const Post = ({post}) => {
  return (
    <View>
      <Header imageUri={post.user.image} name={post.user.name} />
      <Body imageUri={post.image} />
      <Footer
        likesCount={post.likes}
        caption={post.caption}
        postedAt={moment(post.createdAt).fromNow()}
      />
    </View>
  );
};

export default Post;
