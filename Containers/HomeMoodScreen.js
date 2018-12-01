import React, { Component } from 'react'
import {
  View
} from 'react-native'
import HeaderComponent from '../Components/HeaderComponent'

import styles from './Styles/HomeMoodScreenStyles'

class HomeMoodScreen extends Component {
  render () {
    return (
      <View style={{ flex: 1 }}>
        <HeaderComponent
          headerStyle={styles.header}
          title='Check-In'
          subtitle='How are you feeling?' />
      </View>
    )
  }
}

export default HomeMoodScreen
