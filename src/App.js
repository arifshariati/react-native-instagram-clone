import React from 'react';
import {SafeAreaView, Text, StatusBar} from 'react-native';

//screens
import HomeScreen from './screens/HomeScreen';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <HomeScreen />
      </SafeAreaView>
    </>
  );
};

export default App;
