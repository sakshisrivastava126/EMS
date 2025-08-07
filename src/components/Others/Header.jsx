import React from 'react'
import { useEffect, useState } from 'react'

const Header = (props) => {

  const [username, setUsername] = useState('')

  useEffect(() => {
  console.log('props.data:', props.data)
    if (!props.data) {
      setUsername('Admin')
    } else {
      setUsername(props.data.firstName)
    }
  }, [props.data])

  const logOutUser = ()=>{
    localStorage.setItem('loggedInUser', '')
    props.changeUser('')
  }

  return (
    <div className='flex items-center justify-between text-white'>
        <h1 className='text-3xl font-semibold'>Hello <br/><span className="text-4xl font-bold text-blue-400">{username} 🥰</span></h1>
        <button onClick={logOutUser} className='bg-white text-red-500 text-xl font-semibold rounded-[12px]'>Log Out</button>
    </div>
  )
}

export default Header