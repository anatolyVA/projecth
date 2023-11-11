import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient()

const fetchData = () => 
    fetch("https://tripadvisor16.p.rapidapi.com/api/v1/flights/searchAirport", {cache: "force-cache"})
    .then(res => res.json())

export async function GET(req: Request) {
    const data = await fetchData()

    return NextResponse.json(data)
}