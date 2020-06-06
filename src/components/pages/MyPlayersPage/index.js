import React, { useEffect } from 'react';
import { RatingCard, Page } from 'components';
import { connect } from 'react-redux';
import { fromCoach, fromAuth } from 'store/selectors'
import { getPlayers } from 'store/actions'
import { push } from 'connected-react-router'
import { withRouter } from 'react-router';
import { compose } from 'redux';

const MyPlayersPage = props => {

  const getParams = (page = props.players.page) => {
    return {
      size: props.players.size,
      sort: props.players.sort,
      page,
    }
  }

  const handleRowClick = row => {
    props.push(`/player/${row.id}`);
  }

  const handlePageChange = (event, page) => {
    props.getPlayers(+props.match.params.coachId, getParams(page));
  }

  useEffect(() => {
    props.getPlayers(+props.match.params.coachId, getParams(1));
  }, [])

  return (
    <Page heading={<strong className="big-title">My Players</strong>}>
      <div className="home-page">
        <RatingCard data={props.players} handleRowClick={handlePageChange} handlePageChange={handleRowClick} />
      </div>
    </Page>
  )
}

export default compose(
  withRouter,
  connect(state => ({
  players: fromCoach.getPlayers(state),
  user: fromAuth.getUser(state),
}), {
  getPlayers,
  push
}))(MyPlayersPage)
