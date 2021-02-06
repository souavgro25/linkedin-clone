import CreateIcon from '@material-ui/icons/Create';
import React, { useEffect, useState } from 'react'
import InputOption from './InputOption';
import "./Feed.css";
import Post from "./Post.js";
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import { db } from './Firebase';
import firebase from "firebase" 
import { useSelector } from 'react-redux';
import { selectuser } from './features/userSlice';
import FlipMove from "react-flip-move";


function Feed() {
    const user =useSelector(selectuser);
    const [input, setinput] = useState("")
    const [posts, setposts] = useState([]);
    useEffect(() => {
        db.collection("posts").orderBy("timeStamp","desc")
        .onSnapshot(snapshot => (
            setposts(snapshot.docs.map(doc =>(
                {
                    id  :doc.id,
                    data:doc.data()
                }
            )))
        ))
    }, [input])
    const sendPost = (e) => {
        e.preventDefault();
        db.collection('posts').add({
            name:user.displayName,
            description:user.email,
            message : input,
            photoURL:user.photoURL || "",
            timeStamp:firebase.firestore.FieldValue.serverTimestamp(),

        });
        setinput("");
    };

    return (
        <div className="feed">
            <div className="feed__inputcontainer">
                <div className="feed__input">
                    <CreateIcon/>
                    <form>
                        <input  value={input} onChange ={e => setinput(e.target.value)} type="text" />
                        <button onClick={sendPost} type="submit">Send</button>
                    </form>
                </div>
                <div className="feed__inputOption">
                    <InputOption Icon={ImageIcon} title="Image" color="#70B5F9 "/>
                    <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E"/>
                    <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD"/>
                    <InputOption Icon={CalendarViewDayIcon} title="Write article" color="#7FC15E"/>
                </div>
               
            </div>
            <FlipMove>
            {posts.map(({id ,data :{name,description,message,photoUrl}}) =>(
                  <Post
                  key ={id}
                  name={name}
                  description={description}
                  message={message}
                  photoURL={photoUrl}  
                  />
            ))
              
            }
            </FlipMove>
            
        </div>
    )
}

export default Feed
