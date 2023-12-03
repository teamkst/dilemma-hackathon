"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import React, { useState } from "react";

const page = () => {
  const [selected, setSelected] = useState("notselected");
  return (
    <div className="bg-[#141F25] max-w-[550px] h-screen">
      {/* Logo and bg */}
      <div className=" relative  flex flex-col items-center w-full pt-20">
        <div className="flex items-center gap-2">
          <Image src="/logo2.svg" alt="logo" width={32} height={32} />
          <p className="text-[#BAB0FF] text-[20px] font-extrabold text-base tracking-[0.16px]">
            Legacy of choices
          </p>
        </div>
      </div>
      <div className="pt-20">
        <div className="flex justify-center gap-4 shadow-md">
          <Card
            onClick={() => setSelected("girl")}
            className={`flex bg-[#14172A] text-white ${
              selected === "girl"
                ? "border-[#6A5AE0] bg-[#060617] !shadow-[0px_4px_0px_0px_#6A5AE0]"
                : ""
            } shadow-[0px_4px_0px_0px_#B7B7B7]`}
          >
            <div className="text-center px-5">
              <p className="pt-2 text-[20px] font-extrabold ">Эмэгтэй</p>
              <Image
                src="/assets/girl.svg"
                alt="logo"
                width={110}
                height={181}
              />
            </div>
          </Card>
          <Card
            onClick={() => setSelected("boy")}
            className={` bg-[#14172A] text-white   ${
              selected === "boy"
                ? "border-[#6A5AE0] bg-[#060617] !shadow-[0px_4px_0px_0px_#6A5AE0]"
                : ""
            } shadow-[0px_4px_0px_0px_#B7B7B7]`}
          >
            <div className="text-center  px-5 ">
              <p className="pt-2 text-[20px] font-extrabold ">Эрэгтэй</p>
              <Image
                src="/assets/boy.svg"
                alt="logo"
                width={110}
                height={181}
              />
            </div>
          </Card>
        </div>
      </div>
      <CardContent className="py-10 flex justify-center items-center w-full">
        <Input
          className="bg-[#14172A] text-white shadow-[0px_4px_0px_0px_#B7B7B7] py-[22px] w-[320px]"
          placeholder="Таны нэр..."
        />
      </CardContent>
      <CardFooter className=" flex justify-center items-center w-full">
        <Button className="rounded-full relative inline-flex group items-center justify-center px-3.5 py-6 m-1 cursor-pointer border-b-4 border-l-2 active:border-[#6A5AE0] active:shadow-none shadow-lg bg-gradient-to-tr from-[#6A5AE0] to-[#5040C6] border-[#6A5AE0] text-white  text-[18px] font-semibold  w-[330px] ">
          <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
          <span className="relative"> Дууссан</span>
        </Button>
      </CardFooter>
    </div>
  );
};

export default page;
