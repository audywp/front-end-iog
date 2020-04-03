import { createStore, applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import storage from 'redux-persist/lib/storage'
import logger from 'redux-logger'
import {persistStore, persistReducer} from 'redux-persist'
import thunk from 'redux-thunk'
import hardSet from 'redux-persist/lib/stateReconciler/hardSet'
import {composeWithDevTools} from 'redux-devtools-extension'
import reducer from './reducers'


const persistConfig = {
  key: 'isLogin',
  storage,
  stateReconciler: hardSet,
  timeOut: null
}

const persistedReducer = persistReducer(persistConfig, reducer)

export default () => {
  const store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(
      promiseMiddleware,
      logger,
      thunk
    )),
  )
  const persistor = persistStore(store)
  return { store, persistor}
}
