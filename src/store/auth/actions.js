import { EDIT_COACH_SUCCESS } from '../coach/actions';

export const LOGIN = 'LOGIN'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAIL = 'LOGIN_FAIL'
export const EDIT_USER = 'EDIT_USER'
export const EDIT_USER_SUCCESS = 'EDIT_USER_SUCCESS'
export const EDIT_USER_FAIL = 'EDIT_USER_FAIL'
export const LOGOUT = 'LOGOUT'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
export const LOGOUT_FAIL = 'LOGOUT_FAIL'
export const SIGN_UP = 'SIGN_UP'
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS'
export const SIGN_UP_FAIL = 'SIGN_UP_FAIL'
export const REMOVE_ACC = 'REMOVE_ACC'
export const REMOVE_ACC_SUCCESS = 'REMOVE_ACC_SUCCESS'
export const REMOVE_ACC_FAIL = 'REMOVE_ACC_FAIL'
export const CHANGE_PASS = 'CHANGE_PASS'
export const CHANGE_PASS_SUCCESS = 'CHANGE_PASS_SUCCESS'
export const CHANGE_PASS_FAIL = 'CHANGE_PASS_FAIL'
export const GET_USER = 'GET_USER'
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS'
export const GET_USER_FAIL = 'GET_USER_FAIL'

export const login = (params= {}) => ({
  type: LOGIN,
  payload: {
    ...params
  },
})

export const loginSuccess = (userData) => ({
  type: LOGIN_SUCCESS,
  payload: {
    userData
  },
})

export const logout = () => ({
  type: LOGOUT,
  payload: {},
})

export const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS,
})

export const signUp = (formData) => ({
  type: SIGN_UP,
  payload: formData,
})

export const signUpSuccess = (userData) => ({
  type: SIGN_UP_SUCCESS,
  payload: {
    ...userData
  },
})

export const editUser = (formData) => ({
  type: EDIT_USER,
  payload: formData,
})

export const editUserSuccess = (userData) => ({
  type: EDIT_USER_SUCCESS,
  payload: {...userData},
})
export const editUserFail = () => ({
  type: EDIT_USER_FAIL,
})

export const changePass = (params= {}) => ({
  type: CHANGE_PASS,
  payload: {
    ...params
  },
})

export const changePassSuccess = (params= {}) => ({
  type: CHANGE_PASS_SUCCESS,
})

export const removeAcc = (payload => ({
  type: REMOVE_ACC,
}))

export const removeAccSuccess = () => ({
  type: REMOVE_ACC_SUCCESS,
})

export const getUser = (payload) => ({
  type: GET_USER,
  payload
})

export const getUserSuccess = (userData) => ({
  type: GET_USER_SUCCESS,
  payload: {
    userData
  },
})

