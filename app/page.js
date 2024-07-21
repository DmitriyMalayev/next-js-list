import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
    <div className='ml-8'>
      <h1 className='text-2xl my-8 font-semibold'>Home Page</h1>
      <Link href="/client" className={"btn btn-accent"}>Client</Link>
    </div>
  )
}

export default Home