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
  logoutSuccess, EDIT_USER, editUserSuccess, editUserFail
} from './actions';
import { fromAuth } from 'store/selectors'
import { push } from 'connected-react-router'
import api from '../../services/api';
import cookie from 'react-cookie'


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
    // const data = yield call(api.get(`/login`, {
    //   params: {
    //     ...payload
    //   }
    // }))
    const data = {
      token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjEyMzQ1Njc4OTAiLCJuYW1lIjoiSm9obiBEb2UiLCJhZG1pbiI6dHJ1ZSwianRpIjoiYmZiZDMzZTAtM2YzMC00MTFjLTliODAtM2NmZjUyY2FhNzA1IiwiaWF0IjoxNTkxMTMwNDY3LCJleHAiOjE1OTExMzQwODd9.NufY7WfVGWYVFeME74gbC_pUD0Z83ELcZ86bUsQJ9h8',
      userData: {
        id: 123,
        firstName: 'Anna',
        lastName: 'Smykova',
        userType: 0,
        photo: null,
      }
    }
    yield put(loginSuccess(data.userData))
    cookie.save('token', data.token, { path: '/' })
    console.log(data);
    yield put(push('/'))
  } catch (e) {
    console.log(e);
  }
}


export function* signUpSaga({ payload }) {
  console.log(payload);
  for (const value of payload.values()) {
    console.log('formData', value);
  }
  try {
    const data = yield call(api.create().post(`/sign-up`, payload, {'Content-Type': 'multipart/form-data'}))
    yield put(signUpSuccess(data.userData))
    cookie.save('token', data.token, { path: '/' })
    console.log(data);
  } catch (e) {
    console.log(e);
  }
}

export function* removeAccSaga() {
  try {
    const user = yield select(fromAuth.getUser)
    // yield call(api.delete(`/user/${user.id}`))
    yield put(removeAccSuccess())
    cookie.remove('token', { path: '/' })
  } catch (e) {
    console.log(e);
  }
}

export function* changePassSaga({ payload }) {
  try {
    const user = yield select(fromAuth.getUser)
    yield call(api.post(`/user/${user.id}/change-password`, {
      ...payload
    }))
    yield put(changePassSuccess())
  } catch (e) {
    console.log(e);
  }
}

export function* getUserSaga({ payload }) {
  try {
    // const data = yield call(api.get(`/user/${payload}`))
    const data = {
      token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjEyMzQ1Njc4OTAiLCJuYW1lIjoiSm9obiBEb2UiLCJhZG1pbiI6dHJ1ZSwianRpIjoiYmZiZDMzZTAtM2YzMC00MTFjLTliODAtM2NmZjUyY2FhNzA1IiwiaWF0IjoxNTkxMTMwNDY3LCJleHAiOjE1OTExMzQwODd9.NufY7WfVGWYVFeME74gbC_pUD0Z83ELcZ86bUsQJ9h8',
      userData: {
        id: 123,
        firstName: 'Anna',
        lastName: 'Smykova',
        userType: 0,
        photo: null,
        country: 'UA',
        gender: 0,
        dob: new Date(),
        players: 3
      }
    }
    yield put(getUserSuccess(data.userData))
    console.log(data.userData);
    // cookie.save('token', data.token, { path: '/' })
  } catch (e) {
    console.log(e);
  }
}

export function* editUserSaga({ payload }) {
  try {
    const user = yield select(fromAuth.getUser)
    const data = yield call(api.post(`/user/${user.id}`, payload, {'Content-Type': 'multipart/form-data'}))
    yield put(editUserSuccess(data.userData))
    cookie.save('token', data.token, { path: '/' })
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
