import { takeLatest } from 'redux-saga/effects'

import { moodTypes } from '../Redux/Reducers/mood'
import { getMoods } from './moodSaga'

export default function * root () {
  yield [
    takeLatest(moodTypes.GET_MOODS, getMoods)
  ]
}
