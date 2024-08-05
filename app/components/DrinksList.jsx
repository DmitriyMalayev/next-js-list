import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const DrinksList = ({ newDrinks }) => {
    if (!newDrinks) {
        return (
            <h1>No newDrinks</h1>
        )
    } else {
        return (
            <div>
                <ul className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 justify-center gap-36'>
                    {newDrinks.map((drink) => {
                        return (
                            <li key={drink.idDrink}>
                                <Link className='text-xl font-medium' href={`/drinks/${drink.idDrink}`}>
                                    <div className='relative h-40 w-40 mb-4 shadow-slate-200'>
                                        <Image className='rounded-md object-cover hover:scale-110 transition duration-300 border shadow shadow-pink-300 ' src={drink.strDrinkThumb} alt={drink.strDrink} fill sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw' />
                                    </div>
                                    {drink.strDrink}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div >
        )
    }
}

export default DrinksList