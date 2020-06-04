import * as selectors from './selectors'

test('initialState', () => {
  expect(selectors.initialState).toEqual({
    user: null,
  })
})

test('getWTARating', () => {
  expect(selectors.getUser()).toEqual(selectors.initialState.wta)
  expect(selectors.getUser(selectors.initialState)).toEqual(selectors.initialState.wta)
})
