import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { Icon, InlineIcon } from '@iconify/react';
import whistleOutline from '@iconify/icons-mdi/whistle-outline';
import tennisIcon from '@iconify/icons-emojione-monotone/tennis';
import { connect } from 'react-redux';
import { push } from 'connected-react-router'
import './SignUpModal.scss'

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
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

const SignUpModal = ({ push }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Sign Up
      </Button>
      <Dialog onClose={handleClose} className="sign-up-modal" aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          You want sign up as...
        </DialogTitle>
        <DialogContent dividers>
          <div className="content-wrapper">
            <div className="sign-up-link player" onClick={() => { push('/sign-up/player') }}>
              <Icon icon={tennisIcon} style={{fontSize: '70px'}} />
              <Typography gutterBottom>
                Player
              </Typography>
            </div>
            <div className="sign-up-link coach" onClick={() => { push('/sign-up/coach') }}>
              <Icon icon={whistleOutline} style={{fontSize: '70px'}} />
              <Typography gutterBottom>
                Coach
              </Typography>
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="secondary" variant="outlined" a>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default connect(null, { push })(SignUpModal)
