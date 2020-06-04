import {
  take, put, call, takeEvery,
} from 'redux-saga/effects'
import { GET_RATING, getRatingDataSuccess } from './actions';
import api from '../../services/api';


export function* getRatingSaga({ payload }) {
  try {
    const data = yield call(api.get(`/rating`, {
      params: {
        ...payload
      }
    }))
    yield put(getRatingDataSuccess(payload.filter, data))
    console.log(data);
  } catch (e) {
    console.log(e);
  }
}

export default function* () {
  yield takeEvery(GET_RATING, getRatingSaga)
}
