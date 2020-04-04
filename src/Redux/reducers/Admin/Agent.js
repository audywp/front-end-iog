const initState = {
  data: [],
  isLoading: false
}

export default function Agent (state=initState, action) {
  switch (action.type) {
    case 'GET_AGENT':
      return{
        ...state,
        isLoading: false,
        data: action.payload
      }
    case 'DELETE_AGENT':
      return{
        ...state,
        isLoading: false,
        data: action.payload
      }
    case 'ADD_AGENT':
      return{
        ...state,
        isLoading: false,
        data: action.payload
      }
  
    default:
      return { ...state };
  }
}