import React, { useEffect, useState } from 'react';
import { Page, CustomTabs } from 'components';
import { withRouter } from 'react-router';

const CoachPage = props => {


  const [title, setTitle] = useState('Coach')

  useEffect(() => {
    return () => {
      props.clearCoachData()
    }
  }, [props.match.params.coachId])

  useEffect(() => {
    const newTitle = props.user
                  ? +props.user.id === +props.match.params.coachId
                    ? 'My Profile'
                    : +props.user.coach && props.user.coach.id === +props.match.params.coachId
                      ? 'My Coach'
                      : 'Coach'
                  : 'Coach'
    setTitle(newTitle)
  }, [props.user])

  return (
    <Page heading={<strong className="big-title">{title}</strong>}>
      <div className="home-page">
        <CustomTabs {...props} />
      </div>
    </Page>
  )
}

export default withRouter(CoachPage)
