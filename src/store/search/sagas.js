import {
  put, call, takeEvery,
} from 'redux-saga/effects'
import { GET_SEARCH_LIST, getSearchListSuccess } from './actions';
import api from '../../services/api';


export function* getSearchListSaga({ payload }) {
  console.log(payload);
  try {
    const data = yield call(api.get(`/search`, {
      params: {
        value: payload.data,
        ...(payload.filter && { filter: payload.filter })
      }
    }))
    yield put(getSearchListSuccess(data, filter))
    console.log(data);
  } catch (e) {
    console.log(e);
  }
}

export default function* () {
  yield takeEvery(GET_SEARCH_LIST, getSearchListSaga)
}
