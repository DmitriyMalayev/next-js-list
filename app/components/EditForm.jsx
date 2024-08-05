"use client"
import { editTask } from '@/utils/actions'
import React, { useState } from 'react'
import toast from 'react-hot-toast'

const EditForm = ({ task }) => {
    const { id, content, completed } = task
    const [formData, setFormData] = useState({
        id,
        content,
        completed,
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            await editTask(formData)
            toast.success("Task edited successfully")
        } catch (error) {
            toast.error("Error editing task")
        }
    }

    return (
        <form onSubmit={handleSubmit} className='w-full  border border-base-300 rounded-lg'>
            <input type='hidden' name='id' value={formData.id} />
            <input
                className='input input-bordered w-full'
                type='text'
                name='content'
                defaultValue={formData.content}
                onChange={handleChange}
                required
            />
            <div className='form-control'>
                <label htmlFor='completed' className='label cursor-pointer' id='completed'>
                    <span className='label-text'>Completed</span>
                    <input
                        type='checkbox'
                        checked={formData.completed}
                        id='completed'
                        name='completed'
                        onChange={handleChange}
                        className='checkbox checkbox-primary checkbox-sm'
                    />
                </label>
            </div>
            <button className="btn btn-primary btn-sm btn-block" type='submit'>Edit Task</button>
        </form>
    )
}

export default EditForm