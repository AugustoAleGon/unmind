import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, ViewPropTypes, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'

import styles from './Styles/HeaderComponentStyles'

const HeaderComponent = (props) => {
  return (
    <View style={[styles.headerContainer, props.headerStyle]}>
      {
        props.showLeftIcon &&
        <View style={styles.borderSection}>
          <TouchableOpacity
            style={styles.roundCircle}
            onPress={props.backIconOnPress}>
            <Icon
              name='md-arrow-back'
              size={32}
              type='ionicon' />
          </TouchableOpacity>
        </View>
      }
      <View style={styles.centerSection}>
        <Text style={styles.titleStyle}>{props.title}</Text>
        <Text style={styles.subtitleStyle}>{props.subtitle}</Text>
      </View>
      {
        props.showRightIcon &&
        <View style={styles.borderSection}>
          <TouchableOpacity
            onPress={props.skipOnPress}
            style={styles.roundCircle}>
            <Text>Skip</Text>
          </TouchableOpacity>
        </View>
      }
    </View>
  )
}

HeaderComponent.propTypes = {
  headerStyle: ViewPropTypes.style,
  backIconOnPress: PropTypes.func,
  title: PropTypes.string,
  skipOnPress: PropTypes.func,
  subtitle: PropTypes.string
}

export default HeaderComponent
