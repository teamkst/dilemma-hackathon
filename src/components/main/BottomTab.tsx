"use client";

import Homeicon from "@/../../public/home.svg";
import Jobicon from "@/../../public/job-icon.svg";
import Saving from "@/../../public/saving.svg";
import "@/app/css/global.css";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export const BottomTab = () => {
  const path = usePathname();
  const router = useRouter();

  return (
    <div className="w-full absolute flex justify-centear  rounded-[100px] items-center">
      <div className="fixed bottom-10 left-8 flex w-10/12 p-4 justify-evenly border-b-4 border-[#0C0F22] px-10 items-center gap-x-4 bg-[#14172A] rounded-[100px]">
        <button onClick={() => router.push("/main")}>
          <Image
            alt="home"
            src={Homeicon}
            width={path === "/main" ? 53 : 32}
            height={path === "/main" ? 53 : 32}
          />
        </button>
        <div className="w-1 h-8 rounded bg-black" />
        <button onClick={() => router.push("/profession")}>
          <Image
            alt="Job"
            src={Jobicon}
            width={path === "/profession" ? 53 : 32}
            height={path === "/profession" ? 53 : 32}
          />
        </button>
        <div className="w-1 h-8 rounded bg-black" />
        <button>
          <Image
            alt="Saving"
            src={Saving}
            height={path === "/saving" ? 53 : 32}
            width={path === "/saving" ? 53 : 32}
          />
        </button>
      </div>
    </div>
  );
};
