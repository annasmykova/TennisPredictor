import React from 'react'
import { Field } from 'redux-form'
import Button from '@material-ui/core/Button';
import { ReduxField } from 'components';
import classNames from 'classnames';
import { SignUpModal } from 'components';
import './LoginForm.scss'
import { LoginFormContainer } from '../../../containers';

let LoginForm = props => {
  const { handleSubmit } = props

  return (
    <form className="login-form form-default" onSubmit={handleSubmit}>
      <Field name="email" label="Email" type="email" component={ReduxField}/>
      <Field name="password" label="Password" type="password" component={ReduxField}/>
      <Button
        className={classNames('default-btn')}
        variant="outlined"
        type="submit"
      >Login</Button>
      <p className="have-no-acc">Haven't account yet? <SignUpModal/></p>
    </form>
  )
}

export default LoginForm
