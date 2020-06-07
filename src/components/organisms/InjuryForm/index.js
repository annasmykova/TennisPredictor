import React, { Fragment } from 'react'
import { Field } from 'redux-form'
import Button from '@material-ui/core/Button';
import { ReduxField } from 'components';
import classNames from 'classnames';
import { InjuryEnum } from '../../../utils/constants/constants';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Grid from '@material-ui/core/Grid';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const {children, classes, onClose, ...other} = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon/>
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

let InjuryForm = props => {
  const {handleSubmit, closeModal} = props

  return (
    <Fragment>
      <DialogTitle id="customized-dialog-title" onClose={closeModal}>
        New Injury
      </DialogTitle>
      <DialogContent>
        <form id="injury-form" className="login-form form-default modal-form" onSubmit={handleSubmit}>
          <Grid container spacing={3} direction="column">
            <Grid item xs>
              <Field name="injury" label="Injury" type="select" component={ReduxField} values={InjuryEnum}/>
            </Grid>
            <Grid item xs>
              <Field name="date" label="Date" type="date" component={ReduxField}/>
            </Grid>
          </Grid>
        </form>
      </DialogContent>
      <DialogActions>
        <Button
          className={classNames('default-btn')}
          variant="outlined"
          type="submit"
          form="injury-form"
          onClick={() => {
            setTimeout(closeModal, 3000)
          }}
        >Add Injury</Button>
      </DialogActions>
    </Fragment>
  )
}

export default InjuryForm
