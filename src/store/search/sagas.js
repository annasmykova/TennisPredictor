import {
  put, call, takeEvery,
} from 'redux-saga/effects'
import { GET_SEARCH_LIST, getSearchListSuccess } from './actions';
import api from '../../services/api';
import { showError } from '../error/actions';


export function* getSearchListSaga({ payload }) {
  try {
    const data = yield call([api, api.get], `/search`, {
      params: {
        value: payload.data,
        ...(payload.filter && { filter: payload.filter })
      }
    })
    if (data.error) {
      yield put(showError(data.error))
    } else {
      yield put(getSearchListSuccess(data))
    }
  } catch (e) {
    console.log(e);
  }
}

export default function* () {
  yield takeEvery(GET_SEARCH_LIST, getSearchListSaga)
}
