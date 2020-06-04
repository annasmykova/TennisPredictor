import React, { useState } from 'react';
import { Page } from '../../index';
import { LoginFormContainer } from 'containers';
import './LoginPage.scss'

const LoginPage = (props) => {
  return (<Page transparent heading={<strong className="big-title">Sign in to your account</strong>}>
    <div className="login-page">
      <LoginFormContainer />
    </div>
  </Page>)
}

export default LoginPage
