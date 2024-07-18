import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <div className='gap-y-8'>
        <nav className='flex justify-between items-center gap-x-4'>
          <Link href={"/about"}>About</Link>
          <Link href={"/client"}>Client</Link>
          <Link href={"/prisma-example"}>Drinks</Link>
          <Link href={"/query"}>Query</Link>
          <Link href={"/tasks"}>Tasks</Link>
        </nav>
        
      </div>
    </div>
  )
}

export default Home