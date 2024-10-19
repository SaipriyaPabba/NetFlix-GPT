import React, { useRef, useState } from 'react'
import Header from './Header'
import { validateData, validateSignUp} from '../utils/validate';


const Login = () => {
  const [isSignIn,setIsSignIn]=useState(true);
  const[errMessage,setErrMessage]=useState(null);
  const name=useRef(null);
  const emailAdd=useRef(null);
  const password=useRef(null);
  const handleSubmit=()=>
  {
      let message;
      if(isSignIn)
      {
         message=validateData(emailAdd.current.value,password.current.value);
      }
      else
      {
         message=validateSignUp(name.current.value,emailAdd.current.value,password.current.value)
      }

        setErrMessage(message);

  }
  const toggleSignIn=()=>
  {
      setIsSignIn(!isSignIn);
  }
  return (
      <div>
            <Header/>
            <div className='absolute'>
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/7c0e18aa-2c95-474d-802e-7f30e75dcca4/web/IN-en-20241014-TRIFECTA-perspective_e7121311-c11e-4809-a3e6-22abffa33569_large.jpg"/>
            </div>
      <form onSubmit={(e)=>e.preventDefault()}  className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
       <h1 className='font-bold p-2 m-2'>{isSignIn?"Sign In":"Sign Up"}</h1>
       {!isSignIn&&<input type="text" ref={name} className="p-2 my-4 w-full bg-gray-700"placeholder='Full Name'/>}
        <input type="text" ref={emailAdd} className="p-2 my-4 w-full bg-gray-700"placeholder='Email Address'/>
        <input type="text" ref={password} className="p-2 my-4 w-full bg-gray-700" placeholder='Password'/>
        <p className='text-red-500 text-bold py-3'>{errMessage}</p>
        <button onClick={handleSubmit} className='p-2 my-6 bg-red-500 w-full cur' >SignUp</button>
       <p className='cursor-pointer'onClick={toggleSignIn}> {isSignIn?"New to Netflix? Sign Up":"Already Registered?Sign In" }</p>
      </form>
            </div>
  )
}

export default Login