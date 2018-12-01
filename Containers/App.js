import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import HomeMoodScreen from './HomeMoodScreen'

export default class App extends Component {
  render () {
    return (
      <View style={styles.container}>
        <HomeMoodScreen />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20
  }
})
