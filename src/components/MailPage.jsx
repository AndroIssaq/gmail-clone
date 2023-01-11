import React from 'react'
import MailPageHeader from './MailPageHeader'
import {useSelector} from 'react-redux'
const MailPage = () => {
  const mail=useSelector((state)=>state.mail)
  console.log(mail);
  return (
    <> 
        <div className='w-full rounded-lg '>
            <MailPageHeader/>
            <div className='mail-list flex items-center border-white border-[15px] justify-center lg:h-[80vh] md:h-[83vh] sm:h-[83vh] h-[85vh] bg-gray-100   rounded-bl-xl rounded-br-xl  mr-[10px]'>
                <div className='lg:h-[73vh] w-[100%] shadow-xl m-[10px]  p-[20px] md:h-[83vh] sm:h-[83vh] h-[85vh] bg-white'>
                    <h1>MailPageadasdsdsd</h1> 
                </div>
            </div>
        </div>
    </>
   
  )
}

export default MailPage