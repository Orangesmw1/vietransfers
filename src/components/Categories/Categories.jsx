import React from 'react'

const Categories = () => {
  return (
    <div className='container mx-auto px-[200px] h-[50px] flex justify-center border-t-[1px] border-b-[1px] '>
      <ul className='flex justify-between items-center text-center w-[100%] '>
        <li className='w-[25%] hover:bg-orange py-[15px] cursor-pointer hover:text-white border-l-[1px] '>
          Tour daily
        </li>
        <li className='w-[25%]  hover:bg-orange py-[15px] cursor-pointer hover:text-white border-solid border-r-[1px] border-l-[1px]'>
          Vé tham quan
        </li>
        <li className='w-[25%]  hover:bg-orange py-[15px] cursor-pointer hover:text-white border-r-[1px]'>
          Xe du lịch
        </li>
        <li className='w-[25%] hover:bg-orange py-[15px] cursor-pointer hover:text-white border-r-[1px]'>Khách sạn</li>
      </ul>
    </div>
  )
}

export default Categories
