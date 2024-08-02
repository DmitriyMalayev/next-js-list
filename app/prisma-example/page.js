import React from 'react'
import prisma from '@/utils/db'

const prismaHandlers = async () => {

    await prisma.task.create({
        data: {
            content: 'This is not a completed tasks.',
            completed: false,
        },
    })
    await prisma.task.create({
        data: {
            content: 'This is a completed tasks.',
            completed: true,
        },
    })
    const allTasks = await prisma.task.findMany({
        orderBy: { createdAt: 'desc' },
    })
    return allTasks
}

const PrismaTasks = async () => {
    const tasks = await prismaHandlers()

    return (
        <div>
            <h1 className='text-3xl'>Prisma Example Page</h1>
            {tasks.map((task) => {
                return (
                    <div key={task.id}>
                        <a>{task.content}</a>
                        <h2>{task.completed ? 'Completed' : 'Not completed'}</h2>
                    </div>
                )
            })}
        </div>
    )
}

export default PrismaTasks 