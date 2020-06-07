import React from 'react'
import { editUser } from 'store/actions'
import { fromAuth } from 'store/selectors'
import { reduxForm } from 'redux-form'

import { EditPlayerForm } from 'components'
import { connect } from 'react-redux';
import { PlayerForm } from '../components';


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
  if (!values.dob) {
    errors.dob = 'Required'
  } else if (new Date() < values.dob) {
    errors.dob = 'Date of Birth can\'t be in future'
  }
  if (!values.coach) {
    errors.coach = 'Required'
  }
  if (!values.hand) {
    errors.hand = 'Required'
  }
  return errors
}

const onSubmit = (data, dispatch) => {
  let { dob, coach } = data
  if (typeof dob === 'string') {
    dob = new Date(dob)
  }
  if (typeof coach === 'object') {
    coach = coach.id
  }

  console.log('coach', coach);
  console.log('coach', typeof coach);

  const newData= {
    ...data,
    dob,
    coach
  }
  console.log(newData);

  const formData = new FormData()

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
  dispatch(editUser(formData))
}

let EditPlayerFormContainer = props => {
  return (<EditPlayerForm {...props} filter="coach"/>)
}

EditPlayerFormContainer = reduxForm({
  // a unique name for the form
  form: 'coachForm',
  validate,
  onSubmit
})(EditPlayerFormContainer)

export default connect(state => ({
  initialValues: fromAuth.getPlayerFormData(state),
  loading: fromAuth.getLoading(state),
}))(EditPlayerFormContainer)
