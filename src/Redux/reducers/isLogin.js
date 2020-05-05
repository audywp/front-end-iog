const initialState = {
  userInfo: [],
  isLogged: false,
  isLoading: false
}

export default function isLogin(state = initialState, action) {

  switch(action.type){
    case 'IS_LOGIN':
      return {
        ...state,
        isLogged :true,
        isLoading : true,
        userInfo: action.payload
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

