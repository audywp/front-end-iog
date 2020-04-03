import isLogin from './isLogin'
import { combineReducers } from 'redux'
import Busses from './Admin/Busses'

const allReducers = combineReducers({
  isLogin, Busses
})

export default allReducers