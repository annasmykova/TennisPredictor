import React from 'react'
import { createInjury } from 'store/actions'
import { reduxForm } from 'redux-form'

import { InjuryForm } from 'components'


const validate = values => {
  const errors = {}
  if (!values.injury) {
    errors.player2 = 'Required'
  }
  if (!values.date) {
    errors.date = 'Required'
  } else if (new Date() < values.date) {
    errors.date = 'Injury Date can\'t be in future'
  }
  return errors
}

const onSubmit = (data, dispatch) => {
  dispatch(createInjury(data))
}

let InjuryFormContainer = props => {
  return (<InjuryForm {...props} />)
}

export default reduxForm({
  // a unique name for the form
  form: 'match',
  validate,
  onSubmit
})(InjuryFormContainer)
