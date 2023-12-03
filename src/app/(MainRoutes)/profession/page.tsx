import { BottomTab } from "@/components/main/BottomTab";
import { Job } from "@/components/profession/Job";
import Image from "next/image";
import React from "react";
import Waiter from "@/../../public/waiter.png";
import Cashier from "@/../../public/cashier1.png";
import Digitalist from "@/../../public/digitalist.png";

const page = () => {
  return (
    <div className="flex w-full h-screen flex-col bg-blue-400 px-6 pt-6 space-y-3">
      <div className="flex justify-between w-full items-center">
        <p className="text-white text-[32px] font-extrabold">Ажил</p>
        <div>nmg soli</div>
      </div>
      <div className="flex flex-col space-y-3">
        <p className="text-white text-[16px] font-extrabold">Цагийн ажил</p>
        <div className="flex items-center w-full rounded-lg border-4 border-black p-[23px] justify-between ">
          <Image alt="job" src={Waiter} width={120} height={120} />
          <div className="flex flex-col items-center space-y-2 ">
            <p className="text-white text-[18px] font-extrabold">Зөөгч</p>
            <div className="flex items-center">
              <Image alt="job" src={Waiter} width={10} height={10} />
              <p className="text-white text-[20px] font-extrabold">120</p>
            </div>
            <button>
              <a
                href="#_"
                className="inline-flex items-center justify-center w-full px-8 py-2 text-base font-bold leading-6 text-white bg-indigo-600 border border-transparent rounded-full md:w-auto hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
              >
                Ажиллах
              </a>
            </button>
          </div>
        </div>
        <div className="flex items-center w-full rounded-lg border-4 border-black p-[23px] justify-between">
          <Image alt="job" src={Cashier} width={120} height={120} />
          <div className="flex flex-col items-center space-y-2 ">
            <p className="text-white text-[18px] font-extrabold">Худалдагч</p>
            <div className="flex items-center">
              <Image alt="job" src={Waiter} width={10} height={10} />
              <p className="text-white text-[20px] font-extrabold">90</p>
            </div>
            <button>
              <a
                href="#_"
                className="inline-flex items-center justify-center w-full px-8 py-2 text-base font-bold leading-6 text-white bg-indigo-600 border border-transparent rounded-full md:w-auto hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
              >
                Ажиллах
              </a>
            </button>
          </div>
        </div>
        <p className="text-white text-[16px] font-extrabold">Тогтвортой</p>
        <div className="flex items-center w-full rounded-lg border-4 border-black p-[23px] justify-between">
          <Image alt="job" src={Digitalist} width={120} height={120} />
          <div className="flex flex-col items-center space-y-2 ">
            <p className="text-white text-[18px] font-extrabold">
              Дижитал артист
            </p>
            <div className="flex items-center">
              <Image alt="job" src={Waiter} width={10} height={10} />
              <p className="text-white text-[20px] font-extrabold">1200</p>
            </div>
            <button>
              <a
                href="#_"
                className="inline-flex items-center justify-center w-full px-8 py-2 text-base font-bold leading-6 text-white bg-indigo-600 border border-transparent rounded-full md:w-auto hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
              >
                Ажиллах
              </a>
            </button>
          </div>
        </div>
      </div>
      <BottomTab />
    </div>
  );
};

export default page;
