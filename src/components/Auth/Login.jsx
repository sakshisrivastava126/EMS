import React, { useState } from 'react'

const Login = ({handleLogin}) => {

  //Two way binding
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (e) =>{
    e.preventDefault()
    handleLogin(email, password)

    setEmail("")
    setPassword("")
  }

  return (
    <>
    <h1 className='flex justify-center items-center font-bold text-white text-6xl pt-20'>Login</h1>
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='border-2 border-black rounded-[12px] px-9 py-9 bg-blue-400'>
        <form 
        onSubmit={(e) =>{
          submitHandler(e)
        }}
        className='flex flex-col items-center justify-center'>

          <input 
          value = {email}
          onChange={(e) =>{
            setEmail(e.target.value)
          }}
          required 
          className='border-2 text-black border-black rounded-full w-80 text-xl py-3 px-3 m-5' type='email' placeholder=" enter you email" />
          
          <input 
          value = {password}
          onChange = {(e)=>{
            setPassword(e.target.value)
          }}
          required className='border-2 border-black rounded-full text-xl w-80 py-3 px-3 m-5' type="password" placeholder="enter your password" />
          <button className='text-white bg-black rounded-[6px] m-5 text-xl w-40 h-12'>Log in</button>
        </form>
      </div>
    </div>
    </>
  )
}

export default Login