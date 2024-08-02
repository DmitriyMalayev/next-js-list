import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

import prisma from '@/utils/db'
import { editTask, getTask } from '@/utils/actions'
import EditForm from '@/app/components/EditForm'

const SingleTask = async ({ params }) => {
    const task = await getTask(params.id)
    // const editTask = await editTask(params.id) 

    // const searchTask = await prisma.task.findUnique({
    //     where: { id: params.id },
    // })

    return (
        <>
            <div>
                <Link href={"/tasks"} className='btn btn-accent'>Back to Tasks</Link>
            </div>
                <EditForm task={task} />
        </>
    )
}

export default SingleTask