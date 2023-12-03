"use client";
import { ArrowLeftIcon } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { UseZustand } from "@/config/UseZustand";
import { Questions } from "@/config/Questions";
import { toast } from "sonner";
import { Goback } from "@/components/game/Goback";

const page = () => {
  const { data, setData } = UseZustand();
  const [count, setCount] = useState(1);
  const [value, setValue] = useState();
  const router = useRouter();

  return (
    <div className="px-5 py-5 h-screen">
      {/* Modal */}
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box text-white text-center bg-[#14172A] py-8 flex flex-col gap-5">
          <div className="py-4 flex flex-col gap-2">
            <p>
              {/* @ts-ignore */}
              {value && value?.happiness === 1
                ? "+10 😊Аз жаргал"
                : "-10 😊Аз жаргал"}
            </p>
            <p>
              {/* @ts-ignore */}
              {value && value?.money === 1 ? "+100 💰Мөнгө" : "-100 💰Мөнгө"}
            </p>
          </div>
          {/* Dilemma question */}
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
            <span className="relative" onClick={() => router.push("/main")}>
              <ArrowLeftIcon />
            </span>
          </button>
        </div>
        <button className="rounded-full relative inline-flex group items-center justify-center px-3.5 py-3.5 m-1 cursor-pointer border-b-4 border-l-2 active:border-[#fff] active:shadow-none shadow-lg bg-gradient-to-tr from-[#fff] to-[#Fff] border-[#f5f5f5] text-black gap-2">
          <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
          <span className="relative">
            <Image src={"assets/coin.svg"} width={25} height={18} alt="coin" />
          </span>
          <p className=" font-bold text-[20px]">
            {localStorage.getItem("coin")}
          </p>
        </button>
      </div>
      <div className="pt-10">
        <p className="text-[20px] font-bold py-5  text-center">Test-Нас 18</p>

        <div className="flex items-center gap-10 justify-center">
          <Avatar className="h-[144px] w-[144px] shadow-[0px_4px_0px_0px_#A1A1A1]">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div>
            <p>😊 Аз жаргал</p>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-[#7AB219] h-2.5 rounded-full"
                style={{ width: localStorage.getItem("happiness") + "%" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className=" flex flex-wrap pt-10 w-full justify-center items-center">
        {data.map((el) => {
          return (
            <>
              <button
                onClick={() => {
                  // @ts-ignore
                  document.getElementById("my_modal_2")?.showModal();
                  if (count + 1 === 6) {
                    toast.success("Та амжилттай  үеийг давлаа");
                    setTimeout(() => {
                      router.push("/main");
                    }, 2000);
                    {
                      /* @ts-ignore */
                    }
                    localStorage.setItem(
                      "completed",
                      String(parseInt(localStorage.getItem("completed")) + 1)
                    );
                    localStorage.setItem(
                      "level",
                      String(parseInt(localStorage.getItem("level")) + 1)
                    );
                  } else {
                    setCount((prev) => prev + 1);
                    setData(Questions[0].quests[count].options);
                  }
                  // @ts-ignore
                  setValue(el?.result);
                  if (el?.result?.happiness === 1) {
                    if (localStorage.getItem("happiness" != 100)) {
                      localStorage.setItem(
                        "happiness",
                        String(parseInt(localStorage.getItem("happiness")) + 10)
                      );
                    }
                  } else {
                    localStorage.setItem(
                      "coin",
                      String(Number(localStorage.getItem("coin")) - 10)
                    );
                  }

                  if (el?.result?.money === 1) {
                    localStorage.setItem(
                      "coin",
                      String(parseInt(localStorage.getItem("coin")) + 100)
                    );
                  } else {
                    localStorage.setItem(
                      "coin",
                      String(Number(localStorage.getItem("coin")) - 100)
                    );
                  }
                }}
                className={`rounded-xl relative inline-flex group items-center justify-center px-3.5 py-3.5 m-1 cursor-pointer border-b-4 border-l-2 active:border-[#] active:shadow-none shadow-lg bg-gradient-to-tr from-[#] to-[#] border-[#] text-black h-[158px] w-[150px]`}
              >
                <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
                {/* @ts-ignore */}
                <span className="relative">{el?.choice}</span>
              </button>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default page;
