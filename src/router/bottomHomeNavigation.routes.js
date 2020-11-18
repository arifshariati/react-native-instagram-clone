import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//icons
import Ionicons from 'react-native-vector-icons/Ionicons';
import Foundation from 'react-native-vector-icons/Foundation';
import Feather from 'react-native-vector-icons/Feather';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

//screens
import HomeStackScreen from './home.routes';
import Discovery from '../screens/Discovery';
import Post from '../screens/Post';
import Notifications from '../screens/Notifications';
import Profile from '../screens/Profile';

const Tab = createBottomTabNavigator();

const BottomHomeNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          if (route.name === 'Home') {
            return <Foundation name="home" size={size} color={color} />;
          }
          if (route.name === 'Discovery') {
            return <Feather name="search" size={size} color={color} />;
          }

          if (route.name === 'Post') {
            return <Feather name="plus-square" size={size} color={color} />;
          }

          if (route.name === 'Notifications') {
            return <AntDesignIcon name="hearto" size={size} color={color} />;
          }

          if (route.name === 'Profile') {
            return <Ionicons name="person-outline" size={size} color={color} />;
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        showLabel: false,
      }}>
      <Tab.Screen name="Home" component={HomeStackScreen} />
      <Tab.Screen name="Discovery" component={Discovery} />
      <Tab.Screen name="Post" component={Post} />
      <Tab.Screen name="Notifications" component={Notifications} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default BottomHomeNavigator;
