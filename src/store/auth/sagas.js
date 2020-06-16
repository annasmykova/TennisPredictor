import {
  put, call, takeEvery, select
} from 'redux-saga/effects'
import {
  LOGIN,
  LOGOUT,
  SIGN_UP,
  CHANGE_PASS,
  REMOVE_ACC,
  GET_USER,
  loginSuccess,
  changePassSuccess,
  signUpSuccess,
  removeAccSuccess,
  getUserSuccess,
  logoutSuccess, EDIT_USER, editUserSuccess, editUserFail, getUser
} from './actions';
import { fromAuth } from 'store/selectors'
import { push } from 'connected-react-router'
import api from '../../services/api';
import cookie from 'react-cookie'
import { showError } from '../error/actions';


export function* logoutSaga() {
  try {
    yield put(logoutSuccess())
    cookie.remove('token', { path: '/' })
  } catch (e) {
    console.log(e);
  }
}

export function* loginSaga({ payload }) {
  try {
    const data = yield call([api, api.post], `/login`, payload)

    if (data.userWithoutCoach) {
      yield put(showError(data))
      yield put(push('/'))
    } else if (data.error) {
      yield put(showError(data.error))
    } else {
      yield put(loginSuccess(data.userData))
      cookie.save('token', data.token, { path: '/' })
      yield put(push('/'))
    }
  } catch (e) {
    console.log(e);
  }
}


export function* signUpSaga({ payload }) {
  try {
    const data = yield call([api, api.post], `/sign-up`, payload,
      {'Content-Type': ' multipart/form-data; boundary=---WebKitFormBoundary7MA4YWxkTrZu0gW'})
    if (data.userWithoutCoach) {
      yield put(showError(data))
      yield put(push('/'))
    } else if (data.error) {
      yield put(showError(data.error))
    } else {
      yield put(signUpSuccess(data.userData))
      cookie.save('token', data.token, { path: '/' })
      yield put(push('/'))
    }
  } catch (e) {
    console.log(e);
  }
}

export function* removeAccSaga() {
  try {
    const user = yield select(fromAuth.getUser)
    const data = yield call([api, api.delete], `/user/${user.id}`)
    if (data.error) {
      yield put(showError(data.error))
    } else {
      yield put(removeAccSuccess())
      cookie.remove('token', { path: '/' })
    }
  } catch (e) {
    console.log(e);
  }
}

export function* changePassSaga({ payload }) {
  try {
    const user = yield select(fromAuth.getUser)
    const data = yield call([api, api.post], `/user/${user.id}/change-password`, payload)
    if (data.error) {
      yield put(showError(data.error))
    } else {
      yield put(changePassSuccess())
    }
  } catch (e) {
    console.log(e);
  }
}

export function* getUserSaga({ payload }) {
  try {
    const data = yield call([api, api.get], `/user/${payload}`)
    if (data.error) {
      yield put(showError(data.error))
    } else {
      yield put(getUserSuccess(data))
    }
  } catch (e) {
    console.log(e);
  }
}

export function* editUserSaga({ payload }) {
  try {
    const user = yield select(fromAuth.getUser)
    const data = yield call([api, api.post], `/user/${user.userId}`, payload, {'Content-Type': 'multipart/form-data'})
    if (data.error) {
      yield put(showError(data.error))
    } else {
      cookie.save('token', data.token, { path: '/' })
      yield put(editUserSuccess(data.userData))
    }
  } catch (e) {
    yield put(editUserFail())
    console.log(e);
  }

}

export default function* () {
  yield takeEvery(LOGOUT, logoutSaga)
  yield takeEvery(LOGIN, loginSaga)
  yield takeEvery(SIGN_UP, signUpSaga)
  yield takeEvery(REMOVE_ACC, removeAccSaga)
  yield takeEvery(CHANGE_PASS, changePassSaga)
  yield takeEvery(GET_USER, getUserSaga)
  yield takeEvery(EDIT_USER, editUserSaga)
}
