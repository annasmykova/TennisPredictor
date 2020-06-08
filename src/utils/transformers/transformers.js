import React from 'react'
import Avatar from '../../components/atoms/Avatar';
import { countryList, HandEnum, InjuryEnum, SexEnum, TourneyLevels } from '../constants/constants';
import ResolveRequestWrapper from '../../components/molecules/ResolveRequestWrapper';

export const getRatingTableData = data => {
  return data.map(row => ({
    ...row,
    photo: <Avatar photo={row.photo} />,
    gender: SexEnum[row.gender],
    hand: HandEnum[row.hand],
    country: countryList[row.country].name,
    name: `${row.firstName} ${row.lastName}`
  }))
}

export const getRequestTableData = data => {
  return data.map((row, idx) => ({
    ...row,
    index: idx + 1,
    gender: SexEnum[row.gender],
    hand: HandEnum[row.hand],
    country: countryList[row.country].name,
    name: `${row.firstName} ${row.lastName}`
  }))
}

export const getMatchesTableData = data => {
  return data.map((row, idx) => ({
    ...row,
    index: idx + 1,
    winner: {
      ...row.winner,
      name: `${row.winner.firstName} ${row.winner.lastName}`
    },
    loser: {
      ...row.loser,
      name: `${row.loser.firstName} ${row.loser.lastName}`
    },
    tournamentType: TourneyLevels[row.tournamentType],
    date: new Date(row.date).toLocaleDateString()
  }))
}

export const getInjuriesTableData = data => {
  return data.map((row, idx) => ({
    index: idx + 1,
    injury: InjuryEnum[row.injury],
    date: new Date(row.date).toLocaleDateString(),
    finishDate: new Date(row.finishDate).toLocaleDateString(),
  }))
}

export const renderRequestWrapper = row => {
  return <ResolveRequestWrapper row={row}/>
}
