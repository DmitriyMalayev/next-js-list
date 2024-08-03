"use server"
import prisma from '@/utils/db'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export const getTaskList = async () => {
    return await prisma.task.findMany({
        orderBy: {
            createdAt: 'desc',
        },
    })
}

export const createTask = async (prevState, formData) => {
    await new Promise((resolve) => setTimeout(resolve, 3000))
    const content = formData.get('taskName')
    try {
        await prisma.task.create({
            data: { content, completed: false },
        })
        revalidatePath("/tasks")
        return { message: "Task created successfully" }

    } catch (error) {
        return { message: "Failed to create task" }
    }
}


export const deleteTask = async (formData) => {
    const id = formData.get('id')
    await prisma.task.delete({ where: { id } })
    revalidatePath("/tasks")
}


export const getTask = async (id) => {
    return prisma.task.findUnique({
        where: { id },
    })
}
export const editTask = async (formData) => {
    const id = formData.get('id')
    const content = formData.get('content')
    const completed = formData.get('completed')

    await prisma.task.update({
        where: { id },
        data: { content, completed: completed === "on" ? true : false },
    })
    redirect("/tasks")

}

