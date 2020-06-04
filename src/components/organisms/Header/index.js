import React from 'react'
import { withRouter } from 'react-router';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import { Logo, SearchField, LoginButton } from 'components';
import './Header.scss';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));


const Header = ({ user }) => {
    const classes = useStyles();

    return (
      <AppBar className={`header ${classes.root}`} position="fixed">
        <Toolbar>
          <Logo />
          <SearchField/>
          <LoginButton user={user} />
        </Toolbar>
      </AppBar>
    )
}

export default withRouter(Header);
