import {
  take, put, call, takeEvery,
} from 'redux-saga/effects'
import { GET_RATING, getRatingSuccess } from './actions';
import api from '../../services/api';
import { showError } from '../error/actions';
import { resolveRequestSuccess } from '../coach/actions';


export function* getRatingSaga({ payload }) {
  try {
    const data = yield call([api, api.get], `/rating`, {
      params: {
        ...payload
      }
    })
    if (data.error) {
      yield put(showError(data.error))
    } else {
      yield put(getRatingSuccess(payload.filter, data))
    }
  } catch (e) {
    console.log(e);
  }
}

export default function* () {
  yield takeEvery(GET_RATING, getRatingSaga)
}
