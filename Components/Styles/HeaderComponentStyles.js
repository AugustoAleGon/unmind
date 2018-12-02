import { StyleSheet } from 'react-native'
import { Colors, ApplicationStyles } from '../../Themes'

export default StyleSheet.create({
  headerContainer: {
    height: 80,
    width: '100%',
    flexDirection: 'row'
  },
  borderSection: {
    width: 70,
    alignItems: 'center',
    paddingTop: 10
  },
  roundCircle: {
    backgroundColor: Colors.white,
    height: 45,
    width: 45,
    borderRadius: 45,
    ...ApplicationStyles.screen.center
  },
  centerSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleStyle: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.white
  },
  subtitleStyle: {
    paddingTop: 10,
    fontSize: 14,
    color: Colors.white,
    textAlign: 'center'
  }
})
