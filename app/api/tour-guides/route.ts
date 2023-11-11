import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient()

export async function GET(req: Request) {
    const tourGuides = prisma.tourGuide.findMany()

    return NextResponse.json(tourGuides)
}