import { initialState } from './selectors'
import {
  GET_PLAYER_SUCCESS,
  GET_MATCHES_SUCCESS,
  GET_INJURIES_SUCCESS,
  CREATE_MATCH_SUCCESS,
  CREATE_INJURY_SUCCESS,
  GET_PREDICTION_SUCCESS,
  CLEAR_PLAYER_DATA
} from './actions'

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PLAYER_SUCCESS:
      return {
        ...state,
        player: payload
      }
    case GET_MATCHES_SUCCESS:
      const matches = [ ...state.matches.data ]
      matches[payload.page - 1] = payload.data
      return {
        ...state,
        matches: {
          ...payload,
          data: matches,
        },
      }
    case GET_INJURIES_SUCCESS:
      const injuries = [ ...state.injuries.data ]
      injuries[payload.page - 1] = payload.data
      return {
        ...state,
        injuries: {
          ...payload,
          data: injuries,
        },
      }
    case CREATE_MATCH_SUCCESS:
      const [ firstPageMatch, ...otherMatchPages] = state.matches.data
      const firstPageMatches = firstPageMatch || []
      return {
        ...state,
        matches: {
          ...state.matches,
          data: [[payload, ...firstPageMatches], ...otherMatchPages]
        }
      }
    case CREATE_INJURY_SUCCESS:
      const [ firstPageInjury, ...otherInjuryPages] = state.injuries.data
      const firstPageInjuries = firstPageInjury || []
      const newFirstPageInjuries = firstPageInjuries.find(item => item.injury === payload.injury)
        ? firstPageInjuries.map(item => item.injury === payload.injury ? payload : item )
        : [payload, ...firstPageInjuries]
      return {
        ...state,
        injuries: {
          ...state.injuries,
          data: [[...newFirstPageInjuries], ...otherInjuryPages]
        }
      }
    case GET_PREDICTION_SUCCESS:
      return {
        ...state,
        prediction: {
          result: payload.result,
          otherPlayer: payload.player
        }
      }
    case CLEAR_PLAYER_DATA:
      return initialState
    default:
      return state
  }
}
