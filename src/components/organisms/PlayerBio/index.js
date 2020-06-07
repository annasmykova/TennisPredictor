import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router';
import Button from '@material-ui/core/Button';
import { EditPlayerFormContainer } from 'containers';
import { PlayerBioDefault } from 'components';
import classNames from 'classnames';

const PlayerBio = props => {
  const { user, match, getPlayer, player } = props;
  const [isForm, setForm] = useState(false)
  const [currentPlayer, setPlayer] = useState(null)

  useEffect(() => {
    if (user && +user.id === +match.params.playerId) {
      setPlayer(user)
    } else if (!player) {
      getPlayer(+match.params.playerId)
    } else if (player) {
      setPlayer(player)
    }
  }, [user, player, match])

  return (<div className="player-bio bio">
    {
      currentPlayer &&
      <div className="player-bio__wrapper bio__wrapper">
        {
          isForm
          // ? <div/>
          ? <EditPlayerFormContainer closeForm={() => setForm(false)} />
          : <PlayerBioDefault player={currentPlayer}/>
        }
      </div>
    }
    {
      user && +user.id === +match.params.playerId &&
      <Button
        className={classNames('default-btn toggle-bio-btn', {red: isForm})}
        variant="outlined"
        type="submit"
        onClick={() => setForm(!isForm)}
      >{isForm ? 'Cancel' : 'Edit'}</Button>
    }
  </div>)
}

export default withRouter(PlayerBio)
