import React from 'react'
import { createMatch } from 'store/actions'
import { fromAuth } from 'store/selectors'
import { reduxForm } from 'redux-form'

import { MatchForm } from 'components'
import { connect } from 'react-redux';


const validate = values => {
  const errors = {}
  if (!values.player2) {
    errors.player2 = 'Required'
  }
  if (!values.score) {
    errors.score = 'Required'
  }
  if (!values.winner) {
    errors.winner = 'Required'
  }
  if (!values.surface) {
    errors.surface = 'Required'
  }
  if (!values.tournamentType) {
    errors.tournamentType = 'Required'
  }
  if (!values.date) {
    errors.date = 'Required'
  } else if (new Date() < values.date) {
    errors.date = 'Match Date can\'t be in future'
  }
  return errors
}

const onSubmit = (data, dispatch) => {
  const newData = {
    winner: data.winner ? data.player2 : data.player1.id,
    loser: !data.winner ? data.player2 : data.player1.id,
    score: data.score,
    date: newDate(data.date),
    tournamentType: data.tournamentType,
    surface: data.surface,
  }

  dispatch(createMatch(newData))
}

let MatchFormContainer = props => {
  return (<MatchForm {...props} />)
}

MatchFormContainer = reduxForm({
  // a unique name for the form
  form: 'match',
  validate,
  onSubmit
})(MatchFormContainer)

export default connect(state => ({
  initialValues: {
    player1: fromAuth.getUserAsMatchPlayer(state)
  }
}))(MatchFormContainer)
