import isLogin from './isLogin'
import { combineReducers } from 'redux'
import Busses from './Admin/Busses'
import Routes from './Admin/Route'
import Agent from './Admin/Agent'

const allReducers = combineReducers({
  isLogin, Busses, Routes, Agent
})

export default allReducers