export const GET_COACH = 'GET_COACH'
export const GET_COACH_SUCCESS = 'GET_COACH_SUCCESS'
export const GET_REQUESTS = 'GET_REQUESTS'
export const GET_REQUESTS_SUCCESS = 'GET_REQUESTS_SUCCESS'
export const GET_PLAYERS = 'GET_PLAYERS'
export const GET_PLAYERS_SUCCESS = 'GET_PLAYERS_SUCCESS'
export const RESOLVE_REQUEST = 'RESOLVE_REQUEST'
export const RESOLVE_REQUEST_SUCCESS = 'RESOLVE_REQUEST_SUCCESS'
export const CLEAR_COACH_DATA = 'CLEAR_COACH_DATA'

export const getCoach = (id) => ({
  type: GET_COACH,
  payload: id,
})

export const getCoachSuccess = (coachData) => ({
  type: GET_COACH_SUCCESS,
  payload: coachData,
})

export const getPlayers = (coachId, params) => ({
  type: GET_PLAYERS,
  payload: {
    coachId,
    params,
  },
})

export const getPlayersSuccess = (data) => ({
  type: GET_PLAYERS_SUCCESS,
  payload: {
    ...data,
  },
})

export const getRequests = (coachId, params) => ({
  type: GET_REQUESTS,
  payload: {
    coachId,
    params,
  },
})

export const getRequestsSuccess = (data) => ({
  type: GET_REQUESTS_SUCCESS,
  payload: {
    ...data,
  },
})

export const resolveRequest = (coachId, requestId, result) => ({
  type: RESOLVE_REQUEST,
  payload: {
    coachId,
    requestId,
    data: {
      result,
    }
  },
})

export const clearCoachData = () => ({
  type: CLEAR_COACH_DATA,
})

export const resolveRequestSuccess = (requestId) => ({
  type: RESOLVE_REQUEST_SUCCESS,
  payload: requestId,
})

