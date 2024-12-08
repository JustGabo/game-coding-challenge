"use client";
import React from "react";
import WIcon from "../svgs/WIcon";
import SICon from "../svgs/SIcon";
import AIcon from "../svgs/AIcon";
import DIcon from "../svgs/DIcon";
import CtrlIcon from "../svgs/CtrlIcon";
import EmptyCap2 from "../svgs/EmptyCap2";
import EmptyCap from "../svgs/EmptyCap";
import VIcon from "../svgs/VIcon";
import { motion } from "framer-motion";

const Background = () => {
  return (
    <section className="absolute top-0 left-0 w-full h-full -z-10">
      <div
        className="h-[275px] w-full -z-10 absolute top-0 left-0"
        style={{
          background: "linear-gradient(to bottom, #FF00AE29, #fff)",
        }}
      >
        <div>
          <motion.div
            initial={{ opacity: 0, top: "10%" }}
            animate={{ opacity: 1, top: "20%", transition: { duration: 0.8 } }}
            className="absolute left-[17%]"
            aria-hidden="true"
          >
            <EmptyCap2 fill="#fff" fillOpacity={0.5} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, top: "0%" }}
            animate={{ opacity: 1, top: "10%", transition: { duration: 0.8 } }}
            className="absolute left-[5%]"
            aria-hidden="true"
          >
            <EmptyCap2 fill="#fff" fillOpacity={0.5} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, top: "25%" }}
            animate={{ opacity: 1, top: "45%", transition: { duration: 0.8 } }}
            className="absolute left-[20%]"
            aria-hidden="true"
          >
            <EmptyCap2 fill="#fff" fillOpacity={0.5} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, top: "15%" }}
            animate={{ opacity: 1, top: "20%", transition: { duration: 0.8 } }}
            className="absolute right-[8%]"
            aria-hidden="true"
          >
            <EmptyCap2 fill="#fff" fillOpacity={0.5} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, top: "25%" }}
            animate={{ opacity: 1, top: "35%", transition: { duration: 0.8 } }}
            className="absolute right-[20%]"
            aria-hidden="true"
          >
            <EmptyCap2 fill="#fff" fillOpacity={0.5} />
          </motion.div>
        </div>

        <div>
          <motion.div
            initial={{ opacity: 0, top: "5%" }}
            animate={{ opacity: 1, top: "10%", transition: { duration: 0.8 } }}
            className="absolute left-[30%]"
            aria-hidden="true"
          >
            <EmptyCap fill="#fff" fillOpacity={0.5} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, top: "20%" }}
            animate={{ opacity: 1, top: "40%", transition: { duration: 0.8 } }}
            className="absolute left-[5%]"
            aria-hidden="true"
          >
            <EmptyCap fill="#fff" fillOpacity={0.5} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, top: "-3%" }}
            animate={{ opacity: 1, top: "3%", transition: { duration: 0.8 } }}
            className="absolute right-[3%]"
            aria-hidden="true"
          >
            <EmptyCap fill="#fff" fillOpacity={0.5} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, top: "35%" }}
            animate={{ opacity: 1, top: "50%", transition: { duration: 0.8 } }}
            className="absolute right-0"
            aria-hidden="true"
          >
            <EmptyCap fill="#fff" fillOpacity={0.5} />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, top: -10 }}
          animate={{ opacity: 1, top: 0, transition: { duration: 0.8 } }}
          className="absolute hidden lg:block left-3"
          aria-hidden="true"
        >
          <DIcon />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, top: -5 }}
          animate={{ opacity: 1, top: 10, transition: { duration: 0.8 } }}
          className="absolute left-[12%] hidden lg:block"
          aria-hidden="true"
        >
          <VIcon />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, top: -10 }}
          animate={{ opacity: 1, top: 0, transition: { duration: 0.8 } }}
          className="absolute left-[25%] hidden lg:block"
          aria-hidden="true"
        >
          <CtrlIcon />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, top: -10 }}
          animate={{ opacity: 1, top: 0, transition: { duration: 0.8 } }}
          className="absolute right-[50%] lg:right-[20%] w-[5px] lg:w-[100px]"
          aria-hidden="true"
        >
          <WIcon className="w-[40px] h-[40px] lg:w-[70px] lg:h-[70px]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, top: 0 }}
          animate={{ opacity: 1, top: 10, transition: { duration: 0.8 } }}
          className="absolute right-[35%] lg:right-0 w-[10px] lg:w-[70px]"
          aria-hidden="true"
        >
          <SICon className="w-[40px] h-[40px] lg:w-[70px] lg:h-[70px]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, top: -10 }}
          animate={{ opacity: 1, top: -5, transition: { duration: 0.8 } }}
          className="absolute right-[20%] lg:right-[10%] w-[10px] lg:w-[70px]"
          aria-hidden="true"
        >
          <AIcon className="w-[40px] h-[40px] lg:w-[70px] lg:h-[70px]" />
        </motion.div>
      </div>
    </section>
  );
};

export default Background;
