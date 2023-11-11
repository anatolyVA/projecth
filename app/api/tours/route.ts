import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient()

export async function GET(req: Request) {
    const tours = await prisma.tour.findMany()

    return NextResponse.json(tours)
}