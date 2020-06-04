import { initialState } from './selectors'
import {
  LOGIN_SUCCESS,
  GET_USER_SUCCESS,
  LOGOUT_SUCCESS,
  REMOVE_ACC_SUCCESS,
  SIGN_UP_SUCCESS
} from './actions'

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_SUCCESS:
    case GET_USER_SUCCESS:
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        data: payload.userData
      }
    case LOGOUT_SUCCESS:
    case REMOVE_ACC_SUCCESS:
      return {
        ...state,
        data: null
      }
    default:
      return state
  }
}
