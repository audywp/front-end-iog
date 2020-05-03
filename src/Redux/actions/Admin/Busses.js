import Config from '../../../utils/Config'
import Axios from 'axios'
import history from '../../../utils/history'
import Swal from 'sweetalert2/dist/sweetalert2.js'
Axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`

export const getBus = (page, sort, search)=> async dispatch => {
  const endPoint = Config.APP_BACKEND.concat(`admin/bus?page=${page}?&search[car_name]=${search||''}`)
  try {
    const res = await Axios.get(endPoint)
    dispatch({
      type : 'GET_BUSSES',
      payload : res.data
    })
  } catch (error) {
    console.log(error)
  }
}

export const addBus = (data)=> async dispatch => {
  try {
    const res = await Axios.post(Config.APP_BACKEND.concat('admin/bus/add/'), data)
    if (res) {
      dispatch({
        type:'ADD_BUSSES',
        payload : res.data
      })
      history.push('/dashboard/bus')
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
        title: 'Create Bus success'
      })
    } else {
      alert('failed')
    }
  } catch (error) {
    console.log(error)
  }
}

export const updateBus = (id, data) => async dispatch => {
  const endPoint = Config.APP_BACKEND.concat(`agent/bus/update/${id}`)
  try {
    const res = await Axios.patch(endPoint, data)
    console.log(res)
    if (res) {
      dispatch({
        type:'EDIT_BUSSES',
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
        title: 'Update Bus successfully'
      })
      history.push('/dashboard/bus')
    } else {
      console.log('false')
    }
  } catch (error) {
    console.log(error)
  }
}

export const deleteBus = (id) => async dispatch => {
  try {
    const res = await Axios.delete(Config.APP_BACKEND.concat(`agent/bus/delete/${id}`))
    if(res) {
    history.push('dashboard/bus') 
    dispatch({
      type:'DELETE_BUSSES',
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
      title: 'Delete Bus successfully'
    })
    } else {
      alert('fail delete')
    }
  } catch (error) {
    console.log(error)
  }
}

export const busLoading = () => async dispatch => {
  dispatch({
    type: 'BUS_LOADING'
  })
}

