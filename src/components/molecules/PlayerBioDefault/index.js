import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Avatar } from 'components'
import { CountrySelectList, HandEnum, ProfyStatus, SexEnum } from '../../../utils/constants/constants';
import { NavLink } from 'react-router-dom';

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

const PlayerBioDefault = props => {
  const { player } = props
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={0}>
          <Grid item xs={4}>
            <div className="bio-container-wrapper">
              <Grid container className="grid-row" spacing={3}>
                <Grid item xs>
                  <Avatar photo={player.photo}/>
                </Grid>
              </Grid>
              <Grid container className="grid-row" spacing={3}>
                <Grid item xs>
                  <p className="valueText">
                    <span className="label">First Name</span>
                    <span className="value">{player.firstName || '-'}</span>
                  </p>
                </Grid>
              </Grid>
              <Grid container className="grid-row" spacing={3}>
                <Grid item xs>
                  <p className="valueText">
                    <span className="label">Last Name</span>
                    <span className="value">{player.lastName || '-'}</span>
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
                    <span className="value">{SexEnum[player.gender] || '-'}</span>
                  </p>
                </Grid>
                <Grid item xs>
                  <p className="valueText">
                    <span className="label">Date of Birth</span>
                    <span className="value">{player.dob ? new Date(player.dob).toLocaleDateString() : '-'}</span>
                  </p>
                </Grid>
              </Grid>
              <Grid container className="grid-row" spacing={3}>
                <Grid item xs>
                  <p className="valueText">
                    <span className="label">Country</span>
                    <span className="value">{CountrySelectList[player.country] || '-'}</span>
                  </p>
                </Grid>
                <Grid item xs>
                  <p className="valueText">
                    <span className="label">Coach</span>
                    <span className="value">
                      {
                        player.coach
                          ? <NavLink className="link-default" to={`/coach/${player.coach.id}`}>{player.coach.text }</NavLink>
                          : '-'
                      }
                    </span>
                  </p>
                </Grid>
              </Grid>
              <Grid container className="grid-row" spacing={3}>
                <Grid item xs>
                  <p className="valueText">
                    <span className="label">Hand</span>
                    <span className="value">{HandEnum[player.hand] || '-'}</span>
                  </p>
                </Grid>
                <Grid item xs>
                  <p className="valueText">
                    <span className="label">Professional Status</span>
                    <span className="value">{ProfyStatus[player.profyStatus] || '-'}</span>
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

export default PlayerBioDefault
