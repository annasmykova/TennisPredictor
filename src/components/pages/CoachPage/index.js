import React, { useState } from 'react';
import { Page, CustomTabs } from 'components';

const CoachPage = props => {

  return (
    <Page heading={<strong className="big-title">Coach</strong>}>
      <div className="home-page">
        <CustomTabs {...props} />
      </div>
    </Page>
  )
}

export default CoachPage
