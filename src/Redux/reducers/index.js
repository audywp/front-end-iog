import isLogin from './isLogin'
import { combineReducers } from 'redux'
import Busses from './Admin/Busses'
import Routes from './Admin/Route'
import Agent from './Admin/Agent'
import Schedules from './Admin/Schedules'
import UpdateProfile from './Update'
// import Sorting from './Sort'

const allReducers = combineReducers({
  isLogin, Busses, Routes, Agent, Schedules, UpdateProfile
})

export default allReducers