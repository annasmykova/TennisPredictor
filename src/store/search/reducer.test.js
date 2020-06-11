import { initialState } from './selectors'
import * as actions from './actions'
import reducer from './reducer'
import { GET_SEARCH_LIST_SUCCESS } from './actions';

const altState = {
  ...initialState,
}

it('returns the initial state', () => {
  expect(reducer(undefined, {})).toEqual(initialState)
})

it('handles GET_SEARCH_LIST_SUCCESS', () => {
  const action = { type: actions.GET_SEARCH_LIST_SUCCESS, payload: {
      data: [{ id: 1, text: 'Test Test1' }, { id: 2, text: 'Test Test2' }, { id: 3, text: 'Test Test3' }],
      filter: 'player'
    }}
  expect(reducer(initialState, action)).toEqual({
    ...initialState,
    data: [{ id: 1, text: 'Test Test1' }, { id: 2, text: 'Test Test2' }, { id: 3, text: 'Test Test3' }],
    filter: 'player'})
  expect(reducer(altState, action)).toEqual({ ...altState,
    data: [{ id: 1, text: 'Test Test1' }, { id: 2, text: 'Test Test2' }, { id: 3, text: 'Test Test3' }],
    filter: 'player'})
})
