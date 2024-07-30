import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export const  GET = async (request : NextRequest) =>
{
    const forms = await prisma.form.findMany({
        select : {
            id : true,
            title : true,
            description : true,  
        }
    })
    return NextResponse.json({forms});
}
