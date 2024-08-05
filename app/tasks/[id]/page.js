import React from 'react'
import Link from 'next/link'

import prisma from '@/utils/db'
import { editTask, getTask } from '@/utils/actions'
import EditForm from '@/app/components/EditForm'

const SingleTask = async ({ params }) => {
    const task = await getTask(params.id)


    return (
        <>
            <div>
                <Link href={"/tasks"} className='btn btn-accent'>Back to Tasks</Link>
                <EditForm className='btn btn-accent' task={task} />
            </div>
        </>
    )
}

export default SingleTask