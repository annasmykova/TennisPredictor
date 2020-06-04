export const initialState = {
  data: null
}

export const getUser = (state = initialState) =>
  state.data || initialState.data;
