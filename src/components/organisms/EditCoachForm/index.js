import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { ReduxField } from 'components'
import { CountrySelectList, SexEnum } from '../../../utils/constants/constants';
import { Field } from 'redux-form';
import Button from '@material-ui/core/Button';
import classNames from 'classnames';

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

const EditCoachForm = props => {
  const { handleSubmit, closeForm } = props
  const classes = useStyles();

  return (
    <form className="profile-form" onSubmit={handleSubmit}>
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={0}>
          <Grid item xs={4}>
            <div className="bio-container-wrapper">
              <Grid container className="grid-row" spacing={3}>
                <Grid item xs>
                  <Field name="photo" label="Photo" type="file" component={ReduxField}/>
                </Grid>
              </Grid>
              <Grid container className="grid-row" spacing={3}>
                <Grid item xs>
                  <Field name="firstName" label="First Name" type="text" component={ReduxField}/>
                </Grid>
              </Grid>
              <Grid container className="grid-row" spacing={3}>
                <Grid item xs>
                  <Field name="lastName" label="Last Name" type="text" component={ReduxField}/>
                </Grid>
              </Grid>
            </div>
          </Grid>
          <Grid item xs>
            <div className="bio-container-wrapper">
              <Grid container className="grid-row" spacing={3}>
                <Grid item xs>
                  <Field name="gender" label="Gender" type="select" component={ReduxField} values={SexEnum}/>
                </Grid>
                <Grid item xs>
                  <Field name="country" label="Country" type="select" component={ReduxField}
                         values={CountrySelectList}
                  />
                </Grid>
              </Grid>
              <Grid container className="grid-row" spacing={3}>
                <Grid item xs={6}>
                  <Field name="dob" label="Date of Birth" type="date" component={ReduxField}/>
                </Grid>
              </Grid>
              <Grid container className="grid-row" spacing={3}>
                <Grid item xs>
                  <Button
                    className={classNames('default-btn')}
                    variant="outlined"
                    type="submit"
                    onClick={() => {
                      setTimeout(closeForm, 3000)
                    }}
                  >Save Changes</Button>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </Paper>
    </div>
    </form>
  );
}

export default EditCoachForm
