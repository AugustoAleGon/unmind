import React, { Component } from 'react'
import { View, TextInput } from 'react-native'
import HeaderComponent from '../Components/HeaderComponent'
import { Button } from 'react-native-elements'

import styles from './Styles/DescriptionScreenStyles'
import { ApplicationStyles, Colors } from '../Themes'

class DescriptionScreen extends Component {
  state = {
    textInput: ''
  }

  render () {
    return (
      <View style={[ApplicationStyles.screen.fillScreen, styles.mainContainer]}>
        <HeaderComponent
          showLeftIcon
          backIconOnPress={() => this.props.navigation.goBack()}
          headerStyle={ApplicationStyles.header.background}
          title='Comment?'
          subtitle="Are there any thoughts, feelings or events you'd like to record" />
        <View style={styles.textInputWrapper}>
          <TextInput
            style={styles.textInputStyle}
            multiline
            numberOfLines={5}
            placeholderTextColor={Colors.greyText}
            placeholder='Type your optional note here...' />
          <View style={styles.buttonWrapper}>
            <Button
              onPress={() => this.props.navigation.navigate('Statistics')}
              buttonStyle={ApplicationStyles.button.backgroundStyle}
              titleStyle={ApplicationStyles.button.titleText}
              title='Finish' />
          </View>
        </View>
      </View>
    )
  }
}

export default DescriptionScreen
