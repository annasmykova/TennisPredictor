import React from 'react';
import { NavLink } from 'react-router-dom';
import { Icon, InlineIcon } from '@iconify/react';
import Typography from '@material-ui/core/Typography';
import tennisIcon from '@iconify/icons-emojione-v1/tennis';
import { makeStyles } from '@material-ui/core/styles';
import './Logo.scss'

const useStyles = makeStyles(() => ({
  title: {
    flexGrow: 1,
  },
  link: {
    display: 'flex',
  }
}), 'Logo')

const Logo = () => {
  const classes = useStyles();

  return (<div className="logo"><NavLink className={classes.link} exact to="/">
    <Icon icon={tennisIcon} className="logo-icon"/>
    <Typography variant="h6" className={classes.title}>
      Tennis Predictor
    </Typography>
  </NavLink></div> )
}

export default  Logo
