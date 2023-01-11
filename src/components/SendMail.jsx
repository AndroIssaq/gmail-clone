import React from 'react'
import {FaExpandAlt} from 'react-icons/fa'
import {IoMdClose} from 'react-icons/io'
import {BsDash} from 'react-icons/bs'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import MailRows from './MailRows'
import { closeSendMessage } from '../features/MailSlice'
import { useDispatch } from 'react-redux'
const SendMail = () => {   
const {register,handleSubmit}=useForm()
const onSubimt=(data)=>{
    return( <Link to={'/MailPage'}><div className=' hover:shadow-md'><MailRows/></div> </Link>)
}
const dispatch=useDispatch()
  return (
    <div className=' absolute bottom-[80px] right-10 z-[100] w-[550px] h-[530px] shadow-2xl rounded-lg bg-white'>
        <div className="header  flex w-[100%] items-center justify-between p-[5px] bg-[#C9D8E4] rounded-t-lg">
            <div className="title text-[15px] font-semibold pl-[10px]">New Message</div>
            <div className="controlls flex items-center gap-[5px]">
                <span className='text-gray-600  cursor-pointer font-bold text-[18px] w-[30px] h-[30px] hover:bg-gray-200 flex justify-center items-center rounded-full'><BsDash/></span>
                <span className='text-gray-600  cursor-pointer font-bold text-[18px] w-[30px] h-[30px] hover:bg-gray-200 flex justify-center items-center rounded-full'><FaExpandAlt/></span>
                <span onClick={()=>dispatch(closeSendMessage())} className='text-gray-600  cursor-pointer font-bold text-[18px] w-[30px] h-[30px] hover:bg-gray-200 flex justify-center items-center rounded-full'><IoMdClose/></span>
            </div>
        </div>
        <div className="mail-body w-[100%] flex items-start justify-center ">
    <form onSubmit={handleSubmit(onSubimt)} className='flex flex-col w-[100%]'>
            <input required type="text" name='to' {...register('to')} placeholder='To' className='border-t-0 border-x-0 border-gray-300' />
            <input required type="text"  name='subject' {...register('subject')} placeholder='Subject' className='border-t-0 border-x-0 border-gray-300'   />
            <textarea required name="message" id="" {...register('message')} cols="30" rows="10" className='w-[100%] h-[350px] border-0 resize-none focus:shadow-none focus:ring-offset-0 focus:ring-offset-transparent'/>
            <div className="footer bg-[#C9D8E4] w-[100%] h-[60px] p-[5px] pl-[20px] flex items-center rounded-b-lg">
            <button type='submit' className='w-[100px] h-[40px] rounded-sm bg-blue-700 text-white'>Send</button>
        </div>
    </form>
        </div>
     
    </div>
  )
}

export default SendMail