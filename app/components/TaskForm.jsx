"use client"
import React, { useEffect, useState } from 'react';
import { useFormStatus, useFormState } from "react-dom"; 
import { createTask } from '@/utils/actions';


const SubmitButton = () => {
  const { pending } = useFormStatus()

  return (
    <>
      <button className={`btn btn-sm h-12 flex  ${pending ? "btn-warning" : "btn-primary"}`} type='submit' disabled={pending}>{pending ? "Pending" : "Add Task"}</button>
    </>
  )
}

const initialFormState = {
  message: null
}

const TaskForm = () => {
  const [state, formAction] = useFormState(createTask, initialFormState)
  const [showMessage, setShowMessage] = useState(false)

  useEffect(() => {
    if (state.message) {
      setShowMessage(true)
      setTimeout(() => setShowMessage(false), 3000)
      return () => clearTimeout()
    }
  }, [state.message])

  return (
    <form action={formAction} className='mt-10'>
      {state.message ? <div className={`text-center text-red-500 fade-out transition-opacity duration-500 ${showMessage ? 'opacity-100' : 'opacity-0'
        }`}>{state.message}</div> : null}
      <div className='join w-full flex'>
        <input className='input input-bordered join-item w-full' type='text' placeholder='Add a new task' name='taskName' required />
        <SubmitButton />
      </div>
    </form>
  )
}

export default TaskForm