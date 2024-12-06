

import React from 'react'

const Background = () => {
  return (
    <div>Background</div>
  )
}

export default Background

// import React from "react";
// import WIcon from "../svgs/WIcon";
// import SICon from "../svgs/SIcon";
// import AIcon from "../svgs/AIcon";
// import DIcon from "../svgs/DIcon";
// import CtrlIcon from "../svgs/CtrlIcon";
// import EmptyCap2 from "../svgs/EmptyCap2";
// import EmptyCap from "../svgs/EmptyCap";
// import VIcon from "../svgs/VIcon";
// import { motion } from "framer-motion";

// const Background = () => {
//   return (
//     <div className="">
//       <div
//         className="h-[275px] w-full -z-10 absolute top-0 left-0"
//         style={{
//           background: "linear-gradient(to bottom, #FF00AE29, #fff)",
//         }}
//       >
//         <div className="">
//           <motion.div
//             initial={{ opacity: 0, top: "30%" }}
//             animate={{ opacity: 1, top: "20%", transition: { duration: 0.8 } }}
//             className="absolute left-[17%]"
//           >
//             <EmptyCap2 fill="#fff" fillOpacity={0.5} />
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, top: "20%" }}
//             animate={{ opacity: 1, top: "10%", transition: { duration: 0.8 } }}
//             className="absolute left-[5%]"
//           >
//             <EmptyCap2 fill="#fff" fillOpacity={0.5} />
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, top: "50%" }}
//             animate={{ opacity: 1, top: "45%", transition: { duration: 0.8 } }}
//             className="absolute left-[20%]"
//           >
//             <EmptyCap2 fill="#fff" fillOpacity={0.5} />
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, top: "25%" }}
//             animate={{ opacity: 1, top: "20%", transition: { duration: 0.8 } }}
//             className="absolute  right-[8%]"
//           >
//             <EmptyCap2 fill="#fff" fillOpacity={0.5} />
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, top: "45%" }}
//             animate={{ opacity: 1, top: "35%", transition: { duration: 0.8 } }}
//             className="absolute right-[20%]"
//           >
//             <EmptyCap2 fill="#fff" fillOpacity={0.5} />
//           </motion.div>
//         </div>

//         <div className="">
//           <motion.div
//             initial={{ opacity: 0, top: "30%" }}
//             animate={{ opacity: 1, top: "10%", transition: { duration: 0.8 } }}
//             className="absolute left-[30%]"
//           >
//             <EmptyCap fill="#fff" fillOpacity={0.5} />
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, top: "45%" }}
//             animate={{ opacity: 1, top: "40%", transition: { duration: 0.8 } }}
//             className="absolute left-[5%]"
//           >
//             <EmptyCap fill="#fff" fillOpacity={0.5} />
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, top: "10%" }}
//             animate={{ opacity: 1, top: "3%", transition: { duration: 0.8 } }}
//             className="absolute right-[3%]"
//           >
//             <EmptyCap fill="#fff" fillOpacity={0.5} />
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, top: "65%" }}
//             animate={{ opacity: 1, top: "50%", transition: { duration: 0.8 } }}
//             className="absolute  right-0"
//           >
//             <EmptyCap fill="#fff" fillOpacity={0.5} />
//           </motion.div>
//         </div>

//         <motion.div
//           initial={{ opacity: 0, top: 10 }}
//           animate={{ opacity: 1, top: 0, transition: { duration: 0.8 } }}
//           className="absolute hidden lg:block left-3"
//         >
//           <DIcon className="" />
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, top: 17 }}
//           animate={{ opacity: 1, top: 10, transition: { duration: 0.8 } }}
//           className="absolute  left-[12%] hidden lg:block"
//         >
//           <VIcon />
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, top: 7 }}
//           animate={{ opacity: 1, top: 0, transition: { duration: 0.8 } }}
//           className="absolute  left-[25%] hidden lg:block"
//         >
//           <CtrlIcon />
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, top: 10 }}
//           animate={{ opacity: 1, top: 0, transition: { duration: 0.8 } }}
//           className="absolute  right-[20%] w-[40px] lg:w-[100px]"
//         >
//           <WIcon />
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, top: 20 }}
//           animate={{ opacity: 1, top: 10, transition: { duration: 0.8 } }}
//           className="absolute right-0 w-[40px] lg:w-[100px]"
//         >
//           <SICon />
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, top: -10 }}
//           animate={{ opacity: 1, top: -5, transition: { duration: 0.8 } }}
//           className="absolute right-[10%] w-[40px] lg:w-[100px]"
//         >
//           <AIcon />
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Background