import React, { Component } from 'react'
import {
  Image,
  TouchableOpacity,
  Slider,
  View
} from 'react-native'
import HeaderComponent from '../Components/HeaderComponent'
import { selectImageSmile, selectBackgroundColor } from '../Utils/Utils'

import { ApplicationStyles } from '../Themes'
import styles from './Styles/HomeMoodScreenStyles'
import { Button } from 'react-native-elements'

class HomeMoodScreen extends Component {
  state = {
    positionSlider: 4
  }

  changePosition = (value) => {
    this.setState({
      positionSlider: value
    })
  }

  render () {
    return (
      <View style={[ApplicationStyles.screen.fillScreen, styles.mainContainer]}>
        <HeaderComponent
          headerStyle={{ backgroundColor: selectBackgroundColor(this.state.positionSlider) }}
          title='Check-In'
          subtitle='How are you feeling?' />
        <View style={styles.imageWrapper}>
          <Image style={styles.imageStyle} source={selectImageSmile(this.state.positionSlider)} />
        </View>
        <View style={styles.sliderWrapper}>
          <View style={styles.sliderContainer}>
            <Slider
              maximumValue={7}
              minimumValue={1}
              step={1}
              value={this.state.positionSlider}
              onValueChange={this.changePosition} />
          </View>
        </View>
        <View style={styles.buttonWrapper}>
          <Button
            buttonStyle={ApplicationStyles.button.backgroundStyle}
            Component={TouchableOpacity}
            containerStyle={styles.buttonContainer}
            titleStyle={ApplicationStyles.button.titleText}
            onPress={() => {
              this.props.navigation.navigate('FeelingsRate')
            }}
            title='Next' />
        </View>
      </View>
    )
  }
}

export default HomeMoodScreen
