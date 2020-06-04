import React from 'react';
import classNames from 'classnames'
import { Heading } from 'components'
import { connect } from 'react-redux';
import { fromAuth } from 'store/selectors'
import './Page.scss';

const Page = ({user = true, heading = '', children, transparent}) => {
  return (<div className={classNames('page', { 'with-user': user })}>
    <Heading>{heading}</Heading>
    <div className={classNames('page__content', {transparent})}>
      {children}
    </div>
  </div>)
}

export default connect(state => ({ user: fromAuth.getUser(state) }))(Page)
