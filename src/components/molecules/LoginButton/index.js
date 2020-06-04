import React from 'react';
import Button from '@material-ui/core/Button';
import classNames from 'classnames'
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { fromAuth } from 'store/selectors'
import { logout } from 'store/actions'
import './LoginButton.scss'

const LoginButton = ({ user = true, logout}) => {
  return (<Button
    className={classNames('default-btn', {red: user})}
    variant="outlined"
  >
    {
      !user
        ? <NavLink to={'/login'}>Login</NavLink>
        : <a onClick={() => { logout() }}>Logout</a>
    }
  </Button>)
}

export default connect(state => ({ user: fromAuth.getUser(state) }), { logout })(LoginButton)
