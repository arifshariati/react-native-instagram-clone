import React, {useState, useEffect} from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';

//icons
import ADIcon from 'react-native-vector-icons/AntDesign';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import IonIcon from 'react-native-vector-icons/Ionicons';
import FAIcon from 'react-native-vector-icons/FontAwesome';
//styles
import styles from './styles';

const Footer = ({likesCount: likesCountProps, caption, postedAt}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);

  useEffect(() => {
    setLikesCount(likesCountProps);
  }, []);

  const handleLike = () => {
    setIsLiked(!isLiked);
    const amount = isLiked ? 1 : -1;
    setLikesCount(likesCount + amount);
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconsContainer}>
        <View style={styles.leftIcons}>
          <TouchableWithoutFeedback onPress={handleLike}>
            {isLiked ? (
              <ADIcon name="hearto" size={25} color="gray" />
            ) : (
              <ADIcon name="heart" size={25} color="tomato" />
            )}
          </TouchableWithoutFeedback>

          <FontistoIcon name="comment" size={23} color="gray" />
          <IonIcon name="paper-plane-outline" size={25} color="gray" />
        </View>
        <View style={styles.rightIcons}>
          <FAIcon name="bookmark-o" size={25} color="gray" />
        </View>
      </View>
      <View>
        <Text style={styles.likesCount}>{likesCount} Likes</Text>
        <Text style={styles.caption}>{caption}</Text>
        <Text style={styles.postedAt}>{postedAt}</Text>
      </View>
    </View>
  );
};
export default Footer;
