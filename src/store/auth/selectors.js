export const initialState = {
  data: null,
  loading: false
}

export const getUser = (state = initialState) =>
  state.data || initialState.data;

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
