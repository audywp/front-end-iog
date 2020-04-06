import Config from '../../utils/Config'

import axios from 'axios'
axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`

export const Sorting = (url)=> async dispatch => {

  try {
    const Sorting = await axios.get(Config.APP_BACKEND.concat(`admin/bus?sort[id]=${url}`))
    console.log(Sorting)
    dispatch ({
      type: 'SORT',
      payload: Sorting.data
    })
  } catch (error) {
    console.log(error)
  }

}