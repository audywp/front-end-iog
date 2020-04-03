const initState = {
  data: [],
  isLoading: false
}

export default function Busses(state= initState, action) {
  switch (action.type) {
    case 'GET_BUSSES':
      const { data } = state
      return {
        ...state,
        isLoading: true,
        data: action.payload
      }
    case 'EDIT_BUSSES':
      return {
        ...state,
        isLoading: true,
        data: action.payload
      }
    case 'ADD_BUSSES':
      return {
        ...state,
        
      }
    case 'DELETE_BUSSES' :
      return {
        ...state,
      }
    default:
      return {...state}
  }
}
