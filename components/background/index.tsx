import React from 'react'
import Image from "next/image";
import WIcon from '../svgs/WIcon';
import SICon from '../svgs/SIcon';
import AIcon from '../svgs/AIcon';
import DIcon from '../svgs/DIcon';
import CtrlIcon from '../svgs/CtrlIcon';
import EmptyCap2 from '../svgs/EmptyCap2';
import EmptyCap from '../svgs/EmptyCap'
import VIcon from '../svgs/VIcon';


const Background = () => {
  return (
    <div className="">
        <div
        className="h-[275px] w-full -z-10 absolute top-0 left-0"
        style={{
          background: "linear-gradient(to bottom, #FF00AE29, #fff)",
        }}
      >

        <div className=''>
          <EmptyCap2 className='absolute top-[20%] left-[17%]' fill='#fff' fillOpacity={0.5} />
          <EmptyCap2 className='absolute top-[10%] left-[5%]' fill='#fff' fillOpacity={0.5} />
          <EmptyCap2 className='absolute top-[40%] left-[20%]' fill='#fff' fillOpacity={0.5} />
          <EmptyCap2 className='absolute top-[20%] right-[8%]' fill='#fff' fillOpacity={0.5} />
          <EmptyCap2 className='absolute top-[35%] right-[20%]' fill='#fff' fillOpacity={0.5} />
        </div>

        <div className=''>
          <EmptyCap className='absolute top-[10%] left-[30%]' fill='#fff' fillOpacity={0.5} />
          <EmptyCap className='absolute top-[40%] left-[5%]' fill='#fff' fillOpacity={0.5} />
          <EmptyCap className='absolute top-[3%] right-[3%]' fill='#fff' fillOpacity={0.5} />
          <EmptyCap className='absolute top-[50%] right-0' fill='#fff' fillOpacity={0.5} />
        </div>

        <DIcon className='absolute top-0 left-0 hidden lg:block' />
        <VIcon className='absolute top-5 left-[10%] hidden lg:block'/>
        <CtrlIcon className='absolute top-0 left-[20%] hidden lg:block'/>
        
        {/* <Image src={"/ilustrations/wCap.png"} alt="background" width={40} height={40} className="object-fill absolute top-0 right-[30%]"/> */}
        <WIcon className="absolute top-0 right-[20%] w-[40px] lg:w-[100px]"/>
        <SICon className="absolute top-[10%] right-0 w-[40px] lg:w-[100px]"/>
        <AIcon className="absolute -top-5 right-[10%] w-[40px] lg:w-[100px]"/>
      </div>
    </div>
  )
}

export default Background