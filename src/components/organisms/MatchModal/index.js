import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import { connect } from 'react-redux';
import { push } from 'connected-react-router'
import { MatchFormContainer } from 'containers';
import classNames from 'classnames';

const MatchModal = ({ push }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        className={classNames('default-btn')}
        variant="outlined"
        onClick={handleClickOpen}
      >
        Add
      </Button>
      <Dialog onClose={handleClose} className="sign-up-modal" aria-labelledby="customized-dialog-title" open={open}>
        <MatchFormContainer closeModal={handleClose}/>
      </Dialog>
    </div>
  );
}

export default connect(null, { push })(MatchModal)
