import React, { Component } from 'react'
import { View } from 'react-native'
import AppNavigation from '../Navigation/AppNavigation'

import { ApplicationStyles } from '../Themes'

export default class App extends Component {
  render () {
    return (
      <View
        style={[ApplicationStyles.screen.fillScreen,
          ApplicationStyles.screen.paddingTopIOS]}>
        <AppNavigation />
      </View>
    )
  }
}
