const initialState = {
  userInfo: [],
  isLogged: false,
}

export default function isLogin(state = initialState, action) {

  switch(action.type){
    case 'IS_LOGIN':
      return {
        ...state,
        isLogged :true
      }
    case 'IS_LOGOUT':
      return {
        ...state,
        isLogged : false
      }
      
    default:
      return {...state}
  }
}

