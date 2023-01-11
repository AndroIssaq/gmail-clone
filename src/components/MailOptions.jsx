import React from 'react'
import {HiInbox} from "react-icons/hi2"
import {MdOutlineSell,MdOutlinePeopleOutline}from "react-icons/md";
import { useState } from 'react';
const MailOptions = () => {
    const [active,setActive]=useState(true)
const [secondactive,setSecondactive]=useState(false)
const [thirdactive,setThirdactive]=useState(false)
    return (
        <div className="types border-b-2  w-full flex items-center">
                    <div onClick={()=>{setActive(true),setThirdactive(false),setSecondactive(false)}} className={`type cursor-pointer flex ${active?'text-blue-700 border-blue-700 border-b-4 ':''}gap-[15px] items-center pl-[15px] w-[17%] h-[60px]   p-[10px] hover:bg-gray-100`}>
                        <span className='text-[17px]'><HiInbox/></span>
                        <h1 className=' font-semibold'>Primary</h1>
                    </div>
                    <div  onClick={()=>{setThirdactive(true) ,setActive(false),setSecondactive(false) }} className={`type cursor-pointer flex ${thirdactive?'text-blue-700 border-blue-700 border-b-4 ':''}gap-[15px] items-center pl-[15px] w-[17%] h-[60px]   p-[10px] hover:bg-gray-100`}>
                        <span className='text-[20px]'><MdOutlineSell/></span>
                        <h1 className=' font-semibold'>Promotion</h1>
                    </div>
                    <div onClick={()=>{setSecondactive(true),setThirdactive(false),setActive(false) }} className={`type cursor-pointer flex ${secondactive?'text-blue-700 border-blue-700 border-b-4 ': ''}gap-[15px] items-center pl-[15px] w-[17%] h-[60px]   p-[10px] hover:bg-gray-100`}>
                        <span className='text-[20px]'><MdOutlinePeopleOutline/></span>
                        <h1 className=' font-semibold'>Primary</h1>
                    </div>
                </div>
    )
}

export default MailOptions