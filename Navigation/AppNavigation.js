import { createAppContainer, createStackNavigator } from 'react-navigation'
import HomeMoodScreen from '../Containers/HomeMoodScreen'
import FeelingsScreen from '../Containers/FeelingsScreen'
import DescriptionScreen from '../Containers/DescriptionScreen'
import StatisticsScreen from '../Containers/StatisticsScreen'

const RootStack = createStackNavigator({
  Home: {
    screen: HomeMoodScreen
  },
  FeelingsRate: {
    screen: FeelingsScreen
  },
  Description: {
    screen: DescriptionScreen
  },
  Statistics: {
    screen: StatisticsScreen
  }
},
{
  initialRouteName: 'Home',
  headerMode: 'none'
})

export default createAppContainer(RootStack)
