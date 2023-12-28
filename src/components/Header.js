import React, { useEffect } from 'react'
import { netflix_logo } from '../utils/constants'
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/UserAuth';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/UserSlice';
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


  return (
    <div className='w-screen bg-gradient-to-b from-black flex justify-between'>
      <img className='w-56 py-4 px-4 ' src={netflix_logo}/>
      <button className=' text-white rounded-lg h-2 p-2 my-4' onClick={handleSignOut}>
        LogOut
      </button>
    </div>
  )
}

export default Header