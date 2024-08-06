import prisma from '@/utils/db'

const prismaHandlers = async () => {

    // await prisma.task.create({
    //     data: {
    //         content: 'This is not a completed tasks.',
    //         completed: false,
    //     },
    // })
    // await prisma.task.create({
    //     data: {
    //         content: 'This is a completed tasks.',
    //         completed: true,
    //     },
    // })
    const allTasks = await prisma.task.findMany({
        orderBy: { createdAt: 'desc' },
    })
    return allTasks
}

const PrismaExample = async () => {
    const tasks = await prismaHandlers()
    if (tasks.length === 0) {
        return (
            <h1 className='text-blue-400 my-10'>No tasks to show</h1>
        )
    }
    return (
        <div>
            <h1 className='text-3xl'>Prisma Example Page</h1>
            {tasks.map((task) => {
                return (
                    <div key={task.id}>
                        <a>{task.content}</a>
                        <h2>{task.completed ? 'Completed' : 'Not completed'}</h2>
                    </div>
                )
            })}
        </div>
    )
}

export default PrismaExample 