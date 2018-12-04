import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, Image } from 'react-native'
import { selectImageSmile } from '../Utils/Utils'
import { Badge, Icon } from 'react-native-elements'

import { Colors } from '../Themes'
import styles from './Styles/MoodBoxStyles'

class MoodBox extends React.PureComponent {
  state = {
    showInfo: false
  }
  render () {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.upSection}>
          <View style={styles.timeSection}>
            <View style={styles.timeSubSection}>
              <Text>{this.props.day}</Text>
              <Text>{this.props.month}</Text>
            </View>
            <Text>{this.props.hour}</Text>
          </View>
          <View style={styles.inlineStyle}>
            <Image style={styles.imageStyle} source={selectImageSmile(this.props.mood)} />
            <Icon
              color={Colors.backgroundColorLightGrey}
              name={this.state.showInfo ? 'ios-arrow-down' : 'ios-arrow-up'}
              onPress={() => {
                this.setState({
                  showInfo: !this.state.showInfo
                })
              }}
              size={26}
              type='ionicon' />
          </View>
        </View>
        {
          this.state.showInfo &&
            <View style={styles.showInfoStyle}>
              <View style={styles.inlineBadges}>
                {this.props.feelings.map((item) => (
                  <Badge
                    wrapperStyle={styles.badgeWrapperStyle}
                    containerStyle={styles.badgeContainerStyle}
                    key={item}>
                    <Text>
                      {item}
                    </Text>
                  </Badge>
                )
                )}
              </View>
              <View style={styles.textCommentsContainer}>
                <Text style={styles.textCommentsStyle}>{this.props.comments}</Text>
              </View>
            </View>
        }
      </View>
    )
  }
}

MoodBox.propTypes = {
  day: PropTypes.number,
  month: PropTypes.string,
  hour: PropTypes.string,
  mood: PropTypes.number,
  feelings: PropTypes.array,
  comments: PropTypes.string
}

export default MoodBox
