import { takeEvery, put } from 'redux-saga/effects';
import { SHOW_ERROR } from './actions';
import { logout } from '../auth/actions';
import { push } from 'connected-react-router'

function* showErrorSaga({payload}) {
  if (payload.code && +payload.code === 401) {
    yield put(logout())
  } else if (payload.code === 404) {
    yield put(push('/'))
  }
}

export default function* () {
  yield takeEvery(SHOW_ERROR, showErrorSaga)
}
