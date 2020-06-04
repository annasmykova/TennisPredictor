import React from 'react'
import { login } from 'store/actions'
import { reduxForm } from 'redux-form'

import { LoginForm } from 'components'


const validate = values => {
  const errors = {}
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if (!values.password) {
    errors.password = 'Required'
  } else if (values.password.length < 8) {
    errors.password = 'Password must be at least 8 signs'
  }
  return errors
}

const onSubmit = (data, dispatch) => {
  dispatch(login(data))
}

const LoginFormContainer = props => {
  return (<LoginForm {...props} />)
}

export default reduxForm({
  // a unique name for the form
  form: 'login',
  validate,
  onSubmit
})(LoginFormContainer)
