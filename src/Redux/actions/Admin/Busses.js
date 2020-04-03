import Config from '../../../utils/Config'
import Axios from 'axios'
Axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`
// export const getAllDataBusses = (getDatabus) => {
//   console.log(getDatabus)
//   return {
//     type: 'GET_BUSSES',
//     payload: getDatabus.data
//   }
// }

// export const getDataBusses = () => {
//   const endPoint = Config.APP_BACKEND.concat('agent/bus')
//   return dispatch => {
//     return Axios.get(endPoint)
//     .then(getDatabus => {
//       dispatch(getAllDataBusses(getDatabus))
//     })
//   }
// } 

export const getBus = ()=> async dispatch => {
  const endPoint = Config.APP_BACKEND.concat('admin/bus')
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
      alert('success')
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
      alert('ok')
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


