import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const formid = searchParams.get('formid');

    if (!formid) {
        return NextResponse.json({ error: "Form ID is required" }, { status: 400 });
    }

    try {
        const form = await prisma.form.findUnique({
            where: { id: formid },
            include: {
                questions: {
                    include: {
                        options: true,
                    }
                }
            }
        });

        if (!form) {
            return NextResponse.json({ error: "Form not found" }, { status: 404 });
        }

        return NextResponse.json(form);
    } catch (err) {
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
