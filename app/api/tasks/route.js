import db from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async (req) => {
    const tasks = await db.task.findMany({
        orderBy: {
            createdAt: 'desc',
        },
    })
    return NextResponse.json({ data: tasks });
}

export const POST = async (req) => {
    const data = await req.json();
    const task = await db.task.create({
        data: {
            content: data.content,
            completed: false,
        },
    })
    return NextResponse.json({ data: task, status: 'Task created successfully' });
}