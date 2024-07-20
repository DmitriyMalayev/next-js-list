import React from 'react'

const DrinksLayout = ({ children }) => {
    return (
        <div className='max-w-xl text-blue-600'>
            <div className='text-white'>
            Drinks Layout
                {children}
            </div>
        </div>
    )
}

export default DrinksLayout