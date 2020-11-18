import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'space-between',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  userName: {
    color: 'white',
    fontWeight: '800',
    fontSize: 18,
  },
  postedAt: {
    color: 'gray',
    marginLeft: 10,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
    marginBottom: 20,
  },
  textInputContainer: {
    width: 300,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 30,
    padding: 10,
  },
  textInput: {
    color: 'white',
  },
});

export default styles;
