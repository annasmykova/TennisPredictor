import React from 'react';
import NoUser from '../../../assets/images/common/no-user-avatar.png';
import { apiUrl } from 'config'
import './Avatar.scss'

const Avatar = ({ photo = null }) => {
  return (<img className="avatar" src={photo ? `${apiUrl}/${photo}` : NoUser} alt="user photo"/>)
}

export default Avatar
