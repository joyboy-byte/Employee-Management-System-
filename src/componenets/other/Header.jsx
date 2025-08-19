import React, { use, useEffect, useState } from 'react'
import { setLocalStorage } from '../../utils/localStorage'

const Header = (props) => {
  const [userName, setUserName] = useState('')

  useEffect(() => {
    // Get user from localStorage or props
    const storedUser = localStorage.getItem('loggedInUser');
    // console.log("storedUser raw:", storedUser);


    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        if (parsedUser?.data?.firstName) {
          setUserName(parsedUser.data.firstName);
        }
        else {
          setUserName('Admin'); // fallback if firstName missing
        }

      }
      catch (err) {
        // console.error("Failed to parse user:", err);
        setUserName('Admin');
      }

    }
    else {
      setUserName('Admin');
    }
  }, [])


  // if(!data){
  //   setUsername('Admin')
  // }
  // else{
  //   setUsername(data.firstName)
  // }

  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '')
    props.changeUser('');

    // window.location.reload();

  }
  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>Hello <br /><span className='text-3xl font-semibold'> {userName}👋</span> </h1>
      <button onClick={logOutUser} className='bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-sm'>Log Out</button>
    </div>
  )
}

export default Header