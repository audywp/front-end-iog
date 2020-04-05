import Config from '../../utils/Config'
import axios from 'axios'

export const setLogin = (data) => async dispatch =>  {
  
 
  try {
    const infoLogin = await axios.post(Config.APP_BACKEND.concat('admin/login'), data)
    console.log(infoLogin)
    if (infoLogin.data.success === true) {
      localStorage.setItem('token', infoLogin.data.token)
      alert('success')
    } else {
        alert('fail')
      }
    dispatch({
      type:'IS_LOGIN',
      payload: infoLogin.data
    })

  } catch (error) {
    console.log(error)
  }
}
