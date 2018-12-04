import { StyleSheet } from 'react-native'
import { Colors } from '../../Themes'

export default StyleSheet.create({
  mainContainer: {
    padding: 20
  },
  upSection: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  timeSection: {
    flexDirection: 'row',
    width: 100,
    justifyContent: 'space-between'
  },
  timeSubSection: {
    alignItems: 'center'
  },
  imageStyle: {
    height: 50,
    width: 50
  },
  showInfoStyle: {
    paddingTop: 5
  },
  inlineStyle: {
    flexDirection: 'row',
    width: 80,
    justifyContent: 'space-between'
  },
  inlineBadges: {
    flexDirection: 'row'
  },
  badgeWrapperStyle: {
    minWidth: 110,
    paddingHorizontal: 5
  },
  badgeContainerStyle: {
    backgroundColor: Colors.backgroundColorLightGrey,
    borderRadius: 5
  },
  textCommentsContainer: {
    paddingTop: 10
  },
  textCommentsStyles: {
    color: Colors.greyText
  }
})
