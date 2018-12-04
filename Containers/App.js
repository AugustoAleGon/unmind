import React, { Component } from 'react'
import { View } from 'react-native'
import AppNavigation from '../Navigation/AppNavigation'
import { Provider } from 'react-redux'
import createStore from '../Redux/createStore'
import { ApplicationStyles } from '../Themes'

// create our store
const store = createStore()

export default class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <View
          style={[ApplicationStyles.screen.fillScreen,
            ApplicationStyles.screen.paddingTopIOS]}>
          <AppNavigation />
        </View>
      </Provider>
    )
  }
}
