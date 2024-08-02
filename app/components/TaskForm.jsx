"use client"
import React from 'react'
import { useFormStatus } from "react-dom"
import { createTask } from '@/utils/actions'


const SubmitButton = () => {
  const { pending } = useFormStatus()

  return (
    <>
      <button className={`${pending ? "btn-warning btn join-item" : "btn-primary btn join-item"}`} type='submit' disabled={pending} c>{pending ? "Pending" : "Add Task"}</button>
    </>
  )
}

const TaskForm = () => {
  return (
    <form action={createTask}>
      <div className='join w-full'>
        <input className='input input-bordered join-item w-full' type='text' placeholder='Add a new task' name='taskName' required />
      </div>
      <SubmitButton />
    </form>
  )
}

export default TaskForm