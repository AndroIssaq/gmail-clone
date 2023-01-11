import React from 'react'
import {HiOutlineStar} from"react-icons/hi2";
const MailRows = () => {
  return (
    <div className=' grid-cols-3 grid items-center w-full px-[15px] py-[5px] border-b '>
        <div className="left flex items-center gap-[10px]">
            <div className="options flex items-center gap-[5px]">
            <span className='w-[30px] h-[30px] cursor-pointer hover:bg-gray-200 flex justify-center items-center rounded-sm'><input id="filter-mobile-color-1" name="color[]" value="beige" type="checkbox" className="h-4 w-4  rounded-[2px] border-gray-600 border-[3px] text-indigo-600 focus:ring-indigo-500"/></span>
            <span className='text-xl'><HiOutlineStar/></span>
            </div>
            <div className="title ">
                <h1>365 Team</h1>
            </div>
        </div>
        
        <div className="center whitespace-nowrap text-ellipsis overflow-hidden ">
            <h1>    Launching the NEW Ultimate Data Science Career  Guid Data       science is the hottest career choice you can currently make, and the job outlook is better than ever.


                According to the Bureau of Labor Statistics, the number of data science jobs will grow by 36% by 2031—mind-blowingly faster than the average growth rate of 5%.

            

                As a result, data science salaries are increasing exponentially,    with an average annual pay of $122,480 in the US. 


                Now is the best time to launch a career in data science. 



                But if you’re serious about succeeding in this competitive field, you’ll need an extra hand. The numerous data-related roles, skills, courses, job postings, and YouTube channels can be overwhelming. Our career guide provides a selection of the most useful resources in one convenient place.
            </h1>
        </div>
        <div className="right text-right">
            <h1>Dec 19</h1>
        </div>
    </div>
  )
}

export default MailRows