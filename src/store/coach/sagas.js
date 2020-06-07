import {
  take, put, call, takeEvery,
} from 'redux-saga/effects'
import {
  GET_COACH,
  GET_PLAYERS,
  GET_REQUESTS,
  getCoachSuccess,
  getPlayersSuccess,
  getRequestsSuccess, RESOLVE_REQUEST,
  resolveRequestSuccess
} from './actions';
import api from '../../services/api';


export function* getCoachSaga({ payload }) {
  try {
    let data;
    // const data = yield call(api.get(`/coach/${payload}`))
    if (payload === 2 ) {
      data = {
        id: 2,
        firstName: 'Daniel',
        lastName: 'Pilipets',
        userType: 0,
        photo: null,
        country: 'UKR',
        gender: 0,
        dob: new Date(),
        players: 3
      }
    } else {
      data = {
        id: 4,
        firstName: 'Sergey',
        lastName: 'Sergey',
        userType: 0,
        photo: null,
        country: 'UKR',
        gender: 0,
        dob: new Date(),
        players: 3
      }
    }
    yield put(getCoachSuccess(data))
    console.log(data);
  } catch (e) {
    console.log(e);
  }
}

export function* getPlayersSaga({ payload }) {
  try {
    const data = yield call(api.get(`/coach/${payload.coachId}/players`, {
      params: {
        ...payload.params
      }
    }))
    yield put(getPlayersSuccess(data))
    console.log(data);
  } catch (e) {
    console.log(e);
  }
}

export function* getRequestsSaga({ payload }) {
  try {
    const data = yield call(api.get(`/coach/${payload.coachId}/requests`, {
      params: {
        ...payload.params
      }
    }))
    yield put(getRequestsSuccess(data))
    console.log(data);
  } catch (e) {
    console.log(e);
  }
}

export function* resolveRequestSaga({ payload }) {
  try {
    const data = yield call(api.post(`/coach/${payload.coachId}/requests/${payload.requestId}`, {
      ...payload.data
    }))
    yield put(resolveRequestSuccess(payload.requestId))
    console.log(data);
  } catch (e) {
    console.log(e);
  }
}

export default function* () {
  yield takeEvery(GET_COACH, getCoachSaga)
  yield takeEvery(GET_PLAYERS, getPlayersSaga)
  yield takeEvery(GET_REQUESTS, getRequestsSaga)
  yield takeEvery(RESOLVE_REQUEST, resolveRequestSaga)
}
