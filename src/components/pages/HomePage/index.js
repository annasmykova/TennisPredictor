import React, { useState } from 'react';
import { Page, CustomTabs } from 'components';
import './index.scss';

const HomePage = props => {

  return (
    <Page heading={<strong className="big-title">Ratings</strong>}>
      <div className="home-page">
        <CustomTabs {...props} />
      </div>
    </Page>
  )
}

export default HomePage
