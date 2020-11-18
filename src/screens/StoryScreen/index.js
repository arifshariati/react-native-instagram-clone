import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ImageBackground,
  ActivityIndicator,
  TouchableWithoutFeedback,
  Dimensions,
  Text,
  View,
  TextInput,
} from 'react-native';
import {useRoute, useNavigation} from '@react-navigation/native';

//components
import ProfilePicture from '../../components/ProfilePicture';

//icons

import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
//mock data
import storiesData from '../../data/stories';

//styles
import styles from './styles';

const StoryScreen = () => {
  const [userStories, setUserStories] = useState(null);
  const [activeStoryIndex, setActiveStoryIndex] = useState(null);
  const [activeStory, setActiveStory] = useState(null);

  const route = useRoute();
  const userId = route.params.userId;
  const navigation = useNavigation();

  useEffect(() => {
    const userStories = storiesData.find(
      (storyData) => storyData.user.id === userId,
    );
    setUserStories(userStories);
    setActiveStoryIndex(0);
  }, []);

  const navigateToNextUser = () => {
    navigation.push('Story', {userId: (parseInt(userId) + 1).toString()});
  };

  const navigateToPreviousUser = () => {
    navigation.push('Story', {userId: (parseInt(userId) - 1).toString()});
  };

  useEffect(() => {
    if (!userStories) {
      return;
    }
    setActiveStory(userStories.stories[activeStoryIndex]);
  }, [activeStoryIndex]);

  const handleNextStory = () => {
    if (activeStoryIndex >= userStories.stories.length - 1) {
      navigateToNextUser();
      return;
    }
    setActiveStoryIndex(activeStoryIndex + 1);
  };

  const handlePreviousStory = () => {
    if (activeStoryIndex <= 0) {
      navigateToPreviousUser();
      return;
    }
    setActiveStoryIndex(activeStoryIndex - 1);
  };

  const onPress = (evt) => {
    const screenWidth = Dimensions.get('window').width;
    const x = evt.nativeEvent.locationX;

    if (x < screenWidth / 2) {
      handlePreviousStory();
    } else {
      handleNextStory();
    }
  };

  if (!activeStory) {
    return (
      <SafeAreaView>
        <ActivityIndicator />
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={onPress}>
        <ImageBackground
          source={{uri: activeStory.imageUri}}
          style={styles.image}>
          <View style={styles.userInfo}>
            <ProfilePicture uri={userStories.user.imageUri} size={50} />
            <Text style={styles.userName}>{userStories.user.name}</Text>
            <Text style={styles.postedAt}>{activeStory.postedTime}</Text>
          </View>
          <View style={styles.bottomContainer}>
            <Feather name="camera" size={25} color={'white'} />
            <View style={styles.textInputContainer}>
              <TextInput
                style={styles.textInput}
                editable
                placeholder="Send Message"
                placeholderTextColor="white"
              />
            </View>

            <Ionicons name="paper-plane-outline" size={25} color={'white'} />
          </View>
        </ImageBackground>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};
export default StoryScreen;
