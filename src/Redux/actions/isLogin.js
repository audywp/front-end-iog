import Config from '../../utils/Config'
import axios from 'axios'

const setLogin = async (username, password) => {
  const endPoint = Config.APP_BACKEND.concat('/user/login')
  const params = {
    username: username,
    password: password
  }
  const infoLogin = await axios.post(endPoint, params)
  console.log(infoLogin)
  return {
    type: 'IS_LOGIN',
    infoLogin
  }
}

export default setLogin