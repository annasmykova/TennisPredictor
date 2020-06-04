export const GET_SEARCH_LIST = 'GET_SEARCH_LIST'
export const GET_SEARCH_LIST_SUCCESS = 'GET_SEARCH_LIST_SUCCESS'
export const GET_SEARCH_LIST_FAIL = 'GET_SEARCH_LIST_FAIL'
export const CLEAR_SEARCH_LIST = 'CLEAR_GET_SEARCH_LIST'

export const getSearchList = (params = '', filter = '') => ({
  type: GET_SEARCH_LIST,
  payload: {
    data: params,
    ...(filter && { filter })
  },
})

export const getSearchListSuccess = (data, filter = '') => ({
  type: GET_SEARCH_LIST_SUCCESS,
  payload: {
    data,
    ...(filter && { filter })
  },
})

export const clearSearchList = (data, filter = '') => ({
  type: CLEAR_SEARCH_LIST
})
