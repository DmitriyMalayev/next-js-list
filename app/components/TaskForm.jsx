"use client"
import React, { useEffect } from 'react';
import { useFormStatus, useFormState } from "react-dom";
import { createTask } from '@/utils/actions';
import toast from 'react-hot-toast';

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

  useEffect(() => {
    if (state.message === "error") {
      toast.error("There was an error")
      return
    }
    if (state.message === "success") {
      toast.success("Successfully added a new task")
      return
    }

  }, [state])

  return (
    <form action={formAction} className='mt-10'>
      <div className='join w-full flex'>
        <input className='input input-bordered join-item w-full' type='text' placeholder='Add a new task' name='content' required />
        <SubmitButton />
      </div>
    </form>
  )
}

export default TaskForm