import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, Text, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
//screens
import HomeScreen from './screens/HomeScreen';
import Discovery from './screens/Discovery';
import Post from './screens/Post';
import Notifications from './screens/Notifications';
import Profile from './screens/Profile';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />

      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Discovery" component={Discovery} />
        <Tab.Screen name="Post" component={Post} />
        <Tab.Screen name="Notifications" component={Notifications} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>

      {/* <SafeAreaView>
        <HomeScreen />
      </SafeAreaView> */}
    </NavigationContainer>
  );
};

export default App;
