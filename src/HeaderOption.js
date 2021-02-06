import React from 'react'
import "./HeaderOption.css";
import Avatar from '@material-ui/core/Avatar';
import { useSelector } from 'react-redux';
import { selectuser } from './features/userSlice';

function HeaderOption({avatar,Icon,title,onClick}) {
    const user =useSelector(selectuser);
    return (
        <div onClick={onClick} className="headerOption">
            {Icon && <Icon className="headerOption__icon"/>}
            {avatar && (<Avatar className="headerOption__icon" src={user?.photoUrl}></Avatar>
            )}
            <h3 className="headerOption__title">{title}</h3>
            


        </div>
    )
}

export default HeaderOption
