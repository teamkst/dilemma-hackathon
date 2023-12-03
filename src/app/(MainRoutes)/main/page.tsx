import { LevelButton } from "@/components/level/LevelButton";
import Image from "next/image";

const OnBoarding = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center gap-5  flex-col">
      <Image
        src={"/assets/bg.svg"}
        fill
        alt="bg"
        className="absolute top-0 left-0"
      />
      <div className="flex ">
        <Image
          alt="theGuy"
          src={"/TheGuy.svg"}
          width={50}
          height={200}
          className="mr-[30px] z-10"
        />
        <div className="flex flex-col space-y-5 items-center relative">
          <Image alt="reward" src={"/reward.svg"} width={50} height={200} />
          <LevelButton level={5} current={0} />
          <LevelButton level={4} current={0} />
          <LevelButton level={3} current={0} />
          <LevelButton level={2} current={0} />
          <LevelButton level={1} current={0} />
        </div>
      </div>
    </div>
  );
};

export default OnBoarding;
