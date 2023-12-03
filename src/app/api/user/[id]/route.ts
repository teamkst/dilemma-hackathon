import prisma from "../../../../../prisma";
import { NextRequest, NextResponse } from "next/server";
import { main } from "../../register/route";

export const GET = async (req: NextRequest, res: NextResponse) => {
  try {
    await main();
    const name = req.url.split("/")[5];
    const user = await prisma.user.findFirst({ where: { name: name } });
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
