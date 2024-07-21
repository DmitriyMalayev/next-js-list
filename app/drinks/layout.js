import React from 'react'

const DrinksLayout = ({ children }) => {
    return (
        <div className='text-blue-600'>
            <div className='text-white'>
                {children}
            </div>
        </div>
    )
}

export default DrinksLayout