import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fromAuth, fromPlayer } from 'store/selectors'
import { getPlayer, getMatches, getInjuries, getPrediction, clearPlayerData } from 'store/actions'
import { push } from 'connected-react-router'

import { PlayerPage, PlayerBio, InjuriesCard, MatchesCard, PredictionCard } from 'components'
import { withRouter } from 'react-router';
import { compose } from 'redux';



let PlayerPageContainer = props => {
  const { player, match, user, getPlayer, clearPlayerData } = props;
  const isEditable = user && (+user.id === +match.params.playerId ||
    player && player.coach && +player.coach.id === +user.id)
  const keys = isEditable
    ? ['bio', 'matches',  'injuries', 'prediction']
    : ['bio', 'matches', 'prediction']
  const tabContentArray = isEditable
    ? ['bio', 'matches',  'injuries', 'prediction']
    : ['bio', 'matches', 'prediction']

  const getParams = (key, page = props[key].page) => {
    return {
      size: props[key].size,
      sort: props[key].sort,
      page,
    }
  }

  const handleRequest = key => {
    if (key !== 'bio' && key !== 'prediction' && !props[key].data[props[key].page - 1]) {
      if (key === 'matches') {
        props.getMatches(+match.params.playerId, getParams(key));
      } else if (key === 'injuries') {
        props.getInjuries(+match.params.playerId, getParams(key));
      }
    }
  }

  const [index, setIndex] = useState(0);

  useEffect(() => {
    handleRequest(keys[index]);
  }, [index])

  useEffect(() => {
    setIndex(0);
  }, [props.match])

  const handleMatchesPageChange = key => (event, page) => {
    props.getMatches(+match.params.playerId, getParams(key, page));
  }

  const handleInjuriesPageChange = key => (event, page) => {
    props.getInjuries(+match.params.playerId, getParams(key, page));
  }

  return (<PlayerPage
    handleChangeTab={setIndex}
    keys={keys}
    index={index}
    user={user}
    clearPlayerData={clearPlayerData}
    tabContentArray={[
      <PlayerBio
        player={player}
        user={user}
        getPlayer={getPlayer}
      />,
      <MatchesCard
        data={props.matches}
        isEditable={isEditable}
        user={user}
        handlePageChange={handleMatchesPageChange('matches')}
      />,
      <InjuriesCard
        data={props.injuries}
        user={user}
        isEditable={isEditable}
        handlePageChange={handleInjuriesPageChange('injuries')}
      />,
      2
      // <PredictionCard
      //   data={props.players}
      //   handlePageChange={handlePlayersPageChange('players')}
      //   handleRowClick={handlePlayerRowClick}
      // />
    ]}
  />)
}

const mapStateToProps = (state) => ({
  player: fromPlayer.getPlayer(state),
  matches: fromPlayer.getMatches(state),
  injuries: fromPlayer.getInjuries(state),
  predictionResult: fromPlayer.getPredictionResult(state),
  predictionOtherPlayer: fromPlayer.getPredictionOtherPlayer(state),
  user: fromAuth.getUser(state),
})

const mapDispatchToProps = {
  getPlayer,
  getMatches,
  getInjuries,
  getPrediction,
  clearPlayerData,
  push
}

PlayerPageContainer.propTypes = {
  player: PropTypes.object,
  user: PropTypes.object,
}

export default compose(connect(mapStateToProps, mapDispatchToProps), withRouter)(PlayerPageContainer)
