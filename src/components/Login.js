import React, { useRef, useState } from 'react'
import Header from './Header'
import { header_img, netflix_logo } from '../utils/constants'
import { checkValid } from '../utils/Validation'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/UserAuth';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/UserSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate=useNavigate()
    const [signinToggle,setSigninToggle]=useState(true)
    const [errorMessage,seterrorMessage]=useState(null)
    const dispatch=useDispatch()
    const email=useRef(null)
    const pass=useRef(null)
    const sign=()=>{
        setSigninToggle(!signinToggle)
    }
    const handleValidation = ()=>{
        const message=checkValid(email.current.value,pass.current.value)
        // console.log(message);
        seterrorMessage(message)
        if(message) return;
        if(!signinToggle){
        createUserWithEmailAndPassword(auth, email.current.value, pass.current.value)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                
                // ...
                // console.log(user)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
                seterrorMessage(errorMessage);
                console.log(errorMessage);
            });
        }
        else{
            signInWithEmailAndPassword(auth, email.current.value, pass.current.value)
                .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                dispatch(addUser({name:user.email}))
                
                // ...
                // console.log(user);
                })
                .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                seterrorMessage(errorMessage)
                });
            }
    }


  return (
    <div>
        <Header/>
        <div className='absolute'>
            <img src={header_img}/>
        </div>
        <form onSubmit={(e)=>e.preventDefault()} className='absolute bg-black bg-opacity-70 w-3/12 mx-auto left-0 right-0 my-36 p-10 test-white'>
            <h3 className='text-white text-3xl'>{signinToggle?'Sign In':'Sign Up'}</h3>
            {
                !signinToggle&&<input type='text' placeholder='Full Name' className='w-full p-2 my-4 bg-slate-700'/>
            }
            <input ref={email} type='text' placeholder='Email Address' className='w-full p-2 my-4 bg-slate-700'/>
            <input ref={pass} type='password' placeholder='Password' className='w-full p-2 my-4 bg-slate-700'/>
            <p className=' text-red-600'>{errorMessage}</p>
            <button onClick={handleValidation} className='w-full bg-red-600 p-2 my-6'>{signinToggle?'Sign In':'Sign Up'}</button>
            <p onClick={sign} className='text-white cursor-pointer'>{signinToggle?"New to Netflix? Sign Up now":"Already Registered? Sign In now"}</p>
        </form>
    </div>
  )
}

export default Login