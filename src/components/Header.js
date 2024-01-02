import React, { useEffect, useState } from 'react'
import { header_img, netflix_logo } from '../utils/constants'
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/UserAuth';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/UserSlice';
import { toggleGPT } from '../utils/GPTSlice';
// import useTitle from '../utils/useTitle';
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { email, pass } = user;
        dispatch(addUser({ email: email }));
        const uid = user.uid;
        navigate('/browse')
        // ...
      } else {
        navigate('/')
        dispatch(removeUser());
      }
    });

    // Cleanup function to unsubscribe from onAuthStateChanged when the component unmounts
    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth).then(() => {
      console.log("clicked");
      
    }).catch((error) => {
      // An error happened.
    });
    
  };
  const {isGpt} = useSelector((store)=>store.gpt)
const [gpt,setGpt]=useState(false)
const handleGPT = 
  ()=>{setGpt(!gpt)
    dispatch(toggleGPT())
}
  return (
    <div className='w-full bg-gradient-to-b from-black flex justify-between'>
      <img className='w-56 py-4 px-4 ' src={netflix_logo}/>
      <div >
        <button className=' text-white bg-purple-800 mt-4 px-4 py-2 rounded-xl mx-4'
        onClick={handleGPT}>{isGpt?"Home":"GPT"}</button>
        <button className=' text-white rounded-lg p-2 mt-4 bg-red-800' onClick={handleSignOut}>
          LogOut
        </button>
      </div>
      
      
    </div>
  )
}

export default Header