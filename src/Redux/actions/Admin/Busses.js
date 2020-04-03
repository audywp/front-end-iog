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

export const updateBus = (id, nameCar,busClass,seat) => async dispatch => {
  const endPoint = Config.APP_BACKEND.concat(`agent/bus/update/${id}`)
  const params = {
    nameCar: nameCar,
    busClass: busClass,
    seat : seat
  }
  try {
    const res = await Axios.patch(endPoint, params)
    dispatch({
      type:'EDIT_BUSSES',
      payload: res.data
    })
  } catch (error) {
    console.log(error)
  }
}

