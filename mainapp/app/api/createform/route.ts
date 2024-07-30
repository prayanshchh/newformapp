import { Option, PrismaClient } from '@prisma/client'
import { NextRequest, NextResponse } from "next/server"
const prisma = new PrismaClient();
interface Question {
  content : string,
  formid : string,
  options : Option[]
}
interface Options {
  text : string,
  questionid : string
}
export const POST = async (request : NextRequest) => {
  const body = await request.json();
  try {
    const form = await prisma.form.create({data : {
      title : body.title,
      description : body.description,
      authorid : body.authorid
    } })
  const createdquestion = await Promise.all(
    body.questions.map((question : Question)=>
    prisma.question.create({
      data : {
        content : question.content,
        formid : form.id,
        userId : body.authorid,
        options: {
          create : question.options.map((opt: Options) => ({text : opt.text }))
        }
      }
    })
  )
  )
    return NextResponse.json({success : "form created", formid : form.id, questions : createdquestion})
  }
  catch(err)
  {
    console.log(err);
    return NextResponse.json({error : err})
  }
}