import { SET_TEXT_FILTER, UNSET_TEXT_FILTER } from '../actions/actionTypes'

const filtersReducesDefaultState = {
  text: ''
}

const filtersReducer = (state = filtersReducesDefaultState, action) => {
  switch(action.type){
    
    case SET_TEXT_FILTER:
    const text = action.text
    return {
      ...state,
      text
    }

    case UNSET_TEXT_FILTER:
    return {
      ...state,
      text: ''
    }

    default:
    return state
  }
}


export default filtersReducer