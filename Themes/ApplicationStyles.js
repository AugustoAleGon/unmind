import { Platform } from 'react-native'
import Colors from './Colors'

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
  },
  header: {
    background: {
      backgroundColor: Colors.greenHeaderFeeling
    }
  },
  button: {
    backgroundStyle: {
      backgroundColor: Colors.white
    },
    titleText: {
      color: Colors.greyText
    }
  }
}

export default ApplicationStyles
