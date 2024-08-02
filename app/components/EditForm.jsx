import { editTask } from '@/utils/actions'
import React from 'react'

const EditForm = ({ task }) => {
    const { id, content, completed } = task

    return (
        <form action={editTask} className='max-w-sm p-12 border border-base-300 rounded-lg'>
            <input type='hidden' name='id' value={id} />
            <input
                className='input input-bordered w-full'
                type='text'
                name='content'
                defaultValue={content}
                required
            />
            <div className='form-control'>
                <label htmlFor='completed' className='label cursor-pointer' id='completed'>
                    <span className='label-text'>Completed</span>
                    <input type='checkbox' defaultChecked={completed} id='completed' name='completed' className='checkbox checkbox-primary checkbox-sm' />
                </label>
            </div>
            <button className="btn btn-primary btn-sm btn-block" type='submit'>Edit Task</button>
        </form>
    )
}

export default EditForm