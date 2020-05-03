import Config from '../../utils/Config'
import axios from 'axios'
import history from '../../utils/history'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

export const setLogin = (data) => async dispatch => {
  try {
    const infoLogin = await axios.post(Config.APP_BACKEND.concat('user/login'), data)
    console.log(infoLogin)
    if (infoLogin.data.success === true) {
      localStorage.setItem('token', infoLogin.data.token)
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
        title: 'Signed in successfully'
      })
      dispatch({
        type: 'IS_LOGIN',
        payload: infoLogin.data
      })
      history.push('/dashboard')
    } else {
      alert('fail')
      dispatch({
        type: 'IS_LOGOUT',
        payload: infoLogin.data
      })
      history.push('/')
    }
  } catch (error) {
    console.log(error)
  }
}

export const isLogout = (e) => dispatch => {
  try {
    if (localStorage.getItem('token')) {
      e.preventDefault()
      localStorage.removeItem('token')
      history.push('/')
    }

    dispatch({
      type: 'IS_LOGOUT'

    })
  } catch (error) {
    console.log(error)
  }
}
