// https://github.com/diegohaz/arc/wiki/Reducers
import camelCase from 'lodash/camelCase'
import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import { reducer as thunk } from 'redux-saga-thunk'
import { connectRouter } from 'connected-react-router'

const reducers = {
  form,
  thunk,
}

const req = require.context('.', true, /\.\/.+\/reducer\.js$/)

req.keys().forEach((key) => {
  const storeName = camelCase(key.replace(/\.\/(.+)\/.+$/, '$1'))
  reducers[storeName] = req(key).default
})

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  ...reducers
})

export default createRootReducer
