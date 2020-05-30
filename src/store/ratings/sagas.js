import {
  take, put, call, takeEvery,
} from 'redux-saga/effects'
import { GET_RATING } from './actions';
import api from '../../services/api';


export function* getRatingSaga({ payload }) {
  try {
    const data = yield call(api.get(`/rating`, {
      params: {
        ...payload
      }
    }))
    console.log(data);
  } catch (e) {
    console.log(e);
  }
}

export default function* () {
  yield takeEvery(GET_RATING, getRatingSaga)
}
