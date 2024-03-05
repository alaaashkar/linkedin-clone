import './Header.scss'
import SearchIcon from '@mui/icons-material/Search';
import logo from './../../assets/images/linkedin-icon.png'
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import avatarIcon from '../../assets/images/avatar-image.jpg'
import { HeaderOption } from "./HeaderOption/HeaderOption";
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../features/userSlice';
import { auth } from '../../firebase';
import { RootState } from '../../app/store';

export const Header = () => {
  const dispatch = useDispatch()

  const logoutofApp = () => {
    dispatch(logout())
    auth.signOut()
  }

  return (
    <div className="header">

      <div className="header__left">
        <img src={logo} alt="/" />

        <div className="header__search">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>

      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title='Home' />
        <HeaderOption Icon={SupervisorAccountIcon} title='My Network' />
        <HeaderOption Icon={SupervisorAccountIcon} title='My Network' />
        <HeaderOption Icon={BusinessCenterIcon} title='Jobs' />
        <HeaderOption Icon={ChatIcon} title='Messaging' />
        <HeaderOption Icon={NotificationsIcon} title='Notifications' />
        <HeaderOption avatar={true} onClick={logoutofApp} title='Me' />
      </div>
    </div>
  )
};
