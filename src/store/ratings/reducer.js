import { initialState } from './selectors'
import { GET_RATING, GET_RATING_SUCCESS } from './actions'

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_RATING:
      return state
    case GET_RATING_SUCCESS:
      const data = [ ...state.data ]
      data[payload.page] = payload.data
      return {
        ...state,
        [payload.filter]: {
          ...payload,
          data,
        },
      }
    default:
      return state
  }
}
