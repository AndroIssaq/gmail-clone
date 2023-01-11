import React from 'react'
import  logo from '../assets/logo_gmail_lockup_default_1x_r5.png'
import {FcGoogle}from 'react-icons/fc'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from '../../../Disney/Firebase'
const Login = () => {
    const googleProvider=new GoogleAuthProvider()
    const signin=async()=>{
        try {
            const result=await signInWithPopup(auth,googleProvider)
            console.log(result);
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <div className=' absolute w-[100%] h-[100vh] bg-white  z-50 flex  items-center justify-center '>
       <div className="card p-[20px] w-[450px] h-[200px] rounded-md shadow-xl flex flex-col items-center justify-start">
        <div className="logo w-[100%] flex items-center justify-center"> <img src={logo} alt="" className=' cursor-pointer lg:w-[130px] md:w-[80px] sm:w-[70] w-[50px]' /></div>
        <div onClick={()=>signin()} className="sign-in w-[60%] flex items-center cursor-pointer justify-start bg-slate-900 rounded-md p-[10px] mt-[30px] gap-[10px]">
            <span className='text-[20px]'><FcGoogle/></span>
            <h1 className='text-white'>Sign in with Google</h1>
        </div>
       </div>
    </div>
  )
}

export default Login