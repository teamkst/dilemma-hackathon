"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ArrowLeftIcon } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const page = () => {
  return (
    <div className="px-5 py-5 h-screen">
      {/* Modal */}
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box text-white text-center bg-[#14172A] py-8 flex flex-col gap-5">
          <h3 className="font-bold text-lg">
            njkcdsncldsa;v jwav nvndjvsav nsdv v wjkf
          </h3>
          <p className="py-4">+10 😊Аз жаргал </p>
          <div className="pt-2">
            <Button className="rounded-full relative inline-flex group items-center justify-center px-3.5 py-6 m-1 cursor-pointer border-b-4 border-l-2 active:border-[#6A5AE0] active:shadow-none shadow-lg bg-gradient-to-tr from-[#6A5AE0] to-[#5040C6] border-[#6A5AE0] text-white  text-[18px] font-semibold  w-full ">
              <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
              <span className="relative"> Болсон</span>
            </Button>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>

      <dialog id="my_modal_1" className="modal">
        <div className="modal-box text-white text-center bg-[#14172A] py-8 flex flex-col gap-5">
          <h3 className="font-bold text-lg">
            njkcdsncldsa;v jwav nvndjvsav nsdv v wjkf
          </h3>
          <Button className="rounded-full relative inline-flex group items-center justify-center px-3.5 py-6 m-1 cursor-pointer border-b-4 border-l-2 active:border-[#6A5AE0] active:shadow-none shadow-lg bg-gradient-to-tr from-[#6A5AE0] to-[#5040C6] border-[#6A5AE0] text-white  text-[18px] font-semibold  w-full ">
            <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
            <span className="relative"> Songolt</span>
          </Button>
          <Button className="rounded-full relative inline-flex group items-center justify-center px-3.5 py-6 m-1 cursor-pointer border-b-4 border-l-2 active:border-[#6A5AE0] active:shadow-none shadow-lg bg-gradient-to-tr from-[#6A5AE0] to-[#5040C6] border-[#6A5AE0] text-white  text-[18px] font-semibold  w-full ">
            <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
            <span className="relative"> Songolt</span>
          </Button>
          <div className="pt-2">
            <Button className="rounded-full relative inline-flex group items-center justify-center px-3.5 py-6 m-1 cursor-pointer border-b-4 border-l-2 active:border-[#6A5AE0] active:shadow-none shadow-lg bg-gradient-to-tr from-[#6A5AE0] to-[#5040C6] border-[#6A5AE0] text-white  text-[18px] font-semibold  w-full ">
              <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
              <span className="relative"> Songolt</span>
            </Button>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>

      {/* Page */}
      <div className="flex justify-between w-full ">
        <div>
          <button className="rounded-full relative inline-flex group items-center justify-center px-3.5 py-3.5 m-1 cursor-pointer border-b-4 border-l-2 active:border-[#fff] active:shadow-none shadow-lg bg-gradient-to-tr from-[#fff] to-[#Fff] border-[#f5f5f5] text-black">
            <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
            <span className="relative">
              <ArrowLeftIcon />
            </span>
          </button>
        </div>
        <button className="rounded-full relative inline-flex group items-center justify-center px-3.5 py-3.5 m-1 cursor-pointer border-b-4 border-l-2 active:border-[#fff] active:shadow-none shadow-lg bg-gradient-to-tr from-[#fff] to-[#Fff] border-[#f5f5f5] text-black gap-2">
          <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
          <span className="relative">
            <Image src={"assets/coin.svg"} width={25} height={18} alt="coin" />
          </span>
          <p className=" font-bold text-[20px]">1000</p>
        </button>
      </div>
      <p className="text-[20px] font-bold py-5  text-center">Test-Нас 18</p>

      <div className="flex items-center gap-10 justify-center">
        <Avatar className="h-[144px] w-[144px] shadow-[0px_4px_0px_0px_#A1A1A1]">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div>
          <p>😊 Аз жаргал</p>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div className="bg-[#7AB219] h-2.5 rounded-full w-[45%]" />
          </div>
        </div>
      </div>
      <div className=" flex pt-10">
        <div>
          <button
            // @ts-ignore
            onClick={() => document.getElementById("my_modal_2")?.showModal()}
            className="rounded-xl relative inline-flex group items-center justify-center px-3.5 py-3.5 m-1 cursor-pointer border-b-4 border-l-2 active:border-[#fff] active:shadow-none shadow-lg bg-gradient-to-tr from-[#fff] to-[#Fff] border-[#f5f5f5] text-black h-[158px] w-[160px]"
          >
            <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
            <span className="relative">Шатар тоглож сурах</span>
          </button>
          <button className="rounded-xl relative inline-flex group items-center justify-center px-3.5 py-3.5 m-1 cursor-pointer border-b-4 border-l-2 active:border-[#fff] active:shadow-none shadow-lg bg-gradient-to-tr from-[#fff] to-[#Fff] border-[#f5f5f5] text-black h-[158px] w-[160px]">
            <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-xl group-hover:w-32 group-hover:h-32 opacity-10"></span>
            <span className="relative">Шатар тоглож сурах</span>
          </button>
        </div>
        <div>
          <button className="rounded-xl relative inline-flex group items-center justify-center px-3.5 py-3.5 m-1 cursor-pointer border-b-4 border-l-2 active:border-[#fff] active:shadow-none shadow-lg bg-gradient-to-tr from-[#fff] to-[#Fff] border-[#f5f5f5] text-black h-[158px] w-[160px]">
            <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-xl group-hover:w-32 group-hover:h-32 opacity-10"></span>
            <span className="relative">Шатар тоглож сурах</span>
          </button>
          <button className="rounded-xl relative inline-flex group items-center justify-center px-3.5 py-3.5 m-1 cursor-pointer border-b-4 border-l-2 active:border-[#fff] active:shadow-none shadow-lg bg-gradient-to-tr from-[#fff] to-[#Fff] border-[#f5f5f5] text-black h-[158px] w-[160px]">
            <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-xl group-hover:w-32 group-hover:h-32 opacity-10"></span>
            <span className="relative">Шатар тоглож сурах</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
