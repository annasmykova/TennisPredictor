import React from 'react'
import { editUser } from 'store/actions'
import { fromAuth } from 'store/selectors'
import { reduxForm } from 'redux-form'

import { EditCoachForm } from 'components'
import { connect } from 'react-redux';


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
  if (!values.dob) {
    errors.dob = 'Required'
  } else if (new Date() < values.dob) {
    errors.dob = 'Date of Birth can\'t be in future'
  }
  return errors
}

const onSubmit = (data, dispatch) => {
  let { dob, photo } = data
  if (typeof dob === 'string') {
    dob = new Date(dob).toISOString()
  }

  const newData= {
    ...data,
    dob,
  }

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
  dispatch(editUser(formData))
}

let EditCoachFormContainer = props => {
  return (<EditCoachForm {...props}/>)
}

EditCoachFormContainer = reduxForm({
  // a unique name for the form
  form: 'coachForm',
  validate,
  onSubmit
})(EditCoachFormContainer)

export default connect(state => ({
  initialValues: fromAuth.getCoachFormData(state),
  loading: fromAuth.getLoading(state),
}))(EditCoachFormContainer)
