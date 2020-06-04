import { initialState } from './selectors'
import {
  GET_COACH_SUCCESS,
  GET_PLAYERS_SUCCESS,
  GET_REQUESTS_SUCCESS,
  RESOLVE_REQUEST_SUCCESS,
} from './actions'

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_COACH_SUCCESS:
      return {
        ...state,
        data: payload.coachData
      }
    case GET_REQUESTS_SUCCESS:
      return {
        ...state,
        requests: payload
      }
    case GET_PLAYERS_SUCCESS:
      return {
        ...state,
        players: payload
      }
    case RESOLVE_REQUEST_SUCCESS:
      return {
        ...state,
        requests: state.requests.data.filter(item => item.id !== payload)
      }
    default:
      return state
  }
}
