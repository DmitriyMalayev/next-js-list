"use server"
import prisma from '@/utils/db'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { z } from 'zod'

export const getTaskList = async () => {
    return await prisma.task.findMany({
        orderBy: {
            createdAt: 'desc',
        },
    })
}

export const createTask = async (prevState, formData) => {
    await new Promise((resolve) => setTimeout(resolve, 1500))

    const content = formData.get('content')
    const Task = z.object({
        content: z.string().min(5),
    })

    try {
        Task.parse({ content })
        await prisma.task.create({
            data: {
                content,
            },
        })
        revalidatePath('/tasks')
        return { message: 'success' }

    } catch (error) {
        return { message: 'error' }
    }
}

export const deleteTask = async (formData) => {
    const id = formData.get('id')
    try {
        await prisma.task.delete({ where: { id } })
        revalidatePath("/tasks")
        return { message: 'deleted' }
    } catch (error) {
        return { message: 'unable to be deleted' }
    }
}

export const getTask = async (id) => {
    return prisma.task.findUnique({
        where: { id },
    })
}
export const editTask = async (formData) => {
    const id = formData.id
    const content = formData.content
    const completed = formData.completed

    try {
        await prisma.task.update({
            where: { id },
            data: { content, completed },
        })
        revalidatePath("/tasks")
        return { message: 'success' }
    } catch (error) {
        return { message: 'error' }
    } finally {
        redirect('/tasks')
    }
}

