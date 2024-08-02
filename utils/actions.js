"use server"
import prisma from '@/utils/db'
import { revalidatePath } from 'next/cache'

export const getTaskList = async () => {
    return await prisma.task.findMany({
        orderBy: {
            createdAt: 'desc',
        },
    })
}
export const createTask = async (formData) => {
    const content = formData.get('taskName')
    await prisma.task.create({
        data: { content },
    })
    revalidatePath("/tasks")
}

export const deleteTask = async (formData) => {
    const id = formData.get('id')
    await prisma.task.delete({ where: { id } })
    revalidatePath("/tasks")
}