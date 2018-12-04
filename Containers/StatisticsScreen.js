import React, { Component } from 'react'
import {
  View,
  Text,
  FlatList
} from 'react-native'
import HeaderComponent from '../Components/HeaderComponent'
import MoodBox from '../Components/MoodBox'
import { dateToMonth, dateToDay, dateToHour } from '../Utils/Utils'
import moodsAction from '../Redux/Reducers/mood'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { ApplicationStyles } from '../Themes'
import styles from './Styles/StatisticsScreenStyles'

const data = [
  {
    id: 1,
    user: '5c05f41ace60a2298aba9e1e',
    mood: 3,
    feelings: ['Angry', 'Lonely', 'Tired', 'Sad'],
    comments: 'Bla bla bla bla',
    rgDate: '2018-03-02T10:34:30.000Z'
  },
  {
    id: 2,
    user: '5c05f41ace60a2298aba9e1e',
    mood: 4,
    feelings: ['Excited'],
    comments: "I'm so excited!",
    rgDate: '2018-03-02T10:33:00.000Z'
  },
  {
    id: 3,
    user: '5c05f41ace60a2298aba9e1e',
    mood: 4,
    feelings: [],
    comments: '',
    rgDate: '2018-03-02T11:36:00.000Z'
  },
  {
    id: 4,
    user: '5c05f41ace60a2298aba9e1e',
    mood: 7,
    feelings: ['Thankful', 'Optimistic'],
    comments: 'Thanks for everything!',
    rgDate: '2018-04-02T10:36:00.000Z'
  }
]

class StatisticsScreen extends Component {
  async componentDidMount () {
    await this.props.getMoods()
    console.log('This props:', this.props)
  }

  componentDidUpdate (prevProps) {
    if (prevProps.moods !== this.props.moods) {
      console.log(this.props.moods)
    }
  }

  _renderItem = ({ item }) => {
    return (
      <MoodBox
        key={item.id}
        day={dateToDay(item.rgDate)}
        month={dateToMonth(item.rgDate)}
        hour={dateToHour(item.rgDate)}
        mood={item.mood}
        feelings={item.feelings}
        comments={item.comments} />
    )
  }

  render () {
    return (
      <View style={ApplicationStyles.screen.fillScreen}>
        <HeaderComponent
          showLeftIcon
          centerSection
          backIconOnPress={() => this.props.navigation.goBack()}
          headerStyle={styles.backgroundBlue}
          title='Mood Insights'
          subtitle='Your mood over time' />
        <View style={ApplicationStyles.screen.center}>
          <Text>Based on {data.length} entries</Text>
        </View>
        <FlatList
          data={data}
          renderItem={this._renderItem} />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    moods: state.mooods
  }
}

const mapDispatchToPros = (dispatch) => {
  return { getMoods: bindActionCreators(moodsAction.getMoods, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToPros)(StatisticsScreen)
