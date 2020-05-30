import { createBrowserHistory } from 'history';
import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import createRootReducer from './reducer'
import createSagaMiddleware from 'redux-saga'
import { isDev, isBrowser } from 'config'
import middlewares from './middlewares'
import sagas from './sagas'

const devtools = isDev && isBrowser && window.devToolsExtension
  ? window.devToolsExtension
  : () => (fn) => fn

export const history = createBrowserHistory()

const configureStore = (initialState, services = {}) => {
  const sagaMiddleware = createSagaMiddleware()

  const enhancers = [
    applyMiddleware(
      ...middlewares,
      routerMiddleware(history),
      sagaMiddleware
    ),
    devtools(),
  ]

  const store = createStore(createRootReducer(history), initialState, compose(...enhancers))
  let sagaTask = sagaMiddleware.run(sagas, services)

  if (module.hot) {
    module.hot.accept('./reducer', () => {
      const nextReducer = require('./reducer').default
      store.replaceReducer(nextReducer)
    })
    module.hot.accept('./sagas', () => {
      const nextSagas = require('./sagas').default
      sagaTask.cancel()
      sagaTask.done.then(() => {
        sagaTask = sagaMiddleware.run(nextSagas, services)
      })
    })
  }

  return store
}

export default configureStore
