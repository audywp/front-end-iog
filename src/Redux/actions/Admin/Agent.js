import Config from '../../../utils/Config'

import axios from 'axios'
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
      alert('success')
    } else {
      alert('failed')
    }
    dispatch({
      type: 'DELETE_AGENT',
      payload: res.data
    })
  } catch (error) {
    console.log(error)
  }
}

export const ChangeUserToAgent = (id) => async dispatch => {
  try{
    const res = await axios.post(Config.APP_BACKEND.concat(`admin/agent/add/${id}`))
  
    if (res) {
      alert('user has upgrade')
    } else {
      alert('failed')
    }
    dispatch ({
      type: `MAKE_AGENT`,
      payload: res.data
    })
  } catch (error) {
    console.log(error)
  }
}
