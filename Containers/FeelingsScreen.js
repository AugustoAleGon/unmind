import React, { Component } from 'react'
import { View, TouchableOpacity, ScrollView } from 'react-native'
import HeaderComponent from '../Components/HeaderComponent'
import { ButtonGroup, Button } from 'react-native-elements'
// import { givenIdReturnFeeling } from '../Utils/Utils'

import { ApplicationStyles } from '../Themes'
import styles from './Styles/FeelingsSreenStyles'

const feelings = [
  'Excited',
  'Playful',
  'Content',
  'Interested',
  'Proud',
  'Accepted',
  'Optimistic',
  'Thankful',
  'Stressed',
  'Anxious',
  'Frustrated',
  'Angry',
  'Depressed',
  'Lonely',
  'Sad',
  'Tired'
]

class FeelingsScreen extends Component {
  state ={
    selectedIndexes: []
  }

  updateIndexes = (value) => {
    this.setState({ selectedIndexes: value })
  }
  render () {
    return (
      <View style={[
        ApplicationStyles.screen.fillScreen
      ]}>
        <HeaderComponent
          showLeftIcon
          showRightIcon
          backIconOnPress={() => this.props.navigation.goBack()}
          headerStyle={ApplicationStyles.header.background}
          skipOnPress={() => this.props.navigation.navigate('Description')}
          title='Feelings'
          subtitle='What feeling(s) best describe your current mood?' />
        <ScrollView
          contentContainerStyle={{ flex: 1 }}
          style={styles.scrollViewStyle}>
          <View style={styles.groupButtonWrapper}>
            <ButtonGroup
              component={TouchableOpacity}
              selectMultiple
              onPress={this.updateIndexes}
              selectedIndexes={this.state.selectedIndexes}
              textContainer={styles.textContainer}
              containerBorderRadius={1}
              innerBorderStyle={{ color: 'white', width: 0 }}
              textStyle={styles.textStyle}
              buttonStyle={styles.buttonStyle}
              containerStyle={styles.buttonGroupContainer}
              selectedButtonStyle={styles.selectedButtonStyle}
              selectedTextStyle={styles.selectedTextStyle}
              buttons={feelings} />
          </View>
          <Button
            onPress={() => this.props.navigation.navigate('Description')}
            buttonStyle={ApplicationStyles.button.backgroundStyle}
            titleStyle={ApplicationStyles.button.titleText}
            title='Next' />
        </ScrollView>
      </View>
    )
  }
}

export default FeelingsScreen
