import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
    const data = await req.json()
    console.log(data)
    const { name, email, id } = data;

    const userExist = await prisma.user.findUnique({
        where: {
            email,
        }
    })

    if (userExist) {
        return NextResponse.json({
            message: 'Email already exist.'
        }, {
            status: 400
        })
    }
    const user = await prisma.user.create({
        data: {
            email,
            name,
            id,
        }
    })

    return NextResponse.json(user)
}

/* export async function GET(req:NextRequest) {
    return NextResponse.json({name: 'henrique'});
} */

export async function GET(req: NextRequest) {
    const data = await req.json()
    /* const { name, email, id } = data; */
    
    return NextResponse.json(data)
}