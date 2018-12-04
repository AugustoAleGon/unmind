import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'remote-redux-devtools'
import createSagaMiddleware from 'redux-saga'

import { reducer as mood } from './Reducers/mood'
import root from '../Sagas'

const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]

const configureStore = preloadedState => {
  const compose = composeWithDevTools(applyMiddleware(...middleware))
  const store = createStore(mood, preloadedState, compose)
  sagaMiddleware.run(root)
  return store
}

export default configureStore
