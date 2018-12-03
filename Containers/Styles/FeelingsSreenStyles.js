import { StyleSheet } from 'react-native'
import { Colors } from '../../Themes'

export default StyleSheet.create({
  buttonGroupContainer: {
    flexDirection: 'column',
    height: '100%',
    borderColor: Colors.white,
    borderRightWidth: 0,
    borderLeftWidth: 0
  },
  scrollViewStyle: {
    flex: 1,
    backgroundColor: Colors.backgroundColorLightGrey,
    padding: 10
  },
  groupButtonWrapper: {
    flex: 1,
    marginBottom: 20
  },
  buttonStyle: {
    borderBottomColor: Colors.greyText,
    borderBottomWidth: 1
  },
  textContainer: {
    height: 30,
    width: '100%',
    paddingLeft: 10
  },
  textStyle: {
    fontSize: 16
  },
  selectedButtonStyle: {
    backgroundColor: Colors.selectedButton
  },
  selectedTextStyle: {
    color: Colors.black
  }
})
