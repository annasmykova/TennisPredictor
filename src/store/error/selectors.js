export const initialState = {
  error: ''
}

export const getError = (state = initialState) =>
  state.error || initialState.error;
