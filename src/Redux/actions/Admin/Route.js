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

export const CreateRoutes = (id, data) => async dispatch => {
  try{
    const res = await axios.post(Config.APP_BACKEND.concat(`admin/route/add/${id}`), data)
    if(res) {
      alert ('ok')
    } else {
      alert('failed')
    }
    dispatch({
      type: 'ADD_ROUTES',
      payload:res.data
    })
  } catch (error) {
    console.log(error)
  }
}

export const UpdateRoutes = (id, data) => async dispatch => {
  try{
    const res = await axios.patch(Config.APP_BACKEND.concat(`admin/route/update/${id}`), data)
    if (res) {
      alert('success')
    } else {
      alert('failed')
    }
    dispatch({
      type: 'UPDATE_ROUTES',
      payload:res.data
    })
  } catch (error) {
    console.log(error)
  }
}