import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import ketoApp from '../reducers'

export default function configureStore(initialState) {
  return createStore(
    ketoApp,
    initialState,
    applyMiddleware(
      thunkMiddleware
    )
  )
}