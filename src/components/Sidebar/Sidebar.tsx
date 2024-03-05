import { Avatar } from '@mui/material';
import './Sidebar.scss'
import backgroundSplash from '../../assets/images/background-splash.jpg'
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';


export const Sidebar = () => {

  const user = useSelector((user: RootState) => user.user.user)

  console.log(user)

  const recentItem = (topic: string) => (

    <div className='sidebar__recentItem'>
      <span className='sidebar__hash'>#</span>
      <p>{topic}</p>
    </div>
  )

  return (
    <div className='sidebar'>
      <div className='sidebar__top'>
        <img src={backgroundSplash} alt="" />

        <Avatar src={user?.profilePic} className='sidebar__avatar' >
          {user?.displayName && user.displayName[0]?.toLocaleUpperCase()}
        </Avatar >

        <h2>{user?.displayName}</h2>

        <h4>{user?.email}</h4>

      </div>

      <div className='sidebar__stats'>
        <div className='sidebar__stat'>
          <p>Who viewed you</p>

          <p className='sidebar__statNumber'>2,543  </p>
        </div>

        <div className='sidebar__stat'>
          <p>Views on post</p>

          <p className='sidebar__statNumber'>1,854</p>
        </div>
      </div>

      <div className='sidebar__bottom'>
        <p>Recent</p>
        {recentItem('reactjs')}
        {recentItem('programming')}
        {recentItem('softwareengineering')}
        {recentItem('design')}
        {recentItem('developer')}
      </div>



    </div>
  )
};
