import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Avatar } from 'components'
import { CountrySelectList, SexEnum } from '../../../utils/constants/constants';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const CoachBioDefault = props => {
  const { coach } = props
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={3}>
          <Grid item xs>
              <Avatar photo={coach.photo}/>
          </Grid>
          <Grid item xs={8}>
            <p className="valueText">
              <span className="value">{coach.firstName} {coach.lastName}</span>
            </p>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs>
            <p className="valueText">
              <span className="label">Gender</span>
              <span className="value">{SexEnum[coach.gender]}</span>
            </p>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs>
              <p className="valueText">
                <span className="label">Date of Birth</span>
                <span className="value">{new Date(coach.dob).toLocaleDateString()}</span>
              </p>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs>
            <p className="valueText">
              <span className="label">Country</span>
              <span className="value">{CountrySelectList[coach.country]}</span>
            </p>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default CoachBioDefault
