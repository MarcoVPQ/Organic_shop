
import { LOGIN_SUCCESS, LOG_OUT } from '../actions/actionTypes'

const authDefaultState = {
  isLogged: JSON.parse(localStorage.getItem('logged')) ? true : false
}


const authReducer = ( state = authDefaultState, action ) => {

  switch(action.type){
    case LOGIN_SUCCESS :
    localStorage.setItem('logged', true)
    return {
      ...state,
      isLogged: true
    }
    case LOG_OUT:
    localStorage.removeItem('logged')
    return{
      ...state,
      isLogged: false
    }
    default:
    return state
  }

}


export default authReducer