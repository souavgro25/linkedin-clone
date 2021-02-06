import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';
import { auth } from './Firebase';
import "./Login.css";

function Login() {
    const [email ,setEmail]=useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [profilePic, setProfilePic] = useState("");
    const dispatch = useDispatch();
    
    const loginToApp =(e)=>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password)
        .then((userAuth)=>{
            dispatch(login({
                email:userAuth.email,
                uid:userAuth.uid,
                displayName: userAuth.displayName,
                photoUrl:userAuth.photoUrl,  
            }))
        })
        .catch((error) => alert(error));
    };

    const register =()=>{
        if(!name){
            return alert("please enter a full name ")
        }
        auth.createUserWithEmailAndPassword(email,password)
        .then((userAuth)=>{
            userAuth.user.updateProfile({
                displayName: name,
                photoURL:profilePic,
            })
            .then(()=>{
               dispatch(login({
                   email:userAuth.user.email,
                   uid:userAuth.user.uid,
                   displayName:name,
                   photoURL:profilePic,
               }))
            })
        })
        .catch((error)=> alert(error));
    };
    return (
        <div className="login">
            <img src="https://www.comeet.com/resources/wp-content/uploads/2019/03/linkedin-logo.png"
            alt=""/>
        
        <form >
            <input value={name}
            onChange={(e) =>{setName(e.target.value)}}
            placeholder="Full name (required for registration) " type="text"/>
            <input  value={profilePic}
            onChange={(e)=>{setProfilePic(e.target.value)}}
            placeholder="profile pic url (optional)" type="text"/>
            <input value={email} 
            onChange={(e) =>{setEmail(e.target.value)}} 
            placeholder="Email" type="Email"/>
            <input value={password}
            onChange={(e) =>{setPassword(e.target.value)}} 
            placeholder="Password" type="password"/>  
            <button type ="submit" onClick={loginToApp}>sign in</button>     
        </form>
        <p>Not a member ?<span onClick={register}className='login__register'>Register Now</span></p>
        </div>
    )
}

export default Login
