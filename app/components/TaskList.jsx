import React from 'react'
import DeleteForm from './DeleteForm'
import Link from 'next/link'
import { getTaskList } from '@/utils/actions'

const TaskList = async () => {
    let tasks = await getTaskList()

    if (tasks.length === 0) {
        return (
            <h1 className='text-blue-400 my-10'>No tasks to show</h1>
        )
    }

    return (
        <ul className='mt-8'>
            {tasks.map((task) => {
                return (
                    <li key={task.id} className='flex justify-between px-1 py-4 mb-4 border border-base-600 rounded-lg shadow-lg bg-green-50'>
                        <h2 className={`${task.completed ? "text-green-500 line-through" : "text-red-500"}`}>{task.content}</h2>
                        <div className='flex gap-6 items-center '>
                            <Link href={`/tasks/${task.id}`} className='btn bg btn-info btn-xs'>Edit</Link>
                            <DeleteForm id={task.id} />
                        </div>
                    </li>
                )
            })
            }
        </ul >
    )
}

export default TaskList