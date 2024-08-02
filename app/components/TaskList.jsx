import React from 'react'
import DeleteForm from './DeleteForm'
import Link from 'next/link'
import { getTaskList } from '@/utils/actions'



const TaskList = async () => {
    let tasks = await getTaskList()

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

                        <ol key={task.id} className='flex justify-between'>
                            <h2 className={`${task.completed ? "text-green-500 line-through" : "text-red-500"}`}>{task.content}</h2>
                            <div className='flex gap-6 items-center'>
                                <Link href={`/tasks/${task.id}`} className='btn bg btn-info btn-xs'>Edit</Link>
                                <DeleteForm id={task.id} />
                            </div>

                        </ol>
                    )
                })}

            </div>
        )
    }
}

export default TaskList