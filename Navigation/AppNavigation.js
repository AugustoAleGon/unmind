import { createAppContainer, createStackNavigator } from 'react-navigation'
import HomeMoodScreen from '../Containers/HomeMoodScreen'
import FeelingsScreen from '../Containers/FeelingsScreen'

const RootStack = createStackNavigator({
  Home: {
    screen: HomeMoodScreen
  },
  FeelingsRate: {
    screen: FeelingsScreen
  }
},
{
  initialRouteName: 'Home',
  headerMode: 'none'
})

export default createAppContainer(RootStack)
