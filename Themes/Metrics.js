import { Dimensions, Platform } from 'react-native'

const { width, height } = Dimensions.get('window')

const Metrics = {
  paddingTopIOS: Platform.OS === 'ios' ? 20 : 0,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width
}

export default Metrics
