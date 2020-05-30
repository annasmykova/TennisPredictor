import React from 'react';
import NoUser from '../../../assets/images/common/no-user.png';

const Avatar = ({ photo = null }) => {
  return (<img src={photo || NoUser} alt="user photo"/>)
}

export default Avatar
