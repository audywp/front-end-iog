import Config from '../../../utils/Config'

import Swal from 'sweetalert2/dist/sweetalert2.js'
import axios from 'axios'
axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`

export const showRoutes = (page) => async dispatch => {
  try {
   const res = await axios.get(Config.APP_BACKEND.concat(`admin/route?page=${page}`))
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
      dispatch({
        type: `DELETE_ROUTES`,
        payload: res.data
      })
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-start',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        onOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })

      Toast.fire({
        icon: 'success',
        title: 'Delete route successfully'
      })
    } else {
      alert('fail delete')
    }
  
  } catch (error) {
    console.log(error)
  }
}

export const CreateRoutes = (id, data) => async dispatch => {
  try{
    const res = await axios.post(Config.APP_BACKEND.concat(`admin/route/add/${id}`), data)
    if(res) {
      dispatch({
        type: 'ADD_ROUTES',
        payload:res.data
      })
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-start',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        onOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })

      Toast.fire({
        icon: 'success',
        title: 'Create route successfully'
      })
    } else {
      alert('failed')
    }
    
  } catch (error) {
    console.log(error)
  }
}

export const UpdateRoutes = (id, data) => async dispatch => {
  try{
    const res = await axios.patch(Config.APP_BACKEND.concat(`admin/route/update/${id}`), data)
    if (res) {
      dispatch({
        type: 'UPDATE_ROUTES',
        payload:res.data
      })
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-start',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        onOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })

      Toast.fire({
        icon: 'success',
        title: 'Update route successfully'
      })
    } else {
      alert('failed')
    }
  } catch (error) {
    console.log(error)
  }
}

export const routesLoading = () => dispatch => {

  try {
    dispatch({
      type: 'ROUTES_LOADING'
    })
  } catch (error) {
    console.log(error)
  }
}