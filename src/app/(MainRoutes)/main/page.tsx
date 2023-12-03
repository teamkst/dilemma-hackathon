import { LevelButton } from "@/components/level/LevelButton";
import Image from "next/image";

const OnBoarding = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center gap-5 bg-black/80">
      <Image
        alt="theGuy"
        src={"/TheGuy.svg"}
        width={50}
        height={200}
        style={{
          marginRight: 30,
        }}
      />
      <div className="flex flex-col space-y-5 items-center">
        <Image alt="reward" src={"/reward.svg"} width={50} height={200} />
        <LevelButton level={5} current={0} />
        <LevelButton level={4} current={0} />
        <LevelButton level={3} current={0} />
        <LevelButton level={2} current={0} />
        <LevelButton level={1} current={0} />
      </div>
    </div>
  );
};

export default OnBoarding;
