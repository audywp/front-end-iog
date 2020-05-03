const initState = {
  data: [],
  isLoading: false
}

export default function Busses(state= initState, action) {
  switch (action.type) {
    case 'GET_BUSSES':
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
        isLoading: true,
        data: action.payload
      }
    case 'DELETE_BUSSES' :
      return {
        ...state,
        isLoading: true,
        data: action.payload
      }
    case 'SORT':
      return {
        ...state,
      }
    case 'BUS_LOADING':
      return {
        ...state,
        isLoading: false
      }
    default:
      return {...state}
  }
}

