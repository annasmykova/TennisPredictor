import { initialState } from './selectors'
import {
  CLEAR_COACH_DATA,
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
        coach: payload
      }
    case GET_REQUESTS_SUCCESS:
      const requests = [ ...state.requests.data ]
      requests[payload.page - 1] = payload.data
      return {
        ...state,
        requests: {
          ...payload,
          data: requests,
        },
      }
    case GET_PLAYERS_SUCCESS:
      const players = [ ...state.players.data ]
      players[payload.page - 1] = payload.data
      return {
        ...state,
        players: {
          ...payload,
          data: players,
        },
      }
    case RESOLVE_REQUEST_SUCCESS:
      return {
        ...state,
        requests: state.requests.data.filter(item => item.id !== payload)
      }
    case CLEAR_COACH_DATA:
      return initialState
    default:
      return state
  }
}
