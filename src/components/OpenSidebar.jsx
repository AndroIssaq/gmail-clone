import React from 'react'
import {HiOutlinePencil,HiInbox,HiOutlineStar} from "react-icons/hi2";
import {MdSend,MdOutlineWatchLater}from "react-icons/md"
import {RiDraftLine} from 'react-icons/ri'
import { useSelector ,useDispatch} from 'react-redux';
import { openSendMessage } from '../features/MailSlice';
const OpenSidebar = () => {

    const dispatch=useDispatch()
  return (
    < div className='w-[250px] h-[100vh] bg-gray-100 overflow-hidden'>
    <div className="content flex flex-col items-start  justify-center gap-[20px] ">
        <div onClick={()=>dispatch(openSendMessage())} className="compose  mx-[10px] cursor-pointer w-[150px] shadow-md hover:shadow-gray-500 hover:shadow-lg transition duration-300 h-[60px] rounded-2xl bg-[#c2e7ff] p-[10xp] flex items-center justify-center gap-[15px]">
            <span className='lg:text-[23px] md:text-[23px] sm:text-[20px]'><HiOutlinePencil/></span>
            <h1 className='font-semibold'>Compose</h1>
        </div>
        <ul className='w-[98%] flex flex-col gap-[2px]'>
            <li className='flex justify-between cursor-pointer px-[20px] text-black py-[5px] bg-gray-200 rounded-r-full'>
                <div className='flex items-center gap-[15px]'>
                <span><HiInbox/></span>
                <h1 className='font-semibold'>Inbox</h1>
                </div>
                <span className='font-semibold text-[15px]'>15</span>
            </li>

            <li className='flex justify-between cursor-pointer px-[20px] text-gray-700  py-[5px] hover:bg-gray-200 rounded-r-full'>
                <div className='flex items-center gap-[15px]'>
                <span><HiOutlineStar/></span>
                <h1 className='font-semibold'>Starred</h1>
                </div>
                <span className='font-semibold text-[15px]'></span>
            </li>


            <li className='flex justify-between cursor-pointer text-gray-700  px-[20px] py-[5px] hover:bg-gray-200 rounded-r-full'>
                <div className='flex items-center gap-[15px]'>
                <span><MdSend/></span>
                <h1 className='font-semibold'>Sent</h1>
                </div>
                <span className='font-semibold text-[15px]'></span>
            </li>


            <li className='flex justify-between cursor-pointer text-gray-700  px-[20px] py-[5px] hover:bg-gray-200 rounded-r-full'>
                <div className='flex items-center gap-[15px]'>
                <span><MdOutlineWatchLater/></span>
                <h1 className='font-semibold'>Snoozed</h1>
                </div>
                <span className='font-semibold text-[15px]'></span>
            </li>

            <li className='flex justify-between  cursor-pointer text-gray-700  px-[20px] py-[5px] hover:bg-gray-200 rounded-r-full'>
                <div className='flex items-center gap-[15px]'>
                <span><RiDraftLine/></span>
                <h1 className='font-semibold'>Draft</h1>
                </div>
                <span className='font-semibold text-[15px]'></span>
            </li>
        </ul>
    </div>
</div>
  )
}

export default OpenSidebar