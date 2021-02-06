import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import "./Header.css"
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ChatIcon from '@material-ui/icons/Chat';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectuser } from './features/userSlice';
import { auth } from './Firebase';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

function Header() {
    const user =useSelector(selectuser);
    const dispatch =useDispatch();
    const logoutofApp =()=>{
        dispatch(logout());
        auth.signOut();
    };
    return (
        <div className ="header">
            <div className="header__left">
                <img  className="header__logo" src="https://upload.wikimedia.org/wikipedia/commons/e/e9/Linkedin_icon.svg" alt=""/>
                <div className="header__search"> 
                    <SearchIcon/>
                    <input placeholder="Search" type="text"/>
                </div>
            </div>

            <div className="header__right">
                <HeaderOption Icon={HomeIcon}title="Home"/>
                <HeaderOption Icon={SupervisorAccountIcon}title="My Network"/>
                <HeaderOption Icon={BusinessCenterIcon}title="Jobs"/>
                <HeaderOption Icon={ChatIcon}title="Messaging"/>
                <HeaderOption Icon={NotificationsIcon}title="Notifications"/>
                <HeaderOption avatar={true}
                 title={user?.displayName}
                />
                <HeaderOption Icon={ExitToAppIcon} title="signout" 
                 onClick={logoutofApp}/>
                 
               
            </div>
            
        </div>
    )
}

export default Header
