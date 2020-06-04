import React from 'react'
import { Field } from 'redux-form'
import Button from '@material-ui/core/Button';
import { ReduxField } from 'components';
import classNames from 'classnames';
import { CountrySelectList, SexEnum } from '../../../utils/constants/constants';

let CoachForm = props => {
  const { handleSubmit, handleAfterSubmit, isSignUp = true } = props

  return (
    <form className="login-form form-default" onSubmit={handleSubmit}>
      <Field name="photo" label="Photo" type="file" component={ReduxField}/>
      <Field name="firstName" label="First Name" type="text" component={ReduxField}/>
      <Field name="lastName" label="Last Name" type="text" component={ReduxField}/>
      <Field name="email" label="Email" type="email" component={ReduxField}/>
      <Field name="password" label="Password" type="password" component={ReduxField}/>
      <Field name="dob" label="Date of Birth" type="date" component={ReduxField}/>
      <Field name="gender" label="Gender" type="select" component={ReduxField} values={SexEnum}/>
      <Field name="country" label="Country" type="select" component={ReduxField}
             values={CountrySelectList}
      />
      <Button
        className={classNames('default-btn')}
        variant="outlined"
        type="submit"
        onClick={() => {
          handleAfterSubmit && handleAfterSubmit()
        }}
      >{isSignUp ? 'Sign Up' : 'Save'}</Button>
    </form>
  )
}

export default CoachForm
