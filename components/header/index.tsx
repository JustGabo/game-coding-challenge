"use client";
import React from "react";
import { Search } from "../search";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Swords from "../svgs/Swords";
import { motion } from 'framer-motion';

interface HeaderProps {
  isHome?: boolean;
}

const Header = ({ isHome }: HeaderProps) => {
  return (
    <header
      className={`pb-[54px] mt-10 ${
        isHome ? "lg:flex-col" : "lg:flex-row"
      } flex-col flex lg:items-center lg:w-[40%] lg:mx-auto gap-3 lg:gap-31`}
    >
      {isHome ? (
        <motion.section
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="flex items-center gap-2"
        >
          <motion.div
            style={{ background: "linear-gradient(to top right, #FF00AE, #FF97DE 80%)" }}
            className="relative rounded-[8px] w-[24px] h-[24px] flex items-center justify-center"
            aria-hidden="true"
          >
            <div
              style={{
                background: "linear-gradient(to bottom, rgb(255, 255, 255), rgb(255, 205, 245) 50%)"
              }}
              className="absolute w-[calc(100% - 3px)] h-[calc(100% - 3px)] rounded-[6px]"
            >
              <Swords />
            </div>
          </motion.div>
          <h1
            style={{
              color: "linear-gradient(to right, #6727A6, #3C1661)"
            }}
            className="font-semibold text-[20px] lg:text-[24px]"
            aria-label="Gaming Haven Z"
          >
            Gaming Haven Z
          </h1>
        </motion.section>
      ) : (
        <div>
          <Link href={"/"} className="flex items-center gap-2" aria-label="Go back to homepage">
            <ArrowLeft />
            <h3
              style={{
                color: "linear-gradient(to right, #6727A6, #3C1661)"
              }}
              className="text-[16px] font-semibold"
            >
              Back
            </h3>
          </Link>
        </div>
      )}

      <div className="w-full flex flex-col relative">
        <Search />
      </div>
    </header>
  );
};

export default Header;
