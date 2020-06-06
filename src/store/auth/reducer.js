import { initialState } from './selectors'
import {
  LOGIN_SUCCESS,
  GET_USER_SUCCESS,
  LOGOUT_SUCCESS,
  REMOVE_ACC_SUCCESS,
  SIGN_UP_SUCCESS,
  EDIT_USER_SUCCESS,
  EDIT_USER,
  EDIT_USER_FAIL
} from './actions'
import { CLEAR_COACH_DATA } from '../coach/actions';

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_SUCCESS:
    case GET_USER_SUCCESS:
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        data: payload.userData
      }
    case EDIT_USER:
      return {
        ...state,
        loading: true,
      }
    case EDIT_USER_FAIL:
      return {
        ...state,
        loading: false,
      }
    case EDIT_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload.userData
      }
    case LOGOUT_SUCCESS:
    case REMOVE_ACC_SUCCESS:
      return {
        ...state,
        data: null
      }
    case CLEAR_COACH_DATA:
      return initialState
    default:
      return state
  }
}
