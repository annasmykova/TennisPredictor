import React, { useState } from 'react';
import { Page } from '../../index';
import { PlayerFormContainer, CoachFormContainer } from 'containers';
import './SignUpPage.scss'
import { withRouter } from 'react-router';

const SignUpPage = (props) => {
  const { userType } = props.match.params;
  return (<Page transparent heading={<strong className="big-title">Sign up as a {userType}</strong>}>
    <div className="login-page signup-page">
      {
        userType === 'player'
          ? <PlayerFormContainer />
          : <CoachFormContainer />
      }
    </div>
  </Page>)
}

export default withRouter(SignUpPage)
