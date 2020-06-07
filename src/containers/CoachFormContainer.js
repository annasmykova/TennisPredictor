import React from 'react'
import { signUp } from 'store/actions'
import { reduxForm } from 'redux-form'

import { CoachForm } from 'components'


const validate = values => {
  console.log(values);
  const errors = {}
  if (!values.firstName) {
    errors.firstName = 'Required'
  } else if (!/^[A-Z]+$/i.test(values.firstName)) {
    errors.firstName = 'First name must consist only letters'
  }
  if (!values.lastName) {
    errors.lastName = 'Required'
  } else if (!/^[A-Z]+$/i.test(values.lastName)) {
    errors.lastName = 'Last name must consist only letters'
  }
  if (!values.gender) {
    errors.gender = 'Required'
  }
  if (!values.country) {
    errors.country = 'Required'
  }
  if (!values.dob) {
    errors.dob = 'Required'
  } else if (new Date() < values.dob) {
    errors.dob = 'Date of Birth can\'t be in future'
  }
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
  let { dob, photo } = data
  if (typeof dob === 'string') {
    dob = new Date(dob)
  }

  const newData= {
    ...data,
    dob,
  }
  console.log(newData);

  const formData = new FormData()
  formData.append('userType', '0');

  Object.keys(newData).forEach(key => {
    if (key === 'photo') {
      if (newData.photo && newData.photo[0]) {
        formData.append('photo', newData.photo[0]);
      }
    } else {
      formData.append(key, newData[key]);
    }
  })
  for (const value of formData.values()) {
    console.log('formData', value);
  }
  dispatch(signUp(formData))
}

let CoachFormContainer = props => {
  return (<CoachForm {...props}/>)
}

export default  reduxForm({
  // a unique name for the form
  form: 'coachForm',
  validate,
  onSubmit
})(CoachFormContainer)
