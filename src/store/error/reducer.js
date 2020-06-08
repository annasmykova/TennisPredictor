import { initialState } from './selectors'
import { SHOW_ERROR } from './actions'

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SHOW_ERROR:
      return {
        error: payload
      }
    default:
      return state
  }
}
