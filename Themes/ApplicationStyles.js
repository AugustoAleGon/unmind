import { Platform } from 'react-native'

const ApplicationStyles = {
  screen: {
    center: {
      justifyContent: 'center',
      alignItems: 'center'
    },
    fillScreen: {
      flex: 1
    },
    paddingTopIOS: {
      paddingTop: Platform.OS === 'ios' ? 20 : 0
    }
  }
}

export default ApplicationStyles
