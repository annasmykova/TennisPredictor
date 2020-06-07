export const initialState = {
  coach: null,
  requests: {
    page: 1,
    size: 20,
    sort: 'asc',
    total: 80,
    data: [[{
      id: 1,
      photo: null,
      firstName: 'Elina',
      lastName: 'Svitolina',
      gender: 1,
      age: 24,
      country: 'UKR',
      hand: 'R',
    }]]
  },
  players: {
    page: 1,
    size: 20,
    sort: 'asc',
    total: null,
    data: [[{
      id: 1,
      position: 1,
      photo: null,
      firstName: 'Elina',
      lastName: 'Svitolina',
      gender: 1,
      age: 24,
      country: 'UKR',
      hand: 'R',
    }]]
  },
}

export const getCoach = (state = initialState) =>
  state.coach || initialState.coach;
export const getPlayers = (state = initialState) => state.players || initialState.players;
export const getRequests = (state = initialState) => state.requests || initialState.requests;
