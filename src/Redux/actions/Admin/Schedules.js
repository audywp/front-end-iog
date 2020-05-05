import Config from '../../../utils/Config'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import axios from 'axios'
import history from '../../../utils/history'
// axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`

export const GetSchedules = (page, searchKey, search, sortKey, sort) => async dispatch => {
  try {
    const res = await axios.get(Config.APP_BACKEND
    .concat(`user/schedule?page=${page}&search[key]=${searchKey || 'start'}&search[value]=${search || ''}&sort[key]=${sortKey || 'id'}&sort[value]=${parseInt(sort)}`))
    dispatch({
      type: 'GET_SCHEDULES',
      payload: res.data
    })
  } catch (error) {
    console.log(error)
  }
}

export const CreateSchedules = (idRoute, data) => async dispatch => {
  try {
   const res = await axios.post(Config.APP_BACKEND.concat(`admin/schedule/add/${idRoute}`), data)
   if(res) {
    dispatch({
      type: 'GET_SCHEDULES',
      payload:res.data
    })
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-start',
      showConfirmButton: false,
      timer: 6000,
      timerProgressBar: true,
      onOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })

    Toast.fire({
      icon: 'success',
      title: 'Create Schedules successfully'
    })
  } else {
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
      title: 'FAILED !!'
    })
  }
  } catch (error) {
    alert('you dont have bus with selected class')
  }
}

export const DeleteSchedules = (id) => async dispatch => {
  try {
    const res = await axios.delete(Config.APP_BACKEND.concat(`admin/schedule/delete/${id}`))
    if (res) {
      Swal.fire(
        'Delete Succes',
        'success'
      )
      history.push('/dashboard')
    } else {
      alert('failed')
    }
  } catch (error) {
    console.log(error)
  }
}

export const Update = (id, data) => async dispatch => {
  const res = await axios.patch(Config.APP_BACKEND.concat(`admin/schedule/update/${id}`), data)
  try {
    if (res) {
      Swal.fire(
        'Update Succes',
        'success'
      )
      history.push('/dashboard')
    } else {
      Swal.fire(
        'Update Failed',
        'failed'
      )
    }
  } catch (err) {
    console.log(err)
  }
}

export const schedulesLoading = () => async dispatch => {
  try {
    dispatch({
      type: 'SCHEDULE_LOADING'
    })
  } catch (error) {
    console.log(error)
  }
}