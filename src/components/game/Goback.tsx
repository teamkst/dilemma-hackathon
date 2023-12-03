"use client";

import { ArrowLeftIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export const Goback = () => {
  const router = useRouter();
  return (
    <div>
      <button
        className="rounded-full relative inline-flex group items-center justify-center px-3.5 py-3.5 m-1 cursor-pointer border-b-4 border-l-2 active:border-[#fff] active:shadow-none shadow-lg bg-gradient-to-tr from-[#fff] to-[#Fff] border-[#f5f5f5] text-black"
        onClick={() => router.back()}
      >
        <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
        <span className="relative">
          <ArrowLeftIcon />
        </span>
      </button>
    </div>
  );
};
