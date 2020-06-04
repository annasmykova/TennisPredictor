import React from 'react'
import Avatar from '../../components/atoms/Avatar';
import { countryList, HandEnum, SexEnum } from '../constants/constants';

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

export const getCountrySelectValues = data => {
  // console.log(data);
  const res = Object.keys(data).reduce((acc, key) => ({
    ...acc,
    [key]: data[key].name
  }), {})
  console.log(JSON.stringify(res));
  return res
}
