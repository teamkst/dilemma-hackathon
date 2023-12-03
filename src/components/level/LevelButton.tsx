"use client";
import Image from "next/image";
import { FC, useEffect, useState } from "react";
import Star from "@/../../public/star.svg";
import Correct from "@/../../public/correct.svg";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

interface LevelButtonProps {
  level: number;
  current: number;
}

export const LevelButton: FC<LevelButtonProps> = ({ level, current }) => {
  const router = useRouter();
  const [button, setButton] = useState("unplayed");
  const [order, setOrder] = useState("0px");

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
        setOrder("-50px");
        break;
      case 3:
        setOrder("40px");
        break;
      case 4:
        setOrder("-50px");
        break;
      case 5:
        setOrder("10px");
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
        <div className="relative">
          <button
            className={`rounded-full relative inline-flex group items-center justify-center px-3.5 py-3 cursor-pointer border-b-4 active:border-gray-400 active:shadow-none shadow-md bg-gradient-to-tr  text-white ${
              level !== 1
                ? "from-[#E5E5E5] to-[#AFAFAF] border-[#AFAFAF]"
                : "from-[#6A5AE0] to-[#6A5AE0] border-[#5040C6]"
            }`}
            onClick={() =>
              level === 1
                ? router.push("/game")
                : toast.warning("Та эхлээд 1-р үеээ давна уу")
            }
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
