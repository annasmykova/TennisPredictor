import React from 'react';
import NoUser from '../../../assets/images/common/no-user.png';
import './Avatar.scss'

const Avatar = ({ photo = null }) => {
  return (<img className="avatar" src={photo || NoUser} alt="user photo"/>)
}

export default Avatar
