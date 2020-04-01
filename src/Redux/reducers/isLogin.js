const initialState = {
  username: '',
  isLogged: false
}

export default function isLogin(state = initialState, action) {

  switch(action.type){
    case 'IS_LOGIN':
      return {
        ...state,
        users: action.username,
        isLogged: true
      }
    case 'IS_LOGOUT':
      return initialState
      
    default:
      return state
  }
}

