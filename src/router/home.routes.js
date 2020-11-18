import React from 'react';
import {Image} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

//logo
import instagramLogo from '../assets/images/instagramLogo.png';

//icons
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
// screens
import HomeScreen from '../screens/HomeScreen';

const HomeStack = createStackNavigator();

const HomeRoutes = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Instagram',
          headerRightContainerStyle: {
            marginRight: 10,
          },
          headerLeftContainerStyle: {
            marginLeft: 10,
          },
          headerLeft: () => <Feather name="camera" size={25} color={'gray'} />,
          headerTitle: () => (
            <Image
              source={instagramLogo}
              resizeMode="contain"
              style={{width: 120, height: 50}}
            />
          ),
          headerRight: () => (
            <Ionicons name="paper-plane-outline" size={25} color={'gray'} />
          ),
        }}
      />
    </HomeStack.Navigator>
  );
};
export default HomeRoutes;
