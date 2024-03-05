import React from 'react';
import './HeaderOption.scss'
import Avatar from '@mui/material/Avatar';

interface Props {
  avatar?: string,
  Icon?: React.ElementType,
  title?: string

}

export const HeaderOption: React.FC<Props> = ({ avatar, Icon, title }) => {
  return (
    <div className='headerOption' >
      {Icon && <Icon className='headerOption__icon' />}

      {avatar && <Avatar className="headerOption__icon" src={avatar} />
      }

      <h3 className='headerOption__title'>{title}</h3>
    </div>
  )
};
