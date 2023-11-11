import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient()

export async function GET(
    req: Request, 
    { params }: { params: { id: number } }
    ) {
    const id: number = Number(params.id)
    const tours = await prisma.typesOfAttraction.findUnique({ where: { id: id } })
    
    return NextResponse.json({ tours })
}