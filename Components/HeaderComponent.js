import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, ViewPropTypes } from 'react-native'

import styles from './Styles/HeaderComponentStyles'

const HeaderComponent = (props) => {
  return (
    <View style={[styles.headerContainer, props.headerStyle]}>
      <View style={styles.borderSection}>
        <View style={styles.roundCircle} />
      </View>
      <View style={styles.centerSection}>
        <Text style={styles.titleStyle}>{props.title}</Text>
        <Text style={styles.subtitleStyle}>{props.subtitle}</Text>
      </View>
      <View style={styles.borderSection}>
        <View style={styles.roundCircle} />
      </View>
    </View>
  )
}

HeaderComponent.propTypes = {
  headerStyle: ViewPropTypes.style,
  title: PropTypes.string,
  subtitle: PropTypes.string
}

export default HeaderComponent
