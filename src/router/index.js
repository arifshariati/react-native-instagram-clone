import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

//navigations
import bottomHomeNavigator from './bottomHomeNavigation.routes';

//components
import StoryScreen from '../screens/StoryScreen';
const RootStack = createStackNavigator();

const Router = () => (
  <RootStack.Navigator>
    <RootStack.Screen
      name={'Home'}
      component={bottomHomeNavigator}
      options={{headerShown: false}}
    />

    <RootStack.Screen
      name="Story"
      component={StoryScreen}
      options={{headerShown: false}}
    />
  </RootStack.Navigator>
);

export default Router;
