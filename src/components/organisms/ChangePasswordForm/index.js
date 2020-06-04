import React from 'react'
import { Field } from 'redux-form'
import Button from '@material-ui/core/Button';
import { ReduxField } from 'components';
import classNames from 'classnames';

let ChangePasswordForm = props => {
  const { handleSubmit } = props

  return (
    <form className="login-form form-default" onSubmit={handleSubmit}>
      <Field name="password" label="Password" type="password" component={ReduxField}/>
      <Field name="newPassword" label="New Password" type="password" component={ReduxField}/>
      <Field name="newPasswordRepeat" label="Repeat New Password" type="password" component={ReduxField}/>
      <Button
        className={classNames('default-btn')}
        variant="outlined"
        type="submit"
      >Change Password</Button>
    </form>
  )
}

export default ChangePasswordForm
