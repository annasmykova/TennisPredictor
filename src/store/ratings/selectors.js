export const initialState = {
  wta: {
    page: 1,
    size: 20,
    sort: 'asc',
    total: 50,
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
  atp: {
    page: 1,
    size: 20,
    sort: 'asc',
    total: null,
    data: []
  },
  other: {
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

export const getWTARating = (state = initialState) =>
  state.wta || initialState.wta;
export const getATPRating = (state = initialState) => state.atp || initialState.atp;
export const getOtherRating = (state = initialState) => state.other || initialState.other;
