import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

import prisma from '@/utils/db'

const SingleTask = async ({ params }) => {
    const searchTask = await prisma.task.findUnique({
        where: { id: params.id },
    })

    return (
        <>
            <div className='grid sm:grid-cols-3 gap-2'>
                <div className='col-span-3'>
                    <h1 className='text-blue-500'>{searchTask.content}</h1>
                    <h1 className='text-blue-500'>{searchTask.completed}</h1>
                </div>
            </div>
        </>
    )
}

export default SingleTask