import { initialState } from './selectors'
import { GET_RATING, GET_RATING_SUCCESS } from './actions'

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_RATING:
      return state
    case GET_RATING_SUCCESS:
      return {
        ...state,
        [payload.key]: payload.data,
      }
    default:
      return state
  }
}
