import React from 'react'
import Avatar from '../../components/atoms/Avatar';
import { countryList, HandEnum, SexEnum } from '../constants/constants';

export const getRatingTableData = data => {
  return data.map(row => ({
    ...row,
    photo: <Avatar photo={row.photo} />,
    sex: SexEnum[row.sex],
    hand: HandEnum[row.hand],
    country: countryList[row.country].name
  }))
}
