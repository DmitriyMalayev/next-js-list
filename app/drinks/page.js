import Link from 'next/link'
import React from 'react'
import SingleDrink from './[id]/page'
import DrinksList from '@/components/DrinksList'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a'

const fetchDrinks = async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    const response = await fetch(url)

    if (!response.ok) {
        throw new Error("Error fetching data")
    }
    const data = await response.json()
    return data
}

const Drinks = async () => {
    const newDrinks = await fetchDrinks()
    console.log(newDrinks)
    return (
        <div>
            <h1>Drinks Page</h1>
            <DrinksList drinks={newDrinks} />
        </div>
    )
}

export default Drinks
