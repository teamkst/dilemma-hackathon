import prisma from "../../../../prisma";
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
    const { name, gender } = await req.json();
    await main();

    const post = await prisma.user.create({
      data: { name, gender },
    });
    return NextResponse.json({ message: "Success", post }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};

export const PUT = async (req: NextRequest, res: NextResponse) => {
  try {
    const name = req.url.split("/")[5];
    const { level, wealth, happiness } = await req.json();
    await main();
    const post = await prisma.user.update({
      data: { level, wealth, happiness },
      where: { name },
    });
    return NextResponse.json(
      { message: "Successfully updated", post },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};
