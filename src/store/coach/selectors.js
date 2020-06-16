export const initialState = {
  coach: null,
  requests: {
    page: 1,
    size: 20,
    sort: 'asc',
    total: 80,
    data: []
  },
  players: {
    page: 1,
    size: 20,
    sort: 'asc',
    total: null,
    data: []
  },
}

export const getCoach = (state = initialState) =>
  state.coach || initialState.coach;
export const getPlayers = (state = initialState) => state.players || initialState.players;
export const getRequests = (state = initialState) => state.requests || initialState.requests;
