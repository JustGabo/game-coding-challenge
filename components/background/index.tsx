import React from 'react'
import Image from "next/image";


const Background = () => {
  return (
    <div className="">
        <div
        className="h-[275px] w-full -z-10 absolute top-0 left-0"
        style={{
          background: "linear-gradient(to bottom, #FF00AE29, #fff)",
        }}
      >
        <Image src={"/ilustrations/wCap.png"} alt="background" width={40} height={40} className="object-fill absolute top-0 right-[30%]"/>
        <Image src={"/ilustrations/sCap.png"} alt="background" width={40} height={40} className="object-fill absolute top-[2%] right-[8%]"/>
        <Image src={"/ilustrations/halfCap.png"} alt="background" width={40} height={40} className="object-fill absolute top-0 right-[20%]"/>
      </div>
    </div>
  )
}

export default Background