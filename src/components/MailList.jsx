import React from 'react'
import MailHeader from './MailHeader'
import MailOptions from './MailOptions';
import MailRows from './MailRows';
import { Link } from 'react-router-dom';
import SendMail from './SendMail';
import { useSelector } from 'react-redux';
import { openSendMessage } from '../features/MailSlice';
const MailList = () => {
  const sendMessageIsOpen=useSelector(state=>state.mail.sendMessageIsOpen)
  console.log(sendMessageIsOpen);
  return (
    <div className='w-full rounded-lg relative'>
        <MailHeader/>
        <div className='mail-list lg:h-[80vh] md:h-[83vh] sm:h-[83vh] h-[85vh] bg-white overflow-y-scroll  rounded-bl-xl rounded-br-xl  mr-[10px]'>
            <MailOptions/>
            <Link to={'/MailPage'}><div className=' hover:shadow-md'><MailRows/></div> </Link>
            <Link to={'/MailPage'}><div className=' hover:shadow-md'><MailRows/></div> </Link>
            <Link to={'/MailPage'}><div className=' hover:shadow-md'><MailRows/></div> </Link>
            <Link to={'/MailPage'}><div className=' hover:shadow-md'><MailRows/></div> </Link>
            <Link to={'/MailPage'}><div className=' hover:shadow-md'><MailRows/></div> </Link>
            <Link to={'/MailPage'}><div className=' hover:shadow-md'><MailRows/></div> </Link>
        </div>
        
        {sendMessageIsOpen && <SendMail/>}
    </div>
  )
}

export default MailList