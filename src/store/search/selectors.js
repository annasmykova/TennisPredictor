export const initialState = {
  filter: '',
  data: null
}

// export const getSearchData = (state = initialState) =>
//   state.data || initialState.data;

export const getSearchData = (state = initialState) =>
  [{id: 1, text: 'aaaa'}, { id:123, text: 'tyeurteir' }, {id: 345, text: 'wterywetr'}]
export const getSearchFilter = (state = initialState) => state.filter || initialState.filter;
