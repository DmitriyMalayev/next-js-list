import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
const searchDrinksURL = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='



const searchDrink = async (id) => {
    const resp = await fetch(`${searchDrinksURL}${id}`)
    if (!resp.ok) {
        throw new Error('Failed to fetch data')
    }
    return await resp.json()
}

const SingleDrink = async ({ params }) => {
    const data = await searchDrink(params.id)

    const drinkName = data?.drinks[0]?.strDrink
    const drinkImage = data?.drinks[0]?.strDrinkThumb
    const drinkInstructions = data?.drinks[0]?.strInstructions

    return (
        <div>
            <h1 className='text-blue-500'>{drinkName}</h1>
            <p className='w-40 bg-slate-500'>{drinkInstructions}</p>
            <Image src={drinkImage} alt={drinkName} width={200} height={200} />
            <Link className="text-3xl" href='/drinks'>Back To Drinks</Link>
        </div>
    )
}

export default SingleDrink