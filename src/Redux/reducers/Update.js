const initialState = {
  data: [],
  user: [],
  isLoading: false
}

export default function UpdateProfile (state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_PROFILE':
      return {
        ...state,
        isLoading: true
      }
    case 'GET_USERDETAIL':
      return {
        ...state,
        isLoading: true,
        data: action.payload
      }
    case 'USER': 
      return {
        ...state,
        isLoading: true,
        user: action.payload
      }
    default:
      return {...state}
  }
}