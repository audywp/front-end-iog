import Config from '../../utils/Config'

import axios from 'axios'
axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`

export const GetUpdate = (id) => async dispatch => {
  const res = await axios.get(Config.APP_BACKEND.concat(`user/detail/${id}`))
  try {
    dispatch ({
      type: 'GET_USERDETAIL',
      payload: res.data
    })
  } catch (err) {
    console.log(err)
  }
}

export const Update = (id, data) => async dispatch => {
  const res = await axios.patch(Config.APP_BACKEND.concat(`user/update/${id}`), data, {headers: { 'content-type': 'multipart/form-data' }})
  try {
    if (res) {
      dispatch({
        type: 'UPDATE_PROFILE'
      })
    } else {
      alert('Failed update data')
    }
  } catch (error) {
    console.log(error)
  }
}

export const GetUser = (data) => async dispatch => {
  const res = await axios.get(Config.APP_BACKEND.concat(`user/user`), data)
  console.log(data)
  try {
    if (res) {
      dispatch({
        type: 'USER',
        payload: res.data
      })
    } else {
      alert('User not found')
    }
  } catch (err) {
    console.log(err)
  }
}