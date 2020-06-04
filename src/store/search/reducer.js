import { initialState } from './selectors'
import { GET_SEARCH_LIST_SUCCESS, CLEAR_SEARCH_LIST } from './actions'

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CLEAR_SEARCH_LIST:
      return initialState
    case GET_SEARCH_LIST_SUCCESS:
      return {
        ...state,
        filter: payload.filter || '',
        data: payload.data,
      }
    default:
      return state
  }
}
