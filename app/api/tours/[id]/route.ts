import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient()

export async function GET(
    req: Request, 
    { params }: { params: { slug: string } }
    ) {
    const slug = params.slug
    // if (body !== null) {
    //     const tours = await prisma.typesOfAttraction.findUnique({ where: { id: body.id } })
    //     return NextResponse.json(tours)
    // }
    return NextResponse.json({ slug })
}