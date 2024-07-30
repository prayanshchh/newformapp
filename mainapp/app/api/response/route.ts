import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();
interface questionresponse
{
    questionid : string,
    responseid: string,
    answer : string
}

export const POST = async (request : NextRequest)=>
{
    const body = await request.json();
        try{
            const submitresponse = await prisma.response.create({
                data:{
                    userid : body.userid,
                    formid: body.formid,
                }
            });
        const responseid =  submitresponse.id;
        const questionresponse = await Promise.all(
            body.questionResponse.map((que: questionresponse)=>
               prisma.questionResponse.create({
                data: {
                    questionid: que.questionid,
                    responseid : responseid,
                    answer: que.answer
                }
                }))
        )
        return NextResponse.json({success: "form submitted", responses : questionresponse})
    }

        catch(err)
        {
            return NextResponse.json({err: err});
        }
}