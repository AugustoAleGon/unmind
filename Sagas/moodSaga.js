import { put, call } from 'redux-saga/effects'
import { getMoods as getMoodsRequest } from '../Services'
import moodAction from '../Redux/Reducers/mood'

export function * getMoods (action) {
  yield put(moodAction.startMoodFetching())
  const response = yield call(getMoodsRequest)
  if (response.status === 200) {
    yield put(moodAction.getMoodSuccess(response.data))
  } else {
    yield put(moodAction.failMoodResponse(response.error))
  }
}
