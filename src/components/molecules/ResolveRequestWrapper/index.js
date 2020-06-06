import React from 'react';
import { Icon, InlineIcon } from '@iconify/react';
import crossIcon from '@iconify/icons-gridicons/cross';
import checkOutlined from '@iconify/icons-ant-design/check-outlined';
import Button from '@material-ui/core/Button';
import classNames from 'classnames';
import { fromAuth } from 'store/selectors'
import { resolveRequest } from 'store/actions'
import { connect } from 'react-redux';
import './ResolveRequestWrapper.scss'

const ResolveRequestWrapper = ({ row, resolveRequest, user }) => {
  return (<div className="resolve-request-wrapper">

    <Button
      className={classNames('default-btn')}
      variant="outlined"
      type="submit"
      onClick={() => {
        resolveRequest(user.id, row.id, 'accept')
      }}
    >
      <Icon icon={checkOutlined}  style={{fontSize: '20px'}}/>
    </Button>
    <Button
      className={classNames('default-btn red')}
      variant="outlined"
      type="submit"
      onClick={() => {
        resolveRequest(user.id, row.id, 'decline')
      }}
    >
      <Icon icon={crossIcon} style={{fontSize: '20px'}}/>
    </Button>
  </div>)
}

export default connect(state => ({
  user: fromAuth.getUser(state)
}), {
  resolveRequest
})(ResolveRequestWrapper)
