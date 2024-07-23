import React from 'react'
import prisma from '@/utils/db'


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
                        <div key={task.id}>
                            <a></a>
                            <h2 className={`${task.completed ? "text-green-500" : "text-red-500"}`}>{task.content}</h2>
                        </div>
                    )
                })}

            </div>
        )
    }
}

export default TaskList