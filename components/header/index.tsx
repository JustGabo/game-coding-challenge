import React from "react";
import { Search } from "../search";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

interface HeaderProps {
  isHome?: boolean;
}

const Header = ({ isHome }: HeaderProps) => {
  return (
    <>
      <header className={` pb-[54px] mt-10 ${isHome ? "lg:flex-col" : "lg:flex-row"} flex-col flex lg:items-center lg:w-[40%] lg:mx-auto gap-5 lg:gap-31`}>
        {isHome ? (
          <section className="flex items-center gap-4">
            {/* <Link className="" href={"/"}>
              <Image
                src={"/ilustrations/Logo.png"}
                alt="logo"
                width={50}
                height={50}
                className="object-fill"
              />
            </Link> */}

            <h1
              style={{
                color: "linear-gradient(to right, #6727A6 0%, #3C1661)",
              }}
              className=" font-semibold text-[20px] lg:text-[24px] "
            >
              Gaming Haven Z
            </h1>
          </section>
        ) : (
          <div>
            <Link href={"/"} className="flex items-center gap-2">
              <ArrowLeft />
              <h3
                style={{
                  color: "linear-gradient(to right, #6727A6, #3C1661)",
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
    </>
  );
};

export default Header;
