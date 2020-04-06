import Config from '../../../utils/Config'
import Axios from 'axios'
import history from '../../../utils/history'
Axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`

export const getBus = (page, sort, search)=> async dispatch => {
  const endPoint = Config.APP_BACKEND.concat(`admin/bus?page=${page}&sort[bus_Seat]=${sort}?&search[car_name]=${search||''}`)
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

export const addBus = (id,data)=> async dispatch => {
  try {
    const res = await Axios.post(Config.APP_BACKEND.concat(`admin/bus/add/${id}`), data)
    
    if (res) {
      history.push('/dashboard/bus')
    } else {
      alert('failed')
    }

    dispatch({
      type:'ADD_BUSSES',
      payload : res.data
    })
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
      console.log('success')
    } else {
      console.log('false')
    }
    dispatch({
      type:'EDIT_BUSSES',
      payload: res.data
    })
  } catch (error) {
    console.log(error)
  }
}

export const deleteBus = (id) => async dispatch => {
  try {
    const res = await Axios.delete(Config.APP_BACKEND.concat(`agent/bus/delete/${id}`))
    if(res) {
    history.push('dashboard/bus') 

    } else {
      alert('fail delete')
    }
    dispatch({
      type:'DELETE_BUSSES',
      payload:res.data
    })
  } catch (error) {
    console.log(error)
  }
}



