import { SET_TEXT_FILTER, UNSET_TEXT_FILTER } from './actionTypes'

export const setTextFilter = (text = "") => ({
  type: SET_TEXT_FILTER,
  text
})

export const unsetTextFilter = () => ({
  type: UNSET_TEXT_FILTER
})