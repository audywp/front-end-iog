const initialState = {
  userInfo: {},
  isLogged: false,
}

export default function isLogin(state = initialState, action) {

  switch(action.type){
    case 'IS_LOGIN':
      const {isLogged, userInfo} = state
      
      return {
        ...state,
        isLogged :true
      }
    case 'IS_LOGOUT':
      return initialState
      
    default:
      return state
  }
}

