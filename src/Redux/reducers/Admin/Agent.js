const initState = {
  data: [],
  isLoading: false
}

export default function Agent (state=initState, action) {
  switch (action.type) {
    case 'GET_AGENT':
      return{
        ...state,
        isLoading: true,
        data: action.payload
      }
    case 'DELETE_AGENT':
      return{
        ...state,
        isLoading: true,
        data: action.payload
      }
    case 'ADD_AGENT':
      return{
        ...state,
        isLoading: true,
        data: action.payload
      }
    case 'MAKE_AGENT':
      return{
        ...state,
        isLoading: true,
        data: action.payload
      }
    case 'AGENT_LOADING':
      return{
        ...state,
        isLoading: false
      }
    default:
      return { ...state };
  }
}