import React from 'react'
import {MdArrowDropDown} from 'react-icons/md'
import {IoReloadOutline}from 'react-icons/io5'
import {BsThreeDotsVertical,BsFillChatSquareTextFill}from "react-icons/bs";
import {IoIosArrowBack,IoIosArrowForward,IoMdSettings,IoIosArrowRoundBack}from "react-icons/io"
import { Link } from 'react-router-dom';
const MailPageHeader = () => {
  return (
    <div className='w-[99%] p-[15px] h-auto sticky shadow-md rounded-tl-xl rounded-tr-xl bg-white mr-[20px] '>
            <div className='content flex justify-between items-center'>
                <div className="left flex gap-[15px] items-center">
                    <div className='flex '> 
                    <Link to={'/'}><span className='w-[30px] h-[30px] cursor-pointer hover:bg-gray-200 flex justify-center items-center rounded-sm text-[23px]'> <IoIosArrowRoundBack/> </span></Link> 
                    </div>
                    <span className='text-gray-600 cursor-pointer  font-bold text-[18px] w-[30px] h-[30px] hover:bg-gray-200 flex justify-center items-center rounded-full '><IoReloadOutline/></span>
                    <span className='text-gray-600 cursor-pointer font-bold text-[18px] w-[30px] h-[30px] hover:bg-gray-200 flex justify-center items-center rounded-full '><BsThreeDotsVertical/></span>
                </div>
                <div className="right flex gap-[15px] items-center">
                    <span className='text-gray-600  cursor-pointer font-bold text-[18px] w-[30px] h-[30px] hover:bg-gray-200 flex justify-center items-center rounded-full '><IoIosArrowBack/></span>
                    <span className='text-gray-600 cursor-pointer font-bold text-[18px] w-[30px] h-[30px] hover:bg-gray-200 flex justify-center items-center rounded-full '><IoIosArrowForward/></span>
                    <span className='text-gray-600  cursor-pointer font-bold text-[18px] w-[30px] h-[30px] hover:bg-gray-200 flex justify-center items-center rounded-full '><BsFillChatSquareTextFill/></span>
                    <span className='text-gray-600 cursor-pointer  font-bold text-[18px] w-[30px] h-[30px] hover:bg-gray-200 flex justify-center items-center rounded-full '><IoMdSettings/></span>
                </div>
            </div>
        </div>
  )
}

export default MailPageHeader