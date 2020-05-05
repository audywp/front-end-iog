const initState = {
  data: [],
  dataCreate: [],
  RouteEnd: [],
  isLoading: false,
}

export default function Routes (state = initState, {type, payload}) {
  switch(type) {
    case 'GET_ROUTES' :
      return {
        ...state,
        isLoading:true,
        data: payload
      }
    case 'CREATE_ROUTES':
      return {
        ...state,
        dataCreate: payload
      }
    case 'ROUTES_END' :
      return {
        ...state,
        RouteEnd: payload
      }
    case 'ADD_ROUTES' :
      return {
        ...state,
        isLoading: true,
        data: payload
      }
    case 'UPDATE_ROUTES' :
      return {
        ...state,
        isLoading: true,
        data: payload
      }
    case 'DELETE_ROUTES' :
      return {
        ...state,
        isLoading: true,
        data: payload
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