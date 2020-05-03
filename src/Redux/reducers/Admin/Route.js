const initState = {
  data: [],
  isLoading: false,
}

export default function Routes (state = initState, action) {
  switch(action.type) {
    case 'GET_ROUTES' :
      return {
        ...state,
        isLoading:true,
        data: action.payload
      }
    case 'ADD_ROUTES' :
      return {
        ...state,
        isLoading: true,
        data: action.payload
      }
    case 'UPDATE_ROUTES' :
      return {
        ...state,
        isLoading: true,
        data: action.payload
      }
    case 'DELETE_ROUTES' :
      return {
        ...state,
        isLoading: true,
        data: action.payload
      }
    case 'ROUTES_LOADING' :
      return {
        ...state,
        isLoading: false
      }
    default :
    return {...state}
  }
}