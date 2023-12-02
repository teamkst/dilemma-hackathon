import Image from "next/image";
import React from "react";

const Loading = () => {
  return (
    <>
      <div className="relative h-screen w-full">
        <Image
          className=" h-full w-full object-cover"
          src="/assets/background.png"
          alt="bg"
          fill
        />
        <div className="flex justify-center items-center relative h-[90vh] w-full flex-col">
          <Image
            src="/logo.svg"
            alt="logo"
            width={100}
            height={90}
            className="animate-wiggle-more animate-infinite"
          />
          <p className="text-white font-extrabold text-base tracking-[0.36px] pt-5 text-[37px]">
            Legacy of choices
          </p>
        </div>
      </div>
    </>
  );
};

export default Loading;
