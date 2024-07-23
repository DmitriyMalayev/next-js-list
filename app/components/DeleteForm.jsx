import React from 'react'

const DeleteForm = async ({task}) => {
  const tasks = await prisma.task.findMany({
    orderBy: { createAt: 'desc' },
  })
  return (
    <div>
      <button className='btn  bg-red-600'>Delete</button>
      {/* <button onClick={() => prisma.task.delete({ where: { id: task.id } })}> </button> */}
    </div >
  )
}

export default DeleteForm

// < button onClick = {() => prisma.task.delete({ where: { id: task.id } })}> </button >
