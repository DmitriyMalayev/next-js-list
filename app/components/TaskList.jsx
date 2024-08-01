import React from 'react'
import prisma from '@/utils/db'
import DeleteForm from './DeleteForm'
import Link from 'next/link'


const TaskList = async () => {
    const tasks = await prisma.task.findMany({
        orderBy: { createAt: 'desc' },
    })

    if (!tasks) {
        return (
            <h1>No tasks</h1>
        )
    } else {
        return (
            <div>
                <h1 className='text-3xl text-emerald-600'>Task List</h1>
                {tasks.map((task) => {
                    return (
                        <div key={task.id} className='flex justify-between'>
                            <h2 className={`${task.completed ? "text-green-500 line-through" : "text-red-500"}`}>{task.content}</h2>
                            <div className='flex gap-6 items-center'>
                                <Link href={`/tasks/${task.id}`} className='btn btn-accent btn-xs'>Edit</Link>
                                <DeleteForm id={task.id} />
                            </div>



                        </div>
                    )
                })}

            </div>
        )
    }
}

export default TaskList