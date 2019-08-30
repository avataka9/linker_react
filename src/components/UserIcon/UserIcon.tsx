import React from 'react'
import Icon from '../Icon/Icon'
import UserIconDefault from './UserIconDefault.png'

interface IProps {}

const UserIcon: React.FC<IProps> = () => {
  return (
    <Icon src={UserIconDefault} alt='user-icon'/>
  );
}

export default UserIcon;
