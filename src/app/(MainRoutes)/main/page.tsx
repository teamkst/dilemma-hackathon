import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BookOpenText, School } from "lucide-react";

const page = () => {
  return (
    <article className="">
      <section className="flex flex-col items-center  justify-center pt-5">
        <p>Tyson AGE 19</p>
        <p>Ajilgui</p>
      </section>
      <section className="flex gap-2 pt-[22vh]">
        <Card className="w-[350px] h-[260px] py-10">
          <CardHeader>Их дээд сургуульд сурах уу?</CardHeader>
          <CardContent>
            <School />
          </CardContent>
        </Card>
        <Card className="w-[350px] h-[260px] py-10">
          <CardHeader> Gap year авах уу?</CardHeader>
          <CardContent>
            <BookOpenText />
          </CardContent>
        </Card>
      </section>
      <section className="pt-14">
        <Card className="flex p-3">
          <div className="flex flex-col gap-3 py-2">
            <p className="text-sm">Happiness: 70</p>
            <p className="text-sm">Intelligence: 70</p>
            <p className="text-sm">Physique: 70</p>
          </div>
          <div className="p-5">
            <img
              src="https://www.w3schools.com/w3css/img_avatar3.png"
              alt=""
              className="rounded-full  w-20 h-20"
            />
          </div>
          <div className="flex flex-col gap-3 py-2">
            <p className="text-sm">Health: 70</p>
            <p className="text-sm">Creativity: 70</p>
            <p className="text-sm">Wealth: 70</p>
          </div>
        </Card>
      </section>
    </article>
  );
};

export default page;
