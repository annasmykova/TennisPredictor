export const initialState = {
  data: null,
  loading: false
}

export const getUser = (state = initialState) =>
  state.data || initialState.data;

export const getUserAsMatchPlayer = (state = initialState) =>
  state.data
  ? ({
      id: state.data.id,
      text: state.data.firstName + ' ' + state.data.lastName
    })
  : null

export const getLoading = (state = initialState) =>
  state.loading || initialState.loading;

export const getCoachFormData = (state = initialState) => state.data
  ? ({
    firstName: state.data.firstName,
    lastName: state.data.lastName,
    photo: state.data.photo,
    gender: state.data.gender,
    country: state.data.country,
    dob: state.data.dob,
  })
  : null

export const getPlayerFormData = (state = initialState) => state.data
  ? ({
    firstName: state.data.firstName,
    lastName: state.data.lastName,
    photo: state.data.photo,
    gender: state.data.gender,
    country: state.data.country,
    dob: state.data.dob,
    coach: state.data.coach,
    hand: state.data.hand,
    profyStatus: state.data.profyStatus,
  })
  : null
