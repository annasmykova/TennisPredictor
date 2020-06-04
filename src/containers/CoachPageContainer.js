import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fromAuth, fromCoach } from 'store/selectors'
import { getCoach, getPlayers, getRequests, resolveRequest } from 'store/actions'
import { push } from 'connected-react-router'

import { CoachPage, CoachBio } from 'components'
import { withRouter } from 'react-router';
import { compose } from 'redux';



let CoachPageContainer = props => {
  const { coach, match, user } = props;
  const keys = ['bio', user && +user.id === +match.params.coachId ? 'requests' : 'players'];

  const getParams = (key, page = props[key].page) => {
    return {
      size: props[key].size,
      sort: props[key].sort,
      page,
    }
  }


  const handleRequest = key => {
    if (!props[key] && key !== 'bio') {
      if (key === 'players') {
        props.getPlayers(+match.params.coachId, getParams(key));
      } else if (key === 'requests') {
        props.getRequests(+match.params.coachId, getParams(key));
      }
    }
  }

  const [index, setIndex] = useState(0);


  useEffect(() => {
    handleRequest(keys[index]);
  }, [index])

  const handlePlayerRowClick = row => {
    props.push(`/player/${row.id}`);
  }

  const handlePlayersPageChange = key => (event, page) => {
    props.getPlayers(+match.params.coachId, getParams(key, page));
  }

  const handleRequestsPageChange = key => (event, page) => {
    props.getRequests(+match.params.coachId, getParams(key, page));
  }

  return (<CoachPage
    handleChangeTab={setIndex}
    keys={keys}
    index={index}
    tabContentArray={[
      <CoachBio
        coach={coach}
        user={user}
        getCoach={getCoach}
      />,
      2
      // <RatingCard
      //   data={props.atp}
      //   handleRowClick={handleRowClick}
      //   handlePageChange={handlePageChange('atp')}
      // />,
      // <RatingCard
      //   data={props.other}
      //   handleRowClick={handleRowClick}
      //   handlePageChange={handlePageChange('other')}
      // />,
    ]}
  />)
}

const mapStateToProps = (state) => ({
  coach: fromCoach.getCoach(state),
  user: fromAuth.getUser(state),
})

const mapDispatchToProps = {
  getCoach,
  getPlayers,
  getRequests,
  resolveRequest,
  push
}

CoachPageContainer.propTypes = {
  coach: PropTypes.object,
  user: PropTypes.object,
}

export default compose(connect(mapStateToProps, mapDispatchToProps), withRouter)(CoachPageContainer)
