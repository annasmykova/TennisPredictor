export const GET_RATING = 'GET_RATING'
export const GET_RATING_SUCCESS = 'GET_RATING_SUCCESS'
export const SOCIAL_LOGIN_REQUEST = 'SOCIAL_LOGIN_REQUEST'
export const SOCIAL_LOGIN_SUCCESS = 'SOCIAL_LOGIN_SUCCESS'
export const SOCIAL_LOGIN_FAILURE = 'SOCIAL_LOGIN_FAILURE'
export const SOCIAL_LOGOUT = 'SOCIAL_LOGOUT'

export const getRating = (params= {}) => ({
  type: GET_RATING,
  payload: {
    ...params
  },
})

export const getRatingSuccess = (filter, data) => ({
  type: GET_RATING_SUCCESS,
  payload: {
    ...data,
    filter,
  },
})

