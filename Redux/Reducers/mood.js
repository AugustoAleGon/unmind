import { createReducer, createActions } from 'reduxsauce'

/* --- Types and Action Creators --- */
const { Types, Creators } = createActions({
  startMoodFetching: ['value'],
  getMoods: ['moods'],
  getMoodSuccess: ['response'],
  failMoodResponse: ['error'],
  setCurrentMood: ['mood'],
  setFeelings: ['feelings'],
  setComments: ['comments']
})

export const moodTypes = Types

export default Creators

/* --- Initial State --- */

const INITIAL_VALUES = {
  error: null,
  fetching: false,
  currentMood: 4,
  feelings: [],
  comments: '',
  moods: []
}

const initFetch = (state) => ({
  ...state,
  fetching: true
})

const setMoods = (state, action) => {
  return ({
    ...state,
    moods: action.response
  })
}

const failResponse = (state, action) => ({
  ...state,
  fetching: false,
  error: action.error
})

const setCurrentMood = (state, action) => {
  return ({
    ...state,
    menu: action.mood
  })
}

const setFeelings = (state, action) => {
  return ({
    ...state,
    feelings: action.feelings
  })
}

const setComments = (state, action) => {
  return ({
    ...state,
    comments: action.comments
  })
}

const HANDLERS = {
  [Types.START_MOOD_FETCHING]: initFetch,
  [Types.GET_MOOD_SUCCESS]: setMoods,
  [Types.FAIL_MOOD_RESPONSE]: failResponse,
  [Types.SET_CURRENT_MOOD]: setCurrentMood,
  [Types.SET_FEELINGS]: setFeelings,
  [Types.SET_COMMENTS]: setComments
}

/* --- Hookup Reducers To Types --- */

export const reducer = createReducer(INITIAL_VALUES, HANDLERS)
