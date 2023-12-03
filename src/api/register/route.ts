import prisma from "../../../prisma";
import { NextRequest, NextResponse } from "next/server";

export async function main() {
  try {
    await prisma.$connect();
  } catch (error) {
    return Error("Database connection error: " + error);
  }
}

// * New user create
export const POST = async (req: NextRequest, res: NextResponse) => {
  try {
    const { name, gender, wealth, happiness, job, level, saving, skills } =
      await req.json();
    await main();

    const post = await prisma.user.create({
      data: { name, gender, wealth, happiness, job, level, saving, skills },
    });
    return NextResponse.json({ message: "Success", post }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};
