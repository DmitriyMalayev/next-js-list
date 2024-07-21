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
        <>
            <div className='grid sm:grid-cols-3 gap-2'>
                <div className='col-span-3'>
                    <h1 className='text-blue-500'>{drinkName}</h1>
                </div>
                <div className='col-span-1 flex justify-end'>
                    <Image className='w-48 h-48 rounded-lg' width={300} height={300} src={drinkImage} alt={drinkName} />
                </div>
                <div className='col-span-1'>
                    <p className=' bg-slate-500'>{drinkInstructions}</p>
                </div>
            </div>
            <div className='mt-10'>

                <Link className="text-xl mt-10" href='/drinks'>Back To Drinks</Link>
            </div>
        </>
    )
}

export default SingleDrink