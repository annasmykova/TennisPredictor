export const initialState = {
  wta: {
    page: 1,
    size: 20,
    sort: 'asc',
    total: null,
    data: []
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
    data: []
  },
}

export const getWTARating = (state = initialState) =>
  state.wta || initialState.wta;
export const getATPRating = (state = initialState) => state.atp || initialState.atp;
export const getOtherRating = (state = initialState) => state.other || initialState.other;
