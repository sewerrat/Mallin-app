import { Dimensions } from 'react-native';

export const getScreen = () => {
  return({
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height - 75
  })
}