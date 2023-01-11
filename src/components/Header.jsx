import React , {useState}from 'react'
import {HiBars3,HiOutlineQuestionMarkCircle,HiAdjustmentsHorizontal}from "react-icons/hi2"
import {BsFillGearFill,BsGrid3X3Gap,BsSearch} from 'react-icons/bs'
import {IoSettingsOutline} from 'react-icons/io5'
import logo from '../assets/logo_gmail_lockup_default_1x_r5.png'
const Header = ({toggleBar, setToggleBar,user}) => {

    console.log(user);
  return (
    <header className='w-full bg-gray-100 '>
        <nav className='flex items-center w-full p-[10px]   gap-[20px] justify-between '>
            <div className="left flex-1 flex items-center justify-start lg:gap-[80px] md:gap-[40px] sm:gap-[20px] gap-[20px]">
                <div className="icon-logo flex items-center gap-[5px]">
                    <button onClick={()=>setToggleBar(!toggleBar)} className=' cursor-pointer text-gray-600 lg:text-[27px] md:text-[27px] sm:text-[20px] lg:w-[50px] lg:h-[50px] md:w-[50px] md:h-[50px] sm:w-[30px] sm:h-[30px] flex items-center justify-center rounded-full hover:bg-gray-200'><HiBars3/></button>
                    <img src={logo} alt="" className=' cursor-pointer lg:w-[100px] md:w-[80px] sm:w-[70] w-[50px]' />
                </div>
                <div className="search lg:w-[55%] md:w-[55%]  w-[100%] relative">
                    <input type="text" placeholder='Search mail' className=' focus:border-none w-full outline-none rounded-md  
                    lg:py-[12px] md:py-[10px] h-[40px] lg:h-[50px] sm:py-[10px] px-[60px] bg-[#C9D8E4] lg:text-[18px] md:text-[16px] sm:text-[15px] text-[12px] focus:bg-white focus:shadow-md' />
                    <span className=' absolute top-[50%] left-[10px] translate-y-[-50%] cursor-pointer text-gray-600 lg:text-[20px] md:text-[20px] sm:text-[13px] lg:w-[40px] lg:h-[40px] md:w-[40px] md:h-[40px] sm:w-[30px] sm:h-[30px] flex items-center justify-center rounded-full hover:bg-gray-200'><BsSearch/></span>
                    <span className=' absolute  top-[50%] translate-y-[-50%] right-4 cursor-pointer text-gray-600  lg:text-[20px] md:text-[20px] sm:text-[13px] lg:w-[40px] lg:h-[40px] md:w-[40px] md:h-[40px] sm:w-[30px] sm:h-[30px]  flex items-center justify-center rounded-full hover:bg-gray-200'><HiAdjustmentsHorizontal/></span>
                </div>
            </div>
            <div className="right flex items-center gap-[10px] ">
            <span className=' cursor-pointer text-gray-600  lg:text-[27px] md:text-[27px] sm:text-[20px] lg:w-[50px] lg:h-[50px] md:w-[50px] md:h-[50px] sm:w-[30px] sm:h-[30px] flex items-center justify-center rounded-full hover:bg-gray-200'><HiOutlineQuestionMarkCircle/></span>
            <span className=' cursor-pointer text-gray-600 lg:text-[27px] md:text-[27px] sm:text-[20px] lg:w-[50px] lg:h-[50px] md:w-[50px] md:h-[50px] sm:w-[30px] sm:h-[30px] flex items-center justify-center rounded-full hover:bg-gray-200'><IoSettingsOutline/></span>
            <span className=' cursor-pointer text-gray-600 lg:text-[27px] md:text-[27px] sm:text-[20px] lg:w-[50px] lg:h-[50px] md:w-[50px] md:h-[50px] sm:w-[30px] sm:h-[30px] flex items-center justify-center rounded-full hover:bg-gray-200'><BsGrid3X3Gap/></span>
                    <span className='cursor-pointer text-gray-600 lg:text-[27px] md:text-[27px] sm:text-[20px] lg:w-[50px] lg:h-[50px] md:w-[50px] md:h-[50px] sm:w-[30px] sm:h-[30px] flex items-center justify-center rounded-full bg-gray-200 overflow-hidden' > {user && (
                        <img src= {user.photoURL} alt="" />
                    )}</span>
            </div>
        </nav>
    </header>
  ) 
}

export default Header