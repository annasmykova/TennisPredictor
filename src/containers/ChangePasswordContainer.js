import React from 'react'
import { reduxForm } from 'redux-form'

import { ChangePasswordForm } from 'components'
import { changePass } from '../store/auth/actions';


const validate = values => {
  const errors = {}
  if (!values.password) {
    errors.password = 'Required'
  } else if (values.password.length < 8) {
    errors.password = 'Password must be at least 8 signs'
  }
  if (!values.newPassword) {
    errors.newPassword = 'Required'
  } else if (values.newPassword.length < 8) {
    errors.newPassword = 'Password must be at least 8 signs'
  }
  if (!values.newPasswordRepeat) {
    errors.newPasswordRepeat = 'Required'
  } else if (values.newPasswordRepeat.length < 8) {
    errors.newPasswordRepeat = 'Password must be at least 8 signs'
  }
  if (values.newPassword !== values.newPasswordRepeat) {
    errors.newPasswordRepeat = 'Passwords don\'t match'
  }
  return errors
}

const onSubmit = (data, dispatch) => {
  dispatch(changePass({
    password: data.password,
    newPassword: data.newPassword,
  }))
}

const ChangePasswordContainer = props => {
  return (<ChangePasswordForm {...props} />)
}

export default reduxForm({
  // a unique name for the form
  form: 'changePassword',
  validate,
  onSubmit
})(ChangePasswordContainer)
