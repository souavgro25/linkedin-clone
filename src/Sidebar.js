import { Avatar } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux';
import { selectuser } from './features/userSlice';
import "./Sidebar.css";
function Sidebar() {
    const user = useSelector(selectuser);

    const recentItem =(topic)=>(
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>    
    )
    return (
        <div className="sidebar">
            <div className="sidebar__top">
             <img src="https://images.unsplash.com/photo-1499088513455-78ed88b7a5b4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjJ8fGJhY2tncm91bmR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
                alt=""/>
        
                <Avatar  src={user.photoUrl}alt="" className="sidebar__avatar"></Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>who viewed you</p>
                    <p className="sidebar__statNumber">2,543</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <p className="sidebar__statNumber">2,448</p>
                </div>

            </div>
            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem("reactjs")}
                {recentItem("programming")}
                {recentItem("web development")}
                {recentItem("dope css")}
                {recentItem("javaScript")}
                
            </div>
            
        </div>
    )
}

export default Sidebar;
