import React, { useState } from 'react';
import { Page, CustomTabs } from 'components';
import { ChangePasswordContainer } from 'containers';
import { RemoveAccount } from 'components';


const SettingsPage = props => {

  const keys = ['Change Password', 'Delete Account']

  const [index, setIndex] = useState(0);

  return (
    <Page transparent heading={<strong className="big-title">Settings</strong>}>
      <div className="home-page">
        <CustomTabs
          {...props}
          keys={keys}
          tabContentArray={[<ChangePasswordContainer />, <RemoveAccount />]}
          handleChangeTab={setIndex}
          index={index}
        />
      </div>
    </Page>
  )
}

export default SettingsPage
