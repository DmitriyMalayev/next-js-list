import Link from 'next/link'
import React from 'react'
import TaskList from '../components/TaskList'
import TaskForm from '../components/TaskForm'


const Tasks = () => {
    return (
        <div className='max-w-lg '>
            <TaskForm />
            <TaskList />
        </div>
    )
}

export default Tasks