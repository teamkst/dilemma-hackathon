"use client";

import Image, { StaticImageData } from "next/image";
import { FC } from "react";

interface JobProps {
  job: StaticImageData;
  wage: number;
  profession: string;
}

export const Job: FC<JobProps> = ({ wage, job, profession }) => {
  return (
    <div className="flex items-center">
      <Image alt="job" src={job} />
      <div className="flex flex-col items-center space-y-2 ">
        <p>{profession}</p>
        <div className="flex items-center">
          <Image alt="job" src={job} />
          <p>{wage}</p>
        </div>
        <button>Ажиллах</button>
      </div>
    </div>
  );
};
