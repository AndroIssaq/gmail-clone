import React from 'react'
import {HiOutlinePencil,HiInbox,HiOutlineStar} from "react-icons/hi2";
import {MdSend,MdOutlineWatchLater}from "react-icons/md"
import {RiDraftLine} from 'react-icons/ri'
import { useDispatch } from 'react-redux';
import { openSendMessage } from '../features/MailSlice';
const ClosedSidebar = () => {
    const dispatch=useDispatch()
  return (
    < div className='w-[80px]  h-[100vh] bg-gray-100 overflow-hidden'>
    <div className="content flex flex-col items-center  justify-center gap-[20px] ">
        <div onClick={()=>dispatch(openSendMessage())} className="compose  mx-[10px] cursor-pointer w-[65px] shadow-md hover:shadow-gray-500 hover:shadow-lg transition duration-300 h-[60px] rounded-2xl bg-[#c2e7ff] p-[10xp] flex items-center justify-center gap-[15px]">
            <span className='lg:text-[23px] md:text-[23px] sm:text-[20px]'><HiOutlinePencil/></span>
        </div>
        <ul className=' flex flex-col gap-[2px] justify-center items-center'>
            <li className='flex w-[50px] h-[50px] rounded-full justify-center items-center cursor-pointer text-[23px] text-gray-700 py-[5px] hover:bg-gray-200 '>
                <span><HiInbox/></span>
            </li>

            <li className='flex w-[50px] h-[50px] rounded-full justify-center items-center cursor-pointer text-[23px] text-gray-700 py-[5px] hover:bg-gray-200'>
                <span><HiOutlineStar/></span>
            </li>


            <li className='flex w-[50px] h-[50px] rounded-full justify-center items-center cursor-pointer text-[23px] text-gray-700 py-[5px] hover:bg-gray-200'>
                <span><MdSend/></span>
            </li>

            <li className='flex w-[50px] h-[50px] rounded-full justify-center items-center cursor-pointer text-[23px] text-gray-700 py-[5px] hover:bg-gray-200'>
                <span><MdOutlineWatchLater/></span>
            </li>

            <li className='flex w-[50px] h-[50px] rounded-full justify-center items-center cursor-pointer text-[23px] text-gray-700 py-[5px] hover:bg-gray-200'>
                <span><RiDraftLine/></span>
            </li>
        </ul>
    </div>
</div>
  )
}

export default ClosedSidebar