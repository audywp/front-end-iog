const initState = {
  data: [],
  isLoading: false
}

export default function Busses(state= initState, action) {
  switch (action.type) {
    case 'GET_BUSSES':
      return {
        ...state,
        isLoading: false,
        data: action.payload
      }
    case 'EDIT_BUSSES':
      return {
        ...state,
        isLoading: false,
        data: action.payload
      }
    case 'ADD_BUSSES':
      return {
        ...state,
        isLoading: false,
        data: action.payload
      }
    case 'DELETE_BUSSES' :
      return {
        ...state,
        isLoading: false,
        data: action.payload
      }
    case 'SORT':
      return {
        ...state,
      }
    default:
      return {...state}
  }
}

