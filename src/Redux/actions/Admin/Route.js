import Config from '../../../utils/Config'

import axios from 'axios'
axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`

export const showRoutes = () => async dispatch => {
  try {
   const res = await axios.get(Config.APP_BACKEND.concat('admin/route'))
   dispatch({
     type : 'GET_ROUTES' ,
     payload: res.data
   })

   
  } catch (error) {
    console.log(error)
  }
}

export const deleteRoutes = (id) => async dispatch => {

  try {
    const res = await axios.delete(Config.APP_BACKEND.concat(`admin/route/delete/${id}`))
    if(res) {
      alert('ok')
    } else {
      alert('fail delete')
    }
    dispatch({
      type: `DELETE_ROUTES`,
      payload: res.data
    })
  
  } catch (error) {
    console.log(error)
  }
}