import React from 'react';
import './HeaderOption.scss'
import Avatar from '@mui/material/Avatar';
import { useSelector } from 'react-redux';
import { RootState } from '../../../app/store';

interface Props {
  avatar?: boolean,
  Icon?: React.ElementType,
  title?: string
  onClick?: () => void

}

export const HeaderOption: React.FC<Props> = ({ avatar, Icon, title, onClick }) => {
  const user = useSelector((user: RootState) => user.user.user)

  const renderAvatar = () => {
    if (avatar && user?.displayName) {
      return (
        <Avatar className="headerOption__icon" src={user?.profilePic}>
          {user?.displayName[0].toLocaleUpperCase()}
        </Avatar>
      );
    } else if (avatar) {
      // Render default avatar when user object is null or missing necessary data
      return <Avatar className="headerOption__icon" src="/default-avatar.jpg" />;
    }
  };

  return (
    <div onClick={onClick} className='headerOption' >
      {Icon && <Icon className='headerOption__icon' />}

      {renderAvatar()}

      <h3 className='headerOption__title'>{title}</h3>
    </div >
  )
};
