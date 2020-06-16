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
        <Grid container spacing={0}>
          <Grid item xs={4}>
            <div className="bio-container-wrapper">
              <Grid container className="grid-row" spacing={3}>
                <Grid item xs>
                  <Avatar photo={coach.photo}/>
                </Grid>
              </Grid>
              <Grid container className="grid-row" spacing={3}>
                <Grid item xs>
                  <p className="valueText">
                    <span className="label">First Name</span>
                    <span className="value">{coach.firstName || '-'}</span>
                  </p>
                </Grid>
              </Grid>
              <Grid container className="grid-row" spacing={3}>
                <Grid item xs>
                  <p className="valueText">
                    <span className="label">Last Name</span>
                    <span className="value">{coach.lastName || '-'}</span>
                  </p>
                </Grid>
              </Grid>
            </div>
          </Grid>
          <Grid item xs>
            <div className="bio-container-wrapper">
              <Grid container className="grid-row" spacing={3}>
                <Grid item xs>
                  <p className="valueText">
                    <span className="label">Gender</span>
                    <span className="value">{SexEnum[coach.gender] || '-'}</span>
                  </p>
                </Grid>
                <Grid item xs>
                  <p className="valueText">
                    <span className="label">Date of Birth</span>
                    <span className="value">{coach.dob ? new Date(coach.dob).toLocaleDateString() : '-'}</span>
                  </p>
                </Grid>
              </Grid>
              <Grid container className="grid-row" spacing={3}>
                <Grid item xs>
                  <p className="valueText">
                    <span className="label">Country</span>
                    <span className="value">{CountrySelectList[coach.country] || '-'}</span>
                  </p>
                </Grid>
                <Grid item xs>
                  <p className="valueText">
                    <span className="label">Coaching</span>
                    <span className="value">{coach.players || ''} {coach.players ? coach.players === 1 ? 'Player' : 'Players' : '-' }</span>
                  </p>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default CoachBioDefault
