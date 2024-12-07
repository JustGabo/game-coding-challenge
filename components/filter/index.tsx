"use client";
import useGamesStore from "@/stores/gamesStore";
import React from "react";

const Filters = () => {
  const { setFilter, currentFilter } = useGamesStore();

  const handleFilterChange = (criteria: "newest" | "oldest" | "last_added") => {
    setFilter(criteria);
  };

  return (
    <div className="flex gap-5 mb-[12px] sticky w-auto lg:top-5 lg:justify-center  top-10 z-[100] p-2 lg:w-[40%] lg:mx-auto bg-white/50 backdrop-blur-sm  rounded-full">
      <button
        onClick={() => handleFilterChange("last_added")}
        className={`text-[#3C1661] w-[150px]  px-4 py-2 rounded-full text-[14px] font-medium ${
          currentFilter === "last_added" ? " bg-[#3C1661] text-white" : ""
        }`}
      >
        Last added
      </button>
      <button
        onClick={() => handleFilterChange("newest")}
        className={` w-[100px] text-[#3C1661] px-4 py-2 rounded-full text-[14px] font-medium ${
          currentFilter === "newest" ? "bg-[#3C1661] text-white" : ""
        }`}
      >
        Newest
      </button>
      <button
        onClick={() => handleFilterChange("oldest")}
        className={`w-[100px] text-[#3C1661] px-4 py-2 rounded-full text-[14px] font-medium ${
          currentFilter === "oldest" ? "bg-[#3C1661] text-white" : ""
        }`}
      >
        Oldest
      </button>
    </div>
  );
};

export default Filters;
