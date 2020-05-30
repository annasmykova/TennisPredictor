import React from 'react';
import classNames from 'classnames'
import { Heading } from 'components'
import './Page.scss';

const Page = ({user = true, heading = '', children}) => {
  return (<div className={classNames('page', { 'with-user': user })}>
    <Heading>{heading}</Heading>
    <div className="page__content">
      {children}
    </div>
  </div>)
}

export default Page
