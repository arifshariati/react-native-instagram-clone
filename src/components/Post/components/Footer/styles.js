import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 5,
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
  },
  leftIcons: {
    flexDirection: 'row',
    width: 150,
    justifyContent: 'space-between',
  },
  likesCount: {
    fontWeight: 'bold',
    margin: 3,
  },
  caption: {
    fontWeight: 'bold',
    margin: 3,
  },
  postedAt: {
    color: 'gray',
    margin: 3,
  },
});

export default styles;
