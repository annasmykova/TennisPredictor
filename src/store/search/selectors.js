export const initialState = {
  filter: '',
  data: null
}

export const getSearchData = (state = initialState) =>
  state.data || initialState.data;

export const getSearchFilter = (state = initialState) => state.filter || initialState.filter;
