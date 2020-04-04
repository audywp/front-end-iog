import isLogin from './isLogin'
import { combineReducers } from 'redux'
import Busses from './Admin/Busses'
import Routes from './Admin/Route'

const allReducers = combineReducers({
  isLogin, Busses, Routes
})

export default allReducers