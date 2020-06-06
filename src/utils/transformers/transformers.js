import React from 'react'
import Avatar from '../../components/atoms/Avatar';
import { countryList, HandEnum, SexEnum } from '../constants/constants';
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

export const getCountrySelectValues = data => {
  // console.log(data);
  const res = Object.keys(data).reduce((acc, key) => ({
    ...acc,
    [key]: data[key].name
  }), {})
  console.log(JSON.stringify(res));
  return res
}

export const renderRequestWrapper = row => {
  return <ResolveRequestWrapper row={row}/>
}
