import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient()

export async function GET(
    req: Request,
    { params }: { params: { id: number } }
    ) {
    const id = Number(params.id)

    const picture = await prisma.picture.findUnique({
        where: { id: id },
    });
    
    return NextResponse.json(picture)
}