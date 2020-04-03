import Config from '../../utils/Config'
import axios from 'axios'

const setLogin = async (username, password) => {
  const endPoint = Config.APP_BACKEND.concat('/user/login')
  const payload = {
    username: username,
    password: password
  }
  const infoLogin = await axios.post(endPoint, payload)
  return {
    type: 'IS_LOGIN',
    infoLogin
  }
}

export default setLogin