import { Avatar } from '@mui/material';
import './Sidebar.scss'
import backgroundSplash from '../../assets/images/background-splash.jpg'

export const Sidebar = () => {

  const recentItem = (topic) => (

    <div className='sidebar__recentItem'>
      <span className='sidebar__hash'>#</span>
      <p>{topic}</p>
    </div>
  )

  return (
    <div className='sidebar'>
      <div className='sidebar__top'>
        <img src={backgroundSplash} alt="" />

        <Avatar className='sidebar__avatar' />

        <h2>Ala El Achkar</h2>

        <h4>ala.elachkar.job@gmail.com</h4>

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
