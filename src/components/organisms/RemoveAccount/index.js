import React from 'react';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { removeAcc } from 'store/actions'
import { fromAuth } from 'store/selectors'
import { toast } from 'react-toastify';
import 'react-toastify/scss/main.scss';

const showToast = () => {
  toast.error('You can\'t remove your account because you have assigned players');
}

const RemoveAccount = ({ user, removeAcc  }) => {
  const handleRemoveAcc = () => {
    if (!user.players) {
      showToast()
    } else {
      removeAcc()
    }
  }

  return (<p className="remove-acc">
    Are you sure that you want to remove your account?
    <Button
      className={classNames('error-btn')}
      onClick={handleRemoveAcc}
      color="secondary"
      variant="outlined"
      type="submit"
    >Remove Account</Button>
    {/*<ToastContainer />*/}
  </p>)
}

export default connect(state => ({ user: fromAuth.getUser(state) }), { removeAcc })(RemoveAccount)
