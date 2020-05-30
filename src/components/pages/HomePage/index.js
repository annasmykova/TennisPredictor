import React, { useState } from 'react';
import { Page, CustomTabs } from 'components';
import './index.scss';

const HomePage = props => {

  return (
    <Page heading="Ratings">
      <div className="home-page">
        <CustomTabs {...props} />
      </div>
    </Page>
  )
}

export default HomePage
