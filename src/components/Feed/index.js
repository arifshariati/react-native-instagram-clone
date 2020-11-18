import React from 'react';
import {FlatList} from 'react-native';

//components
import Stories from '../Stories';
import Post from '../Post';
import Story from '../Story';

//mock data
const post = [
  {
    user: {
      imageUri:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSubsSzNkxrpoq1UwKZpPs9qfmd04fl4pFRZg&usqp=CAU',
      name: 'Pari',
    },
    imageUri:
      'https://images.unsplash.com/photo-1605609454510-18b3e3bb9ac0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
    caption: 'Beautiful City #instagram',
    likesCount: 1234,
    postedAt: '6 min Ago',
  },
  {
    user: {
      imageUri:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfps6LC8MjUgp1P24xY2c26oizHVu6n-1DyQ&usqp=CAU',
      name: 'Anushka',
    },
    imageUri:
      'https://images.unsplash.com/photo-1605606228673-aceb923dd4fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
    caption: 'Amazing Istanbul #istanbul',
    likesCount: 344,
    postedAt: '8 min Ago',
  },
  {
    user: {
      imageUri:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9o5INl5Il_WCYOpky60-G_vKfZB_PwSogug&usqp=CAU',
      name: 'Selfie',
    },
    imageUri:
      'https://images.unsplash.com/photo-1605557626613-748697e50913?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80',
    caption: 'Generation Zero #newGeneration',
    likesCount: 994,
    postedAt: '12 min Ago',
  },
];
const Feed = () => {
  return (
    <FlatList
      data={post}
      keyExtractor={({imageUri}) => imageUri}
      renderItem={({item}) => <Post post={item} />}
      ListHeaderComponent={Stories}
    />
  );
};
export default Feed;
