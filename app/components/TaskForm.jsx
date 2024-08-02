import { createTask } from '@/utils/actions'
import React from 'react'

const TaskForm = () => {

  return (
    <form action={createTask}>
      <div className='join w-full'>
        <input className='input input-bordered join-item w-full' type='text' placeholder='Add a new task' name='taskName' required />
      </div>
      <button className='btn btn-primary join-item' type='submit'>Add Task</button>
    </form>
  )
}

export default TaskForm