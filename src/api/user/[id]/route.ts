import prisma from "../../../../prisma";
import { NextRequest, NextResponse } from "next/server";
import { main } from "@/api/register/route";

export const GET = async (req: NextRequest, res: NextResponse) => {
  try {
    await main();
    const id = req.url.split("/user/")[1];
    const user = await prisma.user.findFirst({ where: { id: id } });
    if (!user) {
      return NextResponse.json({ message: "Not found" }, { status: 404 });
    }
    return NextResponse.json({ message: "Success", user }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  } finally {
    prisma.$disconnect();
  }
};
