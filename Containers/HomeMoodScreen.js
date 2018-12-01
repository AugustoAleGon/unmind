import React, { Component } from 'react'
import {
  View,
  Text
} from 'react-native'
import HeaderComponent from '../Components/HeaderComponent'

import styles from './Styles/HomeMoodScreenStyles'

class HomeMoodScreen extends Component {
  state = {
    positionSlider: 4
  }
  render () {
    return (
      <View style={{ flex: 1 }}>
        <HeaderComponent
          headerStyle={styles.header}
          title='Check-In'
          subtitle='How are you feeling?' />
        <View style={styles.imageWrapper}>
          <Text>{this.state.positionSlider}</Text>
        </View>
      </View>
    )
  }
}

export default HomeMoodScreen
