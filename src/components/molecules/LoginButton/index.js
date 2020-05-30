import React from 'react';
import Button from '@material-ui/core/Button';
import classNames from 'classnames'
import './LoginButton.scss'
import { NavLink } from 'react-router-dom';

const LoginButton = ({ user = true}) => {
  return (<Button
    className={classNames('default-btn', {red: user})}
    variant="outlined"
  >
    <NavLink to="/login">
      {user ? 'Logout' : 'Login'}
    </NavLink>
  </Button>)
}

export default LoginButton
