import React from 'react'
import { signUp } from 'store/actions'
import { reduxForm } from 'redux-form'

import { PlayerForm } from 'components'


const validate = values => {
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
  if (!values.dob) {
    errors.dob = 'Required'
  } else if (new Date() < values.dob) {
    errors.dob = 'Date of Birth can\'t be in future'
  }
  if (values.photo && (values.photo[0].size / (1024*1024)).toFixed(2) > 2) {
    errors.photo = 'Maximum size of photo is 2 MB'
  } else if (values.photo && values.photo.length > 1) {
    errors.photo = 'Only 1 photo is allowed'
  }
  if (!values.gender) {
    errors.gender = 'Required'
  }
  if (!values.country) {
    errors.country = 'Required'
  }
  if (!values.coach) {
    errors.coach = 'Required'
  }
  if (!values.hand) {
    errors.hand = 'Required'
  }
  if (!values.profyStatus) {
    errors.profyStatus = 'Required'
  }
  return errors
}


const onSubmit = (data, dispatch) => {
  let { dob } = data
  if (typeof dob === 'string') {
    dob = new Date(dob).toISOString()
  }

  const newData= {
    ...data,
    dob,
  }

  const formData = new FormData()

  formData.append('userType', '1');

  Object.keys(newData).forEach(key => {
    if (key === 'photo') {
      if (newData.photo && newData.photo[0]) {
        formData.append('photo', newData.photo[0]);
      }
    } else {
      formData.append(key, newData[key]);
    }
  })
  dispatch(signUp(formData))
}

let PlayerFormContainer = props => {
  return (<PlayerForm {...props}  filter="coach"/>)
}


export default reduxForm({
  // a unique name for the form
  form: 'playerForm',
  validate,
  onSubmit
})(PlayerFormContainer)
