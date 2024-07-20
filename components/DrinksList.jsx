import React from 'react'
import Link from 'next/link'

const DrinksList = ({ drinks }) => {
    if (!drinks) {
        return (
            <h1>No Drinks</h1>
        )
    } else {
        return (
            <div>
                <h1>Drinks List</h1>
                {drinks.drinks.map((drink) => {
                    return (
                        <div key={drink.id}>
                            <Link href={`/drinks/${drink.idDrink}`} >{drink.strDrink}</Link>
                        </div>
                    )
                })
                }
            </div>
        )
    }
}

export default DrinksList