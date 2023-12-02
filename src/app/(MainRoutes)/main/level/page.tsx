import { LevelButton } from "@/components/level/LevelButton";
import Image from "next/image";
import TheGuy from "@/../../public/TheGuy.svg";
import HomeIcon from "@/../../public/home.svg";
import Reward from "@/../../public/reward.svg";

const OnBoarding = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center gap-5 bg-black/80">
      <Image
        alt="theGuy"
        src={TheGuy}
        style={{
          marginRight: 30,
        }}
      />
      <div className="flex flex-col space-y-5 items-center">
        <Image alt="reward" src={Reward} />
        <LevelButton level={5} current={0} />
        <LevelButton level={4} current={0} />
        <LevelButton level={3} current={0} />
        <LevelButton level={2} current={0} />
        <LevelButton level={1} current={0} />
      </div>
      <div className="absolute bottom-8 flex justify-evenly w-full">
        <button>
          <Image alt="home" src={HomeIcon} width={40} height={40} />
        </button>
        <button>
          <Image alt="home" src={HomeIcon} width={40} height={40} />
        </button>
      </div>
    </div>
  );
};

export default OnBoarding;
