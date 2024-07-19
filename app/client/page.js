"use client"
import { useState } from 'react'

const Client = () => {
    const [count, setCount] = useState(0)

    return (
        <div className='ml-6'>
            <h1 className='text-5xl my-4'>Client Page</h1>
            <p className='text-3xl my-4'>You clicked {count} times</p>
            <button className='btn btn-primary my-4'  onClick={() => { setCount(count + 1) }}>Increase</button>
        </div>
    )
}

export default Client