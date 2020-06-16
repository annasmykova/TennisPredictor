export const GET_PLAYER = 'GET_PLAYER'
export const GET_PLAYER_SUCCESS = 'GET_PLAYER_SUCCESS'
export const GET_MATCHES = 'GET_MATCHES'
export const GET_MATCHES_SUCCESS = 'GET_MATCHES_SUCCESS'
export const GET_INJURIES = 'GET_INJURIES'
export const GET_INJURIES_SUCCESS = 'GET_INJURIES_SUCCESS'
export const CREATE_MATCH = 'CREATE_MATCH'
export const CREATE_MATCH_SUCCESS = 'CREATE_MATCH_SUCCESS'
export const CREATE_INJURY = 'CREATE_INJURY'
export const CREATE_INJURY_SUCCESS = 'CREATE_INJURY_SUCCESS'
export const GET_PREDICTION = 'GET_PREDICTION'
export const GET_PREDICTION_SUCCESS = 'GET_PREDICTION_SUCCESS'
export const CLEAR_PLAYER_DATA = 'CLEAR_PLAYER_DATA'

export const getPlayer = (id) => ({
  type: GET_PLAYER,
  payload: id,
})

export const getPlayerSuccess = (playerData) => ({
  type: GET_PLAYER_SUCCESS,
  payload: playerData,
})

export const getMatches = (playerId, params) => ({
  type: GET_MATCHES,
  payload: {
    playerId,
    params,
  },
})

export const getMatchesSuccess = (data) => ({
  type: GET_MATCHES_SUCCESS,
  payload: {
    ...data,
  },
})

export const getInjuries = (playerId, params) => ({
  type: GET_INJURIES,
  payload: {
    playerId,
    params,
  },
})

export const getInjuriesSuccess = (data) => ({
  type: GET_INJURIES_SUCCESS,
  payload: {
    ...data,
  },
})

export const createMatch = (data) => ({
  type: CREATE_MATCH,
  payload: data
})

export const createMatchSuccess = (match) => ({
  type: CREATE_MATCH_SUCCESS,
  payload: {
    ...match
  }
})

export const createInjury = (data) => ({
  type: CREATE_INJURY,
  payload: data
})

export const createInjurySuccess = (injuries) => ({
  type: CREATE_INJURY_SUCCESS,
  payload: injuries
})

export const getPrediction = (playerId, otherPlayerId) => ({
  type: GET_PREDICTION,
  payload: {playerId, otherPlayerId},
})

export const getPredictionSuccess = (data) => ({
  type: GET_PREDICTION_SUCCESS,
  payload: data
})

export const clearPlayerData = () => ({
  type: CLEAR_PLAYER_DATA,
})

