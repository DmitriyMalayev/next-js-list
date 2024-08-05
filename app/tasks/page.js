import React from 'react'
import TaskList from '../components/TaskList'
import TaskForm from '../components/TaskForm'


const Tasks = () => {
    return (
        <div >
            <TaskForm />
            <TaskList />
        </div>
    )
}

export default Tasks