import React, { Component } from 'react'
import { View } from 'react-native'
import HeaderComponent from '../Components/HeaderComponent'

import { ApplicationStyles } from '../Themes'
import styles from './Styles/FeelingsSreenStyles'

class FeelingsScreen extends Component {
  render () {
    return (
      <View style={[
        ApplicationStyles.screen.fillScreen
      ]}>
        <HeaderComponent
          showLeftIcon
          showRightIcon
          backIconOnPress={() => this.props.navigation.goBack()}
          headerStyle={styles.headerBackground}
          title='Feelings'
          subtitle='What feeling(s) best describe your current mood?' />
      </View>
    )
  }
}

export default FeelingsScreen
