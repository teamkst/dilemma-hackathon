"use client";

import Image from "next/image";
import { FC, useEffect, useState } from "react";
import Star from "@/../../public/star.svg";
import Correct from "@/../../public/correct.svg";

interface LevelButtonProps {
  level: number;
  current: number;
}

export const LevelButton: FC<LevelButtonProps> = ({ level, current }) => {
  const [button, setButton] = useState("unplayed");
  const [order, setOrder] = useState("0px");
  const [start, setStart] = useState(false);
  const [wrong, setWrong] = useState(false);

  const startNewLevel = () => {
    if (current + 1 === level) {
      setStart(!start);
    } else {
      setWrong(!wrong);
    }
  };

  useEffect(() => {
    if (level === current) {
      setButton("playing");
    } else if (level < current) {
      setButton("played");
    } else {
      setButton("unplayed");
    }

    switch (level) {
      case 2:
        setOrder("30px");
        break;
      case 3:
        setOrder("20px");
        break;
      case 4:
        setOrder("-30px");
        break;
      case 5:
        setOrder("-20px");
        break;
      case 6:
        setOrder("-25px");
        break;

      default:
        break;
    }
  });

  return (
    <div
      style={{
        marginLeft: order,
      }}
    >
      {button === "played" ? (
        <button className="rounded-full relative inline-flex group items-center justify-center px-3.5 py-3  cursor-pointer border-b-4 active:border-purple-600 active:shadow-none shadow-md bg-gradient-to-tr from-[#6A5AE0] to-[#6A5AE0] border-[#5040C6] text-white hover:bg-accent hover:text-accent-foreground">
          <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
          <Image
            alt="star"
            className="w-9 h-9"
            src={Correct}
            width={24}
            height={24}
          />
        </button>
      ) : button === "unplayed" ? (
        <div>
          {level === 1 && (
            <div className="absolute z-10 mb-[24px]">
              <div className=" bg-[#6A5AE0] shadow-md rounded-[30px]">
                <p className="text-white rounded-3xl p-2 text-sm">Эхлэх</p>
              </div>
              <div />
            </div>
          )}
          {wrong && (
            <div className="absolute z-10 mb-[48px]">
              <div className=" bg-[#6A5AE0] shadow-md rounded-[30px]">
                <p className="text-white rounded-3xl p-2 text-sm text-center">
                  Та энэ үед хүрээгүй байна
                </p>
              </div>
              <div />
            </div>
          )}
          <button
            className="rounded-full relative inline-flex group items-center justify-center px-3.5 py-3  cursor-pointer border-b-4 active:border-gray-400 active:shadow-none shadow-md bg-gradient-to-tr from-[#6A5AE0] to-[#6A5AE0] border-[#5040C6] text-white"
            onClick={() => startNewLevel()}
          >
            <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
            <Image
              alt="star"
              src={Star}
              width={24}
              height={24}
              className="w-9 h-9"
            />
          </button>
        </div>
      ) : (
        <div className="border-4 border-r-[#6A5AE0]  border-t-[#6A5AE0] rounded-full w-[78px] h-[78px] flex justify-center items-center rotate-45">
          <button className="rounded-full relative inline-flex group items-center justify-center px-3.5 py-3  cursor-pointer border-b-4 active:border-purple-600 active:shadow-none shadow-md bg-gradient-to-tr from-[#6A5AE0] to-[#6A5AE0] border-[#6A5AE1] text-white">
            <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
            <Image
              alt="star"
              width={24}
              height={24}
              src={Star}
              className="w-9 h-9"
            />
          </button>
        </div>
      )}
    </div>
  );
};
