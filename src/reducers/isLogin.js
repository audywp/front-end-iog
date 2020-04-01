

export default function isLogin(state = false, action) {

  switch(action.type){
    case 'LOGIN':
      return !state
    default:
      return state
  }

}

