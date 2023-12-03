import { LevelButton } from "@/components/level/LevelButton";
import { BottomTab } from "@/components/main/BottomTab";
import { url } from "inspector";
import Image from "next/image";
import Background from "@/../../public/onboardingbg.png";

const OnBoarding = () => {
  return (
    <div
      className="w-full h-screen flex justify-center items-center gap-5   bg-black/80"
      style={{
        backgroundImage: 'uri("/onboardingbg.png")',
      }}
    >
      <Image
        alt="theGuy"
        src={"/TheGuy.svg"}
        width={72}
        height={72}
        style={{
          marginRight: 30,
        }}
      />
      <div className="flex flex-col gap-y-5 items-center ">
        <Image alt="reward" src={"/reward.svg"} width={65} height={65} />
        <LevelButton level={5} current={0} />
        <LevelButton level={4} current={0} />
        <LevelButton level={3} current={0} />
        <LevelButton level={2} current={0} />
        <LevelButton level={1} current={0} />
      </div>
      <BottomTab />
    </div>
  );
};

export default OnBoarding;
