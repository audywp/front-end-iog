import Config from '../../utils/Config'
import axios from 'axios'
import history from '../../utils/history'

export const setLogin = (data) => async dispatch =>  {
  
 
  try {
    const infoLogin = await axios.post(Config.APP_BACKEND.concat('admin/login'), data)
    console.log(infoLogin)
    if (infoLogin.data.success === true) {
      localStorage.setItem('token', infoLogin.data.token)
      alert('success')
      dispatch({
        type:'IS_LOGIN',
        payload: infoLogin.data
      })
      history.push('/dashboard')
    } else {
      alert('fail')
      dispatch({
        type:'IS_LOGOUT',
        payload: infoLogin.data
      })
      history.push('/')
    }
    

  } catch (error) {
    console.log(error)
  }
}
