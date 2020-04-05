import Config from '../../../utils/Config'

import axios from 'axios'
axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`


export const GetSchedules = () => async dispatch => {
  try {
    const res = await axios.get(Config.APP_BACKEND.concat('user/schedule'))
    dispatch({
      type: 'GET_SCHEDULES',
      payload: res.data
    })
  } catch (error) {
    console.log(error)
  }
}

export const CreateSchedules = (idBus, idRoute, data) => async dispatch => {
  try {
   const res = await axios.post(Config.APP_BACKEND.concat(`admin/schedule/add/${idBus}/${idRoute}`), data)
   dispatch({
     type : 'GET_SCHEDULES' ,
     payload: res.data
   })

   
  } catch (error) {
    console.log(error)
  }
}