import { createStore, applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import storage from 'redux-persist/lib/storage'
import logger from 'redux-logger'
import {persistStore, persistReducer} from 'redux-persist'
import ReduxTunk from 'redux-thunk'
import hardSet from 'redux-persist/lib/stateReconciler/hardSet'
import {composeWithDevTools} from 'redux-devtools-extension'
import reducer from './reducers'

const config = {
  key: 'isLogin',
  storage,
  stateReconciler: hardSet,
  timeOut: null
}

const persistedReducer = persistReducer(config, reducer)

export default () => {
  const store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(
      promiseMiddleware,
      logger,
      ReduxTunk
    ))
  )
  const persistor = persistStore(store)
  return { store, persistor}
}
