import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../Themes'

export default StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.backgroundColorLightGrey
  },
  imageStyle: {
    width: 300,
    height: 300
  },
  imageWrapper: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: Metrics.screenHeight / 2
  },
  sliderWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10
  },
  sliderContainer: {
    width: Metrics.screenWidth / 2
  },
  buttonWrapper: {
    paddingTop: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonContainer: {
    width: Metrics.screenWidth / 2,
    height: 50
  }
})
