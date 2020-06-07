import React, { useEffect, useState } from 'react';
import { Page, CustomTabs } from 'components';
import { withRouter } from 'react-router';

const PlayerPage = props => {


  const [title, setTitle] = useState('Player')

  useEffect(() => {
    return () => {
      props.clearPlayerData()
    }
  }, [props.match.params.playerId])

  useEffect(() => {
    const newTitle = props.user && +props.user.id === +props.match.params.playerId
      ? 'My Profile'
      : 'Player'
    setTitle(newTitle)
  }, [props.user, props.match.params.playerId])

  return (
    <Page heading={<strong className="big-title">{title}</strong>}>
      <div className="home-page">
        <CustomTabs {...props} />
      </div>
    </Page>
  )
}

export default withRouter(PlayerPage)
