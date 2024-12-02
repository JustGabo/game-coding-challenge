import React from 'react'

const Filters = () => {
  return (
    <div className="flex gap-5 mb-[12px] sticky w-auto top-10 p-2 bg-white-50 backdrop-blur-md rounded-full">
        <button className='bg-[#3C1661] w-[150px] text-white px-4 py-2 rounded-full text-[14px] font-medium'>Last added</button>
        <button className='bg-[#3C1661] w-[100px] text-white px-4 py-2 rounded-full text-[14px] font-medium'>Newest</button>
        <button className='bg-[#3C1661] w-[100px] text-white px-4 py-2 rounded-full text-[14px] font-medium'>Oldest</button>
    </div>
  )
}

export default Filters