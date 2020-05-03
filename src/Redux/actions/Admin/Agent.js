import Config from '../../../utils/Config'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import axios from 'axios'
import history from '../../../utils/history'
axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`

export const GetDataAgent = () => async dispatch => {
  try {
    const res = await axios.get(Config.APP_BACKEND.concat('admin/agent'))
    dispatch({
      type: 'GET_AGENT',
      payload: res.data
    })
  } catch (error) {
    console.log(error)
  }
}

export const DeleteAgent = (id) => async dispatch => {
  try {
    const res = await axios.delete(Config.APP_BACKEND.concat(`admin/agent/delete/${id}`))
    if (res) {
      dispatch({
        type: 'DELETE_AGENT',
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
        title: 'Delete Agent success'
      })
      
    } else {
      alert('failed')
    }
  } catch (error) {
    console.log(error)
  }
}

export const ChangeUserToAgent = (data) => async dispatch => {
  try{
    const res = await axios.post(Config.APP_BACKEND.concat(`admin/agent/add/`), data)
    if (res) {
      dispatch ({
        type: `MAKE_AGENT`,
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
        title: 'Create Agent success'
      })
      history.push('/')
    } else {
      alert('failed')
    }
  } catch (error) {
    console.log(error)
  }
}
