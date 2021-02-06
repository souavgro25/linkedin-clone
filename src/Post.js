import { Avatar } from '@material-ui/core'
import React, { forwardRef } from 'react'
import InputOption from "./InputOption";
import "./Post.css"
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
const Post = forwardRef(({name, description, message,photoURL},ref)=> {
    return (
        <div ref ={ref}className="post">
            <div className="post__header">
                <Avatar src = {photoURL}>{name[0]}</Avatar>
            <div className="post__info">
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
            </div>
        <div className="post__body">
            <p>{message}</p>
        </div>
            <div className="post__buttons">
                <InputOption Icon={ThumbUpOutlinedIcon} color="gray" title ="like"/>
                <InputOption Icon={ChatOutlinedIcon} color="gray" title ="Comment"/>
                <InputOption Icon={ShareOutlinedIcon} color="gray" title ="Share"/>
                <InputOption Icon={SendOutlinedIcon} color="gray" title ="Send"/>                
            </div>
        </div>
    )
})

export default Post ;
