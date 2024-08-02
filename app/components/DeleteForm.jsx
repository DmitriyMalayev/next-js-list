"use client"
import { deleteTask } from '@/utils/actions'
import React, { useState } from 'react'
const DeleteForm = ({ id }) => {
  const [showModal, setShowModal] = useState(false)

  const handleDelete = async (e) => {
    e.preventDefault()
    deleteTask(new FormData(e.target))
    setShowModal(false)
  }

  const handleCancel = (e) => {
    setShowModal(false)
  }

  return (
    <>
      <button className='btn btn-xs btn-error' onClick={() => setShowModal(true)}>Delete </button>
      {showModal && (
        <dialog open className='modal'>
          <form method='dialog' onSubmit={handleDelete} className='modal-box'>
            <h3 className='font-bold text-lg'>Confirm Deletion</h3>
            <p>Are you sure you want to delete this task?</p>
            <input type='hidden' name='id' value={id} />
            <div className='modal-action'>
              <button className='btn btn-md btn-info' onClick={handleCancel}>Cancel</button>
              <button type='submit' className='btn btn-md btn-error'>Delete</button>
            </div>
          </form>
        </dialog>
      )}
    </>
  )
}
export default DeleteForm