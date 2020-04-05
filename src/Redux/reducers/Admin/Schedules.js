const initState = {
  data: [],
  isLoading: false,
}

export default function Schedules (state = initState, action) {
  switch(action.type) {
    case 'GET_SCHEDULES' :
      return {
        ...state,
        loading:false,
        data: action.payload
      }
    case 'ADD_SCHEDULES' :
      return {
        ...state,
        loading: false,
        data: action.payload
      }
    case 'UPDATE_SCHEDULES' :
      return {
        ...state,
        loading: false,
        data: action.payload
      }
    case 'DELETE_SCHEDULES' :
      return {
        ...state,
        loading: false,
        data: action.payload
      }
    default :
    return {...state}
  }
}