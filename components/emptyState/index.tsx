import Image from 'next/image'
import React from 'react'

const index = () => {
  return (
    <div className="flex flex-col h-full items-center justify-center gap-[24px]">
        <Image src={"/ilustrations/emptyCollection.png"} alt="empty state" width={400} height={400} />
        <div className='flex flex-col items-center gap-[8px]'>
        <h2 className="text-[16px] font-semibold text-[#000000]">Nothing Collected Yet</h2>
        <h3 className="text-[14px] font-medium text-[#775C90]">Here you will see your collected games</h3>
        </div>
    </div>
  )
}

export default index